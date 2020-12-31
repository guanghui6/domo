$(function(){
	// 列表
// .....................................................................
var titles=document.getElementById("nav").getElementsByTagName("a");
	var childdivs=document.getElementsByClassName("childDiv");
	for(var i=0;i<10;i++){
		titles[i].onmouseover=function(){
			for(var j=0;j<10;j++){
				if(titles[j]==this){
					childdivs[j].style.display="block";
					childdivs[j].style.left=102*j+"px";
				}
				else{
					childdivs[j].style.display="none";				
				}	
			}		
		};	
		titles[i].onmouseout=function(){
			for(var j=0;j<3;j++){
				if(titles[j]==this)
					childdivs[j].style.display="none";	
			}		
		};
		childdivs[i].onmouseover=function(){
			this.style.display="block";
			this.style.left=102*j+"px";			
		};		
		childdivs[i].onmouseout=function(){
			this.style.display="none";		
		};			
	}


// ........................................................................
/* $(".header-ul>.li").mouseover(function(){
     	var i=$(this).index();
	$(".ul2").eq(i).addClass("cur").siblings(".ul2").removeClass("cur");
})
$(".ul2").mousemove(function(){
	$(this).css("display","none")
	
}) */
// 轮播图自动播放
var times=window.setInterval(show,1000);
	var i=0;
function show(){
	$(".lg>li").eq(i).addClass("cur2").siblings().removeClass("cur2")
	$(".car>ul>li").eq(i).show().siblings().hide();
	i++;	
	if (i>7) {
		i=0;
	}
	}	
	// 鼠标悬浮轮播图
$(".lg>li").hover(function(){
	clearInterval(times)
	$(this).addClass("cur2").siblings().removeClass("cur2")
	var j=$(this).index();
	$(".car>ul>li").eq(j).show().siblings().hide();

i=j
},function(){
	// 鼠标离开轮播图
	times=window.setInterval(show,1000);
})	

	
	
	// 手机图片
$(".div5>img").hover(function(){
	$(this).css({"opacity":"0.8","transition": "all  1s"})	
},function(){
		$(this).css("opacity","1")
	
	
})






})