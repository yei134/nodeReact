// 阻塞處理

function test_1() {
  var start = new Date().getTime();//取得進入時間
  while (new Date().getTime() < start + 3000);  //先執行
  //進入回圈 直到現在時間與進入時間相差過三秒後跳出
}

test_1();

console.log("test end");//後執行