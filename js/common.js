$(window).on("load", function () {
    // Animate loader off screen
    $(".loader-hero").delay(500).fadeOut(1000);
});



$(document).ready(function() {
	wow = new WOW({
		boxClass: 'wow', // default
		animateClass: 'animate__animated', // default
		offset: 100, // default
		mobile: false, // default
		live: true // default
	})
	wow.init();
});
$(".scroll-down").on('click', function(e) {
	var target;
	target = this.hash;
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top - 180
	}, 800);
});


$('.cookie-message').cookieBar({
	closeButton: '.btn'
});

function removeCss() {
	$('.navbar-collapse').removeClass('gsap-style')
}
function addCss() {
	$('.navbar-collapse').addClass('gsap-style')
}
$(window).on("load", function () {
	if ($(window).width() <= 991) {
	  removeCss();
	  removeGsapStyle()
	  $('.menu-show').css({"opacity":"1", "display":"block"},300);
	$('.menu-hide').css({"opacity":"0", "display":"none"},300);
	}
	if ($(window).width() >= 992) {
	  addGsapStyle()
	  addCss()
	}
});
$(window).on("resize", function () {
	if ($(window).width() <= 991) {
	  removeCss();
	  removeGsapStyle()
	  $('.menu-show').css({"opacity":"1", "display":"block"},300);
	 $('.menu-hide').css({"opacity":"0", "display":"none"},300);
	}
	if ($(window).width() >= 992) {
	  addGsapStyle()
	  addCss()
	}
});

var tlmenu = new gsap.timeline({paused:true});
tlmenu.to('.container-investor', 0.4, { autoAlpha:1, y:0, })
		.staggerFromTo('.item-green', 0.1, { y: 100, opacity: 0 }, { y: 0, opacity:1 }, 0.05)
		.fromTo('.tr-top', 0.5, { x: -400 , opacity: 0, ease:Back.easeOut }, { x: 0, opacity:1, ease:Back.easeOut },">-=.75")
		.fromTo('.tr-bottom', 0.5, { y: -400, x: -400 , opacity: 0, ease:Back.easeOut }, { y: 0, x:0, opacity:.5, ease:Back.easeOut },">-=.25" )
		.from('.line', 0.4, { width:"0" , opacity: 0 },">-=.35" );

var tlNavbar = new gsap.timeline({paused:true});
	tlNavbar.to('.main-collapse', 0.4, { autoAlpha:1, y:0, })
			.staggerFromTo('.main-item', 0.1, { y: 100, opacity: 0 }, { y: 0, opacity:1 }, 0.05)
			.fromTo('.col-tr-top', 0.5, { x: -400 , opacity: 0, ease:Back.easeOut }, { x: 0, opacity:1, ease:Back.easeOut },">-=.75");


	function togglerShow(){
		tlNavbar.play(0);
	}

	function togglerHide() {
		tlNavbar.reverse(0);
	}
	function togglerRemove() {
		$('.main-collapse').css({'visibility': 'hidden'});
	}

	function invShow(){
		tlmenu.play(0);
	}

	function invHide() {
		tlmenu.reverse(0);
	}
	function invRemove() {
		$('.container-investor').css({'visibility': 'hidden'});
	}

	function removeGsapStyle() {
		// $('.container-investor').css({'visibility': 'hidden'});
		$('.main-collapse').css({'visibility': 'hidden'});
		$('.main-collapse').css({'transform': 'none'});
		$('.main-collapse').css({'opacity': '1'});
	}
	function addGsapStyle() {
		// $('.container-investor').css({'visibility': 'visible'});
		$('.main-collapse').css({'visibility': 'visibie'});
		$('.main-collapse').css({'transform': 'none'});
		$('.main-collapse').css({'opacity': '1'});
	}

	$('.btn-show').click(function() {
		togglerRemove();
		$('.menu-show').css({"opacity":"1", "display":"block"},300);
		$('.menu-hide').css({"opacity":"0", "display":"none"},300);
		invShow();
		$("html").addClass('show-menu');
		$("body").addClass('show-menu');
	});

	$('.btn-hide').click(function() {
	   invHide();
	   $("html").removeClass('show-menu');
	   $("body").removeClass('show-menu');
	});
	$('.menu-show').click(function() {
		invRemove();
		$('.menu-show').css({"opacity":"0", "display":"none"},300);
		$('.menu-hide').css({"opacity":"1", "display":"block"},300);
		togglerShow();
		$("html").addClass('show-menu');
		$("body").addClass('show-menu');
	});

	$('.menu-hide').click(function() {
	  togglerHide()
	  $("html").removeClass('show-menu');
	  $("body").removeClass('show-menu');
	});


	$('.menu-show').click(function() {
		$('.menu-show').css({"opacity":"0", "display":"none"},300);
		$('.menu-hide').css({"opacity":"1", "display":"block"},300);
	});
	$('.menu-hide').click(function() {
		$('.menu-show').css({"opacity":"1", "display":"block"},300);
		$('.menu-hide').css({"opacity":"0", "display":"none"},300);
	});

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

// loading  button submit
function buttonSpinner() {
    var $btn = $('.btn-send');
    if ($btn.data('state') == 0) {
        // normalny
        $btn.data('state', 1);
        $btn.addClass('show');
        $btn.find('span').html($btn.data('loading-text'));
    } else {
        // z animacją
        $btn.data('state', 0);
        $btn.removeClass('show');
        $btn.find('span').html($btn.data('ready-text'));
    }
}

(window.onload = function() {
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {

            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                buttonSpinner();

                setTimeout(function() {
                    console.log('timeout');
                    form.submit();
                }, 2500);
            }

            form.classList.add('was-validated');
            return false;
        }, false)
    })
});

	var btnSend = $('.btn-send');
	$(btnSend).unbind().on('click', function () {
		$('.content-form').toggleClass('show');
	});
