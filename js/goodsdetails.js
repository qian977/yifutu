

function getStyle(domObj,attr){
    if(domObj.currentStyle){
        return domObj.currentStyle[attr];
    }else{
        var obj  = window.getComputedStyle(domObj);
        return obj[attr];
    }
}

window.onload=function(){
    let lis=z("#img").children;
        console.log(lis);
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseenter=function(){
            let bgImg = getStyle(this,"backgroundImage");
            console.log(name);  
            z("#left_bigImg").style.backgroundImage = bgImg;
            z("#left_bigImg").style.backgroundSize ="cover";
            z("#box2").style.backgroundImage = bgImg;
            $("#img div").addClass("batt");
            $(this).removeClass("batt");
            $(this).addClass("satt");
        }
     
    }

    z("#left_bigImg").onmouseenter = function(event){
    let evt = event || window.event;
    //鼠标进入left时
    if(evt.target==z("#left_bigImg") || evt.target==z("#box1")){
        z("#box1").style.display="block";
        z("#box2").style.display="block";
    }
    }

    z("#left_bigImg").onmouseleave = function(event){
    let evt = event || window.event;
    z("#box1").style.display="none";
    z("#box2").style.display="none";
    }

    z("#left_bigImg").onmousemove = function(event){
    let evt = event || window.event;

    //1、数据
    //1)、
    let left1 = evt.pageX-z("#left_bigImg").offsetLeft-z("#box1").offsetWidth/2;
    let top1 = evt.pageY-z("#left_bigImg").offsetTop-z("#box1").offsetHeight/2;
    //2)、
    if(left1<=0){
        left1=0;
    }else if(left1>z("#left_bigImg").offsetWidth-z("#box1").offsetWidth){
        left1 = z("#left_bigImg").offsetWidth-z("#box1").offsetWidth;
    }

    if(top1<=0){
        top1=0;
    }else if(top1>z("#left_bigImg").offsetHeight-z("#box1").offsetHeight){
        top1 = z("#left_bigImg").offsetHeight-z("#box1").offsetHeight;
    }

    //2、外观
    z("#box1").style.left = left1+"px";
    z("#box1").style.top = top1+"px";
    z("#box2").style.backgroundPosition=(-1*3*left1)+"px "+(-1*3*top1)+"px";
    }

    
    let getcook=getCookie("username");
    $(".content .right").on("click",".join",function(){
        console.log(getcook);
        if(getcook!=null){
            location.href="shopcart.html";
        }else{
            alert("您还没有登录哦，先去登录吧！");
        }
    });
    
    
       
    
    //动态创建商品详情：
    $.ajax({
		type:"get",
		url:"php/getGoodsList.php",
        async:true,
        data:{},
		success:function(data){
            let goodsName=getCookie("goodsName");
            for(let i=0;i<data.length;i++){
                if(goodsName==data[i].goodsImg){
                    let link="";
                    link="<h5>"+data[i].goodsId+"</h5>\
                        <p class='p1'>印刷价格：\
                            <span>￥"+data[i].beiyong1+"</span>\
                        </p>\
                        <p class='p2'>配送至：\
                            <a href=''>北京市\
                                <i class='iconfont icon-down'></i>\
                            </a>\
                            <a href=''>普通快递\
                                <i class='iconfont icon-down'></i>\
                            </a>\
                            运费<span>"+data[i].beiyong2+"</span>元\
                        </p>\
                        <p class='p3'>服务：\
                            <span>"+data[i].beiyong3+"</span>\
                        </p>\
                        <p class='p4'><span>纸张类型：</span>\
                            <a href=''>"+data[i].beiyong4+"</a>\
                            <a href=''>+更多</a>\
                        </p>\
                        <p class='p5'><span>印刷数量（本/份/盒/张/件）：</span>\
                            <a href=''>1~50</a><a href=''>50+</a><a href=''>100+</a><a href=''>1000+</a>\
                        </p>\
                        <p class='p6'><span>工艺多选：</span>\
                            <a href=''>封面覆哑膜</a>\
                            <a href=''  >封面覆光膜</a>\
                        </p>\
                        <p class='p7'>\
                            <span>页数：</span>\
                            <span class='as'>\
                                <a href=''>8p</a>\
                                <a href=''>12p</a>\
                                <a href=''>16p</a>\
                                <a href=''>20p</a>\
                                <a href=''>24p</a>\
                                <a href=''>28p</a><br/>\
                                <a href=''>32p</a>\
                                <a href=''>36p</a>\
                                <a href=''>40p</a>\
                            </span>\
                        </p>\
                        <p class='p8'><span>产品尺寸：</span>\
                            <a href=''>210mm*285mm(A4.16开)</a>\
                        </p>\
                        <p class='p9'><span>出货周期：</span>\
                            <span>4</span>天\
                        </p>\
                        <p class='p10'>\
                            <span>立即购买</span>\
                            <span class='join'>加入购物车</span>\
                        </p>";

                $("#left_bigImg").css({"background":"url("+data[i].goodsImg+")"});
                $(".content .right").html(link);
                }
            }

		},
		dataType:"json"
	})


   
}