let dels=$(".del");
let trs=$(".tr");
let jians=$(".jian");
let jias=$(".jia");
let nums=$(".num");
let prices=$(".price");
let meys=$(".mey");
// 删除
function delt(){
    if(dels.length==0){
        return;
    }
    for(let i=0;i<trs.length;i++){
        dels[i].onclick=function(){
            // console.log(1);
            if(confirm("确定删除吗？")){
                this.parentNode.remove();
                console.log(dels[i]);     //undefined
            }
        }
    }
}

//点击加减：
function addminus(){
    let n=0;
    for(let i=0;i<trs.length;i++){
        jians[i].onclick=function(){
            if(parseInt(nums[i].innerHTML)<=0){
                return;
            }else{
                n--;
                nums[i].innerHTML=parseInt(nums[i].innerHTML)-1;
                prices[i].innerHTML=parseFloat(prices[i].innerHTML)-parseFloat(meys[i].innerHTML)+".00";
                // 总价：
                let m=parseFloat(meys[i].innerHTML);
                z("#total").innerHTML=parseInt(z("#total").innerHTML)-m+".00";
            }        
        };

        // console.log(111);
        jias[i].onclick=function(){       
            n++;
            nums[i].innerHTML=parseInt(nums[i].innerHTML)+1;
            prices[i].innerHTML=parseFloat(prices[i].innerHTML)+parseFloat(meys[i].innerHTML)+".00";
            // 总价：
            let m=parseFloat(meys[i].innerHTML);
            z("#total").innerHTML=parseInt(z("#total").innerHTML)+m+".00";
        };
    }
}

//全选 反选：
function xuan(){
    let ckboxs=z(".ckbox"); 
    z(".ckbox1")[0].onclick=function(){    
        for(let i=0;i<ckboxs.length;i++){
            if(z(".ckbox1")[0].checked){
                ckboxs[i].checked=true;
                // ckboxs[i].setAttribute("checked","checked");
            }else if(!z(".ckbox1")[0].checked){
                ckboxs[i].checked=false;
                // ckboxs[i].setAttribute("checked",false);
            }
        }   
    }
    
}

window.onload=function(){
    delt();
    addminus();
    xuan();
}   

$(function(){
    
    
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
                    link="<ul class='tr'>\
                    <input class='input1 ckbox' type='checkbox'/>\
                    <li>\
                        <a href=''><img src='"+data[i].goodsImg+"' alt=''/></a>\
                        <div>\
                            <h5>挂历</h5>\
                            <span>商品编号：12414188</span>\
                            <span>939346_...jpg</span>\
                        </div>\
                    </li>\
                    <li>商品参数：\
                        <span>250G铜版纸|340*640mm|100本|7</span>\
                    </li>\
                    <li class='mey'>1430.00</li>\
                    <li>\
                        <button class='jian'>-</button>\
                        <span class='num'>1</span>\
                        <button class='jia'>+</button>\
                    </li>\
                    <li class='price'>"+data[i].beiyong1+"</li>\
                    <li class='del'>删除</li>\
                </ul>";
                 
                $(".content_con 。ul").html(link);
                }
            }

		},
		dataType:"json"
	})



});