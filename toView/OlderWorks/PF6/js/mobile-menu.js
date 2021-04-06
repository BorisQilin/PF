$(document).ready(function() {
  var touch = $('.mobile-menu');
  var menu = $('.nav');

  $(touch).on('click', function() {
    menu.stop(false, true).slideToggle();
  });

  $(window).resize(function() {
    var wid = $(window).width();
    if (wid > 739 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});
