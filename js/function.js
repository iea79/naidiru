$(document).ready(function() {

	// First screen full height
	function setHeiHeight() {
	    $('.full__height').css({
	        minHeight: $(window).height() + 'px'
	    });
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы

	var winWidth = $(window).width();
	var headHeight = $('.header').height();

	function setMenuHei() {
		var winHeight = $(window).height();
		var headHeight = $('.header').height();
		var menuHeight = winHeight - headHeight;
		// console.log(headHeight);
		// console.log(menuHeight);
		if (winWidth<=991) {	
			return menuHeight;
		} else {
			// if (!$(this).hasClass('open')) {
				$('.login__box_drop').removeAttr('style');
				$('body').removeClass('body-overflow');
			// }
		}
	}
	
	if (winWidth<=991) {	
		setMenuHei();
	}

	$(window).resize(function() {

		// $('.login__box,.mobile__menu').removeClass('open').removeAttr('style');
		// $('body').removeClass('body-overflow');
		resizeMenu();

		setHeiHeight();
		// if (winWidth<=991) {	
			setMenuHei();
		// }
	});

	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
	// $('#main__menu a[href^="#"]').click( function(){ 
	// 	var scroll_el = $(this).attr('href'); 
	// 	if ($(scroll_el).length != 0) {
	// 	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	// 	}
	// 	return false;
	// });

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
    // $(document).ready(function(){
    //     var HeaderTop = $('#header').offset().top;
        
    //     $(window).scroll(function(){
    //             if( $(window).scrollTop() > HeaderTop ) {
    //                     $('#header').addClass('stiky');
    //             } else {
    //                     $('#header').removeClass('stiky');
    //             }
    //     });
    // });

	$('.slider__fullwide').slick({
		// infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});

	$('.slider__grid').slick({
		infinite: false,
		// lazyLoad: 'progressive',
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		// centerMode: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					// variableWidth: false,
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					variableWidth: false,
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					variableWidth: false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					variableWidth: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.slider__sidebar').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false
	});

	$('.js_more_btn ').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.js_more_wrap').find('.js_more_item').show();
	});

	// Sale list open text
	$('.sale__list_more').on('click', function(event) {
		event.preventDefault();
		var wrap = $(this).closest('.sale__list_terms');

		$(this).closest('.sale__list_terms').toggleClass('open');

		if (wrap.hasClass('open')) {
			$(this).text('Скрыть');
		} else {
			$(this).text('Подробнее');
		}
	});

	// Click for open more text
	$('.js_more').on('click', function(event) {
		event.preventDefault();
		var wrap = $(this).closest('.js_more_wrap');
		var text = $(this).data('text');
		$(this).parent().toggleClass('open');

		if (wrap.hasClass('open')) {
			$(this).text('Скрыть');
		} else {
			$(this).text(text);
		}
	});

	// Login box
	if (winWidth<=991) {	
		$('.login__box_avatar').on('click', function(event) {
			event.preventDefault();
			
			$('.login__box').toggleClass('open');
			if (winWidth<=991) {
				$('body').addClass('body-overflow');
				$('.body__overlay').show();
			}
			if ($('.mobile__menu').hasClass('open')) {
				$('.mobile__menu').removeClass('open');
			}
			if (winWidth<=991) {
				$('.header__bottom_center').removeClass('open');
				resizeMenu();
				if (!$('.login__box').hasClass('open')) {
					// $('.login__box_drop').removeAttr('style');
					$('body').removeClass('body-overflow');
					$('.body__overlay').hide();
				}
			}
		});
	} else {
		$('.login__box').on('mouseenter', function(event) {
			event.preventDefault();
			
			$(this).addClass('open');
		});
		$('.login__box').on('mouseleave', function(event) {
			event.preventDefault();
			
			$(this).removeClass('open');
		});
	}

	// Mobile menu
	$('.mobile__menu_toggle').on('click', function(event) {
		event.preventDefault();
		$('.mobile__menu').toggleClass('open');
		$('body').addClass('body-overflow');
		if ($('.header__bottom_center,.login__box').hasClass('open')) {
			$('.header__bottom_center,.login__box').removeClass('open');
		}
		if (winWidth<=991) {
			$('.header__bottom_center').removeClass('open');
			resizeMenu();
			$('.body__overlay').show();
		}
		if (!$('.mobile__menu').hasClass('open')) {
			$('body').removeClass('body-overflow');
			$('.body__overlay').hide();
		}
		if (!$('.login__box').hasClass('open')) {
			$('.login__box_drop').removeAttr('style');
		}
	});

	$('.body__overlay').on('click', function() {
		$('.header__bottom_center,.login__box,.mobile__menu').removeClass('open');
		$(this).hide();
		$('body').removeClass('body-overflow');
	});

	function resizeMenu() {
		var winWidth = $(window).width();
		var headHeight = $('.header').height();
		if (winWidth <=991) {		
			$('.mobile__menu').css({
				maxHeight: setMenuHei,
				top:headHeight
			});
			$('.login__box_drop').css({
				maxHeight: setMenuHei,
				top:headHeight
			});
			$('.body__overlay').css({
				// height: setMenuHei,
				top:headHeight
			});
		} else {
			$('.login__box_drop,.mobile__menu').removeAttr('style');
			if ($('body').hasClass('body-overflow')) {
				$('body').removeClass('body-overflow');
			}
		}
	}

	$('body').on('click', '.home__promo_code_title', function(event) {
		event.preventDefault();
		if (winWidth <= 767) {
			$('.home__promo_code').toggleClass('open');
		}
	});

	// Mobile search
	$('.header__search_toggle').on('click', function(event) {
		event.preventDefault();
		$('.header__bottom_center').toggleClass('open');
		if ($('.mobile__menu,.login__box').hasClass('open')) {
			$('.mobile__menu,.login__box').removeClass('open');
			$('body').removeClass('body-overflow');
			$('.body__overlay').hide();
		}
	});

	// Code open
	// $('.code__btn').on('click', function(event) {
	// 	event.preventDefault();
	// 	$(this).closest('.code__wrap').addClass('open');
	// });

    // To top scroll
    var pageHei = ($('.wrapper').height());
    var footerHei = $('.footer').height() + 20;
    var contentHei = (pageHei - footerHei);

    $('.to_top').on('click', function(event) {
    	event.preventDefault();
    	$('html, body').animate({ scrollTop: $('body').offset().top }, 500);
    });

    function buttonToTop() {
        if( $(window).scrollTop() > ($(window).height()) ) {
            $('.to_top_float').addClass('to_top_show');
	        if( $(window).scrollTop() > (pageHei  - footerHei) ) {
	        	$('.to_top_float').addClass('to_top_bottom');
	        } else {
	        	$('.to_top_float').removeClass('to_top_bottom');
	        }
        } else {
            $('.to_top_float').removeClass('to_top_show');
        }
    }

    buttonToTop();

    $(window).scroll(function(){
    	buttonToTop();
    });

    // All shops - shops__categories767
	var touch1 = $('.shops__categories_trigger');
    var menu1 = $('.shops__categories');
 
    $(touch1).on('click', function(e) {
        e.preventDefault();
        menu1.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && menu1.is(':hidden')) {
            menu1.removeAttr('style');
        }
    });

    // All shops - shops__sort767
	var touch2 = $('.shops__sort_trigger');
    var menu2 = $('.shops__sort');
 
    $(touch2).on('click', function(e) {
        e.preventDefault();
        menu2.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && menu2.is(':hidden')) {
            menu2.removeAttr('style');
        }
    });

    // Blog article - b__article_com767
	var touch3 = $('.b__article_com_trigger');
    var menu3 = $('.b__article_com_first');
 
    $(touch3).on('click', function(e) {
        e.preventDefault();
        menu3.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && menu3.is(':hidden')) {
            menu3.removeAttr('style');
        }
    });

});