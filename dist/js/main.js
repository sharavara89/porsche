//jQuerry

// Slick slider

$(document).ready(function () {
    $('.singer__preview').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: '.singer__slider',
        rtl: true
    });
    $('.singer__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.singer__preview',
        dots: false,
        infinite: false,
        focusOnSelect: true,
        rtl: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
    });
});


//Vanila JS

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');
});

window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
        menu.classList.remove('menu_active');
        hamburger.classList.remove('hamburger_active');
    }
});