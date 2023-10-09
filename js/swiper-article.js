var sliderArticle = new Swiper('.swiper-article', {
    speed: 1200,
    slidesPerView: 1.25,
    loop: false,
    allowTouchMove: true,
    autoHeight: false,
    spaceBetween: 20,
    grabCursor: true,
    slideClass: 'dst-slide',
    wrapperClass: 'dst-wrapper',
    breakpoints: {
        768: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 3,
            allowTouchMove: false,
            grabCursor: false,
        }
    }
});
