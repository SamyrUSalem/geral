(function() {
  "use strict";

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll('.testimonials .swiper').forEach(function(swiper) {
      let config = JSON.parse(swiper.querySelector('.swiper-config').textContent.trim());
      config.pagination = {
        el: '#swiper-pagination-testimonials',
        type: 'bullets',
        clickable: true
      };
      new Swiper(swiper, config);
    });
  }
  window.addEventListener('load', initSwiper);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

})();
