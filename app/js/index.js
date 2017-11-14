'use strict';
//hamburger menu
(function() {
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('b-menu')[0];
    var burgerContain = document.getElementsByClassName('b-container')[0];
    var burgerNav = document.getElementsByClassName('b-nav')[0];

    burgerMenu.addEventListener('click', function toggleClasses() {
        [body, burgerContain, burgerNav].forEach(function (el) {
            el.classList.toggle('open');
        });
    }, false);
})();




// Scroll Events
$(document).ready(function(){
    var HeaderTop = $('#navigation').offset().top;
    var hh =HeaderTop;
// Activate menu
    $(window).scroll(function(){
        if( $(window).scrollTop() > HeaderTop ) {
            if($(window).scrollTop() > hh) {
                $('#navigation').css({ background:'#4B4A45'});
            } else{
                $('#navigation').css();
            }


        } else {
            $('#navigation').css({background:'none'});
        }
    });
});


//slick слайдер
$('.sl').slick({
    autoplay: true,
    autoplaySpeed:3000,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        }
    ]
});


//Popup
$('.video').magnificPopup({
    type: 'iframe',
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
        '<div class="mfp-close"></div>'+
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
        '</div>'
    },
    callbacks: {
        markupParse: function(template, values, item) {
            values.title = item.el.attr('title');
        }
    }
});