$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>5){
            $('.scroll').addClass('sticky');
        }
        else{
            $('.scroll').removeClass('sticky');
        }
    })
});

// typing animation script
var typed = new Typed(".typing", {
    strings: ["Software Engineer..", "Data Analyst", "ML Engineer...", "Football enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});