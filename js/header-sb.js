$(window).on("load", function () {
    // Animate loader off screen
    $(".loader-header").delay(500).fadeOut(1000);
	setTimeout( function() {
		animationHeader();
	}, 900);
});


function animationHeader() {
	var tlHeader = new gsap.timeline();

	ScrollTrigger.matchMedia({
		"(min-width: 768px)": function() {
			tlHeader.from('#h-clip', 1, { opacity:0, width: '80%', height: '80%', ease:Back.easeOut })
					.from('#t-top', 1.5, {opacity:1, width: '150%', height: '150%', ease:Back.easeOut }, ">-=1")
					.to('#t-bottom', .5, { bottom: '0', right: '0', opacity:1, ease:Back.easeOut }, ">-=1.5")
					.to('.img-gsap',.75, {opacity:1, y: 0, ease: "power1"}, ">-=.5");
		},
		"(max-width: 767px)": function() {
			tlHeader.from('#h-clip', 1, { width: '80%', height: '80%', ease:Back.easeOut })
					.from('#t-top', 1, { width: '150%', height: '150%', ease:Back.easeOut}, ">-=1")
					.from('#t-bottom', 1, {width: '100%', height: '100%', ease:Back.easeOut }, ">-=1")
		}
	});
}
