$("document").ready(function () {
    $.getJSON("https://api.thecatapi.com/v1/images/search", (data) => {
        $('.catImage').attr('src', data[0].url);
    })

    $('.load_more_catimage').click(() => {
        $.getJSON("https://api.thecatapi.com/v1/images/search", (data) => {
            $('<img />').attr('src', data[0].url).appendTo($('.loadCats__catImages'));
    })
    })
});