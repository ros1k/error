

require('../scss/main.scss')

document.addEventListener('DOMContentLoaded',function () {

let homeSlides = document.querySelectorAll('.home-slide');

for(let i = 0; i < homeSlides.length; i++){
    homeSlides[i].style.backgroundImage = `url('../img/slider/bg${i+1}.jpg')`
}








});