$(document).ready(function () {
    $.getJSON("experiences.json", function(data) {
        $('#introduction').text(data.introduction);
        
        data.teaching.forEach(function(item) {
            $('#teaching').append('<li class="experience-item">' + item + '</li>');
        });
        
        data.research.forEach(function(item) {
            $('#research').append('<li class="experience-item">' + item + '</li>');
        });
        
        data.others.forEach(function(item) {
            $('#others').append('<li class="experience-item">' + item + '</li>');
        });
        
        $('.fade-in').each(function (i) {
            var element = $(this);
            setTimeout(function () {
                element.addClass('visible');
            }, i * 500);
        });
    });
});
