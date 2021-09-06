"use strict";

var courseSwiper = new Swiper('.courseSwiper', {
  slidesPerView: 1.5,
  spaceBetween: 30
});
var customerSwiper = new Swiper(".customerSwiper", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,
  slidesPerColumnFill: 'row',
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      slidesPerColumn: 3,
      spaceBetween: 8
    },
    996: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30
    }
  }
});
AOS.init({
  offset: 100,
  duration: 800
});
//# sourceMappingURL=all.js.map
