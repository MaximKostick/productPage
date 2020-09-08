var headerSwiper = new Swiper('.header-swiper-container', {
   autoplay: {
      delay: 5000,
   },
   loop: true,
});

var mainProductSwiper = new Swiper('.products__slider', {
   pagination: {
      el: '.swiper-pagination',
      clickable: false,
   },
});