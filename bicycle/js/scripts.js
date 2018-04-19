$(function () {
    var top = 100;

    var up = $('.up-button');

    $(window).scroll(function () {
        if ($(this).scrollTop() > top) {
            up.fadeIn();
        } else {
            up.fadeOut();
        }
    });

    up.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
});
