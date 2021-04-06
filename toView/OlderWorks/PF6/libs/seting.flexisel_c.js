$(".clients__slider__list").flexisel({
  visibleItems: 4,
  itemsToScroll: 1,
  animationSpeed: 500,
  navigationTargetSelector: '.clients__slider__controls',
  autoPlay: {
      enable: true,
      interval: 3000
  },
  responsiveBreakpoints: {
            portrait: {
                changePoint:480,
                visibleItems: 1,
                itemsToScroll: 1
            },
            landscape: {
                changePoint:640,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: {
                changePoint:910,
                visibleItems: 3,
                itemsToScroll: 3
            }
  }
});
