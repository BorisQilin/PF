let subMenuOpener = document.getElementsByClassName('item__link--opener')[0];
let subMenu = document.getElementById('subMenu')
subMenuOpener.addEventListener('mouseover', function () {
  subMenu.style.transform = 'translateY(0px)';
})
subMenuOpener.addEventListener('mouseout', function () {
  subMenu.style.transform = '';
})
subMenu.addEventListener('mouseover', function () {
  this.style.transform = 'translateY(0px)';
})
subMenu.addEventListener('mouseout', function () {
  this.style.transform = '';
})


var slider = tns({
    "container": ".slider__list",
    "mouseDrag": true,
    "slideBy": "page",
    // "swipeAngle": false,
    "speed": 2000,
    "autoplayTimeout": 3000,
    "controls": false,
    // "controlsContainer": ".slider__btn",
    // "prevButton": ".btn__prev",
    // "nextButton": ".btn__next",
    "autoplay": true,
    "autoplayHoverPause": true,
    "autoplayButtonOutput": false,
    "loop": true,
    "nav": true,
    "gutter": 60,
    "arrowKeys": true,
    "items": 1
});
