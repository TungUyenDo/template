$(document).ready(function () {

    setTimeout(function () {

        $('.loading').addClass('close-loading');

        $('.main-content').addClass('active');

    }, 2500);


    $('.iconmenu').click(function () {

        $('.loading').toggleClass('loading-width-menu');

        setTimeout(function () {

            $('.nav-menu').toggleClass('active');

            $('.shadow-menu').toggleClass('active');

        }, 500);

        $(this).toggleClass('open');

    });


    $('.shadow-menu').click(function () {

        $('.nav-menu').removeClass('active');

        $(this).removeClass('active');

        $('.iconmenu').removeClass('open');

        $('.loading').removeClass('loading-width-menu')

    });


    $('.tab-news li a').click(function () {

        var getTabId = $(this).attr('id');

        $('.tab-news li a,.tab-news li').removeClass('active');

        $(this).addClass('active');

        $(this).parent().addClass('active');

        $('.read-news').slideUp();

        $('.read-news-' + getTabId).slideDown();


    });


    $('.list__item').click(function () {

        var getTabId = $(this).attr('data-level');

        $('.list__item').removeClass('active');

        $('.pin').removeClass('active');

        $(this).addClass('active');

        $('.pin-' + getTabId).addClass('active');


    });

});


function font_size_width_destop() {

    var width = window.innerWidth

    var font_size_html = width / 1920 * 10;

    $('html').css({

        'font-size': font_size_html,

    });

}


function font_size_width_medium() {

    var width_medium = window.innerWidth

    var font_size_html_medium = width_medium / 992 * 5;

    $('html').css({

        'font-size': font_size_html_medium,

    });

}


function font_size_width_ipad() {

    var width_ipad = window.innerWidth

    var font_size_html_ipad = width_ipad / 768 * 8;

    $('html').css({

        'font-size': font_size_html_ipad,

    });

}


function font_size_width_mobile() {

    var width_mobile = window.innerWidth

    var font_size_width_mobile = width_mobile / 320 * 10;

    $('html').css({

        'font-size': font_size_width_mobile,

    });

}


$(window).resize(function () {

    if ($(window).width() >= 320 && $(window).width() < 767) {

        font_size_width_mobile();

    }


    if ($(window).width() >= 768 && $(window).width() < 991) {

        font_size_width_ipad();

    }


    if ($(window).width() >= 992 && $(window).width() < 1399) {

        font_size_width_medium();

    }


    if ($(window).width() >= 1400) {

        font_size_width_destop();

    }


});


if ($(window).width() >= 320 && $(window).width() < 767) {

    font_size_width_mobile();

}


if ($(window).width() >= 768 && $(window).width() < 991) {

    font_size_width_ipad();

}


if ($(window).width() >= 992 && $(window).width() < 1399) {

    font_size_width_medium();

}


if ($(window).width() >= 1400) {

    font_size_width_destop();

}

$('.btn-register-view').click(function () {

    fullpage_api.moveTo(8);

});


if ($(window).width() <= 990) {

    // $('.moveto-1-click').click(function(event){

    //   event.preventDefault();

    //   $('.loading').removeClass('loading-width-menu');

    //   $('.nav-menu').removeClass('active');

    //   $('.shadow-menu').removeClass('active');

    //   $('.iconmenu').removeClass('open');

    //   $('html, body').animate({

    //       scrollTop: $('#section0').offset().top - 100

    //   }, 500);

    // });

    // $('.moveto-2-click').click(function(event){

    //   event.preventDefault();

    //   $('.loading').removeClass('loading-width-menu');

    //   $('.nav-menu').removeClass('active');

    //   $('.shadow-menu').removeClass('active');

    //   $('.iconmenu').removeClass('open');

    //   $('html, body').animate({

    //       scrollTop: $('#section1').offset().top - 100

    //   }, 500);

    // });

    // $('.moveto-3-click').click(function(event){

    //   event.preventDefault();

    //   $('.loading').removeClass('loading-width-menu');

    //   $('.nav-menu').removeClass('active');

    //   $('.shadow-menu').removeClass('active');

    //   $('.iconmenu').removeClass('open');

    //   $('html, body').animate({

    //       scrollTop: $('#section2').offset().top - 100

    //   }, 500);

    // });

    // $('.moveto-4-click').click(function(event){

    //   event.preventDefault();

    //   $('.loading').removeClass('loading-width-menu');

    //   $('.nav-menu').removeClass('active');

    //   $('.shadow-menu').removeClass('active');

    //   $('.iconmenu').removeClass('open');

    //   $('html, body').animate({

    //       scrollTop: $('#section3').offset().top - 100

    //   }, 500);

    // });

    // $('.moveto-5-click').click(function(event){

    //   event.preventDefault();

    //   $('.loading').removeClass('loading-width-menu');

    //   $('.nav-menu').removeClass('active');

    //   $('.shadow-menu').removeClass('active');

    //   $('.iconmenu').removeClass('open');

    //   $('html, body').animate({

    //       scrollTop: $('#section4').offset().top - 100

    //   }, 500);

    // });

    // $('.moveto-6-click').click(function(event){

    //   event.preventDefault();

    //   $('.loading').removeClass('loading-width-menu');

    //   $('.nav-menu').removeClass('active');

    //   $('.shadow-menu').removeClass('active');

    //   $('.iconmenu').removeClass('open');

    //   $('html, body').animate({

    //       scrollTop: $('#section5').offset().top - 100

    //   }, 500);

    // });

    // $('.moveto-7-click').click(function(event){

    //   event.preventDefault();

    //   $('.loading').removeClass('loading-width-menu');

    //   $('.nav-menu').removeClass('active');

    //   $('.shadow-menu').removeClass('active');

    //   $('.iconmenu').removeClass('open');

    //   $('html, body').animate({

    //       scrollTop: $('#section6').offset().top - 100

    //   }, 500);

    // });

    // $('.moveto-8-click').click(function(event){

    //   event.preventDefault();

    //   $('.loading').removeClass('loading-width-menu');

    //   $('.nav-menu').removeClass('active');

    //   $('.shadow-menu').removeClass('active');

    //   $('.iconmenu').removeClass('open');

    //   $('html, body').animate({

    //       scrollTop: $('#section7').offset().top - 100

    //   }, 500);

    // });

    // $('.moveto-9-click').click(function(event){

    //   event.preventDefault();

    //   $('.loading').removeClass('loading-width-menu');

    //   $('.nav-menu').removeClass('active');

    //   $('.shadow-menu').removeClass('active');

    //   $('.iconmenu').removeClass('open');

    //   $('html, body').animate({

    //       scrollTop: $('#section8').offset().top - 100

    //   }, 500);

    // });

    // $('.moveto-10-click').click(function(event){

    //   event.preventDefault();

    //   $('.loading').removeClass('loading-width-menu');

    //   $('.nav-menu').removeClass('active');

    //   $('.shadow-menu').removeClass('active');

    //   $('.iconmenu').removeClass('open');

    //   $('html, body').animate({

    //       scrollTop: $('#section9').offset().top - 100

    //   }, 500);

    // });

}
;