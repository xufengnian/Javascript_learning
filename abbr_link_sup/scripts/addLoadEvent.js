function addLoadEvent(func) {
	//把现有的window.onload事件处理函数的值存入变量oldload
	var oldload = window.onload;
	//如果在这个处理函数上还没有绑定任何函数，就像平时一样把新函数添加给它
	if (typeof window.onload!='function') {
		window.onload = func;
	//如果在这个处理函数上已经绑定了一些函数，就把新函数追加到先有指令的末尾
	}else {
		window.onload = function() {
			oldload();
			func();
		}
	}
}