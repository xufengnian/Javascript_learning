//根据显示下列代码，猜测视频网站的弹幕显示原理与次类似只不过添加了相关其他属性
/*
a.字符串的颜色，字体可自行设置：DOM-CSS的style或者直接CSS
b.字符串的速度，字越多弹幕越快：存在长度判断函数，字数在不同范围的setTimeout的时间间隔不同；或者长度和时间的乘积是定值
c.多条弹幕：猜测是把原先网页评论的标签<text>做成字典，键是视频时间点，值是弹幕内容，采用for循环，对字典中的每个text标签调用各种函数进行设置
d.顶部，底部弹幕和垂直弹幕：DOM-CSS的style，没有左右，上下移动，只是根据字符串长度显示时间不同
*/
function positionMessage() {
	if (!document.getElementById)return false;
	if(!document.getElementById("message"))return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";//左边距和上边距足以确定显示位置
	elem.style.top = "100px";//脚本加载完成即执行
	//此处删去调用moveMessage()函数的代码
}
function moveMessage() {
	if(!document.getElementById)return false;
	if(!document.getElementById("message"))return false;
	var elem = document.getElementById("message");
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == 200&&ypos == 100){
		return true;
	}
		if(xpos < 200){
			xpos++;
		}
		if (xpos > 200){
			xpos--;
		}
		if(ypos < 100){
			ypos++;
		}
		if (ypos > 100){
			ypos--;
		}
		elem.style.left = xpos +"px";
		elem.style.top = ypos +"px";
		movement = setTimeout("moveMessage()",10);//每隔10毫秒调用一次moveMessage函数来移动
}
addLoadEvent(positionMessage);
addLoadEvent(moveMessage);//此处加上加载moveMessage函数的代码