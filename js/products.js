$(".addCart").click(function(){
	var $price=$(this).prev().text();
	var price=$price.slice(1);
	console.log(price);
	
	var $pName=$(this).parent().prev().text().substring(0,35);
	var $nProduct='<p class="text-over">'+$pName+'</span>'+
				  '<div class="num">'+
				  '<span class="reduce">-</span>'+
				  '<input type="text" value="1">'+
				  '<span class="add">+</span>'+
				  '</div>'+
				  '<p class="lf singlePrice">单价:&yen<span>'+price+'</span></p>'+
				  '<p class="rf sumPrice">总价:&yen<span>'+price+'</span></p>'+
				  '<div class="clear"></div>';
	$(".cart-content").append($nProduct);
});
//给新加入购物车的+号元素绑定单击事件
$(".cart-content").on("click",'.add',function(){
	//获取商品数量
	var $count=$(this).prev().val();
	//获取商品价格
	var $price=
	parseFloat($(this).parent().next().children("span").text());//单价
	//console.log( $price, $count);
	var $sumPrice=0.0;
	if($count){
		$count++;
		$(this).prev().val($count);
	}
	$sumPrice=$price*$count;
	//最后给总价元素赋值
	$(this).parent().next().next().children("span").text($sumPrice);  //输出总价
});

//给新加入购物车的-号元素绑定单击事件
$(".cart-content").on("click",'.reduce',function(){
var $count=$(this).next().val();//获取数量
	var $price=
	parseFloat($(this).parent().next().children("span").text());//单价
	//console.log( $price, $count1);
	var $sumPrice=0.0;
	if($count>1){
		$count--;
		$(this).next().val($count);
	}else{
		$count=0;
		$(this).next().val($count);
	}
	$sumPrice=$price*$count;
	$(this).parent().next().next().children("span").text($sumPrice);
});
//给去结算的按钮添加单击事件，计算购物车中商品的总价
$(".cart-result").on("click",'#check',function(){
	//计算所选所有商品的总价
	var $sumPrices=$(".cart-content>.sumPrice");
	var totalPrice=0.0;
	for(var i= 0;i < $sumPrices.length;i++){
		totalPrice +=parseFloat($($sumPrices[i]).children("span").text());
		console.log(totalPrice);
	}
	//将总价赋值给总价元素
	$("#total").text(totalPrice);
});
//清空购物车
$("#clear").click(()=>{
	//获取到购物车里的物品
	$("div.cart-content").text("");
	     $("#total").text(0);
});


//给搜索图片添加绑定事件
//第一个#top-input是放大镜图片的父亲元素，.search-img是放大镜图片
$('#top-input').on("click",'.search-img',function(){
	alert(1);
	var keywords = $('#txtSearch').val();//获取关键字的文字
	alert(keywords);
	var param = {keys: keywords};
	$.ajax({
		url:"php/products/getSearchProducts.php",
		type:"get",
		data: param,
		success: function(resData){
			var html = "";
			alert(2);
			if(resData.length>=1){
				alert(3);
				for(var i=0;i<resData.length;i++){
					var p = resData[i];
					html += //做拼接，让数据库里查询的结果和HTML拼接
					 `<li>
					<a href="#"><img src="${p.pic}" alt=""></a>
					<p class="intro">${p.intro}</p>
					<div>
					<p class="price lf>￥${p.price}</p>
					<a href="#" class="addCart rf" onclick="return false">加入购物车</a>
					</div>
					</li>
					`;
				}
				$("#show-list").html(html);
			}else{
				alert("抱歉，数据库中没有您要查询的结果！");
			}
		},
		error: function(xhr) {
			alert("抱歉，后台服务器没有响应，请尝试新的查询");
		}		
	});
});