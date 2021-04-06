$(document).ready(function() {
  var span = $('.works__photo__text').hide();
  $('.works__box__photo').hover(function() {
      $(this).children('.works__photo__text').stop(false, true).fadeToggle('slow');
  });
});
