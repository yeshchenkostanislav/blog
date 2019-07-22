$('document').ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        slidesPerView: 1.5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true
    });
    var mySwiper2 = new Swiper($('[data-slider="my-slider"]'), {
        spaceBetween: 30,
        slidesPerView: 3.7,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true
    });
});

