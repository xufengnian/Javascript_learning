function positionMessage() {
	if (!document.getElementById)return false;
	if(!document.getElementById("message"))return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";//脚本加载完成即执行
	movement = setTimeout("moveMessage()",5000);//脚本加载完成后5秒执行
}
function moveMessage() {
	if(!document.getElementById)return false;
	if(!document.getElementById("message"))return false;
	var elem = document.getElementById("message");
	elem.style.left = "200px";//脚本加载完成即执行
}
addLoadEvent(positionMessage);