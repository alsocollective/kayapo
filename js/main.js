var GLOBAL = {
	debug:false,
	address: null,
	mousePressed:false,
	getAddress:function(){
		GLOBAL.address = window.location.href.toString().split(window.location.host)[1].split(".")[0].split("/")[1];
		if($("#"+GLOBAL.address).length > 0){
			GLOBAL.current = GLOBAL.findClosestElement($(window).scrollTop());
			GLOBAL.loadPage(GLOBAL.current);
			// $(window).scrollTop($("#"+GLOBAL.address).offset().top);
			// GLOBAL.caseFunctionLoads(GLOBAL.address);
		}
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
		if(GLOBAL.debug) console.log("NavHeight ",GLOBAL.navHeight);
		// if(GLOBAL.hotSpotEl){
		// 	GLOBAL.hotSpotEl[0].style.paddingTop = GLOBAL.navHeight;
		// } else {
		// 	$("body").children()[1].style.paddingTop = GLOBAL.navHeight;
		// }
	},
	removeHeighLight:function(){
		$('.highlight-nav').removeClass('highlight-nav');
	},
	setUpNav:function(){
		$(".main-nav-button").click(function(event){
			event.preventDefault();
			var string = this.id.split("-nav")[0]
			GLOBAL.removeHeighLight();
			$(this.parentNode).addClass('highlight-nav');
			if(string === "index"){
				string = string+"-"+GLOBAL.indexNumber;
			} else {
				string = string+"-1";
			}
			for(var a = 0, max = GLOBAL.hotSpotEl.length; a < max; a += 1){
				if(GLOBAL.hotSpotEl[a].id === string){
					GLOBAL.loadPage(a);
					break
				}
			}
			return false;
		})
	},
	highLightNavOnScroll:function(idin){
		var idin = idin.split("-");
		var realId = idin[0];
		for(var a =1, max = idin.length; a < max-1; a +=1){
			realId+="-"+idin[a];
		}
		realId+="-nav";
		GLOBAL.removeHeighLight();
		$("#"+realId).addClass('highlight-nav');
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
		GLOBAL.hotSpots[0] = 0;
		GLOBAL.current = GLOBAL.findClosestElement($(window).scrollTop());
		GLOBAL.edgeCases(GLOBAL.current);
	},
	animating:false,
	scrollEvent:function(event){
		event.preventDefault();
		if(GLOBAL.animating || GLOBAL.loading){
			return false;
		}
		var loc = $(window).scrollTop();
		var newLoc = GLOBAL.findClosestElement(loc);
		if(GLOBAL.debug) console.log(newLoc);
		if(GLOBAL.current != newLoc && !GLOBAL.animating && newLoc!== null){
			GLOBAL.highLightNavOnScroll(GLOBAL.hotSpotEl[newLoc].id);
			GLOBAL.loadPage(newLoc);
		}
		GLOBAL.preScroll = loc;
		return false;
	},
	animateTo:function(location){
		if (GLOBAL.debug) console.log(location);
		GLOBAL.animating = true;
		$('html, body').stop().animate({
			scrollTop: (GLOBAL.hotSpots[location]-GLOBAL.navHeight)
		}, 1000,function(){
			GLOBAL.animating = false;
		});
		GLOBAL.current = location;
		GLOBAL.edgeCases(location);
		GLOBAL.setHash(GLOBAL.hotSpotEl[location].id);
	},
	edgeCases:function(location){
		if(GLOBAL.debug)console.log("edgeCase " + location);
		if(location >= 12){
			if(location == 12){
				GLOBAL.setIntervalRemoveBk();
			} else {
				GLOBAL.setIntervalAddBk();
			}
			GLOBAL.setThreatStatic();
		} else if(GLOBAL.IntervalRemoveBk || GLOBAL.IntervalAddBk){
			console.log("this guy");
			GLOBAL.clearIntervalRemoveBk();
			GLOBAL.clearIntervalAddBk();
		} else if(GLOBAL.stuckThreat){
			console.log("unstuck it");
			GLOBAL.unSetThreatStatic();
		}
	},
	findClosestElement:function(loc){
		if(!GLOBAL.hotSpots) return null;
		for(var a = 0, max = GLOBAL.hotSpots.length; a < max; ++a){
			if(GLOBAL.debug) console.log("Iterating through elements till bottom "+ a + " " +GLOBAL.hotSpots[a]);
			if(loc > GLOBAL.hotSpots[a]-150-GLOBAL.navHeight && loc < GLOBAL.hotSpots[a]-1-GLOBAL.navHeight){
				if(GLOBAL.preScroll-loc>0){
					if (GLOBAL.debug) console.log("up");
					return a-1;
				}
			}
			if(loc < GLOBAL.hotSpots[a]+150-GLOBAL.navHeight && loc > GLOBAL.hotSpots[a]-GLOBAL.navHeight){
				if(GLOBAL.preScroll-loc<0){
					if (GLOBAL.debug) console.log("down");
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
	},
	stopForAnimationEvent:function(event){
		if(GLOBAL.animating){
			event.preventDefault();
			return false;
		}
	},
	setUpWhyNav:function(){
		$(".why-sub-nav").click(function(event){
			event.preventDefault();
			var string = this.id.split("-nav")[0];
			var element = $("#why-rainforest-3 #"+string)[0];
			var otherElements = $("#why-rainforest-3 #slides div");
			otherElements.addClass('hidden');
			$(element).removeClass('hidden');
			return false;
		})
	},
	setUpProjectsNav:function(){
		$("#funds-divs").children().click(function(event){
			event.preventDefault();
			var showThis = "#kayapo-proj-modal-"+$(this).attr('href').split("#")[1];
			console.log(showThis);

			GLOBAL.addOffBottomToAll(this);
			// $(showThis).addClass('animated bounceInUp');
			// setTimeout(function(){$(showThis).removeClass('animatedbounceInUp');},1000);
			$(showThis).removeClass('off-bottom');


			return false;
		});
	},
	addOffBottomToAll:function(currentEl){
		var elements = $(".kayapo-proj-modal").addClass('off-bottom');
		for(var a = 0, max = elements.length; a < max; a += 1){
			if(!$(elements[a]).hasClass('off-bottom') && elements[a] !== currentEl){
				$(elements[a]).addClass('off-bottom');
				//TODO add animation to remove element
			}
		}
	},
	goToNextPage:function(event){
		event.preventDefault();
		++GLOBAL.current;
		GLOBAL.loadPage(GLOBAL.current);
		return false;
	},
	setupNextPageButton:function(){
		$(".next-page-button").click(GLOBAL.goToNextPage);
	},
	setUpBackGroundAnimals:function(){
		var width = $(window).width(),
		height = $(window).height(),
		count = Math.floor(width/50)*Math.floor(height/50),
		parent = document.getElementById("back-ground-items"),
		base = document.createElement("div"),
		baseSub = document.createElement("div");
		base.className = "inline-image";
		base.appendChild(baseSub)
		temp = null,
		animals = [
			"image-bug",
			"image-butterfly",
			"image-frog",
			"image-insect",
			"image-leaf1",
			"image-leaf2",
			"image-leaf3",
			"image-leaf4",
			"image-leaf5",
			"image-leaf6",
			"image-leaf7",
			"image-monkey",
			"image-snake",
			"image-tucan"
			];
		for(var a = 0; a < count; ++a){
			baseSub.className = "full-backgroundimage "+animals[Math.floor(Math.random()*animals.length)];
			temp = base.cloneNode(true);
			parent.appendChild(temp);
		}
	},
	IntervalRemoveBk:null,
	setIntervalRemoveBk:function(){
		GLOBAL.clearIntervalAddBk();
		if(!GLOBAL.IntervalRemoveBk){
			GLOBAL.IntervalRemoveBk = setInterval(function(){
				var allEl = $(".inline-image div:not(.none)");
				if(allEl.length > 0){
					$(allEl[Math.floor(Math.random()*allEl.length)]).addClass('none');
				} else {
					clearInterval(GLOBAL.IntervalRemoveBk);
				}
			},250);
		}
	},
	clearIntervalRemoveBk:function(){
		if(GLOBAL.IntervalRemoveBk){
			clearInterval(GLOBAL.IntervalRemoveBk);
			GLOBAL.IntervalRemoveBk = null;
		}
	},
	IntervalAddBk:null,
	setIntervalAddBk:function(){
		GLOBAL.clearIntervalRemoveBk();
		if(!GLOBAL.IntervalAddBk){
			GLOBAL.IntervalAddBk = setInterval(function(){
				var allEl = $(".inline-image .none");
				if(allEl.length>0){
					$(allEl[Math.floor(Math.random()*allEl.length)]).removeClass('none');
				} else {
					clearInterval(GLOBAL.IntervalAddBk);
				}
			},250)
		}
	},
	clearIntervalAddBk:function(){
		if(GLOBAL.IntervalAddBk){
			clearInterval(GLOBAL.IntervalAddBk);
			GLOBAL.IntervalAddBk = null;
		}
	},
	stuckThreat:false,
	setThreatStatic:function(){
		console.log("setting it to be static");
		var el = $("#back-ground-items").addClass('stick');
		GLOBAL.stuckThreat = true;
	},
	unSetThreatStatic:function(){
		var el = $("#back-ground-items").removeClass('stick');
		GLOBAL.stuckThreat = false;
	},
	loading:false,
	loadPage:function(newLoc){
		if(GLOBAL.loading) return false;
		if(newLoc === null || GLOBAL.hotSpotEl === null) return false;
		var parentEl = GLOBAL.hotSpotEl[newLoc]
		if($(parentEl).children().length <= 0){
			GLOBAL.loading = true;
			$(parentEl).load("ajax/"+parentEl.id+".html",function(response, status, xhr){
				if(status == "error"){
					if(xhr.statusText == "File not found"){
						console.log(xhr.status + " " + parentEl.id + ".html " + xhr.statusText)
					} else {
						console.log(xhr.status + " " + xhr.statusText);
					}
				}
				GLOBAL.caseFunctionLoads(parentEl.id);
				GLOBAL.animateTo(newLoc,newLoc);
				GLOBAL.loading = false;
			});
		}else {
			GLOBAL.animateTo(newLoc);
		}
	},
	caseFunctionLoads:function(id,newLoc){
		if(id == "why-rainforest-3"){
			GLOBAL.setUpWhyNav();
		} else if(id == "the-threat-1"){
			JPGSEQUENCE.generateImages(document.getElementById("the-threat-1"),29,"map");
		} else if(id == "the-threat-3"){
			GLOBAL.setUpBackGroundAnimals();
			GLOBAL.setIntervalRemoveBk();
		} else if(id == "the-threat-35"){
			GLOBAL.loadPage()
		} else if(id == "kayapo-proj-2"){
			GLOBAL.setUpProjectsNav();
		}
		return null;
	},
	setHash:function(currentHashEl){
		if (history && history.pushState) {
			var newAddress = "/";
			var gaAddress = "/";
			if(typeof address !== "object"){
				newAddress = "/"+currentHashEl+".html";
				gaAddress = "/"+currentHashEl;
			}
			history.pushState(currentHashEl,"",newAddress);
		}
	},
	fadeLoading:function(){
		$("#loading-screen").fadeOut('1000');
	}
}

var JPGSEQUENCE = {
	listOfImages:[],
	listOfButtons:[],
	playIntervalObject:null,
	generateImages:function(parent,number,baseName){
		JPGSEQUENCE.baseName = baseName;
		var el = null,
		button = null,
		buttonsArea = document.createElement("div");
		buttonsArea.id = "buttons-area";
		buttonContainer = document.createElement("div");
		buttonContainer.id = "button-container";

		for(var a = 0; a < number; ++a){
			el = JPGSEQUENCE.createImage(a);
			JPGSEQUENCE.listOfImages.push(el);
			parent.appendChild(el);
			button = JPGSEQUENCE.createButton(el);
			buttonContainer.appendChild(button);
		}

		var playButton = document.createElement("a");
		playButton.href = "#";
		playButton.id = "jpg-slide-play";
		playButton.innerHTML = "Play: "
		$(playButton).click(function(event){
			event.preventDefault();
			if(!JPGSEQUENCE.playIntervalObject){
				JPGSEQUENCE.playIntervalObject = JPGSEQUENCE.playInterval();
			} else {
				clearTimeout(JPGSEQUENCE.playIntervalObject);
				JPGSEQUENCE.playIntervalObject = null;
			}
			return false;
		})

		buttonsArea.appendChild(playButton);
		buttonsArea.appendChild(buttonContainer);
		parent.appendChild(buttonsArea);

		$($("#button-container").children()[0]).click()
	},
	createImage:function(count){
		var img = document.createElement("div");
		img.className = JPGSEQUENCE.baseName + " jpg-slide-hidden full-backgroundimage";
		img.style.backgroundImage = "url(/assets/images/map/"+JPGSEQUENCE.baseName+count+".jpg)";
		return img;
	},
	createButton:function(element){
		var but = document.createElement("a");
		but.href = "#";
		but.appendChild(document.createElement("div"));
		$(but).click(function(event){
			event.preventDefault();
			$(".jpg-slide-selected").removeClass('jpg-slide-selected');
			$(this).addClass('jpg-slide-selected');
			JPGSEQUENCE.hideAllSlides();
			$(element).removeClass('jpg-slide-hidden')
			return false
		})
		$(but).on("mouseover",function(event){
			event.preventDefault();
			$(".jpg-slide-selected").removeClass('jpg-slide-selected');
			$(this).addClass('jpg-slide-selected');
			JPGSEQUENCE.hideAllSlides();
			$(element).removeClass('jpg-slide-hidden');
			return false;
		})
		return but;
	},
	clickButton:function(event){

	},
	hideAllSlides:function(){
		$("."+JPGSEQUENCE.baseName).addClass('jpg-slide-hidden');
	},
	playInterval:function(){
		var playInterVal = setInterval(function(){
			var findCurrent = $(".jpg-slide-selected")[0];
			if(!findCurrent){
				findCurrent = $("#button-container").children()[0];
			}
			var next = $(findCurrent).next()[0];
			console.log(next);
			if(!next){
				next = $("#button-container").children()[0];
			}
			$(next).click();
		},100);
		return playInterVal;
	}
}

GLOBAL.setUpIndex();
var YT = null;

$(window).on( "scroll",GLOBAL.scrollEvent);
$(window).bind('mousewheel',GLOBAL.stopForAnimationEvent);
$(window).bind('DOMMouseScroll',GLOBAL.stopForAnimationEvent);
// $(window).on("mousedown",function(){
// 	GLOBAL.mousePressed == true;
// })
// $(window).on("mouseup",function(){
// 	GLOBAL.mousePressed == false;
// })

$(window).on("resize",function(){
	GLOBAL.getNavHeight();
	GLOBAL.getHotSpots();
});

$(window).load(function(){
	GLOBAL.singleIndex();
	GLOBAL.getNavHeight();
	GLOBAL.getHotSpots();
	GLOBAL.getAddress();
	GLOBAL.setUpNav();
	GLOBAL.setupNextPageButton();
	GLOBAL.fadeLoading();
});