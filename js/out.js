/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

document.addEventListener('DOMContentLoaded', function () {

    __webpack_require__(2);
    __webpack_require__(3);
    __webpack_require__(4);

    //
    //
    // slides
    //
    //

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<div class="home-slide-left"> ' + '<a> <div class="arrow-left"> </div></a>' + '</div>', '<div class="home-slide-right">\n' + '    <a> <div class="arrow-right"> </div></a>\n' + '</div>'],
        navClass: ['arrow-left', 'arrow-right'],
        dots: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                mouseDrag: false,
                touchDrag: true
            },
            600: {
                items: 1,
                nav: false,
                touchDrag: true,
                mouseDrag: true
            },
            1000: {
                items: 1,
                mouseDrag: false
            }
        }
    });

    var homeSlides = document.querySelectorAll('.home-slide');

    homeSlides[0].style.backgroundImage = 'url(\'img/slider/bg' + (1 + 1) + '.jpg\')';

    var skills = document.querySelectorAll("#about-us .bar");
    for (var i = 0; i < skills.length; i++) {
        skills[i].style.width = skills[i].dataset.progress + "%";
        console.log();
    }

    //
    //
    // skill bar
    //
    //


    function initProgress(el) {
        jQuery(el).each(function () {
            var pData = jQuery(this).data('progress');
            progress(pData, jQuery(this));
        });
    }

    function progress(percent, $element) {
        var progressBarWidth = 0;

        (function myLoop(i, max) {
            progressBarWidth = i * $element.width() / 100;
            setTimeout(function () {
                $element.find('div').find('small').html(i + '%');
                $element.find('div').width(progressBarWidth);
                if (++i <= max) myLoop(i, max);
            }, 10);
        })(0, percent);
    }
    initProgress(".skill-progress-bar");
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
    var active = $(".navigation .menu li");
    $(window).scroll(function () {
        if ($(window).scrollTop() < "300") {
            $(".position").css("border-bottom", "4px solid rgb(0, 199, 252)");
            $("#top-bar").css("background-color", "rgba(0, 199, 252,0)");
            $(".row").css("height", "100px");
            $(".row").css("border-bottom", " 1px solid rgba(211,211,211, 0.6)");
            $(".navigation .menu li").css("padding-bottom", "0");
            $(".navigation .menu li").css("height", "100px");
            $(".navigation .menu").css("height", "100px");

            for (var i = 0; i < 6; i++) {
                active[i].classList.remove("position");
                document.querySelectorAll(".navigation .menu li")[i].style.borderBottom = "none";
            }
            active[0].classList.add("position");
            $(".position").css("border-bottom", "4px solid rgb(0, 199, 252)");
        }
        if ($(window).scrollTop() >= "300") {
            $(".position").css("border-bottom", "4px solid rgb(255,255,255)");
            $("#top-bar").css("background-color", "rgb(0, 199, 252)");
            $(".row").css("height", "65px");
            $(".row").css("border-bottom", "none");
            $(".navigation .menu li").css("padding-bottom", "10%");
            $(".navigation .menu li").css("height", "60px");
            $(".navigation .menu").css("height", "65px");
        }
        if ($(window).scrollTop() >= 700 && $(window).scrollTop() < 1170) {
            //service
            for (var _i = 0; _i < 6; _i++) {
                active[_i].classList.remove("position");
                document.querySelectorAll(".navigation .menu li")[_i].style.borderBottom = "none";
            }
            active[1].classList.add("position");
            $(".position").css("border-bottom", "4px solid rgb(255,255,255)");
        }
        if ($(window).scrollTop() >= 2000 && $(window).scrollTop() < 2500) {
            //portfolio
            for (var _i2 = 0; _i2 < 6; _i2++) {
                active[_i2].classList.remove("position");
                document.querySelectorAll(".navigation .menu li")[_i2].style.borderBottom = "none";
            }
            active[2].classList.add("position");
            $(".position").css("border-bottom", "4px solid rgb(255,255,255)");
        }
        if ($(window).scrollTop() >= 2900 && $(window).scrollTop() < 3600) {
            //about us
            for (var _i3 = 0; _i3 < 6; _i3++) {
                active[_i3].classList.remove("position");
                document.querySelectorAll(".navigation .menu li")[_i3].style.borderBottom = "none";
            }
            active[3].classList.add("position");
            $(".position").css("border-bottom", "4px solid rgb(255,255,255)");
        }
        if ($(window).scrollTop() >= 4600 && $(window).scrollTop() < 5000) {
            //pricing
            for (var _i4 = 0; _i4 < 6; _i4++) {
                active[_i4].classList.remove("position");
                document.querySelectorAll(".navigation .menu li")[_i4].style.borderBottom = "none";
            }
            active[4].classList.add("position");
            $(".position").css("border-bottom", "4px solid rgb(255,255,255)");
        }
        if ($(window).scrollTop() >= 5600) {
            //contact
            for (var _i5 = 0; _i5 < 6; _i5++) {
                active[_i5].classList.remove("position");
                document.querySelectorAll(".navigation .menu li")[_i5].style.borderBottom = "none";
            }
            active[5].classList.add("position");
            $(".position").css("border-bottom", "4px solid rgb(255,255,255)");
        }
    });

    $('a[href*="#"]').click(function (event) {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        event.preventDefault();
    });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
    $('.projects .projects-item').hover(function () {
        //on
        $(this).children('.over-item').children().animate({ opacity: '1' });
    }, function () {
        // out
        $(this).children('.over-item').children().animate({ opacity: '0' });
    });

    $('.list-nav li a').click(function (e) {
        e.preventDefault();
    });
    var visibleItems = $('.projects .projects-item');

    $('.list-nav li').click(function (e) {
        e.preventDefault();

        if (e.currentTarget.children[0].dataset.filter === "all") {
            var active = $('.list-nav li a');

            for (var i = 0; i < active.length; i++) {
                active[i].classList.remove("active");
            }
            for (var _i = 0; _i < active.length; _i++) {
                if (active[_i].dataset.filter === 'all') {
                    active[_i].classList.add("active");
                }
            }

            var _visibleItems = $('.projects .projects-item');
            for (var _i2 = 0; _i2 < _visibleItems.length; _i2++) {
                _visibleItems[_i2].style.display = "block";
            }
        }
        if (e.currentTarget.children[0].dataset.filter === "app") {
            var _active = $('.list-nav li a');

            for (var _i3 = 0; _i3 < _active.length; _i3++) {
                _active[_i3].classList.remove("active");
            }
            for (var _i4 = 0; _i4 < _active.length; _i4++) {
                if (_active[_i4].dataset.filter === "app") {
                    _active[_i4].classList.add("active");
                }
            }
            for (var _i5 = 0; _i5 < visibleItems.length; _i5++) {
                if (!visibleItems[_i5].classList.contains("app")) {
                    visibleItems[_i5].style.display = "none";
                } else {
                    visibleItems[_i5].style.display = "block";
                }
            }
        }
        if (e.currentTarget.children[0].dataset.filter === "photography") {
            var _active2 = $('.list-nav li a');

            for (var _i6 = 0; _i6 < _active2.length; _i6++) {
                _active2[_i6].classList.remove("active");
            }
            for (var _i7 = 0; _i7 < _active2.length; _i7++) {
                if (_active2[_i7].dataset.filter === "photography") {
                    _active2[_i7].classList.add("active");
                }
            }
            for (var _i8 = 0; _i8 < visibleItems.length; _i8++) {
                if (!visibleItems[_i8].classList.contains("photography")) {
                    visibleItems[_i8].style.display = "none";
                } else {
                    visibleItems[_i8].style.display = "block";
                }
            }
        }
        if (e.currentTarget.children[0].dataset.filter === "web") {
            var _active3 = $('.list-nav li a');

            for (var _i9 = 0; _i9 < _active3.length; _i9++) {
                _active3[_i9].classList.remove("active");
            }
            for (var _i10 = 0; _i10 < _active3.length; _i10++) {
                if (_active3[_i10].dataset.filter === "web") {
                    _active3[_i10].classList.add("active");
                }
            }
            for (var _i11 = 0; _i11 < visibleItems.length; _i11++) {
                if (!visibleItems[_i11].classList.contains("web")) {
                    visibleItems[_i11].style.display = "none";
                } else {
                    visibleItems[_i11].style.display = "block";
                }
            }
        }
        if (e.currentTarget.children[0].dataset.filter === "print") {
            var _active4 = $('.list-nav li a');

            for (var _i12 = 0; _i12 < _active4.length; _i12++) {
                _active4[_i12].classList.remove("active");
            }
            for (var _i13 = 0; _i13 < _active4.length; _i13++) {
                if (_active4[_i13].dataset.filter === "print") {
                    _active4[_i13].classList.add("active");
                }
            }
            for (var _i14 = 0; _i14 < visibleItems.length; _i14++) {
                if (!visibleItems[_i14].classList.contains("print")) {
                    visibleItems[_i14].style.display = "none";
                } else {
                    visibleItems[_i14].style.display = "block";
                }
            }
        }
    });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var email = $('.contact-us-form #email');

$(email).focusout(function (e) {
    $(email).focus().css("outline", "-webkit-focus-ring-color auto 5px;");
});
$(email).focusin(function (e) {
    $(email).keyup(function (e) {
        if (!validateEmail(e.currentTarget.value)) {
            $(this).focus().css("outline", "1px solid red");
        }
        if (validateEmail(e.currentTarget.value)) {
            $(this).focus().css("outline", "1px solid lime");
        }
    });
});

function validateEmail(_email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(_email);
}

/***/ })
/******/ ]);