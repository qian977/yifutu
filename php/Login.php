<?php
	header("Content-type:text/html; charset=utf-8");
	
	$username=$_POST["username"];
    $passname=$_POST["passname"];

	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "链接失败";
	}
	else{
		mysql_select_db("yifutu",$con);
		//1)、查询
        $sqlstr1="select * from reglogin where username='$username'";
        $sqlstr2="select * from reglogin where passname='$passname'";
        $result1 = mysql_query($sqlstr1,$con);
        $result2 = mysql_query($sqlstr2,$con);
        $rows1 = mysql_num_rows($result1);
        $rows2 = mysql_num_rows($result2);
        if($rows1==0){
            if($rows2==0){
                //说明没找到
                echo "0";
            }else{
                //用户名错误
                echo "-1";
            }
        }else{
            if($rows2==0){
                //密码错误
                echo "-1";
            }else{
                //正确
                echo "1";
            }
        }
        // if($result1==true && $result2==true){
        //     echo "1";  //查到了，可以登录
        // }else if(!$result1 || !$result2){
        //     echo "-1";  //账号或密码不正确
        // }else if(!$result1 && !$result2){
        //     echo "0";   //没有查到，需要注册
        // }

    }
?>