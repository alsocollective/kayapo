var GLOBAL = {
	address: null,
	getAddress:function(){
		GLOBAL.address = window.location.href.toString().split(window.location.host)[1];
	},
	indexNumber: null,
	setUpIndex:function(){
		GLOBAL.indexNumber = Math.ceil(Math.random()*3);
	},
	singleIndex:function(){
		var el1,el2;
		if(GLOBAL.indexNumber == 1){
			el1 = "#index-2",
			el2 = "#index-3";
		} else if(GLOBAL.indexNumber == 2){
			el1 = "#index-1",
			el2 = "#index-3";
		} else {
			el1 = "#index-1",
			el2 = "#index-2";
		}

		$(el1).addClass('hide');
		$(el1).addClass('hide');
	}
}
GLOBAL.getAddress();
GLOBAL.setUpIndex();



$(window).load(function(){
	GLOBAL.singleIndex();

});