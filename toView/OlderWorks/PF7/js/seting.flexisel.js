$(".slider").flexisel({
  visibleItems: 4,
  itemsToScroll: 1,
  animationSpeed: 500,
  autoPlay: {
      enable: true,
      interval: 3000,
      pauseOnHover: true
  },
  responsiveBreakpoints: {
            landscape: {
                changePoint:540,
                visibleItems: 2,
                itemsToScroll: 1
            },
            tablet: {
                changePoint:760,
                visibleItems: 3,
                itemsToScroll: 1
            }
  }
});
