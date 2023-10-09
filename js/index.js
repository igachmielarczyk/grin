$(window).on("load", function () {
	var sliderMain = new Swiper('.container-header', {
		speed: 1200,
		slidesPerView: 1,
		loop: true,
		allowTouchMove: true,
		autoHeight: false,
		effect: "creative",
		slideClass: 'dst-slide',
		wrapperClass: 'dst-wrapper',
		autoplay: {
			delay: 5000,
		},

	creativeEffect: {
	  prev: {
		  translate: ["-50%", 0, 0],
			opacity:0,
	  },
	  next: {
		translate: ["150%", 0, 0],
		opacity:1,
	  },
	},
		pagination: {
			el: '.pagination-slider',
			clickable: true,
			  renderBullet: function (index, className) {
				return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
			  },
		},
		grabCursor: true,
	});
});



	var sliderProject = new Swiper('.dst-project', {
		speed: 1200,
		slidesPerView: 1,
		loop: false,
		allowTouchMove: true,
		autoHeight: false,
        spaceBetween: 100,
        grabCursor: true,
		slideClass: 'dst-slide',
		wrapperClass: 'dst-wrapper',
		slideNextClass: 'dst-slide-next',
		slideActiveClass: 'dst-slide-active',
        navigation: {
            nextEl: ('.nav-next'),
            prevEl: ('.nav-prev')
        },
		breakpoints: {
			768: {
				slidesPerView: 1.5,
			}
		}
	});

	// gsa

	// pojawiający sie tekst

	var gsapText = document.getElementById('gsap-text');

	gsap.fromTo(gsapText.children, {y: '+=100', opacity:0},{ y:0 , opacity:1, duration: .5, ease: "power1", stagger: .2,
		scrollTrigger: {
			trigger: '.container-lottie',
			start: 'top 70%',
			end: 'bottom bottom',
			scrub: 2,
		}
	});

	gsap.fromTo('#gsap-button', {y: '+=100', opacity:0},{ y:0 , opacity:1, duration: .75, ease: "power1",
		scrollTrigger: {
			trigger: '.container-lottie',
			start: 'top 90%',
			end: 'bottom bottom',
			scrub: 2,
		}
	});

	// symbol recycling

	ScrollTrigger.matchMedia({
		"(min-width: 768px)": function() {
			gsap.to('.symbol', {
				rotation:360,
				duration: 50,
				repeat: -1,
			   	ease: Linear.easeNone,
			});


			var tlSymbol = gsap.timeline({
				scrollTrigger: {
					trigger: '.container-bg-svg',
					scrub: 1,
					start: "top 40%",
					end: "bottom 40%",
				}
			});
			var tlBg = gsap.timeline({
				scrollTrigger: {
					trigger: '.container-bg-svg',
					scrub:2,
					start: "top 40%",
					end: "bottom 40%",

				}
			});

			tlSymbol.to('.symbol', .25, { xPercent: 5, yPercent: 30, scale: 1, ease: Linear.easeNone,})
					.to('.symbol', 1, { xPercent: -45, yPercent: 180, scale: .5, opacity:0, ease: Linear.easeNone,} );

			tlBg.to('.bg-green.bottom', .5, {yPercent: 50, scale: 1.4, ease: Linear.easeNone})
				.to('.bg-green.bottom', .5, {yPercent: 50, scale: .9, ease: Linear.easeNone})
		}
	});
