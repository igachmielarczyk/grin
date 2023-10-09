var tlBulb = gsap.timeline({
    scrollTrigger: {
        trigger: '.container-bg-svg',
        scrub: 2,
        start: "-=35%",
        end: "bottom 20%",
    }
});
var tlHand = gsap.timeline({
    scrollTrigger: {
        trigger: '.container-bg-svg',
        scrub: 2,
        start: "-=35%",
        end: "bottom 20% ",
    }
});

tlBulb.to('.bulb', 2, { yPercent: 10, opacity: .12, ease: Linear.easeNone})

tlHand.to('.hand', 2, { scale: 1.1, ease: Linear.easeNone})
