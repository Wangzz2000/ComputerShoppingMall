<?php
//php/products/getSearchProducts.php
header("Content-Type:application/json");
require_once("../index/init.php");
$keys = $_GET['keys']; //
//$keys = "hp"; //用常量做一下测试

//使用like关键字进行模糊查询，查询含有关键字的所有商品记录s
$sql="SELECT * FROM products WHERE intro LIKE '%$keys%'";
$result = mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
?>