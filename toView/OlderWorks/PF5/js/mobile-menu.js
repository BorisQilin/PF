$(document).ready(function() {
  var touch = $('.mobile-menu');
  var menu = $('.menu');

  $(touch).on('click', function() {
    menu.stop(false, true).slideToggle();
  });

  $(window).resize(function() {
    var wid = $(window).width();
    if (wid > 979 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});
