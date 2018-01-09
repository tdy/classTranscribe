/** Copyright 2015 Board of Trustees of University of Illinois
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var router = express.Router();
var fs = require('fs');
var client = require('./../../modules/redis');
var passport = require('passport')
var flash = require('connect-flash');

var loginMustache = fs.readFileSync(mustachePath + 'login.mustache').toString();

router.get('/login', function(request, response) {
    if (request.isAuthenticated()) {
        response.redirect('../dashboard');
    } else {
        response.writeHead(200, {
            'Content-Type': 'text.html'
        });
        renderWithPartial(loginMustache, request, response);
    }
});

router.post('/login/submit', function(request, response, next) {
    passport.authenticate('local', function(err, user, info) {
        if (!user) {
            response.send({ message: info.message, html: '../login'});
        } else {
            request.logIn(user, function(err) {
                response.send({ message: 'success', html: '../dashboard' });
            });
        }
    })(request, response, next);
});

module.exports = router;