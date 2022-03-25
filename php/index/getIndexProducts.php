<?php
//php/index/getIndexProducts.php
header("Content-Type:application/json");
require_once("../index/init.php");
$sql="SELECT*FROM index_products";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
?>