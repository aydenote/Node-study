'use strict';

/** express 없이 서버 생성 */

// const http = require('http');
// const app = http.createServer((req, res) => {
//   let url = req.url;
//   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//   if (url === '/') {
//     res.end('여기는 루트 입니다.');
//   } else if (url === '/login') {
//     res.end('여기는 로그인 입니다.');
//   }
// });

// app.listen(3001, () => {
//   console.log('http 서버 가동');
// });

/** express를 활용한 서버 생성 */

// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/', home); // use -> 미들 웨어 등록해주는 메서드.

module.exports = app;
