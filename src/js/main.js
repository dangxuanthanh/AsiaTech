$(document).ready(function () {
    $.fancybox.defaults.parentEl = "form";
	mappingMenu();
	header.headerInit();
});

function mappingMenu() {
	let menu = $('header .menu-list').mapping({
		mobileWrapper: 'header .mobile-wrap',
		mobileMethod: 'appendTo',
		desktopWrapper: 'header .right-wrap',
		desktopMethod: 'prependTo',
		breakpoint: 1023.98
	});
}

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