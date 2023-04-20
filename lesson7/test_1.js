const config = require('./config').config;
//載入已經寫好的設定檔案
//語法:const 常數名 = require ('檔案路徑').對外公開的名稱
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;//狀態 200代表成功
  res.setHeader('Content-Type', 'text/plain'); // 傳送的標頭檔
  console.log(req.url);

  //建立類似router的功能
  switch (req.url) {
    case '/':
      res.end('this is a homepage.\n');//回傳的東西
      break;
    case '/sub':
      //這邊設定是port號以後 包含預設的'/'
      //例如:http://127.0.0.1:3000/sub
      //req.url='/sub'
      //所以這邊的case寫成'/sub'
      res.end('this is a subpage.\nAnd this is this pages headers:\n');//回傳的東西
      break;
    case '/test':
      res.end("this is a testpage.");//回傳的東西
      break;  
    default:
      res.end("we didn't have this page. please give us a new req.")
      break;
  }
});

server.listen(config.port, config.host, () => {//監聽
  console.log(`Server running at http://${config.host}:${config.port}/`);//cmd的提示信息
});