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
	navHeight:0,
	getNavHeight:function(){
		GLOBAL.navHeight = $("nav").outerHeight();
	},
	hotSpots:null,
	hotSpotEl:null,
	current:null,
	preScroll:0,
	getHotSpots:function(){
		GLOBAL.hotSpotEl = $(document.body).children();
		GLOBAL.hotSpots = [];
		for(var a = 0, max = GLOBAL.hotSpotEl.length; a < max; a += 1){
			GLOBAL.hotSpots.push($(GLOBAL.hotSpotEl[a]).offset().top);
		}
		console.log(GLOBAL.hotSpots);
		GLOBAL.current = GLOBAL.findClosestElement($(window).scrollTop());
	},
	animating:false,
	scrollEvent:function(event){
		event.preventDefault();
		if(GLOBAL.animating){
			console.log("already animating");
			return null;
		}
		var loc = $(window).scrollTop();
		var newLoc = GLOBAL.findClosestElement(loc);

		if(GLOBAL.current != newLoc && !GLOBAL.animating && newLoc!== null){
			GLOBAL.animating = true;
			$('html, body').stop().animate({
				scrollTop: (GLOBAL.hotSpots[newLoc]-GLOBAL.navHeight)
			}, 1000,function(){
				GLOBAL.animating = false;
			});
			GLOBAL.current = newLoc;
		}
		GLOBAL.preScroll = loc;
	},
	findClosestElement:function(loc){
		for(var a = 0, max = GLOBAL.hotSpots.length; a < max; ++a){
			if(loc > GLOBAL.hotSpots[a]-150-GLOBAL.navHeight && loc < GLOBAL.hotSpots[a]-1-GLOBAL.navHeight){
				if(GLOBAL.preScroll-loc>0){
					console.log("up");
					console.log(a-1);
					return a-1;
				}
			}
			if(loc < GLOBAL.hotSpots[a]+150-GLOBAL.navHeight && loc > GLOBAL.hotSpots[a]-GLOBAL.navHeight){
				console.log(GLOBAL.preScroll-loc);
				if(GLOBAL.preScroll-loc<0){
					console.log("down")
					console.log(a+1);
					if(a == 0){
						return 2;
					}
					if(a+1 < max){
						return a+1;
					}
				}
			}

		}
		return null;
	}
}


GLOBAL.getAddress();
GLOBAL.setUpIndex();

$(window).scroll(GLOBAL.scrollEvent);

$(window).load(function(){
	GLOBAL.getNavHeight();
	GLOBAL.getHotSpots();
	// GLOBAL.singleIndex();

});
