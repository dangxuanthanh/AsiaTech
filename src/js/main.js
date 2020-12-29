$(document).ready(function () {
	$.fancybox.defaults.parentEl = "form";
	mappingMenu();
	Slide();
	header.headerInit();
});



// Swiper slide
function Slide() {
	var index4 = new Swiper('.index4 .swiper-container', {
		loop:true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
		  nextEl: '.index4 .swiper-button-next',
		  prevEl: '.index4 .swiper-button-prev',
		},
	  });
	
	var index8 = new Swiper('.index8 .swiper-container', {
		slidesPerView: 6,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		loopFillGroupWithBlank: true,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		breakpoints:{
			1200:{
				slidesPerView: 6,
			},
			1024:{
				slidesPerView: 4,
			},
			768:{
				slidesPerView: 3,
			},
			576:{
				slidesPerView: 2,
			},
			320:{
				slidesPerView: 2,
			}
		},
		navigation: {
		  nextEl: '.index8 .swiper-button-next',
		  prevEl: '.index8 .swiper-button-prev',
		},
	  });
}

// mapping
function mappingMenu() {
	let menu = $('header .menu-list').mapping({
		mobileWrapper: 'header .mobile-wrap',
		mobileMethod: 'appendTo',
		desktopWrapper: 'header .right-wrap',
		desktopMethod: 'prependTo',
		breakpoint: 1023.98
	});
}


// HEADER
let header = {
	buttonMenu: () => {
		let button = $(".button-menu .btn");
		let menuMobile = $(".mobile-wrap");
		button.on("click", function () {
			$(this).toggleClass("active");
			menuMobile.toggleClass("active");
		});
	},
	buttonSearch: () => {
		let button = $(".tool-list .search, .block_search .search-icon");
		let searchbox = $(".block_search");
		button.on("click", function () {
			$(this).toggleClass("active");
			searchbox.toggleClass("active");
		});
	},
	headerInit: () => {
		header.buttonMenu();
		header.buttonSearch();
	}
}