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
	$('a.scroll__link').click( function(){ 
		var scroll_el = $(this).attr('href'); 
		if ($(scroll_el).length != 0) {
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
		}
		return false;
	});

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

	function shoppelSaveResize() {
		var shoppelHey = $('.shoppel__save_left').height()
		$('.shoppel__save_right').height(shoppelHey-27);
	}

	shoppelSaveResize();

	$(window).resize(function(event) {
		shoppelSaveResize();
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

    // Blog article - b__article_com.html767 Написать комментарий
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

    // Blog article - b__article_com.html767 - Написать комментарий
    $('.b__article_com_trigger').on('click touchend', function(event) {
    	event.preventDefault();
		$('.b__article_com_trigger').toggleClass('active');
	});

    // Страница Все магазины all-shops.html - Сортировка по алфавиту
    $('.shops__sort_trigger_abc').on('click touchend', function(event) {
    	event.preventDefault();
		$('.shops__sort_abc').toggleClass('open');
	});

	// Страница Все промокоды all-promocodes.html - Фильтр промокодов
    $('.sale__list_trigger').on('click touchend', function(event) {
    	event.preventDefault();
		$('.sidebar__section_wrap').toggleClass('open');
	});

     // Страница Все промокоды all-promocodes.html - Сайдбар.Показать больше - доработать
    $('.js-more-link').on('click touchend', function(event) {
    	event.preventDefault();
		$('.sidebar__section_list').toggleClass('open');
	});

	// Страница Все промокоды all-promocodes.html - Всплывашка нужно войти и зарегистрироваться при нажатии на звездочку (не авторизированный пользователь)
    $('.sale__list_save').on('click touchend', function(event) {
    	event.preventDefault();
		$('.sale__list_first').toggleClass('enter');
		$('.sale__list_reg').addClass('open');
	});
	 $('.sale__list_reg a').on('click touchend', function(event) {
    	event.preventDefault();
		$('.sale__list_reg').removeClass('open');
	});

    // office.html Показать/скрыть подтвержденные покупки - не работает
    $('.office__history_confirmed_hide').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
	        $(this).closest('.office__history_left').find('.office__history_confirmed').removeClass('hide');
	        $('.office__history_confirmed_hide').removeClass('active');
        } else {
	        $(this).closest('.office__history_left').find('.office__history_confirmed').addClass('hide');
	        $(this).addClass('active');
        }
    });

    // office.html Редактировать чек - требует корректировок
    $('.office__checks_edit_btn').click(function(e) {
        e.preventDefault();
        var item = $(this).closest('.office__checks_item').find('.office__checks_edit_hide');
        if (item.hasClass('open')) {
        	item.removeClass('open');
        } else {
      		item.addClass('open');
        }
    });
    $('.office__checks_edit_hide').on('mouseleave', function() {
    	$(this).removeClass('open');
    });

    // office.html - office__menu767
	var touch4 = $('.office__menu_trigger');
    var menu4 = $('.main__content_sidebar');
 
    $(touch4).on('click', function(e) {
        e.preventDefault();
        menu4.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && menu4.is(':hidden')) {
            menu4.removeAttr('style');
        }
    });


    // office-news.html Галочка на новостях - Удаление/восстановление
    // Вызов блока .office__news_item_hide с кнопкой Удаления
    $('.office__news_item_mark').click(function(e) {
        e.preventDefault();
        // Здаем переменную только для выбранного элемента
        var item = $(this).closest('.office__news_item');
        if (item.find('.office__news_item_hide').hasClass('open')) {
        	// Удаляем все всплывашки включая текущую если текущая открыта
	        $('.office__news_item_hide').removeClass('open');
	        $('.office__news_item').removeClass('marked');
        } else {
        	// Если текущая закрыта
        	// В соседних блоках ищем и скрываем всплывашку
        	item.siblings().find('.office__news_item_hide').removeClass('open');	
	        item.siblings().find('.office__news_item').removeClass('marked');
	        // Показываем всплывашку в текущем блоке
	        item.find('.office__news_item_hide').addClass('open');
	        item.find('.office__news_item').addClass('marked');
        }
    });

    $('.office__news_item').on('mouseleave', function() {
    	$(this).removeClass('marked');
    	$(this).find('.office__news_item_hide').removeClass('open');
    });

    // Нажатие на кнопку удаления
    $('.office__news_item_btn').click(function(e) {
        e.preventDefault();
        var item = $(this).closest('.office__news_item');
        item.find('.office__news_item_hide').removeClass('open');
        item.find('.office__news_item').removeClass('marked');
        item.find('.news__del').addClass('open');
    });

    // Нажатие на кнопку восстановления
    $('.news__del_restore').click(function(e) {
        e.preventDefault();
        var item = $(this).closest('.office__news_item');
        item.find('.news__del').removeClass('open');
    });

    // office-edit.html Скрыть текстовое уведомление office__edit_note - не работает правильно
     $('.office__edit_note .close').click(function(e) {
        e.preventDefault();
        $(this).closest('.office__edit_note').addClass('hide');
    });

    // Всплывающие подсказки. к элементу добавить класс tooltip и в атрибуте title написать нужный текст
    $('.tooltip').tooltipster({
    	trigger: 'click',
    	animation: 'fade',
    	theme: 'tooltipster-noir',
    });

    $('.js-more-link').on('click', function(event) {
    	event.preventDefault();
    	var wrap = $(this).closest('.js-more-wrapper');
    	var textOpen = $(this).data('textOpen');
    	var textClose = $(this).data('textClose');
    	// var item = wrap.find('.js-more-item');
    	if (!wrap.hasClass('open')) {
    		wrap.addClass('open');
    		if (textOpen != null) {
    			$(this).html(textOpen)
    		}
    	} else {
    		wrap.removeClass('open');
    		if (textClose != null) {
    			$(this).html(textClose)
    		}
    	}
    });

    $('.grid__item_like').on('click touchend', function(event) {
    	event.preventDefault();
    	$(this).toggleClass('active');
    });

    // Плагин Form Styler
    $('select').styler();

    // Стилизаци прокрутки просто к обрезаемому блоку добавить класс scrollbar-inner
    $('.scrollbar-inner').scrollbar();

    // Страница категорий category.html - доработать скрипт меню
    $('.category__top_link1').on('click touchend', function(event) {
    	event.preventDefault();
		$('.category__top_list2').toggleClass('open');
	});

	// Страница категорий category.html - Хелп Покупайте, участвуйте в розыгрышах
    $('.category__top_into_wrap i').on('click touchend', function(event) {
    	event.preventDefault();
		$('.category__top_into_help').toggleClass('open');
	});

	// Страница категорий category.html - Доработать хелп в верхнем слайдере
    $('.category__slider_hellip').on('click touchend', function(event) {
    	event.preventDefault();
		$('.category__slider_help').toggleClass('open');
	});

	// Страница категорий category.html - Поделиться в соц.сетях
    $('.sm_social_trigger').on('click touchend', function(event) {
    	event.preventDefault();
		$('.social__down').toggleClass('open');
	});

	// Страница категорий category.html - Показать другие категории
    $('.category__top_list1_trigger').on('click touchend', function(event) {
    	event.preventDefault();
		$('.category__top_list1_wrap').toggleClass('open');
	});

	// Страница категорий category.html - Список подкатегорий в сайдбаре
    $('.category__top_list1_trigger').on('click touchend', function(event) {
    	event.preventDefault();
		$('.category__top_list1_wrap').toggleClass('open');
	});

	// Страница категорий category.html - Подписаться на категорию
    $('.category__top_right_subscribe').on('click touchend', function(event) {
    	event.preventDefault();
    	$('.category__top_right_subscribe').toggleClass('active');
	});

    // Страница бренда brand.html - Хелпы на промокодах - Нужно доработать
    $('.sale__list_top_help').on('click touchend', function(event) {
    	event.preventDefault();
    	$(this).toggleClass('active');
		$(this).siblings('.faq_answer').toggleClass('open');
	});

	// Страница бренда brand.html - Хелп
    $('.brand__info_advantage_help').on('click touchend', function(event) {
    	event.preventDefault();
		$('.brand__info_advantage_answer').toggleClass('open');
	});

	// Страница бренда brand.html - Скрытые информационные блоки в мобильной части - Доработатьg
    $('.brand__trigger').on('click touchend', function(event) {
    	event.preventDefault();
    	$('.brand__trigger').toggleClass('active');
		$('.brand__info_mobil').toggleClass('open');
	});

	 // Страница бренда brand.html - Магазин в/из список Любимых
    $('.brand__top_right_subscribe').on('click touchend', function(event) {
    	event.preventDefault();
    	$('.brand__top_right_subscribe').toggleClass('active');
	});

	$('.accordeon__text').hide();

	$('.accordeon__header').click(function() {
		var findArticle = $(this).next();
		var findWrapper = $(this).closest('.accordeon__text');
		$(this).removeClass('rect');
		if (findArticle.is(':visible')) {
			findArticle.slideUp('fast');   
		}
		else {
			findWrapper.find('.accordeon__text').slideUp('fast');
			findArticle.slideDown('fast');
			$(this).addClass('rect');
		}
	});

	//E-mail Ajax Send
	// $("form").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку! Наш менеджер свяжется с Вами");
	// 		setTimeout(function() {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 			$.magnificPopup.close();
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

});