/*
tabs list
*/
$(function() {

  $('.tab__nav > .nav__list > .list__item:first a')
    .addClass('current')
    .parent('.list__item')
    .parent('.nav__list')
    .parent('.tab__nav')
    .next('.tab')
    .find('.tab__content:not(:first)')
    .hide();

  $('.tab__nav > .nav__list > .list__item').on('click', 'a', function(event) {
    event.preventDefault();
    var href = $(this).attr('href');

    if ($('.tab__nav > .nav__list > .list__item a').hasClass('current')) {
      $('.tab__nav > .nav__list > .list__item a').removeClass('current');
    }

    $(this)
      .addClass('current')
      .parent('.list__item')
      .parent('.nav__list')
      .parent('.tab__nav')
      .next('.tab')
      .find('div' + href)
      .fadeIn()
      .siblings('div')
      .hide();
  });

});



/*
tabs videoPlay
*/
var Container = $('.tab > .tab__content');
Container.find('.link__img-1').on('click', function() {
  event.preventDefault();
  var dataYoutube = $(this).parents('.graphic__video').attr('data-youtube');
  $(this).parents('.graphic__video').html('<iframe class="graphic__video__youtubeVideo-1" width="432" height="247" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
});

Container.find('.link__img-2').on('click', function() {
  event.preventDefault();
  var dataYoutube = $(this).parents('.graphic__video').attr('data-youtube');
  $(this).parents('.graphic__video').html('<iframe class="graphic__video__youtubeVideo-1" width="432" height="247" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
});

Container.find('.link__img-3').on('click', function() {
  event.preventDefault();
  var dataYoutube = $(this).parents('.graphic__video').attr('data-youtube');
  $(this).parents('.graphic__video').html('<iframe class="graphic__video__youtubeVideo-1" width="432" height="247" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
});

Container.find('.link__img-4').on('click', function() {
  event.preventDefault();
  var dataYoutube = $(this).parents('.graphic__video').attr('data-youtube');
  $(this).parents('.graphic__video').html('<iframe class="graphic__video__youtubeVideo-1" width="432" height="247" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
});

Container.find('.link__img-5').on('click', function() {
  event.preventDefault();
  var dataYoutube = $(this).parents('.graphic__video').attr('data-youtube');
  $(this).parents('.graphic__video').html('<iframe class="graphic__video__youtubeVideo-1" width="432" height="247" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
});



var ContainerBriefcases = $('.briefcases__content__box > .content__element');
ContainerBriefcases.find('.link__img-1').on('click', function() {
  event.preventDefault();
  var dataYoutube = $(this).parents('.graphic__video').attr('data-youtube');
  $(this).parents('.graphic__video').html('<iframe class="graphic__video__youtubeVideo-1" width="432" height="247" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
});

ContainerBriefcases.find('.link__img-2').on('click', function() {
  event.preventDefault();
  var dataYoutube = $(this).parents('.graphic__video').attr('data-youtube');
  $(this).parents('.graphic__video').html('<iframe class="graphic__video__youtubeVideo-1" width="432" height="247" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
});

ContainerBriefcases.find('.link__img-3').on('click', function() {
  event.preventDefault();
  var dataYoutube = $(this).parents('.graphic__video').attr('data-youtube');
  $(this).parents('.graphic__video').html('<iframe class="graphic__video__youtubeVideo-1" width="432" height="247" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
});

ContainerBriefcases.find('.link__img-4').on('click', function() {
  event.preventDefault();
  var dataYoutube = $(this).parents('.graphic__video').attr('data-youtube');
  $(this).parents('.graphic__video').html('<iframe class="graphic__video__youtubeVideo-1" width="432" height="247" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
});

ContainerBriefcases.find('.link__img-5').on('click', function() {
  event.preventDefault();
  var dataYoutube = $(this).parents('.graphic__video').attr('data-youtube');
  $(this).parents('.graphic__video').html('<iframe class="graphic__video__youtubeVideo-1" width="432" height="247" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
});



/*
scroll
*/
$(document).ready(function() {
  $('.arr-down__text > .spring-icon-arrow-r').on('click', function(event) {
    event.preventDefault();
    slowScroll($(this).attr('href'), true);
  });

  function slowScroll(section) {
    var
      direction = section.replace(/#/, ''),
      reqSection = $('div').filter('[data-section="' + direction + '"]'),
      reqSectionPos = reqSection.offset().top;
    $('body, html').animate({
      scrollTop: reqSectionPos
    }, 500);
  }
});


$(document).ready(function() {
  $('.arr-down__advantages_page > .arr-down__text > .spring-icon-arrow-r').on('click', function(event) {
    event.preventDefault();
    slowScroll($(this).attr('href'), true);
  });

  function slowScroll(section) {
    var
      direction = section.replace(/#/, ''),
      reqSection = $('div').filter('[data-section="' + direction + '"]'),
      reqSectionPos = reqSection.offset().top;
    $('body, html').animate({
      scrollTop: reqSectionPos
    }, 500);
  }
});


/*
popup window
*/
var memOfTeam = [{
    name: 'Vasya',
    prof: 'analitics',
    photo: 'img/koala.jpg',
    about: 'Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения. Наше количество набитых шишек в финансах'
  },

  {
    name: 'Petya',
    prof: 'timlid',
    photo: 'img/koala.jpg',
    about: 'Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения. Наше количество набитых шишек в финансах'
  },

  {
    name: 'Masha',
    prof: 'design',
    photo: 'img/koala.jpg',
    about: 'Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения. Наше количество набитых шишек в финансах'
  },

  {
    name: 'Dasha',
    prof: 'dev',
    photo: 'img/koala.jpg',
    about: 'Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения. Наше количество набитых шишек в финансах'
  },

  {
    name: 'Tosha',
    prof: 'market',
    photo: 'img/koala.jpg',
    about: 'Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения. Наше количество набитых шишек в финансах'
  },

  {
    name: 'Semen',
    prof: 'java',
    photo: 'img/koala.jpg',
    about: 'Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения. Наше количество набитых шишек в финансах'
  },

  {
    name: 'Andrey',
    prof: 'C#',
    photo: 'img/koala.jpg',
    about: 'Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения. Наше количество набитых шишек в финансах'
  },

  {
    name: 'Aya',
    prof: 'statisrics',
    photo: 'img/koala.jpg',
    about: 'Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения. Наше количество набитых шишек в финансах'
  },

  {
    name: 'Karina',
    prof: 'objectC',
    photo: 'img/koala.jpg',
    about: 'Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения. Наше количество набитых шишек в финансах'
  },

  {
    name: 'Vitya',
    prof: 'market',
    photo: 'img/koala.jpg',
    about: 'Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения Наше количество набитых шишек в финансах и управленческом учете позволяет строить продуманный упраленческий учет, на основе которого мы сможем принимать решения. Наше количество набитых шишек в финансах'
  },
];

$('.team__popup').hide();
var ActiveItems = $('.team__box > .team__box__list > .list__item > .item__link');

ActiveItems.on('click', function(event) {
  event.preventDefault();

  $('.team__popup').fadeIn();

  var clickItem = $(this).attr('href'),
    j = memOfTeam[clickItem];

  if (activeItem = j) {
    $('.team__popup > .popup__img > .popup__pic').attr('src', memOfTeam[clickItem]["photo"]);

    $('.team__popup > .popup__description > .description__title').text(memOfTeam[clickItem]["name"]);

    $('.team__popup > .popup__description > .description__title-sub').text(memOfTeam[clickItem]["prof"]);
    $('.team__popup > .popup__description > .description__about').text(memOfTeam[clickItem]["about"]);
  }

  $(document).mouseup(function(e) {
    var container = $(".team__popup");
    if (container.has(e.target).length === 0) {
      container.fadeOut();
    }
  });
});

$(".team__popup > .team__popup__close").on('click', function(event) {
  event.preventDefault();
  $(".team__popup").hide();
});


/*
see more uor team
*/
$(document).ready(function() {
  var items1 = $('.team__box > .team__box__list > .list__item'),
    itemsHide = items1.eq(9).nextAll().hide(),
    countK = 10;

  $('.team__box > .see-more').on('click', function(event) {
    event.preventDefault();
    countK = countK + 5;
    for (var i = 0; i < (countK - 10); i++) {
      items1.eq([(countK - 5) + i]).fadeIn();
      if (items1.eq(-1).is(':visible')) {
        $(this).css('display', 'none');
      }
    }
  });
});



/*
see more briefcases
*/
var items = $('.briefcases__content > .briefcases__content__box > .content__element'),
  itemsHide = items.eq(2).nextAll().hide(),
  countK = 2;
$('.briefcases__content > .briefcases__content__box > .content__read-more').css('display', 'block');
$('.briefcases__content > .briefcases__content__box > .content__read-more').on('click', function() {
  event.preventDefault();

  countK = countK + 1;
  items.eq(countK).show(500);
  if (items.eq(-1).is(':visible')) {
    $(this).css('display', 'none');
  }
});







/*
append penultimate-footer__box on nav
*/
$(".penultimate-footer__box").clone().appendTo("#navigation");
$("#navigation > .penultimate-footer__box > .footer__about-us > form").attr('id', 'about_us__subscription__sub_header');

$("#navigation > .penultimate-footer__box > .footer__about-us > form > p").attr('id', 'subscription__checkbox__container_header');

$("#navigation > .penultimate-footer__box > .footer__about-us > form > p > input").attr('id', 'checkbox3');

$("#navigation > .penultimate-footer__box > .footer__about-us > form > p > label").attr('for', 'checkbox3');



/*
Privacy_Policy opener
*/
$('#subscription__checkbox__container_header > a').click(function(event) {
  event.preventDefault();
  $('#Privacy_Policy').css({
    'display': 'block',
    'box-shadow': '0 0 0px 500px rgba(0,0,0,.7)'
  });

  $('body').css({
    'overflow': 'hidden'
  });
});


$('.penultimate-footer > .wrapper > .penultimate-footer__box > .footer__about-us > .about-us__subscription > #subscription__checkbox__container > a').click(function(event) {
  event.preventDefault();
  $('#Privacy_Policy').css({
    'display': 'block',
    'box-shadow': '0 0 0px 500px rgba(0,0,0,.7)'
  });

  $('body').css({
    'overflow': 'hidden'
  });
});


$('.proposal > .wrapper > .proposal__box > .action__box > .box__form > .checkbox__container > a').click(function(event) {
  event.preventDefault();
  $('#Privacy_Policy').css({
    'display': 'block',
    'box-shadow': '0 0 0px 500px rgba(0,0,0,.7)'
  });

  $('body').css({
    'overflow': 'hidden'
  });
});


/*
Privacy_Policy closest
*/
$('#Privacy_Policy > .close_Privacy_Policy').click(function(event) {
  event.preventDefault();
  $('#Privacy_Policy').css({
    'display': '',
    'box-shadow': ''
  });

  $('body').css({
    'overflow': 'auto'
  });
});



// $('#navigation > ul').hide()

/*
drop-down menu
*/
function DropDown() {
  document.getElementById("navigation").classList.toggle("show");
}
$(".nav > .penultimate-footer__box").find('a').on('click', function(event) {
  $(".nav").removeClass('show');
});


$('#navigation > .penultimate-footer__box').prepend("<a href='#' class='nav__close'></a");
$('#navigation > .penultimate-footer__box > .nav__close').html('\
<?xml version="1.0" encoding="utf-8"?>\
<!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\
<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\
	 viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">\
<style type="text/css">\
	.st0{fill:#FFFFFF;}\
</style>\
<g>\
	<rect x="9.5" y="-2.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.1421 10)" class="st0" width="1" height="25"/>\
	<polygon points="1.5,0.8 0.8,1.5 18.5,19.2 19.2,18.5 1.5,0.8 	"/>\
</g>\
<g>\
	<rect x="-2.5" y="9.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.1421 10)" class="st0" width="25" height="1"/>\
	<polygon points="18.5,0.8 0.8,18.5 1.5,19.2 19.2,1.5 18.5,0.8 	"/>\
</g>\
</svg>\
')
$(".nav > .penultimate-footer__box > .nav__close").on('click', function(event) {
  event.preventDefault();
  $(".nav").removeClass('show');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".first-scrin").length) {
    $(".nav").removeClass('show');
  }
  e.stopPropagation();
});

// $(".nav > .penultimate-footer__box > .footer__about-us > .form").attr('id', 'about_us__subscription__sub_header');

/*
fixed menu
*/
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 90) {
      $('.header__box').css({
        'position': 'fixed',
        'width': '100%',
        'z-index': '7',
        'background-color': 'rgba(255,255,255, 1)',
        'border-bottom': '1px solid rgb(247, 247, 247)',
        'top': '0'
      });

      $('.header > .header__logo > a > #logo > .st0').css({
        'color': "#111",
        'fill': "#111"
      });

      $('.header > .header__social > .cocial__list > .list__item > .item__link').css({
        'color': '#111'
      });

      $('.header > .dropbtn > svg > g > polygon').css({
        'color': '#111',
        'fill': '#111'
      });

      $('.header > nav').css({
        'height': '100%',
        'color': '#111'
      });

      $('.header > .nav > .nav__list > .list__item > .item__link').css({
          'color': '#111'
        })
        .hover(function() {
            $(this).css({
              'background-color': "#fff",
              'border-radius': '50px'
            }, 1000);
          },
          function() {
            $(this).css({
              'background-color': "transparent"
            }, 1000);
          });


    } else {
      $('.header__box').css({
        'position': 'static',
        'background-color': 'transparent',
        'border-bottom': ''
      });

      $('.header > .header__logo > a > #logo > .st0').css({
        'color': "",
        'fill': ""
      });

      $('.header > .header__social > .cocial__list > .list__item > .item__link').css({
        'color': ''
      });

      $('.header > .dropbtn > svg > g > polygon').css({
        'color': '',
        'fill': ''
      });

      $('.header > nav').css({
        'color': '',
        'height': '100%',
      });

      $('.header > .nav > .nav__list > .list__item > .item__link').css({
          'color': ''
        })
        .hover(function() {
            $(this).css({
              'background-color': "transparent",
              'border-radius': '50px'
            }, 1000);
          },
          function() {
            $(this).css({
              'background-color': "transparent"
            }, 1000);
          });
    }
  });
});



/*
filler sales list tab
*/
function SalesOption() {
  var wid = $(window).width();

  $('.delivery_list').click(function() {
    $(".tab__nav").slideToggle('fast');
  });
  $('.tab__nav > .nav__list > .list__item > .item__link').click(function() {
    if ($('.delivery_list').is(':visible')) {
      var tx = $(this).text();
      $(".tab__nav").slideUp('fast');
      $(".delivery_list > #btn > .btn__text").text(tx);
    } else {
      $(window).resize(function() {
        $(".tab__nav").show();
        $(".tab__nav").slideDown();
      });
      $(window).resize();
    }
  });
}
SalesOption();

$('.read__description__review').on('click', function(event) {
  event.preventDefault();
  $(this).parent().find('.description__review').fadeIn();
  $(this).hide();
});



/*
fansy box
*/
$(document).ready(function() {
  $('[data-fancybox="gallery01"]').fancybox({});
  var imageList = [{
    url: "../img/reviews/1.jpg",
    title: "Оригинал"
  }];

  function getGroupItems(opts) {
    jQuery.each(imageList, function(i, val) {
      opts.itemArray.push(val);
    });
  }
});
$(document).ready(function() {
  $('[data-fancybox="gallery02"]').fancybox({});
  var imageList = [{
    url: "../img/reviews/1.jpg",
    title: "Оригинал"
  }];

  function getGroupItems(opts) {
    jQuery.each(imageList, function(i, val) {
      opts.itemArray.push(val);
    });
  }
});
$(document).ready(function() {
  $('[data-fancybox="gallery03"]').fancybox({});
  var imageList = [{
    url: "../img/reviews/1.jpg",
    title: "Оригинал"
  }];

  function getGroupItems(opts) {
    jQuery.each(imageList, function(i, val) {
      opts.itemArray.push(val);
    });
  }
});
$(document).ready(function() {
  $('[data-fancybox="gallery04"]').fancybox({});
  var imageList = [{
    url: "../img/reviews/1.jpg",
    title: "Оригинал"
  }];

  function getGroupItems(opts) {
    jQuery.each(imageList, function(i, val) {
      opts.itemArray.push(val);
    });
  }
});
$(document).ready(function() {
  $('[data-fancybox="gallery05"]').fancybox({});
  var imageList = [{
    url: "../img/reviews/1.jpg",
    title: "Оригинал"
  }];

  function getGroupItems(opts) {
    jQuery.each(imageList, function(i, val) {
      opts.itemArray.push(val);
    });
  }
});



/*
masked input
*/
jQuery(function($) {
  $.mask.definitions['X'] = '[0, 1, 2, 3, 4, 5, 6, 9]';
  $('#action__box_telephone').mask("+7(X99) 999-99-99");
});



/*
validate form
*/
$(document).ready(function() {
  $.validator.setDefaults({
    errorClass: "help-inline"
  }), $("#index__form").validate({
    rules: {
      ima_kl: {
        required: !0,
        minlength: 3,
        maxlength: 20
      },
      telefon_lida: {
        required: !0,
        minlength: 15,
        maxlength: 20
      },
      email: {
        required: !0,
        minlength: 9
      },
      site: {
        required: !0,
        minlength: 5
      },
      subject: {
        required: !0,
        minlength: 10
      }
    }
    // , messages: {
    //     ima_kl: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 3 символа",
    //         maxlength: "Максимальная длина 20 символов"
    //     }
    //     , telefon_lida: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 15 символов",
    //         maxlength: "Максимальная длина 20 символов"
    //     }
    //     , email: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 6 символов"
    //     }
    //     , site: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 5 символов"
    //     }
    //     , subject: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 10 символов"
    //     }
    // }
    ,
    submitHandler: function() {
      $.ajax({
        type: "POST",
        url: "http://sprign.ru/mail.php",
        successPush: function() {
          dataLayer.push({
            'formname': 'zayavka na podgotovku predlojeniya',
            'event': 'leadform'
          })
        },
        data: $("#index__form").serialize()
      }).done(function() {
        window.location.href = "http://sprign.ru/mail.php"
      })
    }
  })
});

$(document).ready(function() {
  $.validator.setDefaults({
    errorClass: "help-inline"
  }), $("#vacansies_form").validate({
    rules: {
      ima_kl: {
        required: !0,
        minlength: 3,
        maxlength: 20
      },
      telefon_lida: {
        required: !0,
        minlength: 15,
        maxlength: 20
      },
      email: {
        required: !0,
        minlength: 9
      },
      site: {
        required: !0,
        minlength: 5
      },
      subject: {
        required: !0,
        minlength: 10
      }
    }
    // , messages: {
    //     ima_kl: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 3 символа",
    //         maxlength: "Максимальная длина 20 символов"
    //     }
    //     , telefon_lida: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 15 символов",
    //         maxlength: "Максимальная длина 20 символов"
    //     }
    //     , email: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 6 символов"
    //     }
    //     , site: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 5 символов"
    //     }
    //     , subject: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 10 символов"
    //     }
    // }
    ,
    submitHandler: function() {
      $.ajax({
        type: "POST",
        url: "http://sprign.ru/mail.php",
        successPush: function() {
          dataLayer.push({
            'formname': 'otpravity rezume',
            'event': 'leadform'
          })
        },
        data: $("#vacansies_form").serialize()
      }).done(function() {
        window.location.href = "http://sprign.ru/mail.php"
      })
    }
  })
});

$(document).ready(function() {
  $.validator.setDefaults({
    errorClass: "help-inline"
  }), $("#vacancies_description_form").validate({
    rules: {
      ima_kl: {
        required: !0,
        minlength: 3,
        maxlength: 20
      },
      telefon_lida: {
        required: !0,
        minlength: 15,
        maxlength: 20
      },
      email: {
        required: !0,
        minlength: 9
      },
      site: {
        required: !0,
        minlength: 5
      },
      subject: {
        required: !0,
        minlength: 10
      }
    }
    // , messages: {
    //     ima_kl: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 3 символа",
    //         maxlength: "Максимальная длина 20 символов"
    //     }
    //     , telefon_lida: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 15 символов",
    //         maxlength: "Максимальная длина 20 символов"
    //     }
    //     , email: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 6 символов"
    //     }
    //     , site: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 5 символов"
    //     }
    //     , subject: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 10 символов"
    //     }
    // }
    ,
    submitHandler: function() {
      $.ajax({
        type: "POST",
        url: "http://sprign.ru/mail.php",
        successPush: function() {
          dataLayer.push({
            'formname': 'otpravity rezume',
            'event': 'leadform'
          })
        },
        data: $("#vacancies_description_form").serialize()
      }).done(function() {
        window.location.href = "http://sprign.ru/mail.php"
      })
    }
  })
});

$(document).ready(function() {
  $.validator.setDefaults({
    errorClass: "help-inline"
  }), $("#contacts__form").validate({
    rules: {
      ima_kl: {
        required: !0,
        minlength: 3,
        maxlength: 20
      }
      // , telefon_lida: {
      //     required: !0, minlength: 15, maxlength: 20
      // }
      ,
      email: {
        required: !0,
        minlength: 9
      }
      // , site: {
      //     required: !0, minlength: 5
      // }
      ,
      subject: {
        required: !0,
        minlength: 10
      }
    }
    // , messages: {
    //     ima_kl: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 3 символа",
    //         maxlength: "Максимальная длина 20 символов"
    //     }
    //     , telefon_lida: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 15 символов",
    //         maxlength: "Максимальная длина 20 символов"
    //     }
    //     , email: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 6 символов"
    //     }
    //     , site: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 5 символов"
    //     }
    //     , subject: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 10 символов"
    //     }
    // }
    ,
    submitHandler: function() {
      $.ajax({
        type: "POST",
        url: "http://sprign.ru/mail.php",
        successPush: function() {
          dataLayer.push({
            'formname': 'otpravity rezume',
            'event': 'leadform'
          })
        },
        data: $("#contacts__form").serialize()
      }).done(function() {
        window.location.href = "http://sprign.ru/mail.php"
      })
    }
  })
});

$(document).ready(function() {
  $.validator.setDefaults({
    errorClass: "help-inline"
  }), $("#base_form").validate({
    rules: {
      ima_kl: {
        required: !0,
        minlength: 3,
        maxlength: 20
      },
      telefon_lida: {
        required: !0,
        minlength: 15,
        maxlength: 20
      },
      email: {
        required: !0,
        minlength: 9
      }
      // , site: {
      //     required: !0, minlength: 5
      // }
      ,
      subject: {
        required: !0,
        minlength: 10
      }
    }
    // , messages: {
    //     ima_kl: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 3 символа",
    //         maxlength: "Максимальная длина 20 символов"
    //     }
    //     , telefon_lida: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 15 символов",
    //         maxlength: "Максимальная длина 20 символов"
    //     }
    //     , email: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 6 символов"
    //     }
    //     , site: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 5 символов"
    //     }
    //     , subject: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 10 символов"
    //     }
    // }
    ,
    submitHandler: function() {
      $.ajax({
        type: "POST",
        url: "http://sprign.ru/mail.php",
        successPush: function() {
          dataLayer.push({
            'formname': 'otpravity rezume',
            'event': 'leadform'
          })
        },
        data: $("#base_form").serialize()
      }).done(function() {
        window.location.href = "http://sprign.ru/mail.php"
      })
    }
  })
});

$(document).ready(function() {
  $.validator.setDefaults({
    errorClass: "help-inline"
  }), $("#about_us__subscription__sub").validate({
    rules: {
      email_sub: {
        required: !0,
        minlength: 9
      },
    },
    submitHandler: function() {
      $.ajax({
        type: "POST",
        url: "http://sprign.ru/mail.php",
        successPush: function() {
          dataLayer.push({
            'formname': 'otpravity rezume',
            'event': 'leadform'
          })
        },
        data: $("#about_us__subscription__sub").serialize()
      }).done(function() {
        window.location.href = "http://sprign.ru/mail.php"
      })
    }
  })
});

$(document).ready(function() {
  $.validator.setDefaults({
    errorClass: "help-inline"
  }), $("#about_us__subscription__sub_header").validate({
    rules: {
      email_sub: {
        required: !0,
        minlength: 9
      },
    },
    submitHandler: function() {
      $.ajax({
        type: "POST",
        url: "http://sprign.ru/mail.php",
        successPush: function() {
          dataLayer.push({
            'formname': 'otpravity rezume',
            'event': 'leadform'
          })
        },
        data: $("#about_us__subscription__sub_header").serialize()
      }).done(function() {
        window.location.href = "http://sprign.ru/mail.php"
      })
    }
  })
});

$(document).ready(function() {
  $.validator.setDefaults({
    errorClass: "help-inline"
  }), $("#action__box_briefcases-page").validate({
    rules: {
      ima_kl: {
        required: !0,
        minlength: 3,
        maxlength: 20
      },
      telefon_lida: {
        required: !0,
        minlength: 15,
        maxlength: 20
      },
      email: {
        required: !0,
        minlength: 9
      },
      site: {
        required: !0,
        minlength: 5
      },
      subject: {
        required: !0,
        minlength: 10
      }
    }
    // , messages: {
    //     ima_kl: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 3 символа",
    //         maxlength: "Максимальная длина 20 символов"
    //     }
    //     , telefon_lida: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 15 символов",
    //         maxlength: "Максимальная длина 20 символов"
    //     }
    //     , email: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 6 символов"
    //     }
    //     , site: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 5 символов"
    //     }
    //     , subject: {
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Минимальная длина 10 символов"
    //     }
    // }
    ,
    submitHandler: function() {
      $.ajax({
        type: "POST",
        url: "http://sprign.ru/mail.php",
        successPush: function() {
          dataLayer.push({
            'formname': 'zayavka na podgotovku predlojeniya',
            'event': 'leadform'
          })
        },
        data: $("#action__box_briefcases-page").serialize()
      }).done(function() {
        window.location.href = "http://sprign.ru/mail.php"
      })
    }
  })
});
/*
validate form END
*/



/*add name file in input*/
var InputContainer = $('.proposal__box > .action__box > .box__form > .file_upload');
var InputVal = InputContainer.find('input');
var f = function() {
  if (InputVal.val() != "") {
    if ($(this).val().lastIndexOf('\\')) {
      var n = $(this).val().lastIndexOf('\\') + 1;
    } else {
      var n = $(this).val().lastIndexOf('/') + 1;
    }
    var fileName = $(this).val().slice(n);
    InputContainer.find('p').html(fileName);
  } else {
    InputContainer.find('p').html("Приложить резюме");
  }
};

InputVal.change(f);


/*
slider from page team
*/
$('.our-team__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  rows: 3,
  responsive: [{
    breakpoint: 769,
    settings: {
      dots: true,
    }
  }]
});


/*
slider from page advantages
*/
$('#advantages_page_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '10px',
  dots: true,
});


/*
slider from page vacancies
*/
$('#vacancies-page__box__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '0px',
  dots: true,
});


/*
slider from page base
*/
$('#content__boocks__box__slider__box').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '0px',
  dots: true,
});
