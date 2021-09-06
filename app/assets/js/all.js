const courseSwiper = new Swiper ('.courseSwiper', {
  slidesPerView: 1.5,
  spaceBetween: 30,
});

const customerSwiper = new Swiper(".customerSwiper",{
  // 添加 observe 參數進行自動初始化
  observer:true,
  observeParents:true,
  loop: true,
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,
  slidesPerColumnFill: 'row',
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  //Swiper4.x 版本是 min-width 概念
  breakpoints:{
    996: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      slidesPerColumn: 3,
      spaceBetween: 8,
    }
  }
})

const teacherSwiper = new Swiper(".teacherSwiper",{
  // 添加 observe 參數進行自動初始化
  observer:true,
  observeParents:true,
  loop: true,
  initialSlide: 0,
  slidesPerView: 3.5,
  spaceBetween: 30,
  slidesPerColumnFill: 'row',
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  //Swiper4.x 版本是 min-width 概念
  breakpoints:{
    996: {
      slidesPerView: 2.1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 24,
    }
  }
})

AOS.init({
  offset: 100,
  duration: 800,
});
