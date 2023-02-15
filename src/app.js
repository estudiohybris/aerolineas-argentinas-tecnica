console.log('Test');

// --------------------
// CSS
// --------------------
import 'scss/main.scss';


// --------------------
// Libraries
// --------------------
import 'popper.js';
import 'bootstrap';
import fullpage from 'fullpage.js';

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

var fullPageInstance = new fullpage('#fullpage', {
    //Navigation
    menu: '#menu',
    //lockAnchors: true,
    anchors: ['section0', 'section1', 'section2', 'section3', 'section4'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Inicio', '¿Quienes somos?', 'Servicios', 'Certificaciones', 'Contacto'],
    showActiveTooltip: true,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
    //Scrolling
    css3: true,
    scrollingSpeed: 1000,
    autoScrolling: true,
    fitToSection: false,
    //fitToSectionDelay: 600,
    //scrollBar: false,
    // easing: 'easeInOutCubic',
    // easingcss3: 'ease',
    // loopBottom: false,
    // loopTop: false,
    // loopHorizontal: true,
    // continuousVertical: true,
    // continuousHorizontal: true,
    // scrollHorizontally: true,
    // interlockedSlides: true,
    dragAndMove: true,
    //offsetSections: false,
    //resetSliders: false,
    //fadingEffect: true,
    //normalScrollElements: '#element1, .element2',
    //scrollOverflow: true,
    //scrollOverflowMacStyle: false,
    //scrollOverflowReset: false,
    //touchSensitivity: 15,
    //bigSectionsDestination: null,
    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    //recordHistory: true,
    //Design
    controlArrows: true,
    controlArrowsHTML: [
        '<svg xmlns="http://www.w3.org/2000/svg", viewBox="0 0 24 24", width="48", height="48"><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(255,255,255,1)"></svg>', 
        '<svg xmlns="http://www.w3.org/2000/svg", viewBox="0 0 24 24", width="48", height="48"><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(255,255,255,1)"></svg>'
    ],
    controlArrowColor: '#0075C9',
    verticalCentered: true,
    sectionsColor: ['#0075C9', '#FFFFFF', '#FFFFFF', '#FFFFFF','#0075C9',],
    paddingTop: 80,
    paddingBottom: 80,
    responsiveWidth: 0,
    responsiveHeight: 0,
    // responsiveSlides: true,
    parallax: false,
    dropEffect: false,
    waterEffect: false,
    cards: false,
    //Events
    lazyLoading: true,
    //observer: true,
    credits: { enabled: false},
    licenseKey: 'OPEN-SOURCE-GPLV4-LICENSE',
});