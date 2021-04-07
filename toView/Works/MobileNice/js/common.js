$('.banner_list').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 3000,
  autoplay: true,
  lazyLoad: 'ondemand',
  slidesToScroll: 1,
  slidesToShow: 1
});

$('.futures_list').slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 5000,
  autoplay: true,
  lazyLoad: 'ondemand',
  slidesToScroll: 1,
  slidesToShow: 3
});