//測試程式碼
//套件載入
const express = require('express')
const http = require('http');

//容器創建
const app = express()
const portApp = 3001
const port = 3000
const hostname = '127.0.0.1'

//express的創建(回傳"白色"底的畫面)
//rest api
app.get('/', (req, res) => {
  res.send('Hello World!')//網址回傳的  注意在express這邊要用send
})
app.get('/user',(req, res) => {
	res.send('New user')
})
app.post('/user',(req,res)=>{//透過post method呼叫
	console.log(req.body)
	res.send("post ok")
})
app.listen(portApp, () => {//監聽
  console.log(`Example app listening on port ${portApp}`)//cmd顯示的
})


//http的創建(回傳"黑色"底的畫面)
const server = http.createServer((req, res) => {
  res.statusCode = 200;//狀態 200代表成功
  res.setHeader('Content-Type', 'text/plain'); // 傳送的標頭檔
  res.end('Hello World http')//回傳的東西 注意在http這邊要用end
});
server.listen(port, hostname, () => {//監聽
  console.log(`Server running at http://${hostname}:${port}/`);//cmd的提示信息
});


/*
node 啟動後如果更改了程式碼內容就算存檔成功後也是沒有辦法運行的
需要將terminal關閉在重新開啟
*/

//學長的基礎教學程式碼
/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user',(req, res) => {
	res.send('New user')
})

app.post('/user',(req,res)=>{
	console.log(req.body)
	res.send("post ok")
})
	
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/

//node 的範例程式碼
/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;//狀態 200代表成功
  res.setHeader('Content-Type', 'text/plain'); // 傳送的標頭檔
  res.end('Hello World');//回傳的東西
});

server.listen(port, hostname, () => {//監聽
  console.log(`Server running at http://${hostname}:${port}/`);//cmd的提示信息
});*/