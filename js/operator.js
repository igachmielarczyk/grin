var gsapText = document.getElementById('gsap-text');
gsap.fromTo(gsapText.children, {y: '+=100', opacity:0},{ y:0 , opacity:1, duration: .5, ease: "power1", stagger: .2,
    scrollTrigger: {
        trigger: '#operator',
        start: 'top',
        end: 'bottom',
        scrub: 2,
        markers:true,
    }
});
