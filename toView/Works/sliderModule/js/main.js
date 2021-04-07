//change scale
let  changeScale = (slick) => {
	let elements = document.querySelectorAll('.majorSlider__item');

	for (let i = 0, len = elements.length; i < len; i++) {
		elements[i].classList.remove('majorSlider__item--active');
	}

	for (let i = 0, len = elements.length; i < len; i++) {
		let activeElementNum = slick.slickCurrentSlide();
		if (elements[i].getAttribute('data-slick-index') == activeElementNum) {
			elements[i].classList.add('majorSlider__item--active');
		}
	}
}

//arrow Disabled
let  arrowDisabled = (currentSlide, slidesCount) => {
	if (slidesCount == currentSlide) {
		document.querySelector('.arrows__next').classList.add('arrows__next--disabled');
	} else {
		document.querySelector('.arrows__next').classList.remove('arrows__next--disabled');
	}

	if (currentSlide == 1) {
		document.querySelector('.arrows__prev').classList.add('arrows__prev--disabled');
	} else {
		document.querySelector('.arrows__prev').classList.remove('arrows__prev--disabled');
	}
}

let majorSlider = $('.majorSlider');

if (majorSlider.length) {
  let currentSlide,
			slidesCount,
			sliderCounter = document.createElement('p');

  sliderCounter.classList.add('slider__counter');

  let updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + ' - ' +slidesCount);

		changeScale(slick);
		arrowDisabled(currentSlide, slidesCount);
  };

  majorSlider.on('init', function(event, slick) {
    $('.count').append(sliderCounter);
    updateSliderCounter(slick);
  });

  majorSlider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  majorSlider.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		prevArrow: $('.arrows__prev'),
    nextArrow: $('.arrows__next'),
		focusOnSelect: true,
		lazyLoad: 'ondemand',
		asNavFor: '.minorSlider',
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
					centerMode: true,
					centerPadding: '50px'
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
					centerMode: true,
					centerPadding: '70px'
				}
			},
		]
	});
}

$('.minorSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
	infinite: false,
	fade: true,
  asNavFor: '.majorSlider',
	arrows: false
});
