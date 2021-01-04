$(document).ready(function () {
	$.fancybox.defaults.parentEl = "form";
	mappingMenu();
	Slide();
	setBackgroundElement();
	header.headerInit();
	// tabActiveHome();
});

// set Background
setBackgroundElement();

function setBackgroundElement() {
	$("[setBackground]").each(function() {
		var background = $(this).attr("setBackground");
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-size": "cover",
			"background-position": "center center",
		});
	});
	$("[setBackgroundRepeat]").each(function() {
		var background = $(this).attr("setBackgroundRepeat");
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-repeat": "repeat",
		});
	});
}


// Swiper slide
function Slide() {

	// tech-detail
	var galleryThumbs = new Swiper('.image-thumb .gallery-thumbs', {
		spaceBetween: 30,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints:{
			320:{
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768:{
				spaceBetween: 30,
				slidesPerView: 3,
			},
			1200:{
				slidesPerView: 4,
			}
		}
	});
	var galleryTop = new Swiper('.image-thumb .gallery-top', {
		spaceBetween: 10,
		navigation: {
		nextEl: '.image-thumb .swiper-button-next',
		prevEl: '.image-thumb .swiper-button-prev',
		},
		thumbs: {
		swiper: galleryThumbs
		}
	});
	// project-detail
	var galleryThumbs = new Swiper('.project-thumb-detail .gallery-thumbs', {
		spaceBetween: 30,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints:{
			320:{
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768:{
				spaceBetween: 30,
				slidesPerView: 3,
			},
			1200:{
				slidesPerView: 4,
			}
		}
	});
	var galleryTop = new Swiper('.project-thumb-detail .gallery-top', {
		spaceBetween: 10,
		navigation: {
		nextEl: '.project-thumb-detail .swiper-button-next',
		prevEl: '.project-thumb-detail .swiper-button-prev',
		},
		thumbs: {
		swiper: galleryThumbs
		}
	});

	// index, section4
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
	// Services - KCN
	var wrapKCN = new Swiper('.wrap-img .swiper-container', {
		loop:true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
		nextEl: '.wrap-img .swiper-button-next',
		prevEl: '.wrap-img .swiper-button-prev',
		},
	});
	// index, section8
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

	$(".trinity-item-swiper .index8").each(function(index, element) {

		var index8 = new Swiper('.tab-item .swiper-container', {
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
	});

	// tech-detail-news-others
	var techdetail = new Swiper('.content-news .swiper-container', {
		slidesPerView: 6,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		breakpoints:{
			1024:{
				slidesPerView: 4,
			},
			768:{
				slidesPerView: 3,
				spaceBetween: 30,
			},
			576:{
				slidesPerView: 2,
			},
			320:{
				slidesPerView: 2,
				spaceBetween: 10,
			}
		},
		navigation: {
		nextEl: '.content-news .swiper-button-next',
		prevEl: '.content-news .swiper-button-prev',
		},
	});
	// services-kcn
	var techdetail = new Swiper('.demo .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints:{
			1024:{
				slidesPerView: 4,
			},
			768:{
				slidesPerView: 3,
				spaceBetween: 30,
			},
			576:{
				slidesPerView: 2,
			},
			320:{
				slidesPerView: 2,
				spaceBetween: 10,
			}
		},
		navigation: {
		nextEl: '.demo .swiper-button-next',
		prevEl: '.demo .swiper-button-prev',
		},
	});
	// introduce - index5
	var techdetail = new Swiper('.item-5 .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints:{
			1024:{
				slidesPerView: 4,
			},
			768:{
				slidesPerView: 3,
				spaceBetween: 30,
			},
			576:{
				slidesPerView: 2,
			},
			320:{
				slidesPerView: 2,
				spaceBetween: 10,
			}
		},
		navigation: {
		nextEl: '.item-5 .swiper-button-next',
		prevEl: '.item-5.swiper-button-prev',
		},
	});
	// services-list
	var services = new Swiper('.wrap-slide .swiper-container', {
		slidesPerView: 6,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints:{
			1024:{
				slidesPerView: 6,
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
		nextEl: '.wrap-slide .swiper-button-next',
		prevEl: '.wrap-slide .swiper-button-prev',
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

function tabActiveHome() {
	$(".tab-navigation li a").on("click", function() {
		$(this)
			.parents(".tab-navigation")
			.find("li")
			.removeClass("active");
		$(this)
			.parents("li")
			.addClass("active");

		var display = $(this).attr("data-type");
		$(".tab-item").removeClass("active");
		$("#" + display).addClass("active");

		let maxHeight = 400;
		let contentTab = $(".tab-wrapper .tab-item.active");
		// console.log(contentTab.height())
		if (contentTab.height() < maxHeight) {
			$(contentTab).find('.btn-view-more').hide()
		}
	});
}


function openCity(evt, idname) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(idname).style.display = "block";
	evt.currentTarget.className += " active";
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