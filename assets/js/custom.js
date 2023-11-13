window.addEventListener("load", (event) => {
var audio = new Audio('./assets/audio/trash-sound.mp3');

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    autoplay: false,
    speed: 400,
    allowTouchMove: false,
    initialSlide: 0,
    keyboard: {
    enabled: true,
    },
    parallax:true,
    on: {
    slideChange: function (swiper) {
        console.log(swiper)
        if(swiper.activeIndex !== 1){
            if($("#slide-2 .animate__animated").hasClass("animate__jackInTheBox")){
                $("#slide-2 .animate__animated").removeClass("animate__jackInTheBox");
            }
        }
        else{
            if(!$("#slide-2 .animate__animated").hasClass("animate__jackInTheBox")){
                $("#slide-2 .animate__animated").addClass("animate__jackInTheBox");
            }
        }
        if(swiper.activeIndex === 6 && swiper.previousIndex === 5){
            audio.play();
        }
    },
    },
});

$(document).on("change","#font-toggle", function(){
    if($(this).prop("checked")){
        $(".custom-font-text").each(function(){
            $(this).css("font-style","italic");
        });
    }
    else{
        $(".custom-font-text").each(function(){
            $(this).css("font-style","normal");
        });
    }
});


    $( "#fw-slider-1" ).slider({
        value: 400,
        step: 1,
        max: 900,
        min: 400,
        slide: function( event, ui ) {
            $(".custom-font-text").each(function(){
                $(this).css("font-weight",ui.value);    
            });
        }
    });
    $( "#lh-slider-1" ).slider({
        value: 1.15,
        step: 0.05,
        max: 2,
        min: 0.75,
        slide: function( event, ui ) {
            $(".custom-font-text").each(function(){
                $(this).css("line-height",ui.value);    
            });
        }
    });
});
