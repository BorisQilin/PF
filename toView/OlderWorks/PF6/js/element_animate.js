$(document).ready(function() {
  function animate(elem) {
    var effect = elem.data("effect");
    elem.addClass("animated " + effect).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      elem.removeClass("animated " + effect);
    });
  }


  $(".test").mouseenter(function() {
    animate($(this));
  });
});
