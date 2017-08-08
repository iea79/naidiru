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

    $('.category__slider').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		// variableWidth: true,
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
    })

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
		// variableWidth: true,
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

	$('.slider__grid_small').slick({
		infinite: false,
		// lazyLoad: 'progressive',
		slidesToShow: 7,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.slider__grid_medium').slick({
		infinite: false,
		// lazyLoad: 'progressive',
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	function hideSliderArrow(el) {
		var slider = el;
		var sliderItem = slider.find('.slick-slide');
		var firstSlide = sliderItem.first();
		var lastSlide = sliderItem.last();
		var itemCount = $.each(sliderItem, function(index, val) {
			 count =+ index;
		});

		last = count;
		var currentSlide = slider.slick('slickCurrentSlide');

		slider.on('afterChange', function(){

			var thisSlide = slider.slick('slickCurrentSlide');

			if(firstSlide.hasClass('slick-active')) {
				$('.slick-prev').hide();
				$('.slick-next').show();
			} else if(thisSlide==last) {
				$('.slick-next').hide();
				$('.slick-prev').show();
			}

			if(thisSlide>0 && thisSlide<last)
			{
			   $('.slick-prev').show();
			   $('.slick-next').show();
			}

			if (lastSlide.hasClass('slick-active')) {
				$('.slick-next').hide();
			}

		});

		if(currentSlide==0) {
		   $('.slick-prev').hide();
		} else if(currentSlide==last) {
			$('.slick-next').hide();
		}

	}

	if ($('div').is('.js-slider-arrow')) {
		hideSliderArrow($('.js-slider-arrow'));
	}

	if ($('div').is('.slider__grid_small')) {
		hideSliderArrow($('.slider__grid_small'));
	}

	if ($('div').is('.slider__grid_medium')) {
		hideSliderArrow($('.slider__grid_medium'));
	}

	if ($('div').is('.category__slider')) {
		hideSliderArrow($('.category__slider'));
	}

	$('.slider__sidebar').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false
	});

	var menuBtn = $('#link-content');
	var menu = $('#main-content');

	$(menuBtn).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	// $(window).resize(function() {
	// 	var wind = $(window).width();
	// 	if(wind > 760 && menu.is(':hidden')) {
	// 		menu.removeAttr('style');
	// 	}
	// });

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
		var shoppelHey = $('.shoppel__save_left').height();
		var	rez;

		if (rez<shoppelHey) {
			$('.shoppel__save_right').height(shoppelHey-27);
		}
		rez = shoppelHey;
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
    	$(this).toggleClass('active');
		$(this).parent().find('.sidebar__section_wrap').toggleClass('open');
	});

    $('.sale__list_save').on('click', function(event) {
    	event.preventDefault();
    	$(this).toggleClass('active');
    });

	 // Страница Все промокоды all-promocodes.html - всплывашка при нажатии на звезду
    $('sale__list_save').on('click touchend', function(event) {
    	event.preventDefault();
		$('.sale__list_reg').toggleClass('open');
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
    // $('.office__checks_edit_hide').on('mouseleave', function() {
    // 	$(this).removeClass('open');
    // });

 //    // office.html - office__menu767
	// var touch4 = $('.office__menu_trigger');
 //    var menu4 = $('.office__menu');
 
 //    $(touch4).on('click', function(e) {
 //        e.preventDefault();
 //        menu4.slideToggle();
 //    });
 //    $(window).resize(function(){
 //        var wid = $(window).width();
 //        if(wid > 760 && menu4.is(':hidden')) {
 //            menu4.removeAttr('style');
 //        }
 //    });

    // Личный кабинет меню на мобильных разрешениях
    $('.office__menu_trigger').on('click', function() {
    	$('.office__menu_trigger').toggleClass('active');
    	$('.office__menu').toggleClass('open');

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

    $('.js-more-text').hide();

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
    		if (wrap.find('.js-more-text')) {
			    $('.js-more-text').show();
    		}
    	} else {
    		wrap.removeClass('open');
    		if (textClose != null) {
    			$(this).html(textClose)
    		}
    		if (wrap.find('.js-more-text')) {
			    $('.js-more-text').hide();
    		}
    	}
    });

    $('.office__settings_shops').on('change', '.checkbox__input', function() {

    	var checked = $(this).is(':checked');
    	var checkbox = $(this).closest('.office__settings_checkbox');

    	if (checked) {
	    	checkbox.appendTo('.office__settings_checked_shop');
    	} else {		
	    	checkbox.appendTo('.office__settings_unchecked_shop');
    	}
    });

    $('.office__settings_info_subscribe').on('change', '.checkbox__input', function() {
    	var unsubscribe = $('.office__settings_info_unsubscribe').is(':checked');
    	var otherCheck = $('.office__settings_info_subscribe .checkbox__input:not(.office__settings_info_unsubscribe)');

    	if (unsubscribe) {
	    	otherCheck.removeAttr('checked');
	    	// console.log('checked');
    	}
    });

    $('.office__shops_coupons_preferd').on('click', '.sale__list_save', function(event) {
    	event.preventDefault();
    	$(this).closest('.sale__list_row').remove();
    });

    $('.grid__item_like').on('click touchend', function(event) {
    	event.preventDefault();
    	$(this).toggleClass('active');
    });

    $('.reviews__sidebar_trigger').on('click', function() {
    	$(this).toggleClass('active');
    	$('.reviews__sidebar').toggleClass('open');
    });

    // Плагин Form Styler
    $('select').styler();

    // Стилизаци прокрутки просто к обрезаемому блоку добавить класс scrollbar-inner
    $('.scrollbar-inner').scrollbar();

    // Страница категорий category.html - доработать скрипт меню
    $('.category__top_link1').on('click touchend', function(event) {
    	event.preventDefault();
		$(this).parent().find('.category__top_list2').toggleClass('open');
	});

	// Страница категорий category.html - Хелп Покупайте, участвуйте в розыгрышах
    $('.category__top_into_wrap i').on('click touchend', function(event) {
    	event.preventDefault();
		$('.category__top_into_help').toggleClass('open');
	});

	// Страница категорий category.html - Доработать хелп в верхнем слайдере
    $('.category__slider_hellip').on('mouseenter', function(event) {
    	event.preventDefault();
    	$(this).closest('.category__slider_item').find('.category__slider_help').addClass('open');
	});

    $('.category__slider_help').on('mouseleave', function(event) {
    	event.preventDefault();
    	$(this).removeClass('open');
	});

	// Страница категорий category.html - Поделиться в соц.сетях
    $('.sm_social_trigger').on('click touchend', function(event) {
    	event.preventDefault();
		$('.category__top_right_top').toggleClass('open');
	});

	// Страница категорий category.html - Показать другие категории
    $('.category__top_list1_trigger').on('click touchend', function(event) {
    	event.preventDefault();
    	$(this).toggleClass('active');
		$('.category__top_list1_wrap').toggleClass('open');
	});

	// Страница категорий category.html - Подписаться на категорию
 //    $('.category__top_list1_trigger').on('click touchend', function(event) {
 //    	event.preventDefault();
	// 	$('.category__top_list1_wrap').toggleClass('open');
	// });

	// Страница FAQ faq.html - Показать ответ - нужно доработать
    $('.category__top_right_subscribe').on('click touchend', function(event) {
    	event.preventDefault();
    	$('.category__top_right_subscribe').toggleClass('active');
	});

    // Страница бренда brand.html - Хелпы на промокодах - Нужно доработать
    $('.sale__list_top_help').on('click', function() {
    	$(this).find('.sale__list_top_text').addClass('open');
    });
    $('.sale__list_top_text').mouseleave(function() {
    	$(this).removeClass('open');
    });

    $('.faq_question').on('click touchend', function(event) {
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
    	$(this).toggleClass('active');
		$(this).parent().find('.brand__info_mobil').toggleClass('open');
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