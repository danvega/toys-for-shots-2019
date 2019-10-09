$(function () {
    'use strict';
    var windo = $(window);

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    // Browse all js
    $(".images-item").slice(0, 4).show();
    $(".browse-all").on('click', function (e) {
        e.preventDefault();
        $(".images-item:hidden").slice(0, 4).slideDown(500);
        if ($(".images-item:hidden").length == 0) {
            $(".browse-all").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top - 85
        }, 1500);
    });

    // Countdown Timer js
    var targetDate = new Date("2019/12/14 19:00:00");
    var days;
    var hrs;
    var min;
    var sec;


    timeToLaunch();
    numberTransition('#days .number', days, 1000, 'easeOutQuad');
    numberTransition('#hours .number', hrs, 1000, 'easeOutQuad');
    numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
    numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');
    setTimeout(countDownTimer, 1001);

    function timeToLaunch() {
        var currentDate = new Date();
        var diff = (currentDate - targetDate) / 1000;
        var diff = Math.abs(Math.floor(diff));

        days = Math.floor(diff / (24 * 60 * 60));
        sec = diff - days * 24 * 60 * 60;
        hrs = Math.floor(sec / (60 * 60));
        sec = sec - hrs * 60 * 60;
        min = Math.floor(sec / (60));
        sec = sec - min * 60;
    }

    function countDownTimer() {
        timeToLaunch();
        $("#days .number").text(days);
        $("#hours .number").text(hrs);
        $("#minutes .number").text(min);
        $("#seconds .number").text(sec);
        setTimeout(countDownTimer, 1000);
    }

    function numberTransition(id, endPoint, transitionDuration, transitionEase) {
        $({
            numberCount: $(id).text()
        }).animate({
            numberCount: endPoint
        }, {
            duration: transitionDuration,
            easing: transitionEase,
            step: function () {
                $(id).text(Math.floor(this.numberCount));
            },
            complete: function () {
                $(id).text(this.numberCount);
            }
        });
    };

});
