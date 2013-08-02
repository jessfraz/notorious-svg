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
	videos: function(){
		var metropolis = _V_("metropolis");
		
		metropolis.width(notorioussvg.windowWidth);
		metropolis.height(notorioussvg.windowHeight);
	},
	startVideo: function(next_element){
		if (next_element.find('video').length){
			if (next_element.find('article').length && next_element.hasClass('scrolling-section')){
				next_element.find('article').css('position', 'relative');
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

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			notorioussvg.device = true;
			// alert if phone
			if (/Android|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				alert('This site is best experienced on a desktop, or tablet in landscape. Haters gonna hate.');
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
		$(window).on("scroll", function() {
			notorioussvg.onScroll($(this).scrollTop());
		}).on("resize", function() {
			notorioussvg.resize();
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
			if(!notorioussvg.changingSlide){
				notorioussvg.changingSlide = true;
				$currentactive = $('.content.active');
				
				if ($currentactive.find('video').length){
					var video_id = $currentactive.find('video').attr('id');
					_V_(video_id).pause();
					
					if ($currentactive.hasClass('scrolling-section')){
						$currentactive.find('article').css('position','absolute')
					}
				}
				
				if ($(this).hasClass('arrow-right')){
					if ($('.content.active').next('.content').length){
						notorioussvg.changeSlide($currentactive.next(), $currentactive, false);
					} else {
						notorioussvg.changeSlide($('.content').first(), $currentactive, false);
					}
				} else {
					if ($('.content.active').prev('.content').length){
						notorioussvg.changeSlide($('.content.active').prev(), $currentactive, true);
					} else {
						notorioussvg.changeSlide($('.content').last(), $currentactive, true);
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
			window.open( 'https://twitter.com/intent/tweet?url='+notorioussvg.url+'&via=barrelny&text='+encodeURIComponent($('.shout').val())+'&hashtags=gothamis,nycis,barrelny', '_blank');
		});
		
		/* flash backups for videos */
		videojs.options.flash.swf = "lib/video-js.swf";
	}
};

$(function(){
	notorioussvg.init();
});

