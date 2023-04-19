const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;//狀態 200代表成功
  res.setHeader('Content-Type', 'text/plain'); // 傳送的標頭檔
  res.end('Hello World');//回傳的東西
});

server.listen(port, hostname, () => {//監聽
  console.log(`Server running at http://${hostname}:${port}/`);//cmd的提示信息
});