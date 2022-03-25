function displayTime() {
  var elt = document.getElementById("clock");
  var now = new Date();
  elt.innerHTML = now.toLocaleTimeString();
  setTimeout(displayTime, 1000);
}

//window.onload = displayTime; //当页面

function countDownTime() {
  //自行完成内部代码
  //抢单结束时间
  //var elt = document.getElementById("clock");
  var end = new Date("2021/12/25 00:00:00");
  var now = new Date(); //当前时间
  var s = parseInt((end - now) / 1000);
  //距离下一个假期还有：？天？小时？分？秒
  var p = document.getElementById("clock");
  //接上面时间变量的定义，判断时间差
  if (s > 0) {
    var d = parseInt(s / 3600 / 24);
    if (d < 10) d = "0" + d;
    //s/3600/24,再下取整
    var h = parseInt((s % (3600 * 24)) / 3600);
    if (h < 10) h = "0" + h;
    var m = parseInt((s % 3600) / 60);
    if (m < 10) m = "0" + m; //计算机完整分数s/3600的余数,再/60，再下取整
    s %= 60; //s/60的余数
    if (s < 10) s = "0" + s;
    p.innerHTML = d + "天" + h + "时" + m + "分" + s + "秒";
  }else{
      clearInterval(timer);
      timer=null;
      p.innerHTML="抢单已结束";
  }
}

var timer = setInterval(countDownTime, 1000);
window.onload = countDownTime;

$(() => {
  console.log(0);
  $.get("php/index/getIndexProducts.php").then((resData) => {
    console.log(1);
    var html = "";
    for (var i = 0; i < resData.length; i++) {
      var p = resData[i];
      console.log(p.title);
      html += `
        <div>
      <div class="product">
          <p class="name">${p.title}</p>
          <p class="details"><b>${p.details}</b></p>
          <p class="price">￥${p.price}</p>
          <a href="#" class="view">查看详情</a>
      </div>
      <img src="${p.pic}">
  </div>
        `;
      console.log(html);
    }
    $(".content").html(html);
  });
});