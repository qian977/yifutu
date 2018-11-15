$(function(){

    //划过li盒阴影
    $(".goodslist ul").on("mouseenter","li",function(){
        $(this).find("div").css({"boxShadow":" 12px 13px 10px -5px #d4d4d4","opacity":0.7});
        // console.log($(this));
    });
    $(".goodslist ul").on("mouseleave","li",function(){
        $(this).find("div").css({"boxShadow":" 12px 13px 10px -5px transparent","opacity":1});
        // console.log($(this));
    });
        

    //动态创建商品列表：
    $.ajax({
		type:"get",
		url:"php/getGoodsList.php",
		async:true,
		data:{},
		success:function(data){
			let link="";
			for(let i=0;i<data.length;i++){
                link+="<li>\
                            <div>\
                                <img src='"+data[i].goodsImg+"'/>\
                                <p>\
                                    <a href=''>"+data[i].goodsId+"</a>\
                                    <span>￥"+data[i].goodsPrice+"\
                                        <i>"+data[i].goodsType+"</i>\
                                    </span>\
                                </p>\
                            </div>\
                        </li>";
                $(".goodslist li").attr("index",data[i].goodsName);
                $(".goodslist ul").html(link);
            }
		},
		dataType:"json"
    })
    
    
     //点击每个商品跳转到商品详情页面
     $(".goodslist ul").on("click","li",function(){
        //先清空
      
       let index=$(this).find("img").attr("src");
       setCookie("goodsName",index,-1);
       setCookie("goodsName",index,3);

       window.open("goodsdetails.html");
    });

});