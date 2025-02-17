var swiper = new Swiper(".banner-swiper", {
    autoplay : {  
        delay : 5000, 
        disableOnInteraction : false,  
      },
    loop : true,
    loopAdditionalSlides : 1,
        navigation: {
      nextEl: ".banner-swiper .swiper-button-next",
      prevEl: ".banner-swiper .swiper-button-prev",
    },
    pagination: {
        el: ".banner-swiper .swiper-pagination",
        clickable: true,
      },
  });

var swiperGal = new Swiper(".gallery-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 30,
    breakpoints: {
        9999: {
        },
        810: {
            slidesPerView: 2.2,
        },
      },
});