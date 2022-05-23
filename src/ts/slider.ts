export {};

const swiper = new Swiper('.slidersection__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.slidersection__slider-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slidersection__slider-btn_next',
    prevEl: '.slidersection__slider-btn_prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
