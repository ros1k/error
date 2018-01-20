

require('../scss/main.scss')


document.addEventListener('DOMContentLoaded',function () {

require('./parts/navigation.js')
require('./parts/portfolio.js')
require('./parts/contact-us.js')

    //
    //
    // slides
    //
    //

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<div class="home-slide-left"> '+
        '<a> <div class="arrow-left"> </div></a>'+
        '</div>',
        '<div class="home-slide-right">\n' +
        '    <a> <div class="arrow-right"> </div></a>\n' +
        '</div>'
    ],
    navClass:['arrow-left', 'arrow-right'],
    dots: true,
    dotsEach: true,
    responsive:{
        0:{
            items:1,
            nav:false,
            mouseDrag: false,
            touchDrag: true,
        },
        600: {
            items: 1,
            nav: false,
            touchDrag: true,
            mouseDrag: true,
        },
        1000:{
            items:1,
            mouseDrag: false,
        }
    }
})


let homeSlides = document.querySelectorAll('.home-slide');


    homeSlides[0].style.backgroundImage = `url('img/slider/bg${1+1}.jpg')`


let skills = document.querySelectorAll("#about-us .bar")
    for (let i = 0; i < skills.length; i++) {
        skills[i].style.width = skills[i].dataset.progress + "%";
        console.log();
    }




    //
    //
    // skill bar
    //
    //


    function initProgress(el){
        jQuery(el).each(function(){
            var pData = jQuery(this).data('progress');
            progress(pData,jQuery(this));
        });
    }

    function progress(percent, $element) {
        var progressBarWidth = 0;

        (function myLoop (i,max) {
            progressBarWidth = i * $element.width() / 100;
            setTimeout(function () {
                $element.find('div').find('small').html(i+'%');
                $element.find('div').width(progressBarWidth);
                if (++i<=max) myLoop(i,max);
            }, 10)
        })(0,percent);
    }
initProgress(".skill-progress-bar")





















});