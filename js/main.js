var GLOBAL = {
	debug:false,
	address: null,
	mousePressed:false,
	getAddress:function(){
		GLOBAL.address = window.location.href.toString().split(window.location.host)[1].split(".")[0].split("/")[1];
		GLOBAL.caseFunctionLoads(GLOBAL.address);
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
	navColourDetection:function(navOfLoc){
		var teller = navOfLoc.split("-")[0];
		if(teller == "index"){
			$("#nav")[0].className = "index transition-all-2";
		}else if(teller == "why"){
			$("#nav")[0].className = "why transition-all-2";
		}else if(teller == "about"){
			$("#nav")[0].className = "about transition-all-2";
		} else if(teller == "the"){
			$("#nav")[0].className = "the-threat transition-all-2";
		} else if(teller == "kayapo"){
			$("#nav")[0].className = "project transition-all-2";
		}else if(teller == "donate"){
			$("#nav")[0].className = "donate transition-all-2";
		}else if(teller == "contact"){
			$("#nav")[0].className = "contact transition-all-2";
		}
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
		GLOBAL.getAddress();
		GLOBAL.hotSpotEl = $(document.body).children();
		GLOBAL.hotSpots = [];
		var id = null;
		for(var a = 0, max = GLOBAL.hotSpotEl.length-1; a < max; a += 1){
			GLOBAL.hotSpots.push($(GLOBAL.hotSpotEl[a]).offset().top);
			id = GLOBAL.hotSpotEl[a].id;
			if(GLOBAL.address == id){
				GLOBAL.loadPage(a);
			}
			if(id == "why-rainforest-3"){
				GLOBAL.stuckWhyLoc = a;
			}
			if(id == "the-threat-3"){
				GLOBAL.stuckThreatLoc = a;
			}
			if(id == "about-the-kayapo-5"){
				GLOBAL.stuckAboutLoc = a;
			}
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
		GLOBAL.navColourDetection(GLOBAL.hotSpotEl[location].id)
		GLOBAL.setHash(GLOBAL.hotSpotEl[location].id);
	},
	edgeCases:function(location){
		if(GLOBAL.debug)console.log("edgeCase " + location);

		//unstuck everything except if needed
		if(GLOBAL.stuckThreat || GLOBAL.stuckWhy || GLOBAL.stuckAbout){
			GLOBAL.unSetThreatStatic();
			GLOBAL.unSetWhyStatic();
			GLOBAL.unSetAboutStatic();
		}

		//stick only what is needed
		if(location >= GLOBAL.stuckThreatLoc && location <=  GLOBAL.stuckThreatLoc+2){
			GLOBAL.setThreatStatic();
		}
		if(location >= GLOBAL.stuckWhyLoc && location <= GLOBAL.stuckWhyLoc+2){
			GLOBAL.setWhyStatic();
		}
		if(location >= GLOBAL.stuckAboutLoc && location <= GLOBAL.stuckAboutLoc+2){
			GLOBAL.setAboutStatic();
		}

		if(location >= GLOBAL.stuckThreatLoc){
			if(location == GLOBAL.stuckThreatLoc){
				GLOBAL.setIntervalRemoveBk();
			} else {
				GLOBAL.setIntervalAddBk();
			}
		} else if(GLOBAL.IntervalRemoveBk || GLOBAL.IntervalAddBk){
			GLOBAL.clearIntervalRemoveBk();
			GLOBAL.clearIntervalAddBk();
		}
	},
	findClosestElement:function(loc){
		if(!GLOBAL.hotSpots) return null;
		for(var a = 0, max = GLOBAL.hotSpots.length; a < max; ++a){
			if(GLOBAL.debug) console.log("Iterating through elements till bottom "+ a + " " +GLOBAL.hotSpots[a]+ " " + GLOBAL.hotSpotEl[a].id);
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
			var image = $(this).children('img')[0],
			string = this.id.split("-nav")[0],
			element = $("#why-rainforest-35 #"+string)[0],
			otherElements = $("#why-rainforest-35 #slides div");
			navEl = $(".why-sub-nav"),
			prev = null;
			for(var a=0,max = otherElements.length; a < max; a += 1){
				$(otherElements[a]).addClass('hidden');
				if($(navEl[a]).hasClass('selected-why-nav')){
					var childImage = $(navEl[a]).children('img')[0]
					string = childImage.src.split("/");
					string = string[string.length-1].split("ho")[0];
					prev = string;
					childImage.src = "/assets/"+string+".png";
					$(navEl[a]).removeClass('selected-why-nav');
				}
			}
			string = image.src.split(".")[0].split("/");
			if(prev == string[string.length-1]) return false;
			$(element).removeClass('hidden');
			$(this).addClass('selected-why-nav');
			image.src = "/assets/"+string[string.length-1]+"ho.png"
			console.log("got to the end of the link...");
			return false;
		})
	},
	setUpProjectsNav:function(){
		$("#funds-divs").children().click(function(event){
			event.preventDefault();
			//remove old images
			var img = $(".height-lighted-pro-nav");
			for(var a = 0, max = img.length; a < max; ++a){
				img[a].src = img[a].src.split("-")[0]+".png";
				img[a].className = "";
			}

			img = $(this).children('img')[0];
			img.src = img.src.split(".")[0]+"-ho.png";
			img.className = "height-lighted-pro-nav";

			var showThis = "#kayapo-proj-modal-"+$(this).attr('href').split("#")[1];
			GLOBAL.addOffBottomToAll(this);
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
		var parent = document.getElementById("back-ground-items");
		if(parent){
			parent.innerHTML = "";
			var width = $(window).width(),
			height = $(window).height(),
			count = Math.floor(width/50)*Math.floor(height/50),
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
		}
	},
	setPils:function(){
		var parents = $("#the-threat-4 .background-parent")
		if(parents.length >= 1){
			parents[0].innerHTML = "";
			parents[1].innerHTML = "";
			var width = $(parents[0]).width(),
			height = $(parents[0]).height(),
			count = Math.floor(width/50)*Math.floor(height/50),
			base = document.createElement("div"),
			baseSub = document.createElement("div");
			base.className = "inline-image";
			base.appendChild(baseSub)
			temp = null,
			animals = [
				"image-pleaf1",
				"image-pleaf2",
				"image-pleaf3",
				"image-pleaf4",
				],
			pills = [
				"image-pill1",
				"image-pill2",
				"image-pill3",
				"image-pill4"
			];

			for(var a = 0; a < count; ++a){
				// to make it consistant use a%4
				temp = "full-backgroundimage "+pills[Math.floor(Math.random()*pills.length)];
				if(a/count < 0.25) temp = temp+"-y";
				baseSub.className = temp;
				temp = base.cloneNode(true);
				parents[0].appendChild(temp);
			}
			for(var a = 0; a < count; ++a){
				temp = "full-backgroundimage "+animals[Math.floor(Math.random()*animals.length)];
				if(a/count < 0.01) temp = temp+"-y";
				baseSub.className = temp;
				temp = base.cloneNode(true);
				parents[1].appendChild(temp);
			}
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
			},50);
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
				var el = null;
				if(allEl.length>0){
					el = allEl[Math.floor(Math.random()*allEl.length)];
					$(el).removeClass('none');
					$(el.parentNode).addClass('yellow');
				} else {
					clearInterval(GLOBAL.IntervalAddBk);
				}
			},50)
		}
	},
	clearIntervalAddBk:function(){
		if(GLOBAL.IntervalAddBk){
			clearInterval(GLOBAL.IntervalAddBk);
			GLOBAL.IntervalAddBk = null;
		}
	},
	stuckWhy:false,
	stuckWhyLoc:null,
	stuckAbout:false,
	stuckAboutLoc:null,
	stuckThreat:false,
	stuckThreatLoc:null,
	setWhyStatic:function(){
		var el = $("#why-rainforest-3 #cropping-youtube").addClass('stick');
		GLOBAL.stuckWhy = true;
	},
	unSetWhyStatic:function(){
		var el = $("#why-rainforest-3 #cropping-youtube").removeClass('stick');
		GLOBAL.stuckWhy = false;
	},
	setAboutStatic:function(){
		var el = $("#about-the-kayapo-5 .full-page").addClass('stick');
		GLOBAL.stuckAbout = true;
	},
	unSetAboutStatic:function(){
		var el = $("#about-the-kayapo-5 .full-page").removeClass('stick');
		GLOBAL.stuckAbout = false;
	},
	setThreatStatic:function(){
		var el = $("#back-ground-items").addClass('stick');
		GLOBAL.stuckThreat = true;
	},
	unSetThreatStatic:function(){
		var el = $("#back-ground-items").removeClass('stick');
		GLOBAL.stuckThreat = false;
	},
	loading:false,
	loadPage:function(newLoc,animate){
		if(GLOBAL.loading) if(animate !== false) return false;
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
				GLOBAL.caseFunctionLoads(parentEl.id,newLoc);
				if(animate !==false) {GLOBAL.animateTo(newLoc);} else {GLOBAL.edgeCases(newLoc);}
				GLOBAL.loading = false;
			});
		}else {
			GLOBAL.animateTo(newLoc);
		}
	},
	caseFunctionLoads:function(id,newLoc){
		console.log("acase function got called", id);
		if(id == "why-rainforest-35"){
			GLOBAL.loadPage(newLoc-1,false);
			GLOBAL.setUpWhyNav();
		} else if(id == "about-the-kayapo-3"){
			console.log("animaiton sequence will be called");
			GLOBAL.mapAnimationSquence();
		} else if(id == "the-threat-1"){
			JPGSEQUENCE.generateImages(document.getElementById("the-threat-1"),29,"map");
		} else if(id == "the-threat-3"){
			GLOBAL.setUpBackGroundAnimals();
			GLOBAL.setIntervalRemoveBk();
		} else if(id == "the-threat-35"){
			GLOBAL.loadPage(newLoc-1,false);
			GLOBAL.setIntervalAddBk();
		} else if(id == "kayapo-proj-2"){
			GLOBAL.setUpProjectsNav();
		} else if(id == "the-threat-4"){
			GLOBAL.setPils();
		}
		return null;
	},
	setHash:function(currentHashEl){
		if(currentHashEl == "the-threat-35"){
			currentHashEl = "the-threat-3";
		} else if(currentHashEl == "why-rainforest-35"){
			currentHashEl = "why-rainforest-3";
		}
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
	},
	mapAnimationCounter:0,
	mapAnimationSquence:function(){
		console.log("animaiton sequence got called...");
		setTimeout(function(){
			for(var a  = 0; a < 7; ++a){
				setTimeout(function(){
					console.log($("#map-"+GLOBAL.mapAnimationCounter)[0]);
					$("#map-"+GLOBAL.mapAnimationCounter)[0].classList.remove("hidden");
					++GLOBAL.mapAnimationCounter;
					if(GLOBAL.mapAnimationCounter == 6){
						GLOBAL.mapAnimationCounter = 0;
					}
				},a*1000);
			}
		},1000);
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
		buttonsArea = document.createElement("div"),
		firstEl = document.createElement("span"),
		endEl = document.createElement("span");
		firstEl.innerHTML = "1984";
		endEl.innerHTML = "2012";
		buttonsArea.id = "buttons-area";
		buttonContainer = document.createElement("div");
		buttonContainer.id = "button-container";

		for(var a = 0; a < number; a += 2){
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
		buttonsArea.appendChild(firstEl);
		buttonsArea.appendChild(buttonContainer);
		buttonsArea.appendChild(endEl);
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

$(window).on("resize",function(){
	GLOBAL.getNavHeight();
	GLOBAL.getHotSpots();
	// GLOBAL.setUpBackGroundAnimals();
});

$(window).load(function(){
	GLOBAL.singleIndex();
	GLOBAL.getNavHeight();
	GLOBAL.getHotSpots();
	GLOBAL.setUpNav();
	GLOBAL.setupNextPageButton();
	setTimeout(GLOBAL.fadeLoading,1000);
});