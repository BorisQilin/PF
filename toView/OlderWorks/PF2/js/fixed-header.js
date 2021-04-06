$(document).ready(function() {
    $(window).scroll(function(event) {
        if ( $(this).scrollTop() > 100 ) {
            $('.header').css({
              'position': 'fixed',
              'width': '100%',
              'z-index': '3'
            });
        } else {
          $('.header').css({
            'position': 'relative',
            'width': '100%',
            'z-index': '3'
          });
        }
    });
});
