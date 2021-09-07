const courseSwiper = new Swiper ('.courseSwiper', {
  slidesPerView: 1.5,
  spaceBetween: 30,
});


const customerSwiper = new Swiper(".customerSwiper",{
  // 添加 observe 參數進行自動初始化
  observer:true,
  observeParents:true,
  loop: true,
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 8,
  grid: {
    rows: 3,
    fill: 'column',
  },
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
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    }
  }
});


const teacherSwiper = new Swiper(".teacherSwiper",{
  // 添加 observe 參數進行自動初始化
  observer:true,
  observeParents:true,
  loop: true,
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 24,
  grid: {
    rows: 1,
    fill: 'row',
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  //Swiper4.x 版本是 min-width 概念
  breakpoints:{
    996: {
      slidesPerView: 3.5,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row',
      },
    },
    768: {
      slidesPerView: 2.1,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row',
      },
    }
  }
});

const recommendSwiper = new Swiper(".recommendSwiper",{
  // 添加 observe 參數進行自動初始化
  observer:true,
  observeParents:true,
  loop: true,
  initialSlide: 0,
  slidesPerView: 1.2,
  spaceBetween: 24,
  grid: {
    rows: 1,
    fill: 'row',
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  //Swiper4.x 版本是 min-width 概念
  breakpoints:{
    996: {
      slidesPerView: 4.2,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row',
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row',
      },
    }
  }
});

AOS.init({
  offset: 100,
  duration: 800,
});
