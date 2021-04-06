//accordeon Begin
let accListItem = document.getElementsByClassName('accordeon__item');
console.log(accListItem);
for (let i = 0; i < accListItem.length; i++) {
  let accOpener = accListItem[i].children[0];

  accOpener.addEventListener('click', function () {
    for (var i = 0; i < accListItem.length; i++) {
      accListItem[i].children[0].classList.remove('item__title--active')
    }

    this.classList.add('item__title--active');
  });
}
//accordeon End

//scrollbar Begin
var $ = document.querySelector.bind(document);
var ps1 = new PerfectScrollbar('#containerAcc1');
var ps2 = new PerfectScrollbar('#containerAcc2');
var ps3 = new PerfectScrollbar('#containerAcc3');
//scrollbar End

//slider Begin
var slider = tns({
    "container": ".slider__list",
    "mouseDrag": true,
    "slideBy": "page",
    "swipeAngle": false,
    "speed": 1000,
    "autoplayTimeout": 2000,
    "controls": true,
    "controlsContainer": ".slider__btn",
    "prevButton": ".btn__prev",
    "nextButton": ".btn__next",
    "autoplay": true,
    "autoplayHoverPause": true,
    "autoplayButtonOutput": false,
    "loop": true,
    "nav": false,
    "gutter": 60,
    "fixedWidth": 950,
    "items": 1
});
//slider End


//slider Begin
var slider = tns({
    "container": ".sliderSecond__list",
    "mouseDrag": true,
    "slideBy": "page",
    "swipeAngle": false,
    "speed": 1000,
    "autoplayTimeout": 2000,
    "controls": true,
    "controlsContainer": ".sliderSecond__btn",
    "prevButton": ".btn__prev",
    "nextButton": ".btn__next",
    "autoplay": true,
    "autoplayHoverPause": true,
    "autoplayButtonOutput": false,
    "loop": true,
    "nav": false,
    "gutter": 60,
    "fixedWidth": 950,
    "items": 1
});
//slider End
