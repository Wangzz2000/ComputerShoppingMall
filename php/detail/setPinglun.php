<?php
 header("Content-Type:application/json");
 require_once("../index/init.php");
 
 #1.接收前端传递过来的数据
 $uname=$_REQUEST['uname'];
 $fdate=$_REQUEST['fdate'];
 $comm=$_REQUEST['comm'];
 $likesCount=$_REQUEST['likesCount'];
 //把它插入到数据库中
 $sql="INSERT INTO detail_comments VALUES (NULL,'$uname','$fdate','$comm','$likesCount')";
 $result=mysqli_query($conn,$sql);
 if($uname==null){
  echo "用户不能为空，插入数据失败";
 }
?>