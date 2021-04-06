$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  asNavFor: '.sliderPre',
  arrows: false
});

$('.sliderPre').slick({
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '0px',
  asNavFor: '.slider',
  focusOnSelect: true,
  arrows: false
});
