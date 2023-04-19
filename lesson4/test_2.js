// 非阻塞處理

function test_2(done) {
  setTimeout(()=>{
    done();//callback當任務完成時做的事情
  }, 3000);
}

test_2(function () {
  console.log("test in function");//後執行
});
console.log("test end");//先執行