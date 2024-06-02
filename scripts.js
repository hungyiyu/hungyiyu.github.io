$(document).ready(function () {
    $('.fade-in').each(function (i) {
        var element = $(this);
        setTimeout(function () {
            element.addClass('visible');
        }, i * 500);
    });
});
