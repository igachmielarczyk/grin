var gsapTimeline = document.querySelectorAll('.item');

gsap.fromTo(gsapTimeline, {y: '+=100', opacity:0},{ y:0 , opacity:1, duration: .25, ease: "power1", stagger: .2,
    scrollTrigger: {
        trigger: '.container-timeline',
        start: 'top 85%',
        end: 'bottom bottom',
        scrub: 2,
    }
});
