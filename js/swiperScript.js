var headerSwiper = new Swiper('.header-swiper-container', {
   autoplay: {
      delay: 5000,
   },
   loop: true,
});

let mySwiperNav = new Swiper('.products__slider-nav', {
   slidesPerView: 3,
   spaceBetween: 32,
   freeMode: true,
   loopedSlides: 3,
   direction: 'horizontal',
   watchSlidesVisibility: true,
   watchSlidesProgress: true,
});

let mainProductSwiper = new Swiper('.products__slider', {
   loopedSlides: 3,
   loop: true,
   thumbs: {
      swiper: mySwiperNav,
   },
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
   },
});