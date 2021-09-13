$(function() {
  // 定義變數
  const plans = document.querySelectorAll('.select-plan');
  const arrows = document.querySelectorAll('.plan__arrow');
  const course__plan = document.querySelectorAll('.course__plan');
  const course__planCard = document.querySelectorAll('.course__plan>.card');
  const course__grades = document.querySelector('.course__grades');
  const grades = document.querySelectorAll('.select-grade');
  let course_grade = document.getElementById('course__grade');
  let course_plan = document.getElementById('course__plan');
  const course__solution = document.querySelector('.course__solution');
  const btn_reserve_continue = document.getElementById('btn-reserve-continue');
  let course__solution_final
  const reserveInfo__solution_final = document.getElementById('reserveInfo__solution_final');
  const btn_reserveform = document.getElementById('btn-reserveform');
  const checked_course = document.getElementById('checked_course');
  const checked_date = document.getElementById('checked_date');
  const checked_name = document.getElementById('checked_name');
  const checked_age = document.getElementById('checked_age');
  const checked_gender = document.getElementById('checked_gender');
  const checked_email = document.getElementById('checked_email');
  const checked_phone = document.getElementById('checked_phone');

  // setTimeout function
  function reAdd_gradeShow(){
    course__grades.classList.add('course__grades__show');
  }

  // 三個方案加上 addEventListener
  plans.forEach((el) => {
    el.addEventListener('click', (e) => {
      // 移除所有 planCard 的 border-4 屬性
      course__plan.forEach((plan) => {
        if(!plan.classList.contains('d-lg-block')){
          plan.classList.add('d-none');
          plan.classList.add('d-lg-block');
        }
      });
      // 被點擊到的 planCard 加上 border-4 屬性
      e.target.closest('.course__plan').classList.remove('d-none');
      e.target.closest('.course__plan').classList.remove('d-lg-block');

      // 移除所有 planCard 的 border-4 屬性
      course__planCard.forEach((planCard) => {
        if(planCard.classList.contains('border-4')){
          planCard.classList.remove('border-4');
        }
      });
      // 被點擊到的 planCard 加上 border-4 屬性
      e.target.closest('.card').classList.toggle('border-4');

      // 沒被隱藏的小箭頭加上 d-none 屬性
      arrows.forEach((arrow) => {
        if(!arrow.classList.contains('d-none')){arrow.classList.add('d-none');}
      });
      // 被點擊到的小箭頭移除 d-none 屬性
      e.target.closest('.course__plan').childNodes[3].classList.toggle('d-none');

      // 選擇課程階級的 grades 區塊 slideup & slidedown
      if(course__grades.classList.contains('course__grades__show')){
        course__grades.classList.remove('course__grades__show');
        setTimeout(reAdd_gradeShow,800 );
      } else {
        course__grades.classList.add('course__grades__show');
      }

      course_plan.innerText = e.target.closest('.card-body').childNodes[1].innerText;

    });
  });


  // 三個課程階級加上 addEventListener
  grades.forEach((el) => {
    el.addEventListener('click', (e) => {
      // 移除所有 select-grade 的 border-4 屬性
      grades.forEach((el) => {
        if(el.classList.contains('border-4')){
          el.classList.remove('border');
          el.classList.remove('border-white');
          el.classList.remove('border-4');
        }
        // 所有階級 check_circle 加上 opacity-50 屬性
        if(!el.childNodes[1].childNodes[3].classList.contains('opacity-50')){
          el.childNodes[1].childNodes[3].classList.add('opacity-50')
        }
        
      });

      // 被點擊到的 select-grade 加上 border-4 屬性
      e.target.closest('.select-grade').classList.add('border');
      e.target.closest('.select-grade').classList.add('border-white');
      e.target.closest('.select-grade').classList.add('border-4');

      // 被點擊到的階級 check_circle 移除 opacity-50 屬性
      e.target.closest('.select-grade').childNodes[1].childNodes[3].classList.remove('opacity-50');
      course_grade.innerText = e.target.closest('.select-grade').childNodes[1].childNodes[1].innerText.split(" ")[0];

      // 顯示方案結果
      course__solution.classList.remove('d-none');

      // 顯示'繼續預約'按鈕
      btn_reserve_continue.classList.remove('d-none');

      // 把最終方案結果存入 sessionStorage
      course__solution_final = document.getElementById('course__solution-final').innerText;
      window.sessionStorage.setItem('solution_final',course__solution_final);
    });
  });

  // 從 sessionStorage 取值代入 第二預約頁-填寫資料
  reserveInfo__solution_final.innerText = window.sessionStorage.getItem('solution_final');

  // 完成填寫預約表單，按鈕加上 addEventListener，並把資料存入 sessionStorage
    let form_date = $('#form_date').val();
    let form_name = $('#form_name').val();
    let form_age = $('#form_age').val();
    let form_gender = $('#form_gender').val();
    let form_email = $('#form_email').val();
    let form_phone = $('#form_phone').val();
    window.sessionStorage.setItem('form_date',form_date);
    window.sessionStorage.setItem('form_name',form_name);
    window.sessionStorage.setItem('form_age',form_age);
    window.sessionStorage.setItem('form_gender',form_gender);
    window.sessionStorage.setItem('form_email',form_email);
    window.sessionStorage.setItem('form_phone',form_phone);
  
  // 從 sessionStorage 取值代入 第三預約頁-完成預約
  checked_course.innerText = window.sessionStorage.getItem('solution_final');
  checked_date.innerText = window.sessionStorage.getItem('form_date');
  checked_name.innerText = window.sessionStorage.getItem('form_name');
  checked_age.innerText = window.sessionStorage.getItem('form_age');
  checked_gender.innerText = window.sessionStorage.getItem('form_gender');
  checked_email.innerText = window.sessionStorage.getItem('form_email');
  checked_phone.innerText = window.sessionStorage.getItem('form_phone');

});