$(document).ready(function () {
    $('.projects .projects-item').hover(
        function () { //on
            $(this).children('.over-item').children().animate({opacity: '1'})
        },
        function () { // out
            $(this).children('.over-item').children().animate({opacity: '0'})
        }
    );

    $('.list-nav li a').click((e)=>{
        e.preventDefault();

    })
    let visibleItems = $('.projects .projects-item')

    $('.list-nav li').click((e)=>{
        e.preventDefault();
        
        if(e.currentTarget.children[0].dataset.filter === "all"){
            let active = $('.list-nav li a');

            for (let i = 0; i < active.length; i++){
                active[i].classList.remove("active")
            }
            for (let i = 0; i < active.length; i++){
                if(active[i].dataset.filter === 'all'){
                    active[i].classList.add("active");
                }
            }
            
            let visibleItems = $('.projects .projects-item');
            for(let i = 0; i< visibleItems.length; i++){
                visibleItems[i].style.display = "block";
            }
        }
        if(e.currentTarget.children[0].dataset.filter === "app"){
            let active = $('.list-nav li a');

            for (let i = 0; i < active.length; i++){
                active[i].classList.remove("active")
            }
            for (let i = 0; i < active.length; i++){
                if(active[i].dataset.filter === "app"){
                    active[i].classList.add("active");
                }
            }
            for(let i = 0; i < visibleItems.length; i++){
                if(!visibleItems[i].classList.contains("app")){
                    visibleItems[i].style.display = "none";
                }else{
                    visibleItems[i].style.display = "block";
                }
            }
        }
        if(e.currentTarget.children[0].dataset.filter === "photography"){
            let active = $('.list-nav li a');

            for (let i = 0; i < active.length; i++){
                active[i].classList.remove("active")
            }
            for (let i = 0; i < active.length; i++){
                if(active[i].dataset.filter === "photography"){
                    active[i].classList.add("active");
                }
            }
            for(let i = 0; i< visibleItems.length; i++){
                if(!visibleItems[i].classList.contains("photography")){
                    visibleItems[i].style.display = "none";
                }else{
                    visibleItems[i].style.display = "block";
                }
            }
        }
        if(e.currentTarget.children[0].dataset.filter === "web"){
            let active = $('.list-nav li a');

            for (let i = 0; i < active.length; i++){
                active[i].classList.remove("active")
            }
            for (let i = 0; i < active.length; i++){
                if(active[i].dataset.filter === "web"){
                    active[i].classList.add("active");
                }
            }
            for(let i = 0; i< visibleItems.length; i++){
                if(!visibleItems[i].classList.contains("web")){
                    visibleItems[i].style.display = "none";
                }else{
                    visibleItems[i].style.display = "block";
                }
            }
        }
        if(e.currentTarget.children[0].dataset.filter === "print"){
            let active = $('.list-nav li a');

            for (let i = 0; i < active.length; i++){
                active[i].classList.remove("active")
            }
            for (let i = 0; i < active.length; i++){
                if(active[i].dataset.filter === "print"){
                    active[i].classList.add("active");
                }
            }
            for(let i = 0; i< visibleItems.length; i++){
                if(!visibleItems[i].classList.contains("print")){
                    visibleItems[i].style.display = "none";
                }else{
                    visibleItems[i].style.display = "block";
                }
            }
        }
    })



})



