"use strict";

AOS.init({
  offset: 100,
  duration: 800
});
"use strict";

$(function () {
  // 定義變數
  var plans = document.querySelectorAll('.select-plan');
  var arrows = document.querySelectorAll('.plan__arrow');
  var course__plan = document.querySelectorAll('.course__plan');
  var course__planCard = document.querySelectorAll('.course__plan>.card');
  var course__grades = document.querySelector('.course__grades');
  var grades = document.querySelectorAll('.select-grade');
  var course_grade = document.getElementById('course__grade');
  var course_plan = document.getElementById('course__plan');
  var course__solution = document.querySelector('.course__solution');
  var btn_reserve_continue = document.getElementById('btn-reserve-continue');
  var course__solution_final;
  var reserveInfo__solution_final = document.getElementById('reserveInfo__solution_final');
  var btn_reserveform = document.getElementById('btn-reserveform'); // setTimeout function

  function reAdd_gradeShow() {
    course__grades.classList.add('course__grades__show');
  } // 三個方案加上 addEventListener


  plans.forEach(function (el) {
    el.addEventListener('click', function (e) {
      // 移除所有 planCard 的 border-4 屬性
      course__plan.forEach(function (plan) {
        if (!plan.classList.contains('d-lg-block')) {
          plan.classList.add('d-none');
          plan.classList.add('d-lg-block');
        }
      }); // 被點擊到的 planCard 加上 border-4 屬性

      e.target.closest('.course__plan').classList.remove('d-none');
      e.target.closest('.course__plan').classList.remove('d-lg-block'); // 移除所有 planCard 的 border-4 屬性

      course__planCard.forEach(function (planCard) {
        if (planCard.classList.contains('border-4')) {
          planCard.classList.remove('border-4');
        }
      }); // 被點擊到的 planCard 加上 border-4 屬性

      e.target.closest('.card').classList.toggle('border-4'); // 沒被隱藏的小箭頭加上 d-none 屬性

      arrows.forEach(function (arrow) {
        if (!arrow.classList.contains('d-none')) {
          arrow.classList.add('d-none');
        }
      }); // 被點擊到的小箭頭移除 d-none 屬性

      e.target.closest('.course__plan').childNodes[3].classList.toggle('d-none'); // 選擇課程階級的 grades 區塊 slideup & slidedown

      if (course__grades.classList.contains('course__grades__show')) {
        course__grades.classList.remove('course__grades__show');
        setTimeout(reAdd_gradeShow, 800);
      } else {
        course__grades.classList.add('course__grades__show');
      }

      course_plan.innerText = e.target.closest('.card-body').childNodes[1].innerText;
    });
  }); // 三個課程階級加上 addEventListener

  grades.forEach(function (el) {
    el.addEventListener('click', function (e) {
      // 移除所有 select-grade 的 border-4 屬性
      grades.forEach(function (el) {
        if (el.classList.contains('border-4')) {
          el.classList.remove('border');
          el.classList.remove('border-white');
          el.classList.remove('border-4');
        } // 所有階級 check_circle 加上 opacity-50 屬性


        if (!el.childNodes[1].childNodes[3].classList.contains('opacity-50')) {
          el.childNodes[1].childNodes[3].classList.add('opacity-50');
        }
      }); // 被點擊到的 select-grade 加上 border-4 屬性

      e.target.closest('.select-grade').classList.add('border');
      e.target.closest('.select-grade').classList.add('border-white');
      e.target.closest('.select-grade').classList.add('border-4'); // 被點擊到的階級 check_circle 移除 opacity-50 屬性

      e.target.closest('.select-grade').childNodes[1].childNodes[3].classList.remove('opacity-50');
      course_grade.innerText = e.target.closest('.select-grade').childNodes[1].childNodes[1].innerText.split(" ")[0]; // 顯示方案結果

      course__solution.classList.remove('d-none'); // 顯示'繼續預約'按鈕

      btn_reserve_continue.classList.remove('d-none'); // 把最終方案結果存入 sessionStorage

      course__solution_final = document.getElementById('course__solution-final').innerText;
      window.sessionStorage.setItem('solution_final', course__solution_final);
    });
  }); // 從 sessionStorage 取值代入 第二預約頁-填寫資料

  reserveInfo__solution_final.innerText = window.sessionStorage.getItem('solution_final');
  btn_reserveform.addEventListener('click', function (e) {
    // 完成填寫預約表單，按鈕加上 addEventListener，並把資料存入 sessionStorage
    var form_date = document.getElementById('form_date').value;
    var form_name = document.getElementById('form_name').value;
    var form_age = document.getElementById('form_age').value;
    var form_gender = document.getElementById('form_gender').value;
    var form_email = document.getElementById('form_email').value;
    var form_phone = document.getElementById('form_phone').value;
    window.sessionStorage.setItem('form_date', form_date);
    window.sessionStorage.setItem('form_name', form_name);
    window.sessionStorage.setItem('form_age', form_age);
    window.sessionStorage.setItem('form_gender', form_gender);
    window.sessionStorage.setItem('form_email', form_email);
    window.sessionStorage.setItem('form_phone', form_phone);
  });
});
"use strict";

// 首頁 - 課程介紹
var courseSwiper = new Swiper('.courseSwiper', {
  slidesPerView: 1.5,
  spaceBetween: 30
}); // 首頁 - 聽聽他們怎麼說 - 顧客意見

var customerSwiper = new Swiper(".customerSwiper", {
  slidesPerView: 1,
  spaceBetween: 8,
  grid: {
    rows: 3,
    fill: 'row'
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    996: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row'
      }
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row'
      }
    }
  }
}); // 課程介紹 - 師資介紹

var teacherSwiper = new Swiper(".teacherSwiper", {
  // 添加 observe 參數進行自動初始化
  observer: true,
  observeParents: true,
  initialSlide: 0,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  grid: {
    rows: 1,
    fill: 'row'
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  //Swiper4.x 版本是 min-width 概念
  breakpoints: {
    996: {
      slidesPerView: 3.5,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row'
      }
    },
    768: {
      slidesPerView: 2.1,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row'
      }
    }
  }
}); // 瑜珈空間 - 課程推薦

var recommendSwiper = new Swiper(".recommendSwiper", {
  // 添加 observe 參數進行自動初始化
  observer: true,
  observeParents: true,
  loop: true,
  initialSlide: 0,
  slidesPerView: 1.2,
  spaceBetween: 24,
  grid: {
    rows: 1,
    fill: 'row'
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  //Swiper4.x 版本是 min-width 概念
  breakpoints: {
    996: {
      slidesPerView: 4.2,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row'
      }
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row'
      }
    }
  }
}); // 立即預約 - 選擇課程階級

var gradeSwiper = new Swiper('.gradeSwiper', {
  // 添加 observe 參數進行自動初始化
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 24,
  grid: {
    rows: 3,
    fill: 'row'
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
      grid: {
        rows: 1,
        fill: 'row'
      }
    },
    992: {
      slidesPerView: 2.1,
      spaceBetween: 20,
      grid: {
        rows: 1,
        fill: 'row'
      }
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row'
      }
    }
  }
});
//# sourceMappingURL=all.js.map
