const config = require('./config').config;
//載入已經寫好的設定檔案
//語法:const 常數名 = require ('檔案路徑').對外公開的名稱
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;//狀態 200代表成功
  res.setHeader('Content-Type', 'text/plain'); // 傳送的標頭檔
  res.end('test build server by outside config');//回傳的東西
});

server.listen(config.port, config.host, () => {//監聽
  console.log(`Server running at http://${config.host}:${config.port}/`);//cmd的提示信息
});