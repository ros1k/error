

require('../scss/main.scss')

document.addEventListener('DOMContentLoaded',function () {

let homeSlides = document.querySelectorAll('.home-slide');




let skills = document.querySelectorAll("#about-us .bar")
    for (let i = 0; i < skills.length; i++) {
        skills[i].style.width = skills[i].dataset.progress + "%";
        console.log(skills[i].style.width);
    }






});