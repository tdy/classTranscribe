'use strict';
//var db = require('../db/db');
const request = require('request');
var Cookie = require('request-cookies').Cookie;
var rp = require('request-promise');
var path = require('path');
var fs = require('fs');
var conversion_utils = require('./conversion_utils')
//var youtubedl = require('youtube-dl');
var youtube_google_api_key = process.env.YOUTUBE_API_KEY;
const _dirname = '/data/';

const promiseSerial = funcs =>
    funcs.reduce((promise, func) =>
        promise.then(result => func().then(Array.prototype.concat.bind(result))),
        Promise.resolve([]))

function youtube_scraper_channel(channel_id) {
    var url_channel = 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&' +
        'channelId=' + channel_id + '&key=' + youtube_google_api_key;
    return rp({ url: url_channel })
        .then(function (body) {
            var body_channel_json = JSON.parse(body);
            var arr_playlist = body_channel_json['items'];
            var output = [];
            for (var playlist in arr_playlist) {
                var item = {
                    "publishedAt": arr_playlist[playlist].snippet.publishedAt,
                    "title": arr_playlist[playlist].snippet.title,
                    "playlistId": arr_playlist[playlist].id
                }
                output.push(item);
            }
            console.log(output);
            return Promise.resolve(output);
        });
}
youtube_scraper_channel('UCcIXc5mJsHVYTZR1maL5l9w')

function download_youtube_playlist(playlist_id) {
    // TODO: Support more than 50 videos
    var url_playlist = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&' +
        'playlistId=' + playlist_id + '&key=' + youtube_google_api_key + '&maxResults=' + 50;
    return rp({ url: url_playlist })
        .then(function (body) {
            var body_playlist_json = JSON.parse(body);
            var arr_videoInfo = body_playlist_json['items'];
            var funcs = arr_videoInfo.map(videoInfo => () => addVideoInfo(videoInfo));

            return promiseSerial(funcs);
        });
}

function addVideoInfo(videoInfo) {
    var publishedAt = videoInfo['snippet']['publishedAt'];
    var channelId = videoInfo['snippet']['channelId'];
    var title = videoInfo['snippet']['title'];
    var description = videoInfo['snippet']['description'];
    var channelTitle = videoInfo['snippet']['channelTitle'];
    var playlistId = videoInfo['snippet']['playlistId'];
    var videoId = videoInfo['snippet']['resourceId']['videoId'];
    var videoUrl = 'http://www.youtube.com/watch?v=' + videoId;
    var i = 2;
    return db.addMedia(videoUrl, 1, {
        channelTitle: channelTitle,
        channelId: channelId,
        playlistId: playlistId,
        title: title,
        description: description,
        publishedAt: publishedAt,
        videoUrl: videoUrl
    })
        .then(media => db.addMSTranscriptionTask(media[0].id))
        .then(task => {
            i--;
            if (i == 0) return null;
            return download_lecture(task[0].id)
                .then(result => convertVideoToWav(task[0].id))
                .then(result => wavToSrt(task[0].id))
                .then(result => { console.log("Done!") });
            console.log("Youtube TaskId:" + task[0].id);
        });
}

function download_lecture(taskId, callback) {
    console.log("Download_lecture");
    return db.getTask(taskId)
        .then(task => {
            return db.getMedia(task.mediaId)
                .then(media => {
                    switch (media.sourceType) {
                        case 0:
                            return download_echo_lecture(task, media, callback);
                            break;
                        case 1:
                            return download_youtube_video(task, media, callback);
                            break;
                        default:
                            console.log("Invalid sourceType");
                    }
                });
        });
}

function download_youtube_video(task, media) {
    console.log("download_youtube_video");
    var videoUrl = JSON.parse(media.siteSpecificJSON).videoUrl;
    var outputFile = _dirname + media.id + '.mp4';
    const { spawn } = require('child-process-promise');
    const youtubedl = spawn('youtube-dl', [videoUrl, '--format=18', '--output', outputFile]);

    youtubedl.childProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    youtubedl.childProcess.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    return youtubedl.then(result => task.update({
        videoLocalLocation: path.resolve(outputFile)
    }));
}

function echo_scraper(publicAccessUrl) {
    request({ url: publicAccessUrl, resolveWithFullResponse: true, followAllRedirects: true }, function (error_directLogin, response_directLogin, body_directLogin) {
        console.log(response_directLogin.headers)
    });
    return rp({ url: publicAccessUrl, resolveWithFullResponse: true, followAllRedirects: true })
        .then(function (response_directLogin) {
            console.log(response_directLogin.headers['set-cookie']);
            var cookie_directLogin = response_directLogin.headers['set-cookie'][0];
            var play_session_directLogin = new Cookie(cookie_directLogin);
            var csrf_token = play_session_directLogin.value.substring(play_session_directLogin.value.indexOf('csrf') + 10)

            var options_login = {
                method: 'POST',
                url: url_login,
                qs: { csrfToken: csrf_token },
                headers:
                {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Cookie: play_session_directLogin.key + "=" + play_session_directLogin.value
                },
                form:
                {
                    email: email,
                    password: password,
                    action: 'Save'
                },
                resolveWithFullResponse: true
            };

            return new Promise((resolve, reject) => {
                resolve(options_login);
            });
        });
}

function download_course_info_2(section_url) {
    var jsonCookieString = require('../cookieJson.json');
    var Cookies = ['PLAY_SESSION', 'CloudFront-Key-Pair-Id', 'CloudFront-Policy', 'CloudFront-Signature'];
    var play_session_login = '';
    for (var j in jsonCookieString) {
        if (jsonCookieString[j].name === Cookies[0]) {
            play_session_login = jsonCookieString[j].name + "=" + jsonCookieString[j].value;
        }
    }
    var download_header = '';
    var options_section = {
        method: 'GET',
        url: section_url + '/home',
        resolveWithFullResponse: true,
        headers:
        {
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: play_session_login
        }
    };
    var options_syllabus = {
        method: 'GET',
        url: section_url + '/syllabus',
        resolveWithFullResponse: true,
        headers:
        {
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: play_session_login
        }
    };
    rp(options_section).then(function (response_section) {
        var cookie_home = response_section.headers['set-cookie'];
        var cloudFront_Key_Pair_Id = new Cookie(cookie_home[0]);
        var cloudFront_Policy = new Cookie(cookie_home[1]);
        var cloudFront_Signature = new Cookie(cookie_home[2]);
        for (var j in jsonCookieString) {
            if (jsonCookieString[j].name === Cookies[1]) {
                cloudFront_Key_Pair_Id = jsonCookieString[j].name + "=" + jsonCookieString[j].value;
            } else if (jsonCookieString[j].name === Cookies[2]) {
                cloudFront_Policy = jsonCookieString[j].name + "=" + jsonCookieString[j].value;
            } else if (jsonCookieString[j].name === Cookies[3]) {
                cloudFront_Signature = jsonCookieString[j].name + "=" + jsonCookieString[j].value;
            }
        }
        download_header = cloudFront_Key_Pair_Id;
        download_header += "; " + cloudFront_Policy;
        download_header += "; " + cloudFront_Signature;
        console.log(download_header);
    }).then(function () { return rp(options_syllabus) })
        .then(function (response_syllabus) {
            var syllabus = JSON.parse(response_syllabus.body);
            var audio_data_arr = syllabus['data'];
            for (var j = 0; j < audio_data_arr.length; j++) {
                var audio_data = audio_data_arr[j];
                try {
                    var media = audio_data['lesson']['video']['media'];
                    var sectionId = audio_data['lesson']['video']['published']['sectionId'];
                    var mediaId = media['id'];
                    var userId = media['userId'];
                    var institutionId = media['institutionId'];
                    var createdAt = media['createdAt'];
                    var audioUrl = media['media']['current']['audioFiles'][0]['s3Url'];
                    var videoUrl = media['media']['current']['primaryFiles'][0]['s3Url'];
                    var mediaJson = {
                        sectionId: sectionId,
                        mediaId: mediaId,
                        userId: userId,
                        institutionId: institutionId,
                        createdAt: createdAt,
                        audioUrl: audioUrl,
                        videoUrl: videoUrl,
                        download_header: download_header
                    };
                    db.addMedia(mediaJson.videoUrl, 0, JSON.stringify(mediaJson))
                        .then(media => db.addMSTranscriptionTask(media.id))
                        .then(task => { console.log(task.id) });
                } catch (err) {
                    console.log(err);
                }
            }
        });        
}

function download_echo_lecture(task, media) {
    console.log("download_echo_lecture");
    var wget = require('node-wget-promise');
    var url = media.videoURL;
    console.log(JSON.parse(media.siteSpecificJSON).download_header);
    console.log(url);
    var dest = _dirname + media.id + "_" + url.substring(url.lastIndexOf('/') + 1);
    return wget(url, {
        output: dest,
        headers:
        {
            Cookie: JSON.parse(media.siteSpecificJSON).downloadHeader
        },
    })
        .then(result => task.update({
            videoLocalLocation: path.resolve(dest)
        }));
}

function convertTaskVideoToWav(taskId) {
    console.log("convertVideoToWav");
    return db.getTask(taskId)
        .then(task => conversion_utils.convertTaskVideoToWav(task.videoLocalLocation))
        .then(outputFile => task.update({
            wavAudioLocalFile: path.resolve(outputFile)
        }));
}

function convertTaskToSrt(taskId) {
    console.log("convertTaskToSrt");

}

function wavToSrt(taskId) {
    console.log("wavToSrt");
    return db.getTask(taskId)
        .then(task => conversion_utils.convertWavFileToSrt(task.wavAudioLocalFile))
        .then(outputFile => task.update({
            srtFileLocation: path.resolve(outputFile)
        }));
}

module.exports = {
    youtube_scraper_channel: youtube_scraper_channel,
    download_youtube_playlist: download_youtube_playlist,
    download_course_info_2: download_course_info_2,
    download_lecture: download_lecture
}