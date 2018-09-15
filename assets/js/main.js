// var swup = new Swup()

// new fullScroll({displayDots: true,
//     dotsPosition: 'left',
//     animateTime: 0.7,
//     animateFunction: 'ease'});

var myFullpage = new fullpage('#main', {
	//Navigation
	menu: '#nav',
	lockAnchors: true,
	anchors:['section-01', 'section-02', 'section-03', 'section-04', 'section-05', 'section-06', 'section-07', 'section-08'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['01', '02', '03', '04', '05', '06', '07', '08'],
	showActiveTooltip: true,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: false,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	normalScrollElementTouchThreshold: 5,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
	verticalCentered: true,
	// sectionsColor : ['#ccc', '#fff'],
	// paddingTop: '3em',
	// paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: true,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){
        setTimeout(() => {
            $("#svg-loading").fadeOut();
            $("#main").fadeIn();
        }, 0);
        
    },
	afterResize: function(width, height){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});

var lineDrawing = anime({
    targets: '#svg-loading path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });

// var options = {
//     animations: {
//         '*': {
//             out: function (next) {
//                 next()
//             },
//             in: function (next) {
//                 next()
//             }
//         }
//     }
// }
// var swupjs = new Swupjs(options)