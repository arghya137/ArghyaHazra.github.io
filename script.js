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
    strings: ["Software Developer...", "Front-end Developer...", "ML enthusiast..."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});