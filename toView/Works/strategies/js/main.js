function timer(f_time) {
	function timer_go() {
		var n_time = Date.now();
		var diff = f_time - n_time;
		if(diff <= 0) return false;
		var left = diff % 1000;

		//секунды
		diff = parseInt(diff / 1000);
		var s = diff % 60;
		if(s < 10) {
			$(".seconds_1").html(0);
			$(".seconds_2").html(s);
		}else {
			$(".seconds_1").html(parseInt(s / 10));
			$(".seconds_2").html(s % 10);
		}
		//минуты
		diff = parseInt(diff / 60);
		var m = diff % 60;
		if(m < 10) {
			$(".minutes_1").html(0);
			$(".minutes_2").html(m);
		}else {
			$(".minutes_1").html(parseInt(m / 10));
			$(".minutes_2").html(m % 10);
		}
		//часы
		diff = parseInt(diff / 60);
		var h = diff % 24;
		if(h < 10) {
			$(".hours_1").html(0);
			$(".hours_2").html(h);
		}else {
			$(".hours_1").html(parseInt(h / 10));
			$(".hours_2").html(h % 10);
		}
		//дни
		var d = parseInt(diff / 24);
		if(d < 10) {
			$(".days_1").html(0);
			$(".days_2").html(d);
		}else {
			$(".days_1").html(parseInt(d / 10));
			$(".days_2").html(d % 10);
		}
		setTimeout(timer_go, left);
	}
	setTimeout(timer_go, 0);
}

$(document).ready(function() {
	var time = $(".timers_time").attr("data-finish");
	timer(time);
});

$(window).on('load resize', function () {
	if ($(this).width() > 768) {
		$(".advantages_list").trigger('destroy.owl.carousel');
	} else {
		$('.advantages_list').owlCarousel({
			loop:true,
			center: true,
			autoplay:true,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2,
					nav:false
				}
			}
		});
	}
});

$(window).on('load resize', function () {
	if ($(this).width() > 768) {
		$(".criteria_list").trigger('destroy.owl.carousel');
	} else {
		$('.criteria_list').owlCarousel({
			loop:true,
			center: true,
			autoplay:true,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2,
					nav:false
				}
			}
		});
	}
});

$(window).on('load resize', function () {
	if ($(this).width() > 768) {
		$(".reviews_list").trigger('destroy.owl.carousel');
	} else {
		$('.reviews_list').owlCarousel({
			loop:true,
			center: true,
			autoplay:true,
			autoplayTimeout:2500,
			autoplayHoverPause:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2,
					nav:false
				}
			}
		});
	}
});