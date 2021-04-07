/*!
 *Размеры всплывающего окна с видео
 *
 */

$(document).ready(function() {
	$('.fancybox-media').fancybox({
        'type' : 'iframe',
        // hide the related video suggestions and autoplay the video
        // 'href' : this.href.replace(new RegExp('watch\\?v=', 'i'), 'embed/') + '?rel=0&autoplay=1',
        'overlayShow' : true,
        'centerOnScroll' : true,
        'speedIn' : 100,
        'speedOut' : 50,
        'width' : 640,
        'height' : 480
    });

    var hash = location.hash;

    if(hash == '#autoplay'){
        $('#tinymce').find('.fancybox-media').trigger('click');
    }
});
