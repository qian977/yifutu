$(function(){

  
    $(".box_con input").focus(function(){
        $(this).prop({"placeholder":""}).css({"backgroundColor":"#fff","fontSize":18});
    });
    // 请输入手机号
    $(".phone input").blur(function(){  
        $(".phone .tips").css({"display":"none"});
        $(this).prop({"placeholder":"请输入手机号"}).css({"backgroundColor":"#fafafa","fontSize":14});
        if($(this).val()==""){
            $(".phone_tips").fadeIn("slow").css({"right":-190});
            $(".phone_tips span").html("请输入手机号");
        }else{
            let num=/^1[3-8]\d{9}$/;
            if(num.test($(".phone input").val())==true){
                return;
            }else{
                $(".phone_tips").fadeIn("slow").css({"right":-265});
                $(".phone_tips span").html("请输入正确的11位手机号码");
            }
        }
    });

    // 请输入密码
    $(".password input").blur(function(){
        $(".password .tips").css({"display":"none"});
        $(this).prop({"placeholder":"请输入密码"}).css({"backgroundColor":"#fafafa","fontSize":14});
        if($(this).val()==""){
            $(".password_tips").fadeIn("slow");
            $(".password_tips span").html("请输入密码");
        }else{ 
            let password=$(this).val();
            if(password.length>=6 && password.length<=20){
                return;
            }else{
                $(".password_tips").fadeIn("slow").css({"right":-230});
                $(".password_tips span").html("密码不能少于6个字符");
            }
        }
    });
    //验证码
    $(".code input").blur(function(){
        $(".code .tips").css({"display":"none"});
        $(this).prop({"placeholder":"验证码"}).css({"backgroundColor":"#fafafa","fontSize":14});
        if($(this).val()==""){
            $(".code_tips").fadeIn("slow");
            $(".code_tips span").html("请您填写验证码");
        }
    });
    // 短信验证码
    $(".write input").blur(function(){
        $(".write .tips").css({"display":"none"});
        $(this).prop({"placeholder":"请输入验证码"}).css({"backgroundColor":"#fafafa","fontSize":14});
        if($(this).val()==""){
            $(".write_tips").fadeIn("slow");
            $(".write_tips span").html("请输入短信验证码");
        }
    });

    
    


});

