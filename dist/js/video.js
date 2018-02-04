/**
 * Created by Admin on 04.02.2018.
 */


//Video popup

$(document).ready(function() {
    $('.popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        url: 'https://vimeo.com/8844376'
    })
});