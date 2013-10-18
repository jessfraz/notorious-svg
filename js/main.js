var notorioussvg = {
	currentScroll: 0,
	scrolling: false,
	lastScroll: 0,
	windowWidth: $(window).width(),
	windowHeight: $(window).height(),
	device: false,
	currentlyScrolling: false,
	changingSlide: false,
	url: 'http://gotham-nyc.co',
	swiped: 0,
	animating: false,
	totalFaces: $('.left .face').length,
	onFace: 0,
	verbs: ['powerful', 'safe', 'explosive', 'fierce', 'universal', 'serendipitous', 'home', 'inspiring', 'overwhelming', 'unique', 'beautiful'],
	videosArray: ['melting-pot-boat', 'did-you-know', 'skyscraper-establishes', 'the-cab-video', 'clouds', 'street-video'],
	agent: navigator.userAgent.toLowerCase(),
	videos: function(){
		var aspectRatio = 9/16;
		for (var i = 0; i < notorioussvg.videosArray.length; i++) {
			var thisVideo = _V_(notorioussvg.videosArray[i]);
			thisVideo.width(notorioussvg.windowWidth).height(notorioussvg.windowHeight);
		}
	},
	startVideo: function(next_element){
		if (next_element.find('video').length){
			if (next_element.find('article').length && next_element.hasClass('scrolling-section') && !next_element.hasClass('mta')){
				next_element.find('article').css('position', 'relative');
			} else if (next_element.hasClass('mta')){
				next_element.find('.facts-holder').css('position','relative');
			}
			var video_id = next_element.find('video').attr('id');
			_V_(video_id).play();
		}
	},
	resize: function(){
		notorioussvg.windowHeight = $(window).height();
		notorioussvg.windowWidth = $(window).width();
		
		$('.scrolling-section article').css('margin-top', notorioussvg.windowHeight);
		$('.facts-holder').css('margin-bottom', notorioussvg.windowHeight);
		$('.face').css('height', notorioussvg.windowHeight);
		
		$('.col.left').css('top', -notorioussvg.windowHeight*(notorioussvg.totalFaces-1));
		$('.col.right').css('top', 0);
		$('.col').height(notorioussvg.windowHeight*notorioussvg.totalFaces);

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			notorioussvg.device = true;
			// alert if phone
			if (/Android|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				alert('This site is best experienced on a desktop. We will catch on the flipside in Chrome.');
			}
		} else {
			notorioussvg.device = false;
		}	
		
		notorioussvg.videos();
	},
	scrollTo: function(elHref) {
		notorioussvg.currentlyScrolling = true;

		$('html, body').animate({ scrollTop: offset}, 400, function(){
			notorioussvg.currentlyScrolling = false;
			notorioussvg.currentScroll = offset;
		});
	},
	goTo: function(sectionName){
		if ($("#container").find("[data-section='" + sectionName + "']").length){
			notorioussvg.changingSlide = true;
			var $currentactive = $('.content.active');
			if ($currentactive.data('section') !== sectionName){
				var $gotosection = $("#container").find("[data-section='" + sectionName + "']");
				notorioussvg.changeSlide($gotosection, $currentactive, false);
			} else {
				notorioussvg.changingSlide = false;
			}
		}
	},
	changeSlide: function(nextElement, currentElement, isPrev){
		var delay_time = 500;
		if(isPrev){
			delay_time = 300;
		}
		nextElement.addClass('active');
		notorioussvg.startVideo(nextElement);
		setTimeout(function(){
			currentElement.removeClass('active');
			notorioussvg.changingSlide = false;
			window.location.hash = nextElement.data('section');
		}, delay_time);
	},
	moveStrip: function(direction) {
        if (!notorioussvg.animating) {
            notorioussvg.animating = true;
            if (direction) {
                if (direction == "down" && notorioussvg.onFace < notorioussvg.totalFaces - 1) {
					$('#verb').fadeOut(250, function(){
						$('#verb').removeClass().addClass('verb-'+(notorioussvg.onFace+1));
						$('#verb').html(notorioussvg.verbs[(notorioussvg.onFace+1)]);
						$('#verb').fadeIn(250);
					});
                    $('.col.left').animate({top: -notorioussvg.windowHeight*(notorioussvg.totalFaces-notorioussvg.onFace -2) }, 500, function(){
                    });
                    $('.col.right').animate({top: -notorioussvg.windowHeight*(notorioussvg.onFace+1) }, 500, function(){
						notorioussvg.onFace++;
                    });
					if (notorioussvg.onFace == (notorioussvg.totalFaces - 2)){
	                	$('.face-pairing .arrow-right').addClass('show');
	                } else {
						$('.face-pairing .arrow-right').removeClass('show');
	                }
					$('.face-pairing .arrow-scroll').removeClass('show');
                } else if (direction == "up" && notorioussvg.onFace!=0){
					$('#verb').fadeOut(250, function(){
						$('#verb').removeClass().addClass('verb-'+(notorioussvg.onFace-1));
						$('#verb').html(notorioussvg.verbs[(notorioussvg.onFace-1)]);
						$('#verb').fadeIn(250);
					});
                    $('.col.left').animate({top: -notorioussvg.windowHeight*(notorioussvg.totalFaces-notorioussvg.onFace) }, 500, function(){
                    });
                    $('.col.right').animate({top: -notorioussvg.windowHeight*(notorioussvg.onFace-1) }, 500, function(){
						notorioussvg.onFace--;
                    });
					$('.face-pairing .arrow-right').removeClass('show');
					if (notorioussvg.onFace == 1){
	                	$('.face-pairing .arrow-scroll').addClass('show');
	                } else {
						$('.face-pairing .arrow-scroll').removeClass('show');
	                }
                }
				
				setTimeout(function(){
					notorioussvg.animating = false;
				}, 2000);
            }
        }
    },
	mouseWheel: function(change){
		if (Math.abs(change) >= 0.6) {
			if (change > 0) {
				notorioussvg.moveStrip("up");
			} else {
				console.log('down');
				notorioussvg.moveStrip("down");
			}
		}
	},
	onScroll: function(scrollY) {
		var change = scrollY - this.lastScroll;
		var difference = Math.abs(change);

		if (change > 0 && this.currentScroll > 0){
			$('header').addClass('scroll-hide');
		} else {
			$('header').removeClass('scroll-hide');
		}
		
		this.currentScroll = scrollY;
		this.lastScroll = scrollY;
	},
	init: function() {
		notorioussvg.resize();

		// Bind window events
		$(window).on("scroll", function(e) {
			notorioussvg.onScroll($(this).scrollTop());
		}).on("resize", function() {
			notorioussvg.resize();
		}).on("mousewheel", function(e, delta, deltaX, deltaY){
			if ($('.content.face-pairing').hasClass('active')){
				notorioussvg.mouseWheel(delta);
				e.preventDefault();
			}
		});
		
		// Initialize tap or click calls
		var oncall;
		if (notorioussvg.device){
			oncall = 'touchstart';
		} else {
			oncall = 'click';	
		}
		
		/* check hash */
		if (window.location.hash !== "" && window.location.hash !== '#intro') {
			var hash = window.location.hash.substring(1);
			notorioussvg.goTo(hash);
		}

		/* menu events */
		$('.menu-toggle').bind(oncall, function(e){
			e.preventDefault();
			if ($('nav.dropdown').hasClass('open')){
				$('nav.dropdown').removeClass('open');
			} else {
				$('nav.dropdown').addClass('open');
			}
		});
		
		$('.menu-item').bind(oncall, function(e){
			notorioussvg.goTo($(this).attr('href').substring(1));
			$('nav.dropdown').removeClass('open');
		});
		
		/*  menu tap off event */
		$('body').bind(oncall, function(e){
			var $target = $(e.target);
			if ($target.hasClass('menu-toggle') || $target.parents().hasClass('menu-toggle') || $target.hasClass('dropdown') || $target.parents().hasClass('dropdown')){
				return;
			} else {
				$('nav.dropdown').removeClass('open');
			}
		});

		/* arrow next section events */
		$('.arrow').bind(oncall, function(e){
			e.preventDefault();
			if ($(this).hasClass('arrow-right') || $(this).hasClass('arrow-left')){
				if(!notorioussvg.changingSlide){
					notorioussvg.changingSlide = true;
					$currentactive = $('.content.active');
				
					if ($currentactive.find('video').length){
						var video_id = $currentactive.find('video').attr('id');
						_V_(video_id).pause();
					
						if ($currentactive.hasClass('scrolling-section') && !$currentactive.hasClass('mta')){
							$currentactive.find('article').css('position','absolute');
						} else if ($currentactive.hasClass('mta')){
							$currentactive.find('.facts-holder').css('position','absolute');
						}
					}
				
					if ($(this).hasClass('arrow-right')){
						if ($('.content.active').next('.content').length){
							notorioussvg.changeSlide($currentactive.next(), $currentactive, false);
						} else {
							notorioussvg.changeSlide($('.content').first(), $currentactive, false);
						}
					} else if ($(this).hasClass('arrow-left')) {
						if ($('.content.active').prev('.content').length){
							notorioussvg.changeSlide($('.content.active').prev(), $currentactive, true);
						} else {
							notorioussvg.changeSlide($('.content').last(), $currentactive, true);
						}
					}
				} else if ($(this).hasClass('arrow-scroll')){
					if (notorioussvg.agent.indexOf('safari')!=-1){ 
						if (notorioussvg.agent.indexOf('chrome')  > -1){
						} else {
							notorioussvg.changingSlide = true;
							$(this).parents('.content').find('article').animate({marginTop: 0}, 500, function(){
								notorioussvg.changingSlide = false;
							});
						}
					}
				}
			}
		});
		
		/* right and left keyboard keys */
		$(document).keyup(function(e) {
			if (e.keyCode == 37){ // left
				$('.arrow-left').trigger('click');
			} else if (e.keyCode == 39){ // right
				$('.arrow-right').trigger('click');
			}
		});
		
		/* tweet button */
		$('.tweet').bind(oncall, function(){
			window.open( 'https://twitter.com/intent/tweet?url='+notorioussvg.url+'&via=barrelny&text='+encodeURIComponent('New York is ' + $('.shout').val())+'&hashtags=gothamis,nycis,barrelny', '_blank');
		});
		
		/* flash backups for videos */
		videojs.options.flash.swf = "js/lib/video-js.swf";
	}
};

$(function(){
	notorioussvg.init();
});

