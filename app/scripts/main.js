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
		//$('.main-menu > li:first-child > a').text('Вход на сайт');
		//$('<span class="icon-add-user"></span>').prependTo('.main-menu > li:first-child a');
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
				//$('.main-menu > li:last-child > a').text('Войти/Регистрация');
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
				//$('.main-menu > li:first-child > a').text('Вход на сайт');
				//$('<span class="icon-add-user"></span>').prependTo('.main-menu > li:first-child a');
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

	$('.profile-sidenav li > a').click(function() {
		$('.profile-sidenav li a').removeClass('profile-sidenav-active');
		$(this).addClass('profile-sidenav-active');
	});

	//Affix
	$('.profile-sidebar').affix({
		offset: {
			top: $('header').height(),
			bottom: $('footer.bottom-footer').height() + $('footer.top-footer').height() + 100
		}
	});

	/*$(window).resize(function() {
		console.log($('header').height());
		$('.profile-sidebar').affix({
			offset: {
				top: $('header').height(),
				bottom: $('footer.bottom-footer').height() + $('footer.top-footer').height() + 100
			}
		});
	});*/

	/*Audio Player*/
	var cssSelector = {
		jPlayer: '#jquery_jplayer_1', 
		cssSelectorAncestor: '#jp_container_1'
	};

	var playlist = [
	{
		author:'TSP',
		title:'Cro Magnon Man',
		discription: 'Текст песни / описание',
		mp3:'http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3',
		oga:'http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg'
	},
	{
		author:'TSP',
		title:'Your Face',
		discription: 'Текст песни / описание',
		mp3:'http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3',
		oga:'http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg'
	},
	{
		author:'TSP',
		title:'Cyber Sonnet',
		discription: 'Текст песни / описание',
		mp3:'http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3',
		oga:'http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg'
	},
	{
		author:'Miaow',
		title:'Tempered Song',
		discription: 'Текст песни / описание',
		mp3:'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
		oga:'http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg'
	},
	{
		author:'Miaow',
		title:'Hidden',
		discription: 'Текст песни / описание',
		mp3:'http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3',
		oga:'http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg'
	},
	{
		author:'Miaow',
		title:'Lentement',
		free:true,
		discription: 'Текст песни / описание',
		mp3:'http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3',
		oga:'http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg'
	},
	{
		author:'Miaow',
		title:'Lismore',
		discription: 'Текст песни / описание',
		mp3:'http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3',
		oga:'http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg'
	},
	{
		author:'Miaow',
		title:'The Separation',
		discription: 'Текст песни / описание',
		mp3:'http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3',
		oga:'http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg'
	},
	{
		author:'Miaow',
		title:'Beside Me',
		discription: 'Текст песни / описание',
		mp3:'http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3',
		oga:'http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg'
	},
	{
		author:'Miaow',
		title:'Bubble',
		free:true,
		discription: 'Текст песни / описание',
		mp3:'http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3',
		oga:'http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg'
	},
	{
		author:'Miaow',
		title:'Stirring of a Fool',
		discription: 'Текст песни / описание',
		mp3:'http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3',
		oga:'http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg'
	},
	{
		author:'Miaow',
		title:'Partir',
		free: true,
		discription: 'Текст песни / описание',
		mp3:'http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3',
		oga:'http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg'
	},
	{
		author:'Miaow',
		title:'Thin Ice',
		discription: 'Текст песни / описание',
		mp3:'http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3',
		oga:'http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg'
	}
	];

	var options = {
		swfPath: 'js',
		supplied: 'oga, mp3',
		wmode: 'window',
		smoothPlayBar: false,
		keyEnabled: true
	};

	new jPlayerPlaylist(cssSelector, playlist, options);
	/*End Audio Player*/

});	