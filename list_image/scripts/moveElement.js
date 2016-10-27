function moveElement(elementID,final_x,final_y,interval) {
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y){
		return true;
	}
	if (xpos < final_x){
		xpos++;
	}
	if (xpos > final_x){
		xpos--;
	}
	if (ypos < final_y){
		ypos++;
	}
	if (ypos > final_y){
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";	//由于下方setTimeout函数对参数的要求，因此此处字符串拼接的符号（单双引号和+号）一处都不能少
	movement = setTimeout(repeat,interval);
}
addLoadEvent(moveElement);