$(document).ready(function() {
	
	$('.main-menu > li').click(function() {
		$(this).siblings().removeClass('menu-active').children().css('color', '#727272');
		$(this).addClass('menu-active').children().css('color', '#fff');
		if ($(window).width() < 992) {
			$('.header-menu').slideUp('fast');
			$('.icon-menu').toggleClass('mob-btn-active');
		};
	});

	//Mobile menu
	$('.icon-menu').click(function() {
		$('.header-menu').slideToggle('fast');
		$(this).toggleClass('mob-btn-active');
	});

	/*Resize menu*/
	var x = 0;
	var y = 0;

	if ($(window).width() < 992) {
		$('.main-menu > li:last-child').prependTo('.main-menu');
		$('.main-menu > li:first-child > a').text('Вход на сайт');
		$('<span class="icon-add-user"></span>').prependTo('.main-menu > li:first-child a');
		$('.dropdown-toggle').attr('data-toggle', '');
		x++;
	};

	if ($(window).width() > 992) {
		y = 1;
	};

	$(window).resize(function() {
		if ($(window).width() > 992) {
			$('.header-menu').show();
			y++;
			x = 0;
			if (y > 1) {return} else {
				$('.main-menu > li:first-child').appendTo('.main-menu');
				$('.main-menu > li:last-child > a').text('Войти/Регистрация');
				$('.dropdown-toggle').attr('data-toggle', 'dropdown');
				//$('<span class="icon-add-user"></span>').prependTo('.main-menu > li:last-child a');
			};
			
		} else {
			$('.header-menu').hide();
			$('.icon-menu').addClass('mob-btn-active');
			//var x = 0;
			x++;
			y = 0;
			if (x > 1) {return} else {
				$('.main-menu > li:last-child').prependTo('.main-menu');
				$('.main-menu > li:first-child > a').text('Вход на сайт');
				$('<span class="icon-add-user"></span>').prependTo('.main-menu > li:first-child a');
				$('.dropdown-toggle').attr('data-toggle', '');
				//alert(x);
			}
		}
	});

	/*Readmore*/
	$('.news-item-more li > a').click(function() {
		$('.news-item-more li > a').removeClass('active-green');
		$(this).addClass('active-green');
	});

	/*Main page slider*/
	$('.main-top-slider').slick({
		//autoplay: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true
			}
		}
		]
	});

	$('.news-like span:first-child, .news-msg span:first-child').click(function() {
		$(this).parent().addClass('green');
	});

	//ScrollTop
	$('.scroll-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	//Popup Registration
	$('.open-registration-popup').magnificPopup({
		type:'inline',
		midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});


});	