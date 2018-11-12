<?php

header("content-type","text/html;charset=utf-8");

$username=$_POST["username"];
$passname=$_POST["passname"];

$con=mysql_connect("locahost","root","root");

mysql_select_db("yifutu",$con);

$sqlstr="insert into RegLogin values('$username','$passname')";
$result=mysql_query($sqlstr,$con);

mysql_close($con);

$rows=mysql_num_rows($result);

if($rows>0){
    echo "1";   //数据插入成功，返回1
}else{
    each "0";   //数据插入失败，返回0
}

?>