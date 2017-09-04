

require('../scss/main.scss')

document.addEventListener('DOMContentLoaded',function () {

let homeSlides = document.querySelectorAll('.home-slide');


    homeSlides[0].style.backgroundImage = `url('../img/slider/bg${1+1}.jpg')`


let skills = document.querySelectorAll("#about-us .bar")
    for (let i = 0; i < skills.length; i++) {
        skills[i].style.width = skills[i].dataset.progress + "%";

    }






});