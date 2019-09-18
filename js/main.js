$(document).ready(function(){
/*First Slider*/
    $('.slider-one')
    .not(".slick-intialized")
    .slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        prevArrow:".site-slider .slider-btn .prev",
        nextArrow:".site-slider .slider-btn .next",
    });
    /*Second Slider*/
    $(".slider-two")
    .not(".slick-intialized")
    .slick({
        slidesToShow:5,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow:".site-slider-two .prev",
        nextArrow:".site-slider-two .next",
    });
    /*Third Slider*/
    $(".slider-three-img")
    .not(".slick-intialized")
    .slick({
        slidesToShow:4,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow:".slider-three .prev",
        nextArrow:".slider-three .next",
    });
    /*fifth Slider*/
    $(".fifth-section")
    .not(".slick-intialized")
    .slick({
        slidesToShow:4,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow:".fifth-section-2 .prev",
        nextArrow:".fifth-section-2 .next",
    });
    /*Eight Section */
        $(".eight-section")
        .not(".slick-intialized")
        .slick({
            slidesToShow:5,
            slidesToScroll:1,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow:".eight-section-1 .prev",
            nextArrow:".eight-section-1 .next",
        });
     
});
$(document).ready(function(){
   /* Ninth Section */
   var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

});