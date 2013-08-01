/*
notorious-svg - v - 2013-08-01
Barrel Creative Days project by Jessie Frazelle, Isha Kasliwal, Matt Ortega, Diane Wang, and Molly Sugar.
Lovingly coded by The Nortorious SVG  - http://barrelny.com 
*/
function disable_scroll() {
	if (window.addEventListener) {
		window.addEventListener('DOMMouseScroll', wheel, false);
	}
	window.onmousewheel = document.onmousewheel = wheel;
	document.onkeydown = keydown;
}

function enable_scroll() {
	if (window.removeEventListener) {
		window.removeEventListener('DOMMouseScroll', wheel, false);
	}
	window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}

function lockScrollPosition(){
	// lock scroll position, but retain settings for later
	var scrollPosition = [
	self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
	self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
	];
	var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
	html.data('scroll-position', scrollPosition);
	html.data('previous-overflow', html.css('overflow'));
	html.css('overflow', 'hidden');
	window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

function unlockScrollPosition(){
	// un-lock scroll position
	var html = jQuery('html');
	var scrollPosition = html.data('scroll-position');
	html.css('overflow', html.data('previous-overflow'));
	window.scrollTo(scrollPosition[0], scrollPosition[1]);
}


var notorioussvg = {
	currentScroll: 0,
	scrolling: false,
	lastScroll: 0,
	windowWidth: $(window).width(),
	windowHeight: $(window).height(),
	device: false,
	currentlyScrolling: false,
	changingSlide: false,
	resize: function(){
		notorioussvg.windowHeight = $(window).height();
		notorioussvg.windowWidth = $(window).width();
		
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			notorioussvg.device = true;
		} else {
			notorioussvg.device = false;
		}	
	},
	scrollTo: function(elHref) {
		notorioussvg.currentlyScrolling = true;


		if (notorioussvg.device) {
			notoriousscroller.scrollBy(null, offset, true);
			notorioussvg.currentlyScrolling = false;
			notorioussvg.currentScroll = offset;
		} else {
			$('html, body').animate({ scrollTop: offset}, 400, function(){
				notorioussvg.currentlyScrolling = false;
				notorioussvg.currentScroll = offset;
			});
		}
	},
	onScroll: function(scrollY) {
		var change = scrollY - this.lastScroll;
		var difference = Math.abs(change);
		
		
		this.lastScroll = scrollY;
	},
	init: function() {
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

		/* menu events */
		$('.menu-toggle').bind(oncall, function(e){
			e.preventDefault();
			if ($('nav.dropdown').hasClass('open')){
				$('nav.dropdown').removeClass('open');
			} else {
				$('nav.dropdown').addClass('open');
			}
		});
		
		/*  menu tap off event */
		$('body').bind(oncall, function(e){
			var $target = $(e.target);
			if ($target.hasClass('menu-toggle') || $target.parents().hasClass('menu-toggle') || $target.hasClass('dropdown') || $target.parents().hasClass('dropdown')){
				
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
				
				if ($(this).hasClass('arrow-right')){
					if ($('.content.active').next('.content').length){
						$currentactive.next().addClass('active');
						setTimeout(function(){
							$currentactive.removeClass('active');
							notorioussvg.changingSlide = false;
						}, 500);
					} else {
						$('.content').first().addClass('active');
						setTimeout(function(){
							$currentactive.removeClass('active');
							notorioussvg.changingSlide = false;
						}, 500);
					}
				} else {
					if ($('.content.active').prev('.content').length){
						$('.content.active').prev().addClass('active');
						setTimeout(function(){
							$currentactive.removeClass('active');
							notorioussvg.changingSlide = false;
						}, 300);
					} else {
						$('.content').last().addClass('active');
						setTimeout(function(){
							$currentactive.removeClass('active');
							notorioussvg.changingSlide = false;
						}, 300);
					}
				}
			}
		});
	}
};

$(function(){
	notorioussvg.init();
});

