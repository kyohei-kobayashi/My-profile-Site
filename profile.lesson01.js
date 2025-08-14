
$(function() {

    // scrollTop
        $('h1 a').click(function() {
            $('html, body').animate({'scrollTop': 0}, 500);
        });

        $('.scroll-top').click(function() {
            $('html, body').animate({'scrollTop': 0}, 500);
        });


    // navigation
        $('.header li a').click(function() {
            var id = $(this).attr('href');
            var position = $(id).offset().top;
            $('html, body').animate({ 
                'scrollTop': position 
            }, 500);
        });


    //  animate
        $('.my-ride-contents img').animate ({
            
        })

});
