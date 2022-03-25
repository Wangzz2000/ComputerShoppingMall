<?php
$conn=mysqli_connect("127.0.0.1","root","root","test",3306);
$sql="SET NAMES UTF8";//设置了这个才能识别数据中的中文
mysqli_query($conn,$sql);
?>