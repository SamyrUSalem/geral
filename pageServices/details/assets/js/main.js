document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  $(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var header = $('header').height();

      if (scroll >= header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    });
  });


  1
  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  $(window).on('load', function () {

    $('#js-preloader').addClass('loaded');

  });

  /**
   * Init swiper slider with 2 slides at once in desktop view
   */
  new Swiper('.slides-2', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });


  $(document).ready(function () {
    $(window).scroll(function () {
      var width = $(window).width();
      if (width < 991) {
        if ($('.header-area .nav').is(':visible')) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);
        }
      }
    });

    $(".menu-trigger").on('click', function () {
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  });

});