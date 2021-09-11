$(function() {
    // 定義變數
    let assignmentListChild = document.getElementById('assignmentList').getElementsByTagName('a');
    let pre = document.querySelectorAll('.page-item')[0];

    // addEventListener
    pre.addEventListener('click', function() {
      if(assignNow <= 0){
        assignNow = 0;
        assignmentListChild[assignNow].classList.add("active");
        pre.classList.add("disabled");
        console.log(assignNow);
      }else {
        assignNow -= 1;
        assignmentListChild[assignNow+1].classList.remove("active");
        assignmentListChild[assignNow].classList.add("active");
        pre.classList.remove("disabled");
        next.classList.remove("disabled");
        console.log(assignNow);
      }
    });

});