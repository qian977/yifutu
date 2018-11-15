
$(function(){

    $(".box_con input").focus(function(){
        $(this).prop({"placeholder":""}).css({"backgroundColor":"#fff","fontSize":18});
    });
    // 请输入手机号
    $(".phone input").blur(function(){  
        $(".phone .tips").css({"display":"none"});
        $(this).prop({"placeholder":"请输入手机/邮箱/用户名"}).css({"backgroundColor":"#fafafa","fontSize":14});
        if($(this).val()==""){
            $(".phone_tips").fadeIn("slow").css({"right":-175});
            $(".phone_tips span").html("请输入帐号");
        }else{
            let num=/^1[3-8]\d{9}$/;
            if(num.test($(".phone input").val())==true){
                return;
            }else{
                $(".phone_tips").fadeIn("slow").css({"right":-260}); 
                $(".phone_tips span").html("您输入的账号或密码不正确");
            }
        }
    });

    // 请输入密码
    $(".password input").blur(function(){
        $(".password .tips").css({"display":"none"});
        $(this).prop({"placeholder":"请输入密码"}).css({"backgroundColor":"#fafafa","fontSize":14});
        if($(this).val()==""){
            $(".password_tips").fadeIn("slow").css({"right":-175});
            $(".password_tips span").html("请输入密码");
        }else{ 
            let password=$(this).val();
            if(password.length>=6 && password.length<=20){
                return;
            }
        }
    });

  



});