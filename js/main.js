var GLOBAL = {
	address: null,
	getAddress:function(){
		GLOBAL.address = window.location.href.toString().split(window.location.host)[1];
	}
}
GLOBAL.getAddress();

$(window).load(){
	console.log(GLOBAL.address);
}