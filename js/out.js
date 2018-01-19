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
    //
    //
    // nav bar
    //
    //
    var active = $(".navigation .menu li");
    document.addEventListener("scroll", function () {
        console.log($(window).scrollTop());
        var scroll = $(window).scrollTop();
        if ($(window).scrollTop() < "300") {
            $(".position").css("border-bottom", "4px solid rgb(0, 199, 252)");
            $("#top-bar").css("background-color", "rgba(0, 199, 252,0)");
            $(".row").css("height", "100px");
            $(".row").css("border-bottom", " 1px solid rgba(211,211,211, 0.6)");
            $(".navigation .menu li").css("padding-bottom", "0");
            $(".navigation .menu li").css("height", "100px");
            $(".navigation .menu").css("height", "100px");
            //$(".navigation .menu li").css("border-bottom", "3px solid rgb(0, 199, 252)");
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
            //$(".navigation .menu li").css("border-bottom", "3px solid rgb(f, f, 0)");
            //
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
        if (scroll >= 5600) {
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

    //
    //
    // slides
    //
    //


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

/***/ })
/******/ ]);