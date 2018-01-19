

require('../scss/main.scss')

document.addEventListener('DOMContentLoaded',function () {
    //
    //
    // nav bar
    //
    //
    let active = $(".navigation .menu li");
    document.addEventListener("scroll",()=>{
        console.log($(window).scrollTop());
        let scroll = $(window).scrollTop();
        if($(window).scrollTop() < "300"){
           $(".position").css("border-bottom", "4px solid rgb(0, 199, 252)")
            $("#top-bar").css("background-color","rgba(0, 199, 252,0)");
            $(".row").css("height","100px");
            $(".row").css("border-bottom"," 1px solid rgba(211,211,211, 0.6)");
            $(".navigation .menu li").css("padding-bottom","0");
            $(".navigation .menu li").css("height","100px");
            $(".navigation .menu").css("height","100px");
            //$(".navigation .menu li").css("border-bottom", "3px solid rgb(0, 199, 252)");
            for(let i = 0; i < 6; i++){
                active[i].classList.remove("position");
                document.querySelectorAll(".navigation .menu li")[i].style.borderBottom = "none";
            }
            active[0].classList.add("position");
            $(".position").css("border-bottom", "4px solid rgb(0, 199, 252)");

        }
        if($(window).scrollTop() >= "300") {
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
        

        if($(window).scrollTop() >= 700 && $(window).scrollTop() < 1170){ //service
           for(let i = 0; i < 6; i++){
               active[i].classList.remove("position");
               document.querySelectorAll(".navigation .menu li")[i].style.borderBottom = "none";
           }
            active[1].classList.add("position");
            $(".position").css("border-bottom", "4px solid rgb(255,255,255)");

        }
        if($(window).scrollTop() >= 2000  && $(window).scrollTop() < 2500) { //portfolio
            for(let i = 0; i < 6; i++){
                active[i].classList.remove("position");
                document.querySelectorAll(".navigation .menu li")[i].style.borderBottom = "none";
            }
            active[2].classList.add("position");
            $(".position").css("border-bottom", "4px solid rgb(255,255,255)");

        }
        if($(window).scrollTop() >= 2900  && $(window).scrollTop() < 3600) { //about us
            for(let i = 0; i < 6; i++){
                active[i].classList.remove("position");
                document.querySelectorAll(".navigation .menu li")[i].style.borderBottom = "none";
            }
            active[3].classList.add("position");
            $(".position").css("border-bottom", "4px solid rgb(255,255,255)");
        }
        if($(window).scrollTop() >= 4600  && $(window).scrollTop() < 5000) { //pricing
            for(let i = 0; i < 6; i++){
                active[i].classList.remove("position");
                document.querySelectorAll(".navigation .menu li")[i].style.borderBottom = "none";
            }
            active[4].classList.add("position");
            $(".position").css("border-bottom", "4px solid rgb(255,255,255)");
        }
        if(scroll >= 5600) { //contact
            for(let i = 0; i < 6; i++){
                active[i].classList.remove("position");
                document.querySelectorAll(".navigation .menu li")[i].style.borderBottom = "none";
            }
            active[5].classList.add("position");
            $(".position").css("border-bottom", "4px solid rgb(255,255,255)");
        }

    })


    $('a[href*="#"]').click(function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        event.preventDefault();
    });



    //
    //
    // slides
    //
    //



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