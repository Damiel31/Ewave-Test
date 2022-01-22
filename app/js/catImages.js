$("document").ready( () => {
    
    let counter = 0;
    $.ajax({
        type: "GET",
        url: "https://api.thecatapi.com/v1/images/search?order=0&limit=3",
        dataType: "JSON",
        success: (data) => {
            $('.catImage').attr('src', data[0].url);
            $('.img2').attr('src', data[1].url);
            $('.img3').attr('src', data[2].url);
        }
    });

    $('.load_more_catimage').click(() => {
        $('<div />').addClass('addedImages' + counter).appendTo($('.loadCats__catImages'));
        let name = '.addedImages' + counter;
        $.ajax({
            type: "GET",
            url: "https://api.thecatapi.com/v1/images/search?order=0&limit=3",
            dataType: "JSON",
            success: (data) => {

                $(name).append('<img src="' + data[0].url + '" />');
                $(name).append('<img src="' + data[1].url + '" />');
                $(name).append('<img src="' + data[2].url + '" />');
            }
        });

        counter += 1;
    })
});