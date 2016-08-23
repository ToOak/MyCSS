// JavaScript Document
function popupMsg(msg){
	console.info(msg);
	alert(msg);
}

startList = function () {
	if (document.all && document.getElementById){
		console.info("true");
		navRoot = document.getElementById("nav_3");
		for (i = 0;i < navRoot.childNodes.length; i++){
			node = navRoot.childNodes[i];
			console.info(node.nodeName);
			if (node.nodeName == "LI"){
				node.onmouseover = function () {
					this.className += " over";
				}
				node.onmouseout = function () {
					this.className = this.className.replace(" over","");
				}
			}
		}
	}else {
		console.info("false");
	}
}
window.onload = startList();
	
	