$('document').ready(function() {
    $(window).on('resize', function() {
        if ($(window).width() <= 768) {
          $('.about-box').css('background-image', 'none',);
          $('.js-why-choose').css('color', '#000',);
        }
      });
})