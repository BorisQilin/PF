$(".slider").flexisel({
  visibleItems: 1,
  itemsToScroll: 1,
  animationSpeed: 500,
  autoPlay: {
      enable: true,
      interval: 3000,
      pauseOnHover: true
  },
  responsiveBreakpoints: {
            portrait: {
                changePoint:480,
                visibleItems: 1,
                itemsToScroll: 1
            },
            landscape: {
                changePoint:640,
                visibleItems: 1,
                itemsToScroll: 1
            },
            tablet: {
                changePoint:910,
                visibleItems: 1,
                itemsToScroll: 1
            }
  }
});
