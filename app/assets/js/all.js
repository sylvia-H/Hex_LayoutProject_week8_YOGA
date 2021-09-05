const courseSwiper = new Swiper ('.courseSwiper', {

  slidesPerView: 1.5,
  spaceBetween: 30,

});

const customerSwiper = new Swiper(".customerSwiper",{
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 8,
  slidesPerColumnFill: 'row',
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints:{
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },
    996: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
    }
  }
})

AOS.init({
  offset: 100,
  duration: 800,
});
