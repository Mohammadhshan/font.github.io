var audio = new Audio('/assets/audio/trash-sound.mp3');

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