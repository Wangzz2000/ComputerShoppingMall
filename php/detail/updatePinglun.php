<?php
 //
 header("Content-Type:application/json");
 require_once("../index/init.php");
 #1.接收
 $uname=$_REQUEST['uname'];
 echo $uname;
 $fdate=$_REQUEST['fdate'];
 $comm=$_REQUEST['comm'];
 $likesCount=$_REQUEST['likesCount'];
 $sql="UPDATE detail_comments SET likesCount='$likesCount' WHERE fdate='$fdate' AND uname='$uname' AND comm='$comm'";
 $result=mysqli_query($conn,$sql);
 if($uname==null){
  echo "用户不能为空，更新数据失败";
 }else{
  echo "修改记录成功!";
 }
?>