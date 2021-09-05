(function() {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(max-width: 992px)' );

  // keep track of swiper instances to destroy later
  let courseSwiper;

  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
      if ( courseSwiper !== undefined ) courseSwiper.destroy( true, true );

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if ( breakpoint.matches === false ) {

      // fire small viewport version of swiper
      return enableSwiper();

    }

  };

  //////////////////////////////////////////////////////////////////

  const enableSwiper = function() {

    courseSwiper = new Swiper ('.swiper-container', {

      slidesPerView: 1.5,
      spaceBetween: 30,

    });

  };

  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();

})(); /* IIFE end */


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
