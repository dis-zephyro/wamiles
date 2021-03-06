// Слайдеры

$('.slide').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.slide__prev').click(function(){
    $('.slide').slick('slickPrev');
});

$('.slide__next').click(function(){
    $('.slide').slick('slickNext');
});

//---

$('.showcase__slider1, .showcase__slider2').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1
});

$('.prev1').click(function(){
    $('.showcase__slider1').slick('slickPrev');
});

$('.next1').click(function(){
    $('.showcase__slider1').slick('slickNext');
});

$('.prev2').click(function(){
    $('.showcase__slider2').slick('slickPrev');
});

$('.next2').click(function(){
    $('.showcase__slider2').slick('slickNext');
});

// Показ контента

$(".rubbery__show").click(function(){
    $(".rubbery__text_hide").show();
    $(".rubbery__show").hide();
    $(".rubbery__hide").show();
});

$(".rubbery__hide").click(function(){
    $(".rubbery__text_hide").hide();
    $(".rubbery__hide").hide();
    $(".rubbery__show").show();
});



$(".btn_best__show").click(function(){
    $(".best_text_hide").css('display','block');
    $(".btn_best__show").css('display','none');
    $(".btn_best__hide").css('display','block');
});

$(".btn_best__hide").click(function(){
    $(".best_text_hide").css('display','none');
    $(".btn_best__hide").css('display','none');
    $(".btn_best__show").css('display','block');
});


// Фото

$(".popup_img").fancybox({
    "padding" : 0,
    "maxWidth" : 800,
    "maxHeight" : 600
});


// ----- Маска ----------
jQuery(function($){
    $(".form__tel").mask("(999) 999-9999");
});


// ----- Календарь ----------

$(function(){

    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false
    };
	


    $.datepicker.setDefaults(
        $.extend($.datepicker.regional["ru"])
    );
    $(".form__date").datepicker({
        minDate: "0",
        maxDate: "+1m +3w +3d"
    });
});


$.validate({
    form : '.form__callback, .form__contact'
});


// menu --------

$(document).ready(function () {
// Указываем переменные
    var accordion_head = $('.side-nav > ul > li > a'),
        accordion_body = $('.side-nav li > .sub-menu');

// Функция клика
    accordion_head.on('click', function(event) {
// Скрывает открытый раздел по повторному клику
        event.preventDefault();
        if ($(this).attr('class') == 'active'){
            accordion_body.slideUp('normal')
            $(this).removeClass('active');
            return false;
        }
// Открывает следующий, скрывая открытый
        if ($(this).attr('class') != 'active'){
            accordion_body.slideUp('normal');
            $(this).next().stop(true,true).slideToggle('normal');
            accordion_head.removeClass('active');
            $(this).addClass('active');
        }
    });
});


$('.product_properties').tabs();