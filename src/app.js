// --------------------
// CSS
// --------------------
import 'scss/main.scss';


// --------------------
// Libraries
// --------------------
import 'popper.js';
import 'bootstrap';

// --------------------
// Functions
// --------------------
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".sticky-top").addClass("shadow");
    } else {
        $(".sticky-top").removeClass("shadow");
    }
});

$(window).ready(function($){
    $(".nav-link").click(function(){
        $(".navbar-collapse").removeClass('show');
        $("navbar-collapse").delay(1000).addClass('collapsing').delay(1000).removeClass('collapsing');
    })
});