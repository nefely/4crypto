jQuery(document).ready(function() {
    jQuery('.value_block:first-child').addClass('collapse');

    if (jQuery('.container_news_left_block').length >= 1) {
        jQuery('.container_news_left_block').swipe({
            swipeStatus: function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
                if (phase == "start") {
                    // сработает в начале swipe
                }
                if (phase == "end") {
                    //сработает через 20 пикселей то число которое выбрали в threshold
                    if (direction == 'left') {
                        /* console.log(jQuery('.switch_section_1 .container_news_lnews_block:last-child').offset().top)*/

                        jQuery('.switch_section_1').css('display', 'none');
                        jQuery('.switch_section_2').css('display', 'block');
                        jQuery('.bg-btn:nth-child(2)').addClass('bg-btn-active');
                        jQuery('.bg-btn:nth-child(1)').removeClass('bg-btn-active');
                        jQuery('html, body').animate({
                            scrollTop: jQuery(".switch_section_1 .container_news_lnews_block:first-child").offset().top
                        }, 0);
                        console.log(jQuery('.switch_section_1').height());
                        console.log(jQuery('.switch_section_2').height());
                    }
                    if (direction == 'right') {
                        /*console.log(jQuery('.switch_section_2 .container_news_lnews_block:last-child').offset().top)*/

                        jQuery('.switch_section_1').css('display', 'block');
                        jQuery('.switch_section_2').css('display', 'none');
                        jQuery('.bg-btn:nth-child(1)').addClass('bg-btn-active');
                        jQuery('.bg-btn:nth-child(2)').removeClass('bg-btn-active');
                        jQuery('html, body').animate({
                            scrollTop: jQuery(".switch_section_2 .container_news_lnews_block:first-child").offset().top
                        }, 0);
                        console.log(jQuery('.switch_section_1').height());
                        console.log(jQuery('.switch_section_2').height());
                    }
                    if (direction == 'up') {
                        //сработает при движении вверх
                    }
                    if (direction == 'down') {
                        //сработает при движении вниз
                    }
                }
            },
            triggerOnTouchEnd: false,
            threshold: 50
        });
    }

    var t;

    if (jQuery('.bg-btn').length >= 1) {
        jQuery('.bg-btn').click(function() {
            jQuery('.bg-btn').removeClass('bg-btn-active');
            jQuery(this).toggleClass('bg-btn-active');
        });
    }

    if ((jQuery('.latest').length >= 1) && (jQuery('.hot').length >= 1) && (jQuery('.switch_section_1').length >= 1) && (jQuery('.switch_section_2').length >= 1)) {
        jQuery('.latest').click(function() {
            jQuery('.switch_section_1').css('display', 'block');
            jQuery('.switch_section_2').css('display', 'none');
        });
        jQuery('.hot').click(function() {
            jQuery('.switch_section_2').css('display', 'block');
            jQuery('.switch_section_1').css('display', 'none');
        });
    }

    if (jQuery('.button_load').length >= 1) {
        jQuery('.button_load').on('click', function(e) {
            e.preventDefault();
            clearTimeout(t);
            jQuery(this).toggleClass('loading');
            t = setTimeout(function() {
                jQuery('.button_load').removeClass("loading")
            }, 2500);
        });
    }

    if (jQuery('.latest_news_switch > ul > li').length >= 1) {
        jQuery('.latest_news_switch > ul > li').click(function() {
            jQuery('.latest_news_switch > ul > li').removeClass('switch_active');
            jQuery(this).addClass('switch_active');
        });
    }

    /*table*/
    if (jQuery('.q_and_a_title').length >= 1) {
        jQuery('.q_and_a_title').click(function() {
            jQuery(this).parent().children('.q_and_a_content').slideToggle(350);
            jQuery(this).children('span').children('img').toggleClass('active_toggle_span');
        });
    }

    if ((jQuery('.slider-nav').length >= 1) && (jQuery('.slider-for').length >= 1)) {
        /*sliders*/
        jQuery('.slider-nav').slick({
            dots: false,
            asNavFor: '.slider-for',
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            speed: 300,
            focusOnSelect: true,
            prevArrow: '<button class="slick-arrow prevArrow"><i class="icon ion-ios-arrow-back"></i></button>',
            nextArrow: '<button class="slick-arrow prevArrow"><i class="icon ion-ios-arrow-forward"></i></button>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    variableWidth: true,
                    arrows: false
                }
            }]
        });
        jQuery('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            speed: 200,
            fade: true,
            /*,
              asNavFor: '.slider-nav'*/
            responsive: [{
                breakpoint: 768,
                settings: {
                    asNavFor: '.slider-nav'
                }
            }]
        });

        jQuery('.lnews a').mouseenter(function() {
            jQuery('.lnews a').removeClass('slick-current');
            var slick_ind = jQuery(this).attr('data-slick-index');
            jQuery('.slider-for').slick('slickGoTo', slick_ind);
        });
    }

    /*reclam */
    if (jQuery('.secondbanner').length >= 1) {
        if (window.matchMedia('(max-width: 540px)').matches) {
            jQuery('.secondbanner').prependTo('.latesticos');
            jQuery('.secondbanner').prependTo('.topguides');
        } else {
            jQuery('.secondbanner').appendTo('.banners');
        }
    }

    if (jQuery('.footer_social').length >= 1) {
        if (window.matchMedia('(max-width: 767px)').matches) {
            jQuery('.footer_social').prependTo(jQuery('.rules'));
        } else {
            jQuery('.footer_social').appendTo(jQuery('.social_icon'));
        }
    }

    if (window.matchMedia('(max-width: 991px)').matches) {
        if (jQuery('.second_crypto_val_block').length >= 1) {
            jQuery('.second_crypto_val_block').removeClass('crypto_values').addClass('crypto_val').appendTo('.guidesandquestion > .wrapper');
        }
        if (jQuery('nav .value_block').length >= 1) {
            jQuery('nav .value_block').removeClass('collapse');
        }
    } else {
        if (jQuery('nav .value_block').length >= 1) {
            jQuery('nav .value_block').removeClass('collapse');
        }
        if (jQuery('.value_block:first-child').length >= 1) {
            jQuery('.value_block:first-child').addClass('collapse');
        }
        if (jQuery('.second_crypto_val_block').length >= 1) {
            jQuery('.second_crypto_val_block ').appendTo(jQuery('.crypto > .wrapper')).addClass('crypto_values').removeClass('crypto_val');
            jQuery('.second_crypto_val_block ').prependTo(jQuery('.container_news_right')).addClass('crypto_values').removeClass('crypto_val');
        }
    }

    /*init mobile menu*/
    jQuery(function() {
        jQuery('.menu').slicknav();
    });

    /*multiple-items*/
    if (jQuery('.multiple-items').length >= 1) {
        jQuery('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true,
                    centerMode: false
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true,
                    centerMode: false
                }
            }]
        });
    }

    /*crypto toggle*/
    if (jQuery('.crypto_val .value_block').length >= 1) {
        jQuery('.crypto_val .value_block').click(function() {
            jQuery(this).parent().children().removeClass('collapse');
            jQuery(this).addClass('collapse');
        });
    }

    if (window.matchMedia('(max-width: 991px)').matches) {
        if (jQuery('nav .crypto_values .value_block').length >= 1) {
            jQuery('nav .crypto_values .value_block').click(function() {
                jQuery(this).parent().children().removeClass('collapse');
            });
        }
    } else {
        if (jQuery('.crypto_values .value_block').length >= 1) {
            jQuery('.crypto_values .value_block').click(function() {
                jQuery(this).parent().children().removeClass('collapse');
                jQuery(this).addClass('collapse');
            });
        }
    }

    jQuery(function() {
        jQuery('[data-popup-open]').on('click', function(e) {
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            jQuery('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
            e.preventDefault();
        });
        jQuery('[data-popup-close]').on('click', function(e) {
            var targeted_popup_class = jQuery(this).attr('data-popup-close');
            jQuery('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
            e.preventDefault();
        });
    });

    jQuery(window).resize(function() {
        
        if (jQuery('.secondbanner').length >= 1) {
            if (window.matchMedia('(max-width: 540px)').matches) {
                jQuery('.secondbanner').prependTo('.latesticos');
                jQuery('.secondbanner').prependTo('.topguides');
            } else {
                jQuery('.secondbanner').appendTo('.banners');
            }
        }

        if (jQuery('.footer_social').length >= 1) {
            if (window.matchMedia('(max-width: 767px)').matches) {
                jQuery('.footer_social').prependTo(jQuery('.rules'));
            } else {
                jQuery('.footer_social').appendTo(jQuery('.social_icon'));
            }
        }

        if (jQuery('nav .value_block').length >= 1) {
            if (window.matchMedia('(max-width: 767px)').matches) {
                jQuery('nav .value_block').removeClass('collapse');
            } else {
                jQuery('nav .value_block').removeClass('collapse');
            }
        }

        if (window.matchMedia('(max-width: 991px)').matches) {
            if (jQuery('.second_crypto_val_block').length >= 1) {
                jQuery('.second_crypto_val_block').removeClass('crypto_values').addClass('crypto_val').appendTo('.guidesandquestion > .wrapper');
            }
            if (jQuery('nav .value_block').length >= 1) {
                jQuery('nav .value_block').removeClass('collapse');
            }
        } else {
            if (jQuery('nav .value_block').length >= 1) {
                jQuery('nav .value_block').removeClass('collapse');
            }
            if (jQuery('.second_crypto_val_block').length >= 1) {
                jQuery('.second_crypto_val_block ').appendTo(jQuery('.crypto > .wrapper')).addClass('crypto_values').removeClass('crypto_val');
                jQuery('.second_crypto_val_block ').prependTo(jQuery('.container_news_right')).addClass('crypto_values').removeClass('crypto_val');
            }
        }

        if (jQuery('.crypto_val .value_block').length >= 1) {
            jQuery('.crypto_val .value_block').click(function() {
                jQuery(this).parent().children().removeClass('collapse');
                jQuery(this).addClass('collapse');
            });
        }

        if (window.matchMedia('(max-width: 991px)').matches) {
            if (jQuery('nav .crypto_values .value_block').length >= 1) {
                jQuery('nav .crypto_values .value_block').click(function() {
                    jQuery(this).parent().children().removeClass('collapse');
                });
            }
        } else {
            if (jQuery('.crypto_values .value_block').length >= 1) {
                jQuery('.crypto_values .value_block').click(function() {
                    jQuery(this).parent().children().removeClass('collapse');
                    jQuery(this).addClass('collapse');
                });
            }
        };

    });

    if (jQuery('.ripple').length >= 1) {
        jQuery(".ripple").on("click", function(event) {
            jQuery(this).append("<span class='ripple-effect'>");
            jQuery(this).find(".ripple-effect").css({
                left: event.pageX - jQuery(this).position().left,
                top: event.pageY - jQuery(this).position().top
            }).animate({
                opacity: 0,
            }, 1500, function() {
                jQuery(this).remove();
            });
        });
    };

    if (jQuery('.menu > li').length >= 1) {
        jQuery('.menu > li').hover(function() {
            jQuery(this).children('ul').toggle();
        });
    };

/*new*/
if (jQuery('.container_icos_page_filters').length >= 1) {

jQuery('.container_icos_page_filters > ul > li').click(function() {
    jQuery('.container_icos_page_filters > ul > li').removeClass('active');
    jQuery(this).addClass('active');
});

}

/*timer*/
if (jQuery('.days').length >= 1) {

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline= $('.timer').attr('data-due-time'); //for Ukraine
initializeClock('clockdiv', deadline);


var now_v = $('.aim_now').text();
var max_v = $('.aim_max').text();
var new_now_v = Number(now_v.replace( /[^(\d|\.)]*/gi, '') );
var new_max_v = Number(max_v.replace( /[^(\d|\.)]*/gi, '') );
var val_progress = Math.round( (new_now_v / new_max_v) * 1000 ) / 10;
val_progress+= '%';
$('#myBar').attr('data-width-bar', val_progress);
$('#myBar').css('width', $('#myBar').attr('data-width-bar'));
$('.MyBarPercent > span').html( $('#myBar').attr('data-width-bar'));
$('#myBar').change(function(){
    $('#myBar').css('width', $('#myBar').attr('data-width-bar'));
    $('.MyBarPercent > span').html( $('#myBar').attr('data-width-bar')); 
});
}

/*modal*/

let showPopup = innerId => {
  let inner = document.querySelector(`#${innerId}`);
  let popupWindow = document.createElement("div");
  let popup = document.createElement("div");
  let closePopup = document.createElement("div");

  popupWindow.className = "popup-wrapper1";
  popup.className = "popup1";
  closePopup.className = "close-popup1";
  
  popup.innerHTML = inner.innerHTML
  closePopup.innerHTML = '<span>X</span>'
 
  popupWindow.onclick = e => {
    if (e.target === popupWindow) hidePopup();
  };
  closePopup.onclick = () => hidePopup();
  
  popup.appendChild(closePopup)
  popupWindow.appendChild(popup)
  document.querySelector("body").appendChild(popupWindow);
  document.querySelector("body").style.overflow = "hidden";
};

let hidePopup = () => {
  let popupWindow = document.querySelector(".popup-wrapper1");
  popupWindow.parentNode.removeChild(popupWindow)
  document.querySelector("body").style.overflow = "auto";
};

window.onload = () => {
  document.querySelectorAll(".popup-button1").forEach(
    button => button.onclick = () => {
        showPopup(button.dataset.for);
      }
  );
};

$('.popup-button1').click(function(){
    var theme = $(this).attr('data-theme');
    $(' .popupMessage1  div  h2  span ').html( theme );
    $(' .popupMessage1  button  span ').html( theme );
    $(' .popupMessage1  div  p  span ').html( theme );
    $('#name_theme_hidden_input').attr('value', 'ICO name - ' + theme);
});

$('#textarea').text('');

/*new end*/

});