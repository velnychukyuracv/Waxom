'use strict';

$(document).ready(function() {


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
        $(window).scroll(function(){
            if($(window).scrollTop() > 100) {
                $('#navigation').css({ background:'#4B4A45'});
            } else{
                $('#navigation').css('background','transparent');
            }
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


//Buttons pills in portfolio
        $('.project').addClass('active');
        $(".title").click(function() {
            $(".title").removeClass('active');
            $(this).addClass('active');
            if ($(this).data('target') == 'all') {
                $('.project').addClass('active');
            } else {
                $('.project.active').removeClass('active');
                $('.project.' + $(this).data('target')).addClass('active');
            }
        });


//counter
        var div_top = $('.mobileInfo').offset().top;
        $(window).scroll(function(){
            if($(window).scrollTop() > div_top){
                $('.counter').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');

                    $({ countNum: $this.text()}).animate({
                            countNum: countTo
                        },

                        {
                            duration: 8000,
                            easing:'linear',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                                //alert('finished');
                            }
                        });



                });
            }
        });


//Back To Top Button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top').click(function(){
            $('html, body').animate({scrollTop:$('header').position().top}, 1500);
        });



});
