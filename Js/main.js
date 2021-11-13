

$(document).ready(function(){

    $(".foto").hover(function(){
        $(this).find(".oculto").fadeIn();
        $(this).find(".img-hover").addClass("agrandar");
    }, function(){
       $(this).find(".oculto").fadeOut();
       $(this).find(".img-hover").removeClass("agrandar"); 
    })


    $(".menu-icono").click(function(){
        $("nav").slideToggle();
    })

})

hacer();
function hacer(){ 
    let enlaces = document.getElementsByClassName("enlace");
    for (let j = 0; j < enlaces.length; j++) {
        enlaces[j].addEventListener("mouseover", ()=>{
            enlaces[j].style.color = "#B6E716";
        });
        enlaces[j].addEventListener("mouseout", ()=>{
            enlaces[j].style.color = "white";
        });
        
    }
}