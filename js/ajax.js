function ajax(method,url,param,isAsync,func){
	//创建对象
	let xhr = new XMLHttpRequest();
	//设置请求参数
	if(method.toLowerCase()=="get"){
		xhr.open(method,url+"?"+param,isAsync)
	}else{
		xhr.open(method,url,isAsync);
	}
	//回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			func && func(xhr.responseText);
		}
	}
	//发送请求
	if(method.toLowerCase()=="get"){
		xhr.send();
	}else{
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(param);
	}
}