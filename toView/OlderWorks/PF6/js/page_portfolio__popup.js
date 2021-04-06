$(document).ready(function() {
  var container = $('.header-container, .container__page_nav, .container__web_design, .container__icons, .container__illustrations, .container__misc');

  container.css('display', 'none');

  $('.popup__container').fadeIn('fast');

  $('.popup__close').on('click', function(event) {
    event.preventDefault();
    setTimeout(function () {
      $('.popup__container').fadeOut('fast');
      container.css('display', 'block');
    }, 500);
  });
});
