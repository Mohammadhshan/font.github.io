var audio = new Audio('./assets/audio/trash-sound.mp3');

window.addEventListener("load", (event) => {

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

    var nested_swiper_options = {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        autoplay: false,
        speed: 400,
        allowTouchMove: false,
        initialSlide: 0,
        keyboard: {
            enabled: false,
        }
    }

    var nested_swiper_1 = new Swiper(".nested-swiper-1", {
        ...nested_swiper_options
    });
    var nested_swiper_2 = new Swiper(".nested-swiper-2", {
        ...nested_swiper_options
    });
    var nested_swiper_3 = new Swiper(".nested-swiper-3", {
        ...nested_swiper_options
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

    $(document).on("change","#font-toggle-2", function(){
        if($(this).prop("checked")){
            $(".custom-font-text-2").each(function(){
                $(this).css("font-style","italic");
            });
        }
        else{
            $(".custom-font-text-2").each(function(){
                $(this).css("font-style","normal");
            });
        }
    });

    $(document).on("change","#font-toggle-3", function(){
        if($(this).prop("checked")){
            $(".inbox-inter").hide();
            $(".inbox-outfit").fadeIn();
        }
        else{
            $(".inbox-outfit").hide();
            $(".inbox-inter").fadeIn();
        }
    });

    $( function() {
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
        $( "#fw-slider-2" ).slider({
            value: 400,
            step: 1,
            max: 900,
            min: 400,
            slide: function( event, ui ) {
                $(".custom-font-text-2").each(function(){
                    $(this).css("font-weight",ui.value);    
                });
            }
        });
        $( "#lh-slider-2" ).slider({
            value: 1.15,
            step: 0.05,
            max: 2,
            min: 0.75,
            slide: function( event, ui ) {
                $(".custom-font-text-2").each(function(){
                    $(this).css("line-height",ui.value);    
                });
            }
        });
    });

    $(document).on("change","#font-family-toggle", function(){
        if($(this).prop("checked")){
            nested_swiper_1.slideTo(1);
            nested_swiper_2.slideTo(1);
            nested_swiper_3.slideTo(1);
        }
        else{
            nested_swiper_1.slideTo(0);
            nested_swiper_2.slideTo(0);
            nested_swiper_3.slideTo(0);
        }
    });
    var sysfont_swiper_options = {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        autoplay: false,
        speed: 400,
        allowTouchMove: false,
        initialSlide: 0,
        autoHeight: true,
        keyboard: {
            enabled: false,
        }
    }
    var sysfont_swiper_1 = new Swiper(".sysfont-swiper-1", {
        ...sysfont_swiper_options
    });
    var sysfont_swiper_2 = new Swiper(".sysfont-swiper-2", {
        ...sysfont_swiper_options
    });
    var sysfont_swiper_3 = new Swiper(".sysfont-swiper-3", {
        ...sysfont_swiper_options
    });

    $(document).on("change","input[name='sys-font-list']", function(){
        $(".switch-font-bottom").removeClass(function(index, className) {
            return (className.match(/\bactive-font-\S+/g) || []).join(' ');
        });
        $(".switch-font-bottom").addClass("active-"+$(this).val());
        $(".sysfont-prof").hide();
        $(".prof-"+$(this).val()).fadeIn();
        switch ($(this).val()) {
            case "font-mac":
                sysfont_swiper_1.slideTo(0); sysfont_swiper_2.slideTo(0); sysfont_swiper_3.slideTo(0);
                break;
            case "font-windows":
                sysfont_swiper_1.slideTo(1); sysfont_swiper_2.slideTo(1); sysfont_swiper_3.slideTo(1);
                break;
            case "font-linux":
                sysfont_swiper_1.slideTo(2); sysfont_swiper_2.slideTo(2); sysfont_swiper_3.slideTo(2);
                break;
            case "font-android":
                sysfont_swiper_1.slideTo(3); sysfont_swiper_2.slideTo(3); sysfont_swiper_3.slideTo(3);
                break;
            default:
                sysfont_swiper_1.slideTo(0); sysfont_swiper_2.slideTo(0); sysfont_swiper_3.slideTo(0);
          }
    });
    $(document).on("change","input[name='sys-font-list-2']", function(){
        $(".switch-font-top-2").removeClass(function(index, className) {
            return (className.match(/\bactive-font-\S+/g) || []).join(' ');
        });
        $(".switch-font-top-2").addClass("active-"+$(this).val());
        $(".inbox-img").hide();
        $(".inbox-"+$(this).val()).fadeIn();
    });

    var progress_options = {
        strokeWidth: 10,
        easing: 'easeInOut',
        color: '#243fa5',
        trailColor: '#D9D9D9',
        trailWidth: 10,
        svgStyle: null,
        fill: "#fff"
    }

    var progress_condition_opt = {
        duration: 1000,
        step: function(state, circle, attachment) {
            if(state.offset === 0){
                circle.path.setAttribute('fill', "#243fa5");
            }
        }
    }

    var fontpb1 = new ProgressBar.Circle("#font-progress-1", {
        ...progress_options
    });
    var fontpb2 = new ProgressBar.Circle("#font-progress-2", {
        ...progress_options
    });
    var fontpb3 = new ProgressBar.Circle("#font-progress-3", {
        ...progress_options
    });
    var fontpb4 = new ProgressBar.Circle("#font-progress-4", {
        ...progress_options
    });
    var fontpb5 = new ProgressBar.Circle("#font-progress-5", {
        ...progress_options
    });
    var fontpb6 = new ProgressBar.Circle("#font-progress-6", {
        ...progress_options
    });

    fontpb1.animate(1, {
        ...progress_condition_opt
    }, function() {
        $(`#font-progress-1 img`).fadeIn();
    }); 
    fontpb2.animate(1, {
        ...progress_condition_opt
    }, function() {
        $(`#font-progress-2 img`).fadeIn();
    }); 
    fontpb3.animate(1, {
        ...progress_condition_opt
    }, function() {
        $(`#font-progress-3 img`).fadeIn();
    }); 
    fontpb4.animate(1, {
        ...progress_condition_opt
    }, function() {
        $(`#font-progress-4 img`).fadeIn();
    }); 
    fontpb5.animate(1, {
        ...progress_condition_opt
    }, function() {
        $(`#font-progress-5 img`).fadeIn();
    }); 
    fontpb6.animate(1, {
        ...progress_condition_opt
    }, function() {
        $(`#font-progress-6 img`).fadeIn();
    }); 

});