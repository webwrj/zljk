//导航下拉
function nav(){
	var oNavBar=document.getElementById('nav_bar');
	var oNavBoxr=document.getElementById('nav_box');
	var oLi=oNavBoxr.getElementsByTagName('li');
	oNavBar.onmouseover=function(){
		oNavBoxr.style.display='block';
	};
	oNavBar.onmouseout=function(){
		oNavBoxr.style.display='none';
	};
	for(var i=0; i<oLi.length; i++){
		oLi[i].onmouseover=function(){
			for(var i=0; i<oLi.length; i++){
				oLi[i].className='nav_par';
			};
			this.className='nav_par1';
			var oDl=this.getElementsByTagName('dl')[0];
			if(oDl){
				oDl.style.display='block';
			};
		};
		oLi[i].onmouseout=function(){
			var oDl=this.getElementsByTagName('dl')[0];
			if(oDl){
				oDl.style.display='none';
			};
		};
	};
}

	//预约填写
		function show_la(box){
			var oE=document.getElementById(box);
			var oH3=oE.getElementsByTagName('h3')[0];
			var oSpan=oH3.getElementsByTagName('span')[0];
			var oDl=oE.getElementsByTagName('dl')[0];
			var oDd=oDl.children;
			oH3.onclick=function(ev){
				var oE=ev || event;
				oE.cancelBubble=true;
				if(oDl.style.display=='block'){
					oDl.style.display='none';
				}else{
					oDl.style.display='block';
				};
				
			};
			for(var i=0; i<oDd.length; i++){
				oDd[i].onclick=function(){
					oSpan.innerHTML=this.innerHTML;
					oDl.style.display='none';
				};
			};
			//obj.addEventListener?obj.addEventListener(ev,fn,false):obj.attachEvent('on'+ev,fn);//事件绑定（一个人要做多件事情）
			document.addEventListener?document.addEventListener('click',function(){oDl.style.display='none';},false):document.attachEvent('on'+'click',function(){oDl.style.display='none';});
		};

	//单选按钮
	function redio(){
		var oSex=document.getElementById('sex_rido');
		var oDd=oSex.getElementsByTagName('dd');
		for(var i=0; i<oDd.length; i++){
			oDd[i].onclick=function(){
				for(var i=0; i<oDd.length; i++){
					oDd[i].className='';
				};
				this.className='active_sex';
			};
		};
	}
	//banner滚动
    function bannEr(){
	   var oBanbox=document.getElementById('banner');
	   var oOl=oBanbox.getElementsByTagName('ol')[0];
	   var oBtn=oOl.getElementsByTagName('li');
	   var oUl=oBanbox.getElementsByTagName('ul')[0];
	   var num=0;
	   var timer=null;
	   for(var i=0; i<oBtn.length; i++){
		   (function(index){
			   oBtn[i].onmouseover=function(){
				  num=index;
				  tab(num);
			  };
			})(i);
		};
		//封装next函数
		function next(){
			num++;
			if(num==oBtn.length){
				num=0;
			}
			tab(num);	
		}
		
		timer=setInterval(function(){
			next()
		},3000)
		
		oBanbox.onmouseover=function(){
			clearInterval(timer);
		}
		oBanbox.onmouseout=function(){
			timer=setInterval(function(){
			next()
		},3000)
		}
		
		//封装一个tab
		function tab(n){
			for(var i=0; i<oBtn.length; i++){
				  oBtn[i].className=''; 
			}
			   oBtn[n].className='active_ol';
			   var oMar=-864*n;
			move(oUl,{'marginLeft':oMar},{'time':300})
		};	
	};
	//展开合并
	function oSH(oid){
		var oCtiy=document.getElementById(oid);
		var oLi=oCtiy.getElementsByTagName('li');
		for(var i=0; i<oLi.length; i++){
			var oBtn=oLi[i].getElementsByTagName('div')[1];
			oBtn.onclick=function(){
				if(this.parentNode.offsetHeight==20){
					this.className='btn_on';
					this.parentNode.style.height=this.parentNode.scrollHeight+'px';
				}else{
					this.className='btn';
					this.parentNode.style.height=20+'px';
				}
				
			}
		};
	};
	
	
	//展开合并1
	
	function oSHw(id,newnum,oldnum){
		var oBt=document.getElementById(id);
		oBt.onclick=function(){
			if(this.parentNode.offsetHeight==newnum){
				
				this.innerHTML='折叠<i class="iconfont">&#xe62b;</i>';
				this.parentNode.style.height=this.parentNode.scrollHeight+'px';
				this.parentNode.oldTop=document.body.scrollTop||document.documentElement.scrollTop;
			}else{
				this.innerHTML='展开<i class="iconfont">&#xe62b;</i>';
				this.parentNode.style.height=oldnum+'px';
				document.body.scrollTop=document.documentElement.scrollTop=this.parentNode.oldTop;
			}
		};
		
	};
	
	//导航切换
	function navQh(){
		var oBox=document.getElementById('par_k_box');
		var oLi=oBox.getElementsByTagName('li');
		for(var i=0; i<oLi.length; i++){
		oLi[i].onmouseover=function(){
			for(var i=0; i<oLi.length; i++){
				oLi[i].className='';
			}
			this.className='par_k_active';	
			//alert(this.innerHTML)
		}
	}
	};
	//微信二维码出现	
	function oWeiX(){
		var oWx=document.getElementById('weixin');
		var oWei=oWx.getElementsByTagName('div')[0];
		oWx.onmouseover=function(){
			
			//oWei.style.right=70+'px';
			move(oWei,{'width':288,'right':50},{'time':800});
		};
		oWx.onmouseout=function(){
			//oWei.style.right=-290+'px';
			move(oWei,{'width':0,'right':-50},{'time':800})
		};
	};
	//封装时间绑定事件addEvent  解决scroll问题
	function addEvent(obj,type,fn){
    if(obj.attachEvent){
        obj.attachEvent('on'+type,function(){
			fn.call(obj);
			})
    }else{
        obj.addEventListener(type,fn,false);
       }
	}
	//吸顶条
	function topNav(){
		var oBox=document.getElementById('nav');
		var oYc=document.getElementById('yc');
		var oH=oBox.offsetTop;
		addEvent(window,'scroll',function(){
		   var sT=document.body.scrollTop || document.documentElement.scrollTop;
			if(sT>=oH){
				oBox.style.position='fixed';
				oBox.style.top=0;
				oBox.style.zIndex=999999;
				oYc.style.display='block';
			}else{
				oBox.style.position='';	
				oYc.style.display='none';
			};
			
		});
	};
	
	
	
	//吸di条
	function botNav(){
		var oBox1=document.getElementById('nav1');
		var oYc1=document.getElementById('xidi');
		var nPos=document.getElementById('pos').offsetTop+130;
		//alert(nPos);
		addEvent(window,'scroll',function(){
			
		  var sT1=(document.body.scrollTop || document.documentElement.scrollTop)+document.documentElement.clientHeight;
		   // var sT1=document.body.scrollTop || document.documentElement.scrollTop;
			if(sT1>=nPos){
				//alert(1)
				oBox1.style.position='static';
			}else{
				//alert(2)
				oBox1.style.position='fixed';
				oBox1.style.bottom=0;	
			}
			
		});
	};
	
	//详情页点击到相应位置
	var tUp=true;
    function topBox(){
		var oNav_xq=document.getElementById('nav');
		var oNav_btn=oNav_xq.getElementsByTagName('li');
		var oTex_con=document.getElementById('test_con');
		var oNav_box=oTex_con.getElementsByTagName('li');
		//alert(oNav_box.length)
		for(var i=0;i<oNav_btn.length;i++){
			(function(index){
				oNav_btn[i].onclick=function(){
					tUp=false;
					for(var i=0;i<oNav_btn.length;i++){oNav_btn[i].className=''};
					this.className='active_btn';
					var h=oNav_box[index].offsetTop-40;
					//alert(h)
					move(document,{'scrollTop':h},{fn:function(){
						tUp=true;
						}});
					//(document.documentElement||document.body).scrollTop=oNav_box[index].offsetTop+20;
				}
			})(i)
		}
		addEvent(window,'scroll',function(){
			if(tUp){			
			  var ScrTop=(document.body.scrollTop||document.documentElement.scrollTop)+40;
			  if(ScrTop<oNav_box[0].offsetTop){
				  
			  }else{
			  for(var i=0;i<oNav_btn.length;i++){
					for(var j=0;j<oNav_btn.length;j++){
						oNav_btn[j].className='';
					}
					if((ScrTop>=oNav_box[i].offsetTop)&&(ScrTop<=(oNav_box[i].offsetTop+oNav_box[i].offsetHeight))){
						oNav_btn[i].className='active_btn';
						return;
					}
				  }
				}
			}
		  });
	};
	
	//回到顶部
	function toTop(){
		var oTop=document.getElementById('totop');
		var timer=null;
		addEvent(window,'scroll',function(){
		   var oSoll=document.body.scrollTop||document.documentElement.scrollTop;
			if(oSoll>0){
				oTop.style.display='block';
			}else{
				oTop.style.display='none';
			};
	    });
		oTop.onclick=function(){
			//document.body.scrollTop=document.documentElement.scrollTop=0;
			var start=document.body.scrollTop||document.documentElement.scrollTop;
			var dis=0-start;
			var time=1000;
			var count=Math.floor(time/30);
			var n=0;
			clearInterval(timer);
			timer=setInterval(function(){
				n++;
				var a=1-n/count;
				var cur=start+dis*(1-a*a*a);
				document.body.scrollTop=document.documentElement.scrollTop=cur;
				if(n==count){
					clearInterval(timer);
				};
			},30);
			
		};
	};

//列表页
	function oSHlist(id_lis){
		var oListbox=document.getElementById(id_lis);
		var oBtn=oListbox.getElementsByTagName('div')[1];
		oBtn.onclick=function(){
			if(this.parentNode.offsetHeight==45){
				this.className='btn_on1';
				this.parentNode.style.height=this.parentNode.scrollHeight+'px';
			}else{
				this.className='btn22';
				this.parentNode.style.height=45+'px';
			}
		}
		var oYxbox=document.getElementById('yixuan');
		var oA=oListbox.getElementsByTagName('div')[0].getElementsByTagName('a');
		var oQkbtn=document.getElementById('qk_btn');
		for(var i=0; i<oA.length;i++){
			oA[i].onclick=function(){
				for(var i=0; i<oA.length;i++){
				   oA[i].className='';
				};
					this.className='lis_active';
					var oSpan=document.createElement('span');	
					oSpan.innerHTML=this.innerHTML+'<a href="javascript:;">×</a>';
					oYxbox.appendChild(oSpan);
					oSpan.onclick=function(){
				        // removeChild()
						this.parentNode.removeChild(this)
			        };
			};
		};
		oQkbtn.onclick=function(){
			oYxbox.innerHTML='';
		};
		
	};

//详情页图片切换
    function tabImg(){
		var tabImg=document.getElementById('imgs');
		var ombox=tabImg.getElementsByTagName('li');
		var ImgBtn=document.getElementById('im_btn');
		var omli=ImgBtn.getElementsByTagName('li');
		for(var i=0; i<omli.length; i++){
			omli[i].index=i;
			omli[i].onmouseover=function(){
				for(var i=0; i<omli.length; i++){
					omli[i].className='';
					ombox[i].className='';
				}
				this.className='li_active';
				ombox[this.index].className='show';
			};
		};
	};
	
	//物品添加
	function may(){
		var oMay=document.getElementById('may');
		var oMa=oMay.getElementsByTagName('a');
		var oInpt=oMay.getElementsByTagName('input')[0];
		oMa[0].onclick=function(){
			var n=oInpt.value;
			var p=parseInt(n)-1;
			if(n==0){
				
			}else{
			   oInpt.value=p;
			}
		
		}
		
		oMa[1].onclick=function(){
			var n=oInpt.value;
			var m=parseInt(n)+1
			oInpt.value=m;
		}
	};
 	//个人中心我的体检
/*	function showme(){
	 	var oMebox=document.getElementById('zhe_box');
		var oMea=oMebox.getElementsByTagName('a');
		var oZhe=document.getElementById('zhe');
		var oClose=document.getElementById('close');
		var oTj=document.getElementById('yy_tj');
		for(var i=0; i<oMea.length; i++){
			oMea[i].onclick=function(){
			   oZhe.style.display='block';
			};
		};
		oClose.onclick=function(){
			oZhe.style.display='none';
		};
		oTj.onclick=function(){
			oZhe.style.display='none';
		};	
	};*/
    function showme(oa,obt,oZhe,ocls){
	 	var oMebox=document.getElementById('zhe_box');
		var oMea=oMebox.getElementsByTagName(oa);
		var oZhe=document.getElementById(oZhe);
		var oClose=document.getElementById(ocls);
		var oTj=document.getElementById(obt);
		for(var i=0; i<oMea.length; i++){
			oMea[i].onclick=function(){
			   oZhe.style.display='block';
			};
		};
		oClose.onclick=function(){
			oZhe.style.display='none';
		};
		oTj.onclick=function(){
			oZhe.style.display='none';
		};	
	};
	
	//登录注册
	function loging(){
		var oReg_nav=document.getElementById('reg_nav');
		var oBtn_reg=oReg_nav.getElementsByTagName('li');
		
		var oReg_b_ul=document.getElementById('reg_con');
		var oReg_b_box=oReg_b_ul.getElementsByTagName('li');
		for(var i=0; i<oBtn_reg.length; i++){
			oBtn_reg[i].index=i;
			oBtn_reg[i].onclick=function(){
				for(var i=0; i<oBtn_reg.length; i++){
					oBtn_reg[i].className='';
					oReg_b_box[i].className='';
				};
				this.className='actives';
				oReg_b_box[this.index].className='reg_show';
			};
		};
	};
//倒计时
   function count_down(){
	  var oCount_D=document.getElementById('count_down');	
	  var clock = '';
	  var nums = 60;
	  var btn;
	  oCount_D.onclick=function(){
	    sendCode(this)	  
	   };
	  function sendCode(thisBtn)
	  {	
		  btn = thisBtn;
		  btn.disabled = true; //将按钮置为不可点击
		  btn.value = nums+'秒后重新获取';
		  clock = setInterval(doLoop, 500); //自执行
	  }
	  function doLoop()
	  {
		  nums--;
		  if(nums > 0){
			  btn.value = nums+'秒后重新获取';
		  }else{
			  clearInterval(clock); //清除js定时器
			  btn.disabled = false;
			  btn.value = '点击发送验证码';
			  nums = 60; //重置时间
		  }
	  }
  };
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	