$(document).ready(function() {
  $('.nav-element__link, .column__paragraph__link-to-top').on('click', function(event) {
    event.preventDefault();
    slowScroll($(this).attr('href'), true);
  });
});

function slowScroll(section) {
  var
      direction = section.replace(/#/, ''),
      reqSection = $('div').filter('[data-section="' +direction+'"]'),
      reqSectionPos = reqSection.offset().top;

    $('body, html').animate({scrollTop: reqSectionPos}, 500);
}
