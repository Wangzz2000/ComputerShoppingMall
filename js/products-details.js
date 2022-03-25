//详情页的加号按钮单击事件
$("#add").click(()=>{
    //1。先获取当前数量的值
    var $nowCount=$(".nub").val();
    //2.判断如果它非空，就加1，并修改为新值
    if($nowCount)
    {
        $nowCount++;
        $(".nub").val($nowCount);
    }
});
//详情页的加号按钮单击事件
$("#minus").click(()=>{
    //1。先获取当前数量的值
    var $nowCount=$(".nub").val();
    //2.判断如果它是否大于1
    if($nowCount>1)
    {   //是大于1个，才能减1
        $nowCount--;
        $(".nub").val($nowCount);
    }else{//否则就为0，总之不能减少为负数
        $(".nub").val(0);
    }
});
//详情页的添加新评论事件
$(".pinglun-btn").click(()=>{
    var $message = $(".msg").val();
    console.log($message);
    var $html="<li>"+
       "<b>游云ing</b>"+
       "<span>2017年6月14日</span>"+
       "<p>"+$message+"</p >"+
       "<div class='like'>"+
       "<img src='img/product-detail/like.png'/>"+
       " <span>0</span>"+
       "</div>"+
       "</li>";
    
    $("#plItem").append($html);
   })
//低版本的jQuery，注释掉
/*$(".like img").click(function(){
    var num=$(this).next().text();
    num++;
    $(this).next().text(num);
   });
*/
//高版本的jQuery，第一个选择器中的参数一定要是静态元素

   //点赞图片，数量加1
//首先，你要选中点赞图片元素，给它绑定单击事件，注意改为你自己的
$("#plItem").on("click",".like img",function(){
    var num=$(this).next().text();
    num++;
    $(this).next().text(num);
   });

   // 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top-btn").style.display = "block";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}
 
// 点击按钮，返回顶部
function topfun() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//读取数据库中的评论，这是函数的定义
function loadDate() { 
        //发送一个get请求，注意请求路径
        $.get("php/detail/getPinglun.php").then((resData) => {  
            var html = "";  
           //如果有输出0，就说明请求发送成功了，你的路径是对的
            for (var i = 0; i < resData.length; i++) {   
                var p = resData[i];  //把变量和html代码拼接 
                html += `
                 <li>
                <b>${p.uname}</b>
                <span>${p.fdate}</span>
                <p>${p.comm}</p >
                <div class="like">
                <img src="img/product-detail/Like.png">
               <span>${p.likesCount }</span>
                </div>
            </li>
                `;  
            }  //最后加到评论区的内部
            $("#plItem").html(html); 
        });
    }
//提交新评论功能，给发表评论按钮绑定单击事件
$(".pinglun-btn").click(function(){
    var comm=$(".msg").val();//评论内容
    var newPl=[];//新评论
    var pinglun=new Object();
    pinglun.uname="游云";
    pinglun.fdate="2019年10月16日";
    pinglun.comm=comm;
    pinglun.likesCount=0;
    newPl.push(pinglun);
    var json_pl=JSON.stringify(newPl);
    var cc=JSON.parse(json_pl);
    var url="php/detail/setPinglun.php";
    postRequest(url,cc);
    loadDate();
})


function postRequest(url,cc){
        //1.创建xhr对象
        var xhr = createXhr();
        //2.创建一个请求
        xhr.open("post", url, true);
        //3.状态监听：设置回调函数
        xhr.onreadystatechange = function(){
            //判断readystate以及status
            if(xhr.readyState == 4 && xhr.status == 200)
            {
                //接收响应数据
                var resultText = xhr.responseText;
                //console.log(resultText);
            }
        }
        //增加：更改请求消息投
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        //发送请求
        var uname = cc[0].uname;
        var fdate = cc[0].fdate;
        var comm = cc[0].comm;
        var likesCount = cc[0].likesCount;
        //请求主体
        var msg = "uname="+uname+"&fdate="+fdate+"&comm="+comm+"&likesCount="+likesCount;
        xhr.send(msg);
    }

$("#plItem").on("click",'img',function(){
            var num=$(this).next().text();
            var uname=$(this).parent().prev().prev().prev().text();
            var fdate=$(this).parent().prev().prev().text();
            var comm=$(this).parent().prev().text();
            num++;
            var newPl =[];
            var pinglun=new Object();
            pinglun.uname=uname;
            pinglun.fdate=fdate;
            pinglun.comm=comm;
            pinglun.likesCount=num;
            newPl.push(pinglun);
            var json_pl=JSON.stringify(newPl);
            var update=JSON.parse(json_pl);
            var url="php/detail/updatePinglun.php";
            postRequest(url,update);
            loadData();
        });

//需要调用loadData（）才能执行，
//所以下面这一行代码是告诉浏览器，当页面内容加载完成时，就执行这个函数
    $(() => { 
        loadDate();
    });