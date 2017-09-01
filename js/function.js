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
	$('body').on('tap', '.scroll__link,.prize__menu_link,.js-scroll-to', function(){ 
		var scroll_el = $(this).attr('href'); 
		var data_scroll_el = $(this).data('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
		} 
		if ($(data_scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(data_scroll_el).offset().top }, 500);
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


	$('#modal__presentation').on('shown.bs.modal', function (e) {	
		$('.presentation__slider').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			adaptiveHeight: true,
			fade: true,
			speed: 500,
			// arrows: false,
			nextArrow: $('.modal-footer_next'),
			prevArrow: $('.modal-footer_prev')
		});
		$('.presentation__slider').hide();
		$('.presentation__sliderfoot_next').hide();
	});

	$('#modal__presentation').on('hide.bs.modal', function (e) {
        if ($('.presentation__slider').hasClass('slick-initialized')) {
            $('.presentation__slider').slick("unslick");
        }
		$('.presentation__slider_item_first-screen').show();
		$('.presentation__sliderfoot_next .modal-footer_next').html('Следующая').removeAttr('data-dismiss');
	});

	$('.presentation__slider_start').on('click', function(event) {
		event.preventDefault();
		$('.presentation__slider_item_first-screen').hide();
		$('.presentation__slider').show();
		$('.presentation__slider').resize();
		presntationSliderBtn('.presentation__slider');
	});

	function presntationSliderBtn(el) {
		var slider = $(el);
		var sliderItem = slider.find('.slick-slide');
		var firstSlide = sliderItem.first();
		var lastSlide = sliderItem.last();
		var itemCount = $.each(sliderItem, function(index, val) {
			 count =+ index;
		});
		var currentSlide = slider.slick('slickCurrentSlide');
		$('.presentation__sliderfoot_next_count').find('.current').text(1);
		$('.presentation__sliderfoot_next_count').find('.total').text(itemCount.length);

		// console.log(itemCount.length)
		// if (currentSlide!=0) {
			// $('.presentation__sliderfoot_first').show();
			$('.presentation__sliderfoot_next').show();
		// } else {
		// 	// $('.presentation__sliderfoot_first').hide();
		// 	$('.presentation__sliderfoot_next').hide();
		// }

		slider.on('beforeChange', function() {
			// $('.presentation__sliderfoot_next').slideUp(500);
		});

		slider.on('afterChange', function(){
			var current = slider.slick('slickCurrentSlide');
			// if (current!=0) {
				$('.presentation__sliderfoot_next_count').find('.current').text(current+1);
				// $('.presentation__sliderfoot_next').slideDown(500);
				// $('.presentation__sliderfoot_next_count').find('.total').text(itemCount.length-1);

			if (current==itemCount.length-1) {
				if ($(window).width() < 768) {
					$('.presentation__sliderfoot_next .modal-footer_next').html('Закрыть').attr('data-dismiss', 'modal');;
				} else {
					$('.presentation__sliderfoot_next .modal-footer_next').html('Закрыть инструкцию').attr('data-dismiss', 'modal');;
				}
			} else {
				$('.presentation__sliderfoot_next .modal-footer_next').html('Следующая').removeAttr('data-dismiss');
			}

				// $('.presentation__sliderfoot_first').hide();
				// $('.presentation__sliderfoot_next').show();
			// } else {
			// 	// $('.presentation__sliderfoot_first').show();
			// 	$('.presentation__sliderfoot_next').hide();
			// }
		});
	}

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
					// variableWidth: false,
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					// variableWidth: false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					// variableWidth: false,
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
		variableWidth: true,
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
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					// variableWidth: false,
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
		variableWidth: true,
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
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					// variableWidth: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	$('.js-slider-arrow').each(function(index, el) {

		var sliderItem = $(this).find('.slick-slide');
		var firstSlide = sliderItem.first();
		var lastSlide = sliderItem.last();
		var itemCount = sliderItem.length;
		var next = $(this).find('.slick-next');
		var prev = $(this).find('.slick-prev');

		// var itemCount = $.each(sliderItem, function(index, val) {
		// 	 count =+ index;
		// });

		last = itemCount;
		var currentSlide = $(this).slick('slickCurrentSlide');


		$(this).on('afterChange', function(){

			var thisSlide = $(this).slick('slickCurrentSlide');

			if(firstSlide.hasClass('slick-active')) {
				prev.hide();
				next.show();
			} else if(thisSlide==last) {
				next.hide();
				prev.show();
			}

			if(thisSlide>0 && thisSlide<last)
			{
			   prev.show();
			   next.show();
			}

			if (lastSlide.hasClass('slick-active')) {
				next.hide();
			}

		});

		if(currentSlide==0) {
		   prev.hide();
		} else if(currentSlide==last) {
			next.hide();
		}

	});


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
	$('.js_more').on('tap', function(event) {
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

	// Header login__box.non-reg Неавторизированный пользователь
    $('.non-reg').on('click touchend', function(event) {
    	event.preventDefault();
		$('.login__box_reg').toggleClass('open');
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

	$('body').on('tap', '.home__promo_code_title', function(event) {
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

    $('.brand__top_right_subscribe').on('tap', function(event) {
    	event.preventDefault();
    	$(this).toggleClass('active');
    });

    $('.promo__pop_info_trigger').on('tap', function(event) {
    	event.preventDefault();
    	$(this).toggleClass('active');
    	$(this).siblings('.promo__pop_info_hide').toggleClass('open')
    });

    // All shops - shops__categories767
	$('.shops__categories_trigger').on('click tap', function() {
		$(this).toggleClass('active');
		$(this).parent().find('.shops__categories').slideToggle();
	});

	$('.shops__sort_trigger').on('click tap', function() {
		$(this).toggleClass('active');
		$(this).parent().find('.shops__sort').slideToggle();
	});



    // Blog article - b__article_com.html767 - Написать комментарий
    $('.b__article_com_trigger').on('click tap', function() {
		$(this).toggleClass('active');
		$('.b__article_com_first').toggleClass('open');
	});

    // Страница Все магазины all-shops.html - Сортировка по алфавиту
    $('.shops__sort_trigger_abc').on('tap', function(event) {
    	event.preventDefault();
    	if ($(window).width() <= 767) {
    		$('.shops__sort_abc').insertAfter($(this).parent());
    	}
		$('.shops__sort_abc').toggleClass('open');
	});

    // Страница Все промокоды all-promocodes.html - Фильтр промокодов
    $('.sale__list_trigger').on('tap', function(event) {
    	event.preventDefault();
    	$(this).toggleClass('active');
		$(this).parent().find('.sidebar__section_wrap').toggleClass('open');
	});

    $('.sale__list_save').on('click', function(event) {
    	event.preventDefault();
    	if ($(this).hasClass('active')) {
	    	$(this).removeClass('active').html('Сохранить');
    	} else {
    		$(this).addClass('active').html('Сохранен');
    	}
    });

	if ($('.sale__list_save').hasClass('active')) {
		$('.sale__list_save').html('Сохранен');
	} else {
    	$('.sale__list_save').html('Сохранить');
	}

	$('.office__support_trigger').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('hide');
		$(this).parent().find('.office__news_support').toggleClass('open');
	});
   	
   	$('.office__edit_trigger').on('click', function(event) {
   		event.preventDefault();
   		$(this).siblings('.office__edit_hide').toggleClass('open');
   	});
	$(document).mouseup(function (el){
		var div = $(".office__edit_trigger").closest('.office__edit_row');
		var drop = $('.office__edit_hide');

		if (!div.is(el.target)
		    && div.has(el.target).length === 0) {
			drop.removeClass('open');
		}
	});

	 // Страница Все промокоды all-promocodes.html - всплывашка при нажатии на звезду
    $('sale__list_save').on('click touchend', function(event) {
    	event.preventDefault();
		$('.sale__list_reg').toggleClass('open');
	});

    // office.html Показать/скрыть подтвержденные покупки
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
        var wrap = $(this).closest('.office__checks_item')
        var item = wrap.find('.office__checks_edit_hide');
        if (wrap.hasClass('active')) {
        	item.removeClass('open');
        	wrap.removeClass('active')
        } else {
      		item.addClass('open');
      		wrap.addClass('active');
        }
    });
	$(document).mouseup(function (e){
		var div = $(".office__checks_edit_btn");
		var drop = $('.office__checks_edit_hide');
		var wrap = div.closest('.office__checks_item');

		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			drop.removeClass('open');
      		wrap.removeClass('active');
		}
	});
    // $('.office__checks_edit_hide').on('mouseleave', function() {
    // 	$(this).removeClass('open');
    // });

    // office.html - office__menu767
	// var touch4 = $('.office__menu_trigger');
 //    var menu4 = $('.main__content_sidebar');
 
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
 	$('.office__menu_trigger').on('tap', function() {
	 		$(this).toggleClass('active');
	 		$(this).parent().find('.office__menu').toggleClass('open');
 	});

     // Открытие уведомлений
    $('.office__top_alarm').on('click', function(event) {
    	// event.preventDefault();
 		// if ($(this).hasClass('active')) {
	 		$(this).toggleClass('active');
			$(this).find('.office__top_notification').toggleClass('open');
 		// } else {
	 	// 	$(this).addClass('active');
			// $(this).find('.office__top_notification').addClass('open');
 		// }
	});
	$(document).mouseup(function (el){
		var div = $(".office__top_alarm");
		var drop = $('.office__top_notification');

		if (!div.is(el.target)
		    && div.has(el.target).length === 0) {
			div.removeClass('active');
			drop.removeClass('open');
		}
	});

	// $('.file__upload input[type=file]').on('click', function(event) {
	// 	event.preventDefault();
	// });

	// $('.download__file').on('click', function(event) {
	// 	event.preventDefault();
	// 	$('.file__upload input[type=file]').trigger('click')
	// });

    // Закрытие нижнего всплывающего окна
    $('.modal__down_close').on('click touchend', function(event) {
    	event.preventDefault();
		$('.modal__down').toggleClass('hide');
	});

	// Модальное окно Подтверждение покупки (чеком) - закрытие ошибки
    $('.modal-footer_error_close').on('click touchend', function(event) {
    	event.preventDefault();
		$('.modal-footer_error').toggleClass('hide');
	});

	// Подсказки
    // $('.tooltip__help:not(.tooltip)').on('click', function() {
    // 	$(this).find('.tooltip__text').addClass('open');
    // });
    // $('.tooltip__text').mouseleave(function() {
    // 	$(this).removeClass('open');
    // });

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
    	animation: 'grow',
    	theme: 'tooltipster-noir',
    	interactive: true,
    	zIndex: 121,
		trigger: 'custom',
		triggerOpen: {
		    mouseenter: true,
		    tap: true
		},
		triggerClose: {
		    click: true,
		    tap: true,
		    mouseleave: true,
		    scroll: true
		}
    });

    // Всплывающие подсказки с html контентом. к элементу добавить класс tooltip_html и вложить блок с контентом и классом tooltip__text
    if ($('.tooltip_html')) {
	    tooltipsterHtml($('.tooltip_html'));
    }


    $('.js-more-text').hide();

    $('.js-more-link').on('click', function(event) {
    	event.preventDefault();
    	var wrap = $(this).closest('.js-more-wrapper');
    	var moreText = wrap.find('.js-more-text');
    	var textOpen = $(this).data('textOpen');
    	var textClose = $(this).data('textClose');
    	// var item = wrap.find('.js-more-item');
    	if (!wrap.hasClass('open')) {
    		wrap.addClass('open');
    		if (textOpen != null) {
    			$(this).html(textOpen)
    		}
    		if (moreText) {
			    moreText.show();
    		}
    	} else {
    		wrap.removeClass('open');
    		if (textClose != null) {
    			$(this).html(textClose)
    		}
    		if (moreText) {
			    moreText.hide();
    		}
    	}
    });

    $('.office__settings_section_info').on('change', '.checkbox__input', function() {

    	var wrap = $(this).closest('.office__settings_section_info');
    	var wrapCheck = wrap.find('.js-settings-checked');
    	var wrapUncheck = wrap.find('.js-settings-unchecked');
    	var checked = $(this).is(':checked');
    	var checkbox = $(this).closest('.office__settings_checkbox');

    	if (checked) {
	    	checkbox.appendTo(wrapCheck);
    	} else {		
	    	checkbox.appendTo(wrapUncheck);
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

    $('.grid__item_like').on('click', function(event) {
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
 //    $('.category__top_link1').on('click tap', function(event) {
 //    	event.preventDefault();
 //    	var wrap = $(this).closest('.category__top_item1');
 //    	var other = wrap.siblings('.category__top_item1');
 //    	var trigger = $('.category__top_link1');
 //    	var list = $('.category__top_list2');

 //    	$(this).toggleClass('active');
	// 	wrap.find(list).toggleClass('open');
	// });

	// Страница категорий category.html - Хелп Покупайте, участвуйте в розыгрышах
    $('.category__top_into_wrap i').on('click touchend', function(event) {
    	event.preventDefault();
		$('.category__top_into_help').toggleClass('open');
	});

	// Страница категорий category.html - Доработать хелп в верхнем слайдере
	if (winWidth > 767) {	
	    $('.category__slider_hellip').on('mouseenter', function(event) {
	    	event.preventDefault();
	    	$(this).closest('.category__slider_item').find('.category__slider_help').addClass('open');
		});
	    $('.category__slider_item,.category__slider_help').on('mouseleave', function(event) {
	    	event.preventDefault();
	    	if ($(this).hasClass('category__slider_help')) {    		
		    	$(this).removeClass('open');
	    	} else {
	    		$(this).find('.category__slider_help').removeClass('open');
	    	}
		});
	} else {
	    $('.category__slider_hellip').on('click', function(event) {
	    	event.preventDefault();
	    	$(this).closest('.category__slider_item').find('.category__slider_help').toggleClass('open');
		});
	}

	// Страница категорий category.html - Поделиться в соц.сетях
    $('.sm_social_trigger').on('click touchend', function(event) {
    	event.preventDefault();
		$('.category__top_right_top').toggleClass('open');
	});

	// Страница категорий category.html - Показать другие категории
    $('.category__top_list1_trigger').on('click', function(event) {
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
    $('.category__top_right_subscribe').on('click', function(event) {
    	event.preventDefault();
    	$(this).toggleClass('active');
	});

    $('.faq_question').on('click', function() {
    	$(this).toggleClass('active');
		$(this).closest('.faq_item').find('.faq_answer').toggleClass('open');
	});

	// Страница бренда brand.html - Скрытые информационные блоки в мобильной части - Доработатьg
    $('.brand__trigger').on('click', function(event) {
    	event.preventDefault();
    	$(this).toggleClass('active');
		$(this).parent().find('.brand__info_mobil').toggleClass('open');
	});


	// Страница авторизации autorization.html Появление блока Восстановить пароль
    $('.sign__restore-password').on('click', function(event) {
    	event.preventDefault();
    	$('.recovery, .sign').toggleClass('open');
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

	$('.office__history_mobile_link').on('click', function() {
		$(this).closest('.office__history_mobile_item').toggleClass('active');
	});

	$('.sales__page_aside').stick_in_parent({
        recalc_every: true,
    });

	if ('order' in document.documentElement.style) {
	    // Flexbox-совместимый браузер.
	    // Используем `order` или `flex-direction: column-reverse`.
	    // $('.footer').append('Используем `order`')
	} else {
	    // Браузер без поддержки Flexbox, в том числе IE 9/10.
	    if ($(window).width() <= 767) {

		    $('.faqs-version__unik').each(function(index, val) {
		    	var img = $(this).find('.faqs-version__unik_image');
		    	var text = $(this).find('.faqs-version__unik_description')
		    	 img.insertBefore(text);
		    });

		    $('.sidebar__section_winer').remove();

		    $('.category__top_left').insertAfter('.category__top_right');

		    $('.category__top_right .sm_social_trigger').insertAfter('.category__top_right .category__top_right_subscribe')
		    
		    $('.office__history').insertAfter('.sidebar__section:last-child');

		    $('.b__article_top_left.b__article_social').insertAfter('.b__article_top_right');

	    }
	}

	promoHeight();
	headerSearchOffset($('.header__search_down'))

	$('.js_other_modal').on('click', function(event) {
		event.preventDefault();
		var thisModal = $(this).closest('.modal').attr('id');
		var otherModal = $(this).attr('href');

		$('#'+thisModal).modal('hide');
		$(otherModal).modal('show');

	});

});

$(window).resize(function() {
	headerSearchOffset($('.header__search_down'))
	promoHeight();
});


function headerSearchOffset(el) {
	var search = $('.header__search');
	var width = search.width();
	var coordinate = search.offset();
	el.css({
		left: coordinate.left,
		top: coordinate.top + 10,
		width: width
	});
}

function promoHeight() {
	if ($(window).width() <= 1199 ) {
		$.each($('.sale__list_row'), function(index, el) {
			$(this).find('.sale__list_left').css('height', $(this).height());
		});
	} else {
		$.each($('.sale__list_row'), function(index, el) {
			$(this).find('.sale__list_left').removeAttr('style');
		});
	}
}

function tooltipsterHtml(el) {

    el.each(function(index, el) {
    	
	    $(this).tooltipster({
	    	// trigger: 'click',
	    	animation: 'grow',
	    	theme: 'tooltipster-noir',
	    	contentCloning: true,
	    	contentAsHTML: true,
	    	content: $(this).find('.tooltip__text'),
	    	interactive: true,
	    	// multiple: true,
	    	zIndex: 121,
			trigger: 'custom',
			triggerOpen: {
			    mouseenter: true,
			    tap: true
			},
			triggerClose: {
			    // click: true,
			    tap: true,
			    mouseleave: true,
			    scroll: true
			}
	    });
    });

}

