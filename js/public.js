$(function(){
    //head:
    //鼠标划过 送至：北京市
    $(".conL").mouseenter(function(){
        $(this).css({"background":"#fff","border":"1px solid #e7e7e7"});
        $(".conL .icon-up1").css({"display":"none"});
        $(".conL .icon-down").css({"display":"block"});
        $(".conL .ul").stop().animate({"height":100},300).css({"display":"block"});
    });
    $(".conL").mouseleave(function(){
        $(this).css({"background":"#f4f4f4","border":"1px solid transparent"});
        $(".conL .icon-up1").css({"display":"block"});
        $(".conL .icon-down").css({"display":"none"});
        $(".conL .ul").stop().animate({"height":0},300).css({"display":"none"});
    });

    //划过个人中心
    $(".person").mouseenter(function(){
        $(this).css({"background":"#fff","border":"1px solid #cccccc","border-bottom":"none"});
        $(".person ul").stop().animate({"height":"114"},300).css({"display":"block"}); 
    });
    $(".person").mouseleave(function(){
        $(this).css({"background":"#f4f4f4","height":"37","border":"1px solid transparent","border-bottom":"none"});
        $(".person ul").stop().animate({"height":"0"},300).css({"display":"none"});
    });
    $(".person ul li").hover(
        function(){
            $(this).css({"color":"#f60","background":"#fff"});
        },
        function(){
            $(this).css({"color":"#000","background":"#fff"});
        }
    );

    //划过购物车
    $(".shopcar").mouseenter(function(){
        $(this).css({"background":"#fff","border":"1px solid #cccccc","border-bottom":"none"});
        $(".shopcar .cont").stop().animate({"height":"82"},200).css({"display":"block"});
    });
    $(".shopcar").mouseleave(function(){
        $(this).css({"background":"#f4f4f4","height":"37","border":"1px solid transparent","border-bottom":"none"});
            $(".shopcar .cont").stop().animate({"height":"0"},200).css({"display":"none"});
    });
    
    //tit 点击
    let $nof=0;
    $(".shangmo .a1").click(function(){
        $nof=0;
        $(this).css({"background":"#f60","color":"#fff"});
        $(".shangmo .a2").css({"background":"#fff","color":"#f60"});
        $(".inptt .inpTxt").prop("placeholder","请输入您想要印刷的商品");

    });
    $(".shangmo .a2").click(function(){
        $nof=1;
        $(this).css({"background":"#f60","color":"#fff"});
        $(".shangmo .a1").css({"background":"#fff","color":"#f60"});
        $(".inptt .inpTxt").prop("placeholder","点这里输入关键词，找您要的数据搞");      
    });
    //tit 文本框聚焦
    $(".inptt .inpTxt").focus(function(){
        $(this).css({"background":"#fffbf8"});       
        $(this).prop("placeholder",""); 
    });
    $(".inptt .inpTxt").blur(function(){
        $(this).css({"background":"#fff"});
        if($nof==0){
            $(this).prop("placeholder","请输入您想要印刷的商品"); 
        }else if($nof==1){
            $(this).prop("placeholder","点这里输入关键词，找您要的数据搞"); 
        }
    });
    
    
    //lunb nav li01
    $(".li01_ul").css({"display":"none"});
    $(".nav .li01").hover(
        function(){
            $(".li01_ul").show();
        },
        function(){
            $(".li01_ul").hide();
        }
    );
    $(".fff").css({"display":"none"});
    $(".ul_div").hover(
        function(){
            $(this).css({"background":"#fff","border":"1px solid #000","border-right":"none"});
            $(this).find(".uls").show();
            $(this).find(".fff").show();
        },
        function(){
            $(this).css({"background":"#fffdfc","border":"none"});
            $(this).find(".uls").hide();
            $(this).find(".fff").hide();
        }
    ); 


    // lunb nav li0_ul
    $(".li0_ul").css({"display":"none"});
    $(".white").css({"display":"none"});
    $(".nav .liul").hover(
        function(){
            $(this).find(".li0_ul").stop().animate({"height":200,
    "zIndex":10},200).show();
            $(".white").stop().animate({"height":200},200).show();
        },
        function(){
            $(this).find(".li0_ul").stop().animate({"height":0}).hide();
            $(".white").stop().animate({"height":0}).hide();
        }
    );
    $("li0_ul div").hover(
        function(){
            $(this).find("a").css({"color":"#f60"});
        },
        function(){
            $(this).find("a").css({"color":"#333"});
        }
    );
    $(".nav .more").hover(
        function(){
            $(".more_p").stop().show();
        },
        function(){
            $(".more_p").stop().hide();
        }
    );

    //fix
    $(".a_div").css({"display":"none"});
    $(".fix_a").hover(
        function(){
            $(this).css({"backgroundColor":"#f60","color":"#fff"});
            $(this).find(".a_div").animate(200).show();
        },
        function(){
            $(this).css({"backgroundColor":"#4e433d","color":"#ccc"});
            $(this).find(".a_div").animate(200).hide();
        }
    );



});