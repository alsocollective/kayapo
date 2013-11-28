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
			el1 = document.getElementById("index-2"),
			el2 = document.getElementById("index-3");
		} else if(GLOBAL.indexNumber == 2){
			el1 = document.getElementById("index-1"),
			el2 = document.getElementById("index-3");
		} else {
			el1 = document.getElementById("index-1"),
			el2 = document.getElementById("index-2");
		}
		el1.parentNode.removeChild(el1);
		el2.parentNode.removeChild(el2);
	},
	hotSpots:null,
	getHotSpots:function(){
		var sections = $("section").children();
		GLOBAL.hotSpots = [];
		for(var a = 0, max = sections.length; a < max; a += 1){
			GLOBAL.hotSpots.push($(sections[a]).offset().top);
		}
	},
	animating:false,
	scrollEvent:function(){
		var loc = $(window).scrollTop();
		var newLoc = GLOBAL.findClosestElement(loc)
		console.log(loc,newLoc);
	},
	findClosestElement:function(loc){
		for(var a = 0, max = GLOBAL.hotSpots.length; a < max; a += 1){
			if(loc > 0 && loc > GLOBAL.hotSpots[a] && loc < GLOBAL.hotSpots[a+1]){
				return a;
				break;
			}
		}
		return 0;
	}
}


GLOBAL.getAddress();
GLOBAL.setUpIndex();

$(window).scroll(GLOBAL.scrollEvent);

$(window).load(function(){
	GLOBAL.getHotSpots();
	// GLOBAL.singleIndex();

});