$(document).ready(function() {
  var touch = $('.mobole-menu__text');
  var menu = $('.header__menu');

  $(touch).on('click', function() {
    menu.stop(false, true).slideToggle();
  });

  $(window).resize(function() {
    var wid = $(window).width();
    if (wid > 810 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});
