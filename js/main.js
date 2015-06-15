// Слайдеры

$('.slide').slick({
    dots: true,
    arrows: false,
    autoplay: false,
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

$('.rubbery__show').click(function(){
    $('.rubbery__text_hide').slideToggle(250);
    return false;
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
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
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


var russian = {
    errorTitle: 'Form submission failed!',
    requiredFields: 'Укажите ваше имя',
    badTime: 'You have not given a correct time',
    badEmail: 'Неверно указан e-mail адрес',
    badTelephone: 'You have not given a correct phone number',
    badSecurityAnswer: 'You have not given a correct answer to the security question',
    badDate: 'Укажите дату!',
    lengthBadStart: 'The input value must be between ',
    lengthBadEnd: ' characters',
    lengthTooLongStart: 'The input value is longer than ',
    lengthTooShortStart: 'The input value is shorter than ',
    notConfirmed: 'Input values could not be confirmed',
    badDomain: 'Incorrect domain value',
    badUrl: 'The input value is not a correct URL',
    badCustomVal: 'The input value is incorrect',
    andSpaces: ' and spaces ',
    badInt: 'The input value was not a correct number',
    badSecurityNumber: 'Your social security number was incorrect',
    badUKVatAnswer: 'Incorrect UK VAT Number',
    badStrength: 'The password isn\'t strong enough',
    badNumberOfSelectedOptionsStart: 'You have to choose at least ',
    badNumberOfSelectedOptionsEnd: ' answers',
    badAlphaNumeric: 'The input value can only contain alphanumeric characters ',
    badAlphaNumericExtra: ' and ',
    wrongFileSize: 'The file you are trying to upload is too large (max %s)',
    wrongFileType: 'Only files of type %s is allowed',
    groupCheckedRangeStart: 'Please choose between ',
    groupCheckedTooFewStart: 'Please choose at least ',
    groupCheckedTooManyStart: 'Please choose a maximum of ',
    groupCheckedEnd: ' item(s)',
    badCreditCard: 'The credit card number is not correct',
    badCVV: 'The CVV number was not correct'
};

$.validate({
    form : '.form__callback',
    language : 'russian'
});

