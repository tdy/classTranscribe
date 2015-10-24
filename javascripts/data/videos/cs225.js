// Video sources
var VIDEOS = [
  ["Full Lecture Video 01 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_01/Full_Lecture_Video_01_part0.webm"],
  ["Full Lecture Video 01 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_01/Full_Lecture_Video_01_part1.webm"],
  ["Full Lecture Video 01 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_01/Full_Lecture_Video_01_part2.webm"],
  ["Full Lecture Video 01 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_01/Full_Lecture_Video_01_part3.webm"],
  ["Full Lecture Video 01 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_01/Full_Lecture_Video_01_part4.webm"],
  ["Full Lecture Video 01 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_01/Full_Lecture_Video_01_part5.webm"],
  ["Full Lecture Video 01 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_01/Full_Lecture_Video_01_part6.webm"],
  ["Full Lecture Video 01 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_01/Full_Lecture_Video_01_part7.webm"],
  ["Full Lecture Video 01 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_01/Full_Lecture_Video_01_part8.webm"],
  ["Full Lecture Video 01 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_01/Full_Lecture_Video_01_part10.webm"],
  ["Full Lecture Video 02 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_02/Full_Lecture_Video_02_part0.webm"],
  ["Full Lecture Video 02 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_02/Full_Lecture_Video_02_part1.webm"],
  ["Full Lecture Video 02 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_02/Full_Lecture_Video_02_part2.webm"],
  ["Full Lecture Video 02 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_02/Full_Lecture_Video_02_part3.webm"],
  ["Full Lecture Video 02 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_02/Full_Lecture_Video_02_part4.webm"],
  ["Full Lecture Video 02 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_02/Full_Lecture_Video_02_part5.webm"],
  ["Full Lecture Video 02 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_02/Full_Lecture_Video_02_part6.webm"],
  ["Full Lecture Video 02 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_02/Full_Lecture_Video_02_part7.webm"],
  ["Full Lecture Video 02 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_02/Full_Lecture_Video_02_part8.webm"],
  ["Full Lecture Video 02 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_02/Full_Lecture_Video_02_part9.webm"],
  ["Full Lecture Video 03 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_03/Full_Lecture_Video_03_part0.webm"],
  ["Full Lecture Video 03 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_03/Full_Lecture_Video_03_part1.webm"],
  ["Full Lecture Video 03 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_03/Full_Lecture_Video_03_part2.webm"],
  ["Full Lecture Video 03 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_03/Full_Lecture_Video_03_part3.webm"],
  ["Full Lecture Video 03 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_03/Full_Lecture_Video_03_part4.webm"],
  ["Full Lecture Video 03 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_03/Full_Lecture_Video_03_part5.webm"],
  ["Full Lecture Video 03 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_03/Full_Lecture_Video_03_part6.webm"],
  ["Full Lecture Video 03 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_03/Full_Lecture_Video_03_part7.webm"],
  ["Full Lecture Video 03 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_03/Full_Lecture_Video_03_part8.webm"],
  ["Full Lecture Video 03 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_03/Full_Lecture_Video_03_part9.webm"],
  ["Full Lecture Video 03 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_03/Full_Lecture_Video_03_part9.webm"],
  ["Full Lecture Video 03 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_03/Full_Lecture_Video_03_part10.webm"],
  ["Full Lecture Video 03 part11","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_03/Full_Lecture_Video_03_part11.webm"],
  ["Full Lecture Video 04 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_04/Full_Lecture_Video_04_part0.webm"],
  ["Full Lecture Video 04 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_04/Full_Lecture_Video_04_part1.webm"],
  ["Full Lecture Video 04 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_04/Full_Lecture_Video_04_part2.webm"],
  ["Full Lecture Video 04 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_04/Full_Lecture_Video_04_part3.webm"],
  ["Full Lecture Video 04 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_04/Full_Lecture_Video_04_part4.webm"],
  ["Full Lecture Video 04 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_04/Full_Lecture_Video_04_part5.webm"],
  ["Full Lecture Video 04 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_04/Full_Lecture_Video_04_part7.webm"],
  ["Full Lecture Video 04 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_04/Full_Lecture_Video_04_part8.webm"],
  ["Full Lecture Video 04 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_04/Full_Lecture_Video_04_part8.webm"],
  ["Full Lecture Video 04 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_04/Full_Lecture_Video_04_part9.webm"],
  ["Full Lecture Video 04 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_04/Full_Lecture_Video_04_part10.webm"],
  ["Full Lecture Video 05 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_05/Full_Lecture_Video_05_part0.webm"],
  ["Full Lecture Video 05 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_05/Full_Lecture_Video_05_part1.webm"],
  ["Full Lecture Video 05 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_05/Full_Lecture_Video_05_part2.webm"],
  ["Full Lecture Video 05 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_05/Full_Lecture_Video_05_part3.webm"],
  ["Full Lecture Video 05 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_05/Full_Lecture_Video_05_part4.webm"],
  ["Full Lecture Video 05 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_05/Full_Lecture_Video_05_part5.webm"],
  ["Full Lecture Video 05 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_05/Full_Lecture_Video_05_part6.webm"],
  ["Full Lecture Video 05 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_05/Full_Lecture_Video_05_part7.webm"],
  ["Full Lecture Video 05 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_05/Full_Lecture_Video_05_part8.webm"],
  ["Full Lecture Video 05 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_05/Full_Lecture_Video_05_part9.webm"],
  ["Full Lecture Video 05 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_05/Full_Lecture_Video_05_part10.webm"],
  ["Full Lecture Video 05 part11","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_05/Full_Lecture_Video_05_part11.webm"],
  ["Full Lecture Video 06 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_06/Full_Lecture_Video_06_part0.webm"],
  ["Full Lecture Video 06 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_06/Full_Lecture_Video_06_part1.webm"],
  ["Full Lecture Video 06 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_06/Full_Lecture_Video_06_part2.webm"],
  ["Full Lecture Video 06 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_06/Full_Lecture_Video_06_part3.webm"],
  ["Full Lecture Video 06 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_06/Full_Lecture_Video_06_part4.webm"],
  ["Full Lecture Video 06 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_06/Full_Lecture_Video_06_part5.webm"],
  ["Full Lecture Video 06 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_06/Full_Lecture_Video_06_part6.webm"],
  ["Full Lecture Video 06 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_06/Full_Lecture_Video_06_part7.webm"],
  ["Full Lecture Video 06 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_06/Full_Lecture_Video_06_part8.webm"],
  ["Full Lecture Video 07 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_07/Full_Lecture_Video_07_part0.webm"],
  ["Full Lecture Video 07 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_07/Full_Lecture_Video_07_part1.webm"],
  ["Full Lecture Video 07 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_07/Full_Lecture_Video_07_part2.webm"],
  ["Full Lecture Video 07 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_07/Full_Lecture_Video_07_part3.webm"],
  ["Full Lecture Video 07 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_07/Full_Lecture_Video_07_part4.webm"],
  ["Full Lecture Video 07 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_07/Full_Lecture_Video_07_part5.webm"],
  ["Full Lecture Video 07 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_07/Full_Lecture_Video_07_part6.webm"],
  ["Full Lecture Video 07 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_07/Full_Lecture_Video_07_part7.webm"],
  ["Full Lecture Video 07 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_07/Full_Lecture_Video_07_part8.webm"],
  ["Full Lecture Video 07 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_07/Full_Lecture_Video_07_part9.webm"],
  ["Full Lecture Video 07 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_07/Full_Lecture_Video_07_part10.webm"],
  ["Full Lecture Video 08 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_08/Full_Lecture_Video_08_part0.webm"],
  ["Full Lecture Video 08 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_08/Full_Lecture_Video_08_part1.webm"],
  ["Full Lecture Video 08 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_08/Full_Lecture_Video_08_part2.webm"],
  ["Full Lecture Video 08 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_08/Full_Lecture_Video_08_part3.webm"],
  ["Full Lecture Video 08 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_08/Full_Lecture_Video_08_part4.webm"],
  ["Full Lecture Video 08 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_08/Full_Lecture_Video_08_part5.webm"],
  ["Full Lecture Video 08 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_08/Full_Lecture_Video_08_part6.webm"],
  ["Full Lecture Video 08 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_08/Full_Lecture_Video_08_part7.webm"],
  ["Full Lecture Video 08 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_08/Full_Lecture_Video_08_part8.webm"],
  ["Full Lecture Video 08 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_08/Full_Lecture_Video_08_part9.webm"],
  ["Full Lecture Video 08 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_08/Full_Lecture_Video_08_part10.webm"],
  ["Full Lecture Video 09 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_09/Full_Lecture_Video_09_part0.webm"],
  ["Full Lecture Video 09 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_09/Full_Lecture_Video_09_part1.webm"],
  ["Full Lecture Video 09 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_09/Full_Lecture_Video_09_part2.webm"],
  ["Full Lecture Video 09 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_09/Full_Lecture_Video_09_part2.webm"],
  ["Full Lecture Video 09 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_09/Full_Lecture_Video_09_part3.webm"],
  ["Full Lecture Video 09 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_09/Full_Lecture_Video_09_part4.webm"],
  ["Full Lecture Video 09 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_09/Full_Lecture_Video_09_part5.webm"],
  ["Full Lecture Video 09 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_09/Full_Lecture_Video_09_part6.webm"],
  ["Full Lecture Video 09 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_09/Full_Lecture_Video_09_part7.webm"],
  ["Full Lecture Video 09 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_09/Full_Lecture_Video_09_part8.webm"],
  ["Full Lecture Video 09 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_09/Full_Lecture_Video_09_part9.webm"],
  ["Full Lecture Video 09 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_09/Full_Lecture_Video_09_part10.webm"],
  ["Full Lecture Video 10 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_10/Full_Lecture_Video_10_part0.webm"],
  ["Full Lecture Video 10 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_10/Full_Lecture_Video_10_part1.webm"],
  ["Full Lecture Video 10 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_10/Full_Lecture_Video_10_part2.webm"],
  ["Full Lecture Video 10 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_10/Full_Lecture_Video_10_part4.webm"],
  ["Full Lecture Video 10 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_10/Full_Lecture_Video_10_part5.webm"],
  ["Full Lecture Video 10 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_10/Full_Lecture_Video_10_part6.webm"],
  ["Full Lecture Video 10 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_10/Full_Lecture_Video_10_part7.webm"],
  ["Full Lecture Video 10 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_10/Full_Lecture_Video_10_part8.webm"],
  ["Full Lecture Video 10 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_10/Full_Lecture_Video_10_part9.webm"],
  ["Full Lecture Video 10 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_10/Full_Lecture_Video_10_part10.webm"],
  ["Full Lecture Video 10 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_10/Full_Lecture_Video_10_part10.webm"],
  ["Full Lecture Video 11 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_11/Full_Lecture_Video_11_part0.webm"],
  ["Full Lecture Video 11 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_11/Full_Lecture_Video_11_part1.webm"],
  ["Full Lecture Video 11 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_11/Full_Lecture_Video_11_part2.webm"],
  ["Full Lecture Video 11 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_11/Full_Lecture_Video_11_part3.webm"],
  ["Full Lecture Video 11 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_11/Full_Lecture_Video_11_part4.webm"],
  ["Full Lecture Video 11 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_11/Full_Lecture_Video_11_part5.webm"],
  ["Full Lecture Video 11 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_11/Full_Lecture_Video_11_part6.webm"],
  ["Full Lecture Video 11 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_11/Full_Lecture_Video_11_part7.webm"],
  ["Full Lecture Video 11 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_11/Full_Lecture_Video_11_part8.webm"],
  ["Full Lecture Video 11 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_11/Full_Lecture_Video_11_part9.webm"],
  ["Full Lecture Video 11 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_11/Full_Lecture_Video_11_part10.webm"],
  ["Full Lecture Video 12 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_12/Full_Lecture_Video_12_part0.webm"],
  ["Full Lecture Video 12 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_12/Full_Lecture_Video_12_part1.webm"],
  ["Full Lecture Video 12 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_12/Full_Lecture_Video_12_part2.webm"],
  ["Full Lecture Video 12 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_12/Full_Lecture_Video_12_part3.webm"],
  ["Full Lecture Video 12 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_12/Full_Lecture_Video_12_part4.webm"],
  ["Full Lecture Video 12 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_12/Full_Lecture_Video_12_part5.webm"],
  ["Full Lecture Video 12 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_12/Full_Lecture_Video_12_part6.webm"],
  ["Full Lecture Video 12 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_12/Full_Lecture_Video_12_part7.webm"],
  ["Full Lecture Video 12 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_12/Full_Lecture_Video_12_part8.webm"],
  ["Full Lecture Video 12 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_12/Full_Lecture_Video_12_part9.webm"],
  ["Full Lecture Video 12 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_12/Full_Lecture_Video_12_part10.webm"],
  ["Full Lecture Video 12 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_12/Full_Lecture_Video_12_part10.webm"],
  ["Full Lecture Video 13 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_13/Full_Lecture_Video_13_part0.webm"],
  ["Full Lecture Video 13 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_13/Full_Lecture_Video_13_part1.webm"],
  ["Full Lecture Video 13 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_13/Full_Lecture_Video_13_part2.webm"],
  ["Full Lecture Video 13 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_13/Full_Lecture_Video_13_part3.webm"],
  ["Full Lecture Video 13 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_13/Full_Lecture_Video_13_part5.webm"],
  ["Full Lecture Video 13 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_13/Full_Lecture_Video_13_part7.webm"],
  ["Full Lecture Video 13 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_13/Full_Lecture_Video_13_part8.webm"],
  ["Full Lecture Video 13 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_13/Full_Lecture_Video_13_part9.webm"],
  ["Full Lecture Video 14 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_14/Full_Lecture_Video_14_part0.webm"],
  ["Full Lecture Video 14 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_14/Full_Lecture_Video_14_part1.webm"],
  ["Full Lecture Video 14 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_14/Full_Lecture_Video_14_part4.webm"],
  ["Full Lecture Video 14 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_14/Full_Lecture_Video_14_part5.webm"],
  ["Full Lecture Video 14 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_14/Full_Lecture_Video_14_part6.webm"],
  ["Full Lecture Video 14 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_14/Full_Lecture_Video_14_part8.webm"],
  ["Full Lecture Video 14 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_14/Full_Lecture_Video_14_part9.webm"],
  ["Full Lecture Video 15 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_15/Full_Lecture_Video_15_part0.webm"],
  ["Full Lecture Video 15 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_15/Full_Lecture_Video_15_part1.webm"],
  ["Full Lecture Video 15 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_15/Full_Lecture_Video_15_part2.webm"],
  ["Full Lecture Video 15 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_15/Full_Lecture_Video_15_part3.webm"],
  ["Full Lecture Video 15 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_15/Full_Lecture_Video_15_part4.webm"],
  ["Full Lecture Video 15 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_15/Full_Lecture_Video_15_part6.webm"],
  ["Full Lecture Video 15 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_15/Full_Lecture_Video_15_part7.webm"],
  ["Full Lecture Video 15 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_15/Full_Lecture_Video_15_part8.webm"],
  ["Full Lecture Video 15 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_15/Full_Lecture_Video_15_part10.webm"],
  ["Full Lecture Video 17 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_17/Full_Lecture_Video_17_part0.webm"],
  ["Full Lecture Video 17 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_17/Full_Lecture_Video_17_part1.webm"],
  ["Full Lecture Video 17 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_17/Full_Lecture_Video_17_part3.webm"],
  ["Full Lecture Video 17 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_17/Full_Lecture_Video_17_part4.webm"],
  ["Full Lecture Video 17 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_17/Full_Lecture_Video_17_part6.webm"],
  ["Full Lecture Video 17 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_17/Full_Lecture_Video_17_part9.webm"],
  ["Full Lecture Video 18 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_18/Full_Lecture_Video_18_part0.webm"],
  ["Full Lecture Video 18 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_18/Full_Lecture_Video_18_part1.webm"],
  ["Full Lecture Video 18 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_18/Full_Lecture_Video_18_part2.webm"],
  ["Full Lecture Video 18 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_18/Full_Lecture_Video_18_part3.webm"],
  ["Full Lecture Video 18 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_18/Full_Lecture_Video_18_part6.webm"],
  ["Full Lecture Video 18 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_18/Full_Lecture_Video_18_part7.webm"],
  ["Full Lecture Video 18 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_18/Full_Lecture_Video_18_part9.webm"],
  ["Full Lecture Video 18 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_18/Full_Lecture_Video_18_part10.webm"],
  ["Full Lecture Video 19 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_19/Full_Lecture_Video_19_part0.webm"],
  ["Full Lecture Video 19 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_19/Full_Lecture_Video_19_part2.webm"],
  ["Full Lecture Video 19 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_19/Full_Lecture_Video_19_part3.webm"],
  ["Full Lecture Video 19 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_19/Full_Lecture_Video_19_part4.webm"],
  ["Full Lecture Video 19 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_19/Full_Lecture_Video_19_part5.webm"],
  ["Full Lecture Video 19 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_19/Full_Lecture_Video_19_part7.webm"],
  ["Full Lecture Video 20 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_20/Full_Lecture_Video_20_part0.webm"],
  ["Full Lecture Video 20 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_20/Full_Lecture_Video_20_part1.webm"],
  ["Full Lecture Video 20 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_20/Full_Lecture_Video_20_part2.webm"],
  ["Full Lecture Video 20 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_20/Full_Lecture_Video_20_part3.webm"],
  ["Full Lecture Video 20 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_20/Full_Lecture_Video_20_part4.webm"],
  ["Full Lecture Video 20 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_20/Full_Lecture_Video_20_part5.webm"],
  ["Full Lecture Video 20 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_20/Full_Lecture_Video_20_part7.webm"],
  ["Full Lecture Video 20 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_20/Full_Lecture_Video_20_part8.webm"],
  ["Full Lecture Video 20 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_20/Full_Lecture_Video_20_part9.webm"],
  ["Full Lecture Video 21 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_21/Full_Lecture_Video_21_part2.webm"],
  ["Full Lecture Video 21 part3","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_21/Full_Lecture_Video_21_part3.webm"],
  ["Full Lecture Video 21 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_21/Full_Lecture_Video_21_part4.webm"],
  ["Full Lecture Video 21 part6","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_21/Full_Lecture_Video_21_part6.webm"],
  ["Full Lecture Video 21 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_21/Full_Lecture_Video_21_part7.webm"],
  ["Full Lecture Video 21 part10","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_21/Full_Lecture_Video_21_part10.webm"],
  ["Full Lecture Video 22 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_22/Full_Lecture_Video_22_part0.webm"],
  ["Full Lecture Video 22 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_22/Full_Lecture_Video_22_part2.webm"],
  ["Full Lecture Video 22 part5","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_22/Full_Lecture_Video_22_part5.webm"],
  ["Full Lecture Video 22 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_22/Full_Lecture_Video_22_part7.webm"],
  ["Full Lecture Video 22 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_22/Full_Lecture_Video_22_part8.webm"],
  ["Full Lecture Video 23 part0","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_23/Full_Lecture_Video_23_part0.webm"],
  ["Full Lecture Video 23 part2","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_23/Full_Lecture_Video_23_part2.webm"],
  ["Full Lecture Video 23 part8","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_23/Full_Lecture_Video_23_part8.webm"],
  ["Full Lecture Video 24 part1","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_24/Full_Lecture_Video_24_part1.webm"],
  ["Full Lecture Video 24 part4","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_24/Full_Lecture_Video_24_part4.webm"],
  ["Full Lecture Video 24 part7","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_24/Full_Lecture_Video_24_part7.webm"],
  ["Full Lecture Video 24 part9","https://s3-us-west-2.amazonaws.com/classtranscribe/CS225/Lecture_24/Full_Lecture_Video_24_part9.webm"],
];

$(document).ready(function () {
  VIDEOS.forEach(function (video, i) {
    var title = video[0];
    var src = video[1];
    var template = '<option class="video-option" value="' + i + '">' + title + '</option>';
    $(".video-selector").append(template);
  });
});

/*
  Loads the selected video
*/
function loadVideo(videoIndex) {
  var videoSrc = VIDEOS[videoIndex][1];
  $(".main-video-source").attr("src", videoSrc);
  $(".main-video").get(0).load();
}