/*
       d8888  .d8888b.  888       .d88888b.         .d8888b.           888 888                   888    d8b
      d88888 d88P  Y88b 888      d88P" "Y88b       d88P  Y88b          888 888                   888    Y8P
     d88P888 Y88b.      888      888     888       888    888          888 888                   888
    d88P 888  "Y888b.   888      888     888       888         .d88b.  888 888  .d88b.   .d8888b 888888 888 888  888  .d88b.
   d88P  888     "Y88b. 888      888     888       888        d88""88b 888 888 d8P  Y8b d88P"    888    888 888  888 d8P  Y8b
  d88P   888       "888 888      888     888       888    888 888  888 888 888 88888888 888      888    888 Y88  88P 88888888
 d8888888888 Y88b  d88P 888      Y88b. .d88P       Y88b  d88P Y88..88P 888 888 Y8b.     Y88b.    Y88b.  888  Y8bd8P  Y8b.
d88P     888  "Y8888P"  88888888  "Y88888P"         "Y8888P"   "Y88P"  888 888  "Y8888   "Y8888P  "Y888 888   Y88P    "Y8888
*/
//Designed by ASLO Collective, 13/12/2013 in collaboration with DOT Dot Dash - to save the Kayapo

// use http://patorjk.com/software/taag/#p=display&h=0&v=0&f=Colossal&t=ALSOcollective for text




//detect if it's a mobile browser
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


/* ANALYTICS */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-42487410-2']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



navigator.sayswho= (function(){
    var ua= navigator.userAgent||navigator.vendor||window.opera, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    M= M[2]? [M[1], M[2]]:[navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    return M;
})();

console.log(navigator.sayswho[0],navigator.sayswho[1]);
var MOBILE = false;

if(navigator.sayswho[0] == "Safari" && navigator.sayswho[navigator.sayswho.length-1][0] == "5"){
	MOBILE = true;
	jQuery.browser.mobile = true;
} else if(navigator.sayswho[0] == "Firefox" && parseInt(navigator.sayswho[navigator.sayswho.length-1]) < 16 ){
	MOBILE = true;
	jQuery.browser.mobile = true;
} else if(navigator.sayswho[0] == "MS/IE" && parseInt(navigator.sayswho[navigator.sayswho.length-1]) < 9){
	MOBILE = true;
	jQuery.browser.mobile = true;
}

// $.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
if(jQuery.browser.mobile){
	if(window.location.pathname != "/mobile.html"){
		window.location.replace("mobile.html");
	} else {
		MOBILE = true;
	}
}
/*
 .d8888b.  888       .d88888b.  888888b.          d8888 888
d88P  Y88b 888      d88P" "Y88b 888  "88b        d88888 888
888    888 888      888     888 888  .88P       d88P888 888
888        888      888     888 8888888K.      d88P 888 888
888  88888 888      888     888 888  "Y88b    d88P  888 888
888    888 888      888     888 888    888   d88P   888 888
Y88b  d88P 888      Y88b. .d88P 888   d88P  d8888888888 888
 "Y8888P88 88888888  "Y88888P"  8888888P"  d88P     888 88888888
*/
var GLOBAL = {
	debug:false,
	address: null,
	getAddress:function(){
		var temp = window.location.href.toString().split(window.location.host)[1].split(".")[0].split("/")[1];
		if(!temp) temp = "index-1";
		GLOBAL.address = temp;
		GLOBAL.caseFunctionLoads(GLOBAL.address);
	},
	indexNumber: null,
	setUpIndex:function(){
		GLOBAL.indexNumber = 1;//Math.ceil(Math.random()*3);
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
	},
	removeHeighLight:function(){
		$('.highlight-nav').removeClass('highlight-nav');
	},
	setUpNav:function(){
		$(".main-nav-button").click(function(event){
			event.preventDefault();
			var string = this.id.split("-nav")[0]
			GLOBAL.removeHeighLight();
			$(this).addClass('highlight-nav');
			if(string === "index"){
				string = string+"-"+GLOBAL.indexNumber;
			} else if(string === "donate") {
				string = string+"-2";
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
	height:0,
	width:0,
	getHotSpots:function(){
		GLOBAL.getAddress();
		GLOBAL.hotSpotEl = $("#content").children();
		GLOBAL.hotSpots = [];
		$("#content").scrollTop(0);
		var id = null;
		for(var a = 0, max = GLOBAL.hotSpotEl.length; a < max; a += 1){
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
			if(id == "donate-2"){
				GLOBAL.donate = a;
			}
		}
		GLOBAL.hotSpots[0] = 0;
		GLOBAL.edgeCases(GLOBAL.current);
		GLOBAL.current = GLOBAL.findClosestElement($("#content").scrollTop());
	},
	animating:false,
	scrollEvent:function(event){
		event.preventDefault();
		if(GLOBAL.animating || GLOBAL.loading){
			return false;
		}
		var loc = $("#content").scrollTop();

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
		$('html, body, #content').stop().animate({
			scrollTop: (GLOBAL.hotSpots[location]-GLOBAL.navHeight)
		}, 1000,function(){
			setTimeout(function(){GLOBAL.animating = false;},800);
			GLOBAL.fadeAjaxLoading();
			TOUCH.active = false;
			//GLOBAL.softLoad();
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
						return 1;
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
		if(GLOBAL.animating || GLOBAL.loading || TOUCH.active){
			event.preventDefault();
			return false;
		}
	},
	setUpWhyNav:function(){
		$(".why-sub-nav").click(function(event){
			event.preventDefault();
			$(".selected-why-nav").removeClass('selected-why-nav');
			$(this).addClass('selected-why-nav');
			$("#why-rainforest-35 #slides div").addClass('hidden');
			$("#slides #"+this.id.split("-"[0])).removeClass('hidden');
			return false;
		})
	},
	setUpProjectsNav:function(){
		$("#funds-divs").children().click(function(event){
			event.preventDefault();

			if($('.height-lighted-pro-nav')[0] == this){
				$('.height-lighted-pro-nav').removeClass('height-lighted-pro-nav');
				$(".kayapo-proj-modal").addClass('off-bottom');
				return false;
			}
			$('.height-lighted-pro-nav').removeClass('height-lighted-pro-nav');
			$(".kayapo-proj-modal").addClass('off-bottom');

			$(this).addClass('height-lighted-pro-nav');
			$("#kayapo-proj-modal-"+this.id).removeClass('off-bottom');

			return false;
		});
	},
	addOffBottomToAll:function(currentEl){
		var elements = $(".kayapo-proj-modal").addClass('off-bottom');
		for(var a = 0, max = elements.length; a < max; a += 1){
			if(!$(elements[a]).hasClass('off-bottom') && elements[a] !== currentEl){
				$(elements[a]).addClass('off-bottom');
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
		var parent = document.getElementById("constant-background-image");
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
				"threat-icons-ic_bug",
				"threat-icons-ic_butterfly",
				"threat-icons-ic_frog",
				"threat-icons-ic_insect",
				"threat-icons-ic_leaf1",
				"threat-icons-ic_leaf2",
				"threat-icons-ic_leaf3",
				"threat-icons-ic_leaf4",
				"threat-icons-ic_leaf5",
				"threat-icons-ic_leaf6",
				"threat-icons-ic_leaf7",
				"threat-icons-ic_monkey",
				"threat-icons-ic_snake",
				"threat-icons-ic_tucan"
				];
			for(var a = 0; a < count; ++a){
				baseSub.className = animals[Math.floor(Math.random()*animals.length)];
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
				"threat-icons-ic_pleaf1",
				"threat-icons-ic_pleaf2",
				"threat-icons-ic_pleaf3",
				"threat-icons-ic_pleaf4",
				],
			pills = [
				"threat-icons-ic_pill1",
				"threat-icons-ic_pill2",
				"threat-icons-ic_pill3",
				"threat-icons-ic_pill4"
			];

			for(var a = 0; a < count; ++a){
				// to make it consistant use a%4
				temp = pills[Math.floor(Math.random()*pills.length)];
				if(a/count < 0.25) temp = temp+"-y";
				baseSub.className = temp;
				temp = base.cloneNode(true);
				parents[0].appendChild(temp);
			}
			for(var a = 0; a < count; ++a){
				temp = animals[Math.floor(Math.random()*animals.length)];
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
				var allEl = $("#constant-background-image .inline-image div:not(.none)");
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
					el.className = el.className+"-y";
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
		$("#why-rainforest-3 #cropping-youtube").addClass('stick');
		GLOBAL.stuckWhy = true;
	},
	unSetWhyStatic:function(){
		$("#why-rainforest-3 #cropping-youtube").removeClass('stick');
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
	preLoad:function(loc){
		if(loc < 0 || loc > GLOBAL.hotSpotEl.length) return null;
		var parentEl = GLOBAL.hotSpotEl[loc]
		if($(parentEl).children().length <= 0){
			$(parentEl).load("ajax/"+parentEl.id+".html");
		}
	},
	softLoad:function(){
		setTimeout(function(){
			console.log("loading +1 and -1 of ", GLOBAL.current)
			GLOBAL.preLoad(GLOBAL.current+1);
			GLOBAL.preLoad(GLOBAL.current-1);
		},800);
	},
	loading:false,
	loadPage:function(newLoc,animate){
		if(GLOBAL.loading) if(animate !== false) return false;
		if(newLoc === null || GLOBAL.hotSpotEl === null) return false;
		var parentEl = GLOBAL.hotSpotEl[newLoc]
		if($(parentEl).children().length <= 0){
			GLOBAL.loading = true;
			GLOBAL.showAjaxLoading();
			$(parentEl).load("ajax/"+parentEl.id+".html",function(response, status, xhr){
				if(status == "error"){
					if(xhr.statusText == "File not found"){
						console.log(xhr.status + " " + parentEl.id + ".html " + xhr.statusText)
					} else {
						console.log(xhr.status + " " + xhr.statusText);
					}
				}
				GLOBAL.caseFunctionLoads(parentEl.id,newLoc);
				setTimeout(function(){
					GLOBAL.fadeAjaxLoading();
					if(animate !==false) {GLOBAL.animateTo(newLoc);} else {GLOBAL.edgeCases(newLoc);}
					GLOBAL.loading = false;
				},300)
			});
		}else {
			GLOBAL.animateTo(newLoc);
		}
	},
	caseFunctionLoads:function(id,newLoc){
		if(id == "why-rainforest-35"){
			GLOBAL.loadPage(newLoc-1,false);
			GLOBAL.setUpWhyNav();
		} else if(id == "about-the-kayapo-3"){
			GLOBAL.mapAnimationSquence();
		} else if(id == "why-rainforest-1"){
			GLOBAL.about6Hover();
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
		} else if(id == "donate-2"){
			if(GLOBAL.unitedStates){
				GLOBAL.reDirectTounitedStates();
			}
			GLOBAL.setDonate();
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
			_gaq.push(['_trackPageview', newAddress]);
		}
	},
	loadingTimer:null,
	fadeAjaxLoading:function(){
		if(GLOBAL.loadingTimer){
			clearTimeout(GLOBAL.loadingTimer);
			GLOBAL.loadingTimer = null;
		}
		$("#ajax-loading-screen").fadeOut('1000');
	},
	showAjaxLoading:function(){
		GLOBAL.loadingTimer = setTimeout(function(){
			$("#ajax-loading-screen").fadeIn('1000');
		},500);
	},
	fadeLoading:function(){
		$("#loading-screen").fadeOut('1000');
	},
	mapAnimationCounter:0,
	mapAnimationSquence:function(){
		if(!$("#map-1")[0].classList){
			$("#ie-map")[0].style.display = "block";
			return false;
		}
		setTimeout(function(){
			for(var a  = 0; a < 7; ++a){
				setTimeout(function(){
					$("#map-"+GLOBAL.mapAnimationCounter)[0].classList.remove("hidden");
					++GLOBAL.mapAnimationCounter;
					if(GLOBAL.mapAnimationCounter == 6){
						GLOBAL.mapAnimationCounter = 0;
					}
				},a*1000);
			}
		},1000);
	},
	about6Set:false,
	about6Hover:function(){
		if(!GLOBAL.about6Set){
			var img = $("#play-button img");
			img.on("mouseover",GLOBAL.about6Toggle);
			img.on("mouseout",GLOBAL.about6Toggle);
			img.click(GLOBAL.about6Toggle);
			GLOBAL.about6Set = true;
		}
	},
	about6Toggle:function(){
		var name = this.src.split("/");
		name = name[name.length-1];
		if(name == "bt_play-y.png"){
			this.src = "/assets/icons/bt_play.png";
		} else {
			this.src = "/assets/icons/bt_play-y.png";
		}
	},
	animateToPageId:function(id){
		for(var a =0, max = GLOBAL.hotSpotEl.length; a < max; a+=1){
			if(GLOBAL.hotSpotEl[a].id == id){
				GLOBAL.animateTo(a);
				GLOBAL.current = a;
			}
		}
	},
	loadDonate:function(event){
		// console.log(event);
		// event.preventDefault();
		//console.log(GLOBAL.donate,GLOBAL.hotSpots[GLOBAL.donate]);
		GLOBAL.loadPage(GLOBAL.donate);
		return false;
	},
	unitedStates:false,
	getLocation:function(ip){
		if(!ip){
			GLOBAL.myIP;
			return false;
		}
		$.getJSON("http://api.ipinfodb.com/v3/ip-country/?key=d041a5c794a07541210c9595ec4434afbf90a14b46f568b38666562071740435&ip="+ip+"&format=json&callback=?", function( data ) {
			if(data.countryCode == "US"){
				GLOBAL.unitedStates = true;
				GLOBAL.reDirectTounitedStates();
			}
		});
	},
	reDirectTounitedStates:function(){
		var mon = $("#donate-donor-mon")[0],
		one = $("#donate-donor-one")[0];
		if(mon || one){
			mon.href = "https://www.gifttool.com/donations/Donate?ID=1274&AID=2391";
			one.href = "https://www.gifttool.com/donations/Donate?ID=1274&AID=2391";
		}
	},
	myIP:function() {
		// if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
		// else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

		// xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
		// xmlhttp.send();
		// hostipInfo = xmlhttp.responseText.split("\n");

		// for (i=0; hostipInfo.length >= i; i++) {
		// 	ipAddress = hostipInfo[i].split(":");
		// 	if ( ipAddress[0] == "IP" ) return ipAddress[1];
		// }

		$.getJSON("http://smart-ip.net/geoip-json?callback=?", function(data){
		  	GLOBAL.getLocation(data.host);
		});
		return false;
	},
	hideWhyVideo:function(){
		$("#cropping-youtube").hide('0');
	},
	showWhyVideo:function(){
		$("#cropping-youtube").show('0');
	},
	socialMediaLinks:function(event){
		var link = this.src.split("/");
		if(link[link.length-1] == "ic_twittercircle.png"){
			window.open("https://twitter.com/KayapoProject",'_blank');
		} else {
			window.open("https://www.facebook.com/pages/The-Kayapo-Guardians-of-the-Forest/476755409057319?ref=br_tf",'_blank');
		}
	},
	setDonate:function(){
		//$("#monthly #social-icons").children().click(GLOBAL.socialMediaLinks);
		//$("#one-time #social-icons").children().click(GLOBAL.socialMediaLinks);
	}
}



/*
88888888888  .d88888b.  888     888  .d8888b.  888    888
    888     d88P" "Y88b 888     888 d88P  Y88b 888    888
    888     888     888 888     888 888    888 888    888
    888     888     888 888     888 888        8888888888
    888     888     888 888     888 888        888    888
    888     888     888 888     888 888    888 888    888
    888     Y88b. .d88P Y88b. .d88P Y88b  d88P 888    888
    888      "Y88888P"   "Y88888P"   "Y8888P"  888    888
*/
var TOUCH = {
	scroll:0,
	active:false,
	preventScroll:function(event){
		event.preventDefault();
		return false;
	},
	touchStart:function(event){
		var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0]
		TOUCH.scroll = touch.pageY;
	},
	touchEnd:function(event){
		if(TOUCH.active) return false;
		var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0]
		if(TOUCH.scroll-touch.pageY > 50 || TOUCH.scroll-touch.pageY < -50){
			TOUCH.active = true;
			if(TOUCH.scroll > touch.pageY){
				GLOBAL.current += 1;
				if(GLOBAL.current > GLOBAL.hotSpots.length-1){
					GLOBAL.current = GLOBAL.hotSpots.length-1;
				}
				console.log("next page ", GLOBAL.current)
			} else {
				GLOBAL.current -= 1;
				if(GLOBAL.current < 0){
					GLOBAL.current = 0;
				}
				console.log("prev page ", GLOBAL.current)
			}
			GLOBAL.highLightNavOnScroll(GLOBAL.hotSpotEl[GLOBAL.current].id);
			GLOBAL.loadPage(GLOBAL.current)
		}
	}
}


/*
  888888 8888888b.   .d8888b.   .d8888b.  8888888888  .d88888b.  888     888 8888888888 888b    888  .d8888b.  8888888888
    "88b 888   Y88b d88P  Y88b d88P  Y88b 888        d88P" "Y88b 888     888 888        8888b   888 d88P  Y88b 888
     888 888    888 888    888 Y88b.      888        888     888 888     888 888        88888b  888 888    888 888
     888 888   d88P 888         "Y888b.   8888888    888     888 888     888 8888888    888Y88b 888 888        8888888
     888 8888888P"  888  88888     "Y88b. 888        888     888 888     888 888        888 Y88b888 888        888
     888 888        888    888       "888 888        888 Y8b 888 888     888 888        888  Y88888 888    888 888
     88P 888        Y88b  d88P Y88b  d88P 888        Y88b.Y8b88P Y88b. .d88P 888        888   Y8888 Y88b  d88P 888
     888 888         "Y8888P88  "Y8888P"  8888888888  "Y888888"   "Y88888P"  8888888888 888    Y888  "Y8888P"  8888888888
   .d88P                                                    Y8b
 .d88P"
888P"
*/
var JPGSEQUENCE = {
	listOfImages:[],
	listOfButtons:[],
	playIntervalObject:null,
	playButton:null,
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

		for(var a = 1; a < number; a += 2){
			el = JPGSEQUENCE.createImage(a);
			JPGSEQUENCE.listOfImages.push(el);
			parent.appendChild(el);
			button = JPGSEQUENCE.createButton(el);
			buttonContainer.appendChild(button);
		}

		var playButton = document.createElement("a");
		playButton.href = "#";
		playButton.id = "jpg-slide-play";
		playButton.innerHTML = "<img src='http://also-static.com/kayapo/assets/icons/btn_ply.png' width='40px' height='40px'/>"
		JPGSEQUENCE.playButton = playButton;
		$(playButton).click(function(event){
			event.preventDefault();
			if(!JPGSEQUENCE.playIntervalObject){
				JPGSEQUENCE.playIntervalObject = JPGSEQUENCE.playInterval();
			} else {
				clearTimeout(JPGSEQUENCE.playIntervalObject);
				JPGSEQUENCE.playIntervalObject = null;
				JPGSEQUENCE.playButton.innerHTML = "<img src='http://also-static.com/kayapo/assets/icons/btn_ply.png' width='40px' height='40px'/>";
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
		img.style.backgroundImage = "url(http://also-static.com/kayapo/assets/map/"+JPGSEQUENCE.baseName+count+".jpg)";
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
		$(".jpg-slide-selected").removeClass('jpg-slide-selected');
		$($("#button-container").children()[0]).click()
		JPGSEQUENCE.playButton.innerHTML = "<img src='http://also-static.com/kayapo/assets/icons/btn_paus.png' width='40px' height='40px'/>";
		var playInterVal = setInterval(function(){
			var findCurrent = $(".jpg-slide-selected")[0];
			if(!findCurrent){
				findCurrent = $("#button-container").children()[0];
			}
			var next = $(findCurrent).next()[0];
			if(!next){
				clearTimeout(JPGSEQUENCE.playIntervalObject);
				JPGSEQUENCE.playButton.innerHTML = "<img src='http://also-static.com/kayapo/assets/icons/btn_ply.png' width='40px' height='40px'/>";
				JPGSEQUENCE.playIntervalObject = null;
			}
			$(next).click();
		},200);
		return playInterVal;
	}
}


/*
8888888b.  888    888  .d88888b.  888b    888 8888888888
888   Y88b 888    888 d88P" "Y88b 8888b   888 888
888    888 888    888 888     888 88888b  888 888
888   d88P 8888888888 888     888 888Y88b 888 8888888
8888888P"  888    888 888     888 888 Y88b888 888
888        888    888 888     888 888  Y88888 888
888        888    888 Y88b. .d88P 888   Y8888 888
888        888    888  "Y88888P"  888    Y888 8888888888
*/
var PHONE = {
	windowHeight:0,
	init:function(){
		GLOBAL.myIP();
		PHONE.resize();
		$("#content").on("touchmove",PHONE.scrolling);
		$(window).on("resize",PHONE.resize);
		$(document.body).addClass('phone');
	},
	resize:function(){
		GLOBAL.getHotSpots();
		PHONE.windowHeight = $(window).outerHeight();
	},
	scrolling:function(event){
		console.log("------------");
		console.log(PHONE.windowHeight);
		var loc = $("#content").scrollTop();
		console.log(loc);
		var newLoc = PHONE.getClosest(loc+PHONE.windowHeight);
		console.log(newLoc);
		if(newLoc){
			console.log(GLOBAL.hotSpotEl[newLoc].id);
			GLOBAL.navColourDetection(GLOBAL.hotSpotEl[newLoc].id)
		}
	},
	getClosest:function(newLoc){
		for(var a = GLOBAL.hotSpots.length; a > 0; a -= 1){
			if(GLOBAL.hotSpots[a]<newLoc){
				console.log(GLOBAL.hotSpots[a], newLoc);
				return a;
			}
		}
		return 0;
	}
}

/*
888       .d88888b.         d8888 8888888b.
888      d88P" "Y88b       d88888 888  "Y88b
888      888     888      d88P888 888    888
888      888     888     d88P 888 888    888
888      888     888    d88P  888 888    888
888      888     888   d88P   888 888    888
888      Y88b. .d88P  d8888888888 888  .d88P
88888888  "Y88888P"  d88P     888 8888888P"
*/
GLOBAL.setUpIndex();
var YT = null;

$(window).load(function(){
	if(MOBILE){
		PHONE.init();
		setTimeout(GLOBAL.fadeLoading,1000);
		document.body.style.overflow = "scroll";
		return false;
	}

	if($("html.touch")[0]){
		console.log("this is touch enabled");
		$(window).on("scroll",TOUCH.preventScroll);
		$("#content").on("scroll",TOUCH.preventScroll);
		$(window).on("touchmove",TOUCH.preventScroll)
		$("#content").on("touchmove",TOUCH.preventScroll)
		$("#content").on("touchstart",TOUCH.touchStart);
		$("#content").on("touchend",TOUCH.touchEnd);
	} else {
		$("#content").on( "scroll",GLOBAL.scrollEvent);
	}

	$("#content").bind('mousewheel',GLOBAL.stopForAnimationEvent);
	$("#content").bind('DOMMouseScroll',GLOBAL.stopForAnimationEvent);
	$(window).bind('mousewheel',GLOBAL.stopForAnimationEvent);
	$(window).bind('DOMMouseScroll',GLOBAL.stopForAnimationEvent);

	$(window).on("resize",function(){
		GLOBAL.showAjaxLoading();
		GLOBAL.temp = GLOBAL.current;
		var height = $(window).outerHeight(),
		width = $(window).outerWidth();

		GLOBAL.getNavHeight();
		GLOBAL.getHotSpots();
		GLOBAL.height = height;
		GLOBAL.width = width;
		GLOBAL.current = GLOBAL.temp;
		// GLOBAL.setUpBackGroundAnimals();
	});

	//GLOBAL.singleIndex();
	GLOBAL.getNavHeight();
	GLOBAL.getHotSpots();
	GLOBAL.setUpNav();
	GLOBAL.setupNextPageButton();
	GLOBAL.animateToPageId(GLOBAL.address);
	GLOBAL.myIP();
	GLOBAL.fadeAjaxLoading();
	setTimeout(GLOBAL.fadeLoading,1000);
});

