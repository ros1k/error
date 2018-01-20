$(document).ready(function () {
    let active = $(".navigation .menu li");
    $(window).scroll(function () {
        if($(window).scrollTop() < "300") {
            $(".position").css("border-bottom", "4px solid rgb(0, 199, 252)")
            $("#top-bar").css("background-color", "rgba(0, 199, 252,0)");
            $(".row").css("height", "100px");
            $(".row").css("border-bottom", " 1px solid rgba(211,211,211, 0.6)");
            $(".navigation .menu li").css("padding-bottom", "0");
            $(".navigation .menu li").css("height", "100px");
            $(".navigation .menu").css("height", "100px");

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
        if($(window).scrollTop() >= 5600) { //contact
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
})