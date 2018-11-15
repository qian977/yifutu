$(function(){
   
    //轮播图：  
    jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true,trigger:"click",delayTime:1000});

    //划过li盒阴影
    $(".f1 li div").mouseenter(function(){
        $(this).css({"boxShadow":" 12px 13px 10px -5px #d4d4d4","top":"-5px"});
    });
    $(".f1 li div").mouseleave(function(){
        $(this).css({"boxShadow":" 12px 13px 10px -5px transparent","top":"0px"});
    });

    $(".ff li div").mouseenter(function(){
        $(this).css({"boxShadow":" 12px 13px 10px -5px #d4d4d4","top":"-5px"});
    });
    $(".ff li div").mouseleave(function(){
        $(this).css({"boxShadow":" 12px 13px 10px -5px transparent","top":"0px"});
    });
   

    //design  手风琴
    $(".sfq li").mouseenter(function () { 
            $(this).stop().animate({"width":"349"},150);
            $(this).nextAll().stop().animate({"width":"202"},150);
            $(this).prevAll().stop().animate({"width":"202"},150);
            $(this).find("a").css({"background":"#f60","opacity":"0.8"});
    });
    $(".sfq li").mouseleave(function () { 
            $(this).stop().animate({"width":"232"},150);
            $(this).nextAll().stop().animate({"width":"232"},150);
            $(this).prevAll().stop().animate({"width":"232"},150);
            $(this).find("a").css({"background":"#000","opacity":"0.3"});
    });
            
   
    
    


    
});