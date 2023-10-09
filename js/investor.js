$(window).on("load", function () {
    setTableHeight();
    // setTimlineHeight();
});
$(window).on("resize", function () {
    setTableHeight();
    // setTimlineHeight();
});


// przełącznik domy lista kafelki

var buttonList = $(".btn-list");
var buttonTile = $(".btn-tile");
var componentList = $(".container-list");

buttonList.click(function() {
    componentList.removeClass('show-tile');
    if (buttonList.hasClass('active') === false) {
        buttonList.addClass('active');
        buttonTile.removeClass('active');
    }
});

buttonTile.click(function() {
    componentList.addClass('show-tile');
    if (buttonTile.hasClass('active') === false) {
        buttonTile.addClass('active');
        buttonList.removeClass('active');
    }
});

// gsap dla dropdowna
if (window.innerWidth < 992) {
    var tldrop = new gsap.timeline({paused:true});
    tldrop.to('.dropdown-menu', 0.2, { autoAlpha:1, y:35, })
    		.staggerFromTo('.dropdown-item ', 0.015, { y: 100, opacity: 0 }, { y: 0, opacity:1 }, 0.025);

    var dropToggle = $('.dropdown-toggle')

    dropToggle.click(function() {
        if (dropToggle.hasClass('show') == true) {
            tldrop.play(0);
        } else {
            tldrop.reverse(0);
        }

    })
}

// przsuwanie miesicy w kalndarzu

const slider = document.querySelector('.pag-content');
let isDown = false;
let startX;
let scrollLeft;
if( slider != undefined ) {
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
  })
}

// wysokość rzędów dla tabeli kalenarza

function setTableHeight() {
    var thTable = $('th');
    var widthCalender = $('.c-table').width();
    var newHeight = (widthCalender / 7);
    thTable.css('width', newHeight);
    thTable.css('height', newHeight);
}
