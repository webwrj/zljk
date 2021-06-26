function getStyle(obj,name){
	return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
};
function move(obj,json,options){      //options是一个json  	
	var options=options||{};
	options.time=options.time||700;   // 如果传参的时候有time时间就去用搞这个时间执行，没有的话就默认700
	options.type=options.type||'linear'; //如果传参的时候有type时间就去用搞这个状体执行，没有的话就默认linear
	var start={};  //开始位置
	var dis={};     //过程距离
	for(var name in json){
		if(name=='scrollTop'){
			start[name]=document.body.scrollTop||document.documentElement.scrollTop;
			dis[name]=json[name]-start[name];
		}else{
			start[name]=parseFloat(getStyle(obj,name));
			dis[name]=json[name]-start[name];
		}
		
	};
	var count=Math.round(options.time/30);
	var n=0;
	clearInterval(obj.timer)
	obj.timer=setInterval(function(){
		n++;
		for(var name in json){
			
			//判断运动形式
			switch(options.type){
				case 'linear':
					var a=n/count;
					var cur=start[name]+dis[name]*n/count;
				break;
				case 'ease-in':   //加速
					var a=n/count;
					var cur=start[name]+dis[name]*Math.pow(a,3)
				break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[name]+dis[name]*(1-Math.pow(a,3))
				break;
			};
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else if(name=='scrollTop'){
				document.body.scrollTop=document.documentElement.scrollTop=cur;
			}else{
				obj.style[name]=cur+'px';
			};
			
		};
		if(n==count){
			clearInterval(obj.timer);
			options.fn&&options.fn();  //判断如果有fn就去执行，没有就不去执行
		};
	},30);
};