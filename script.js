$(document).ready(function(){
    
    
    $(window).scroll(function(){
        //back to top
        if($(window).scrollTop()>300){
            $(".back-to-top").fadeIn()
        }
        else{
            $(".back-to-top").fadeOut()
        }
        //fix menu
       /* if($(window).scrollTop()>141){
            $("#menu").addClass("menu-fix")
            $("#menu").css("opacity","0.9")
            $(".logo").hide()
            $("#info h6").hide()
            $("#info").removeClass("m-lg-4")
        }else{
            $("#menu").removeClass("menu-fix")
            $("#menu").css("opacity","1")
            $(".logo").show()
            $("#info h6").show()
            $("#info").addClass("m-lg-4")
        }*/
        //skill loading
        if(screen.height<=1024){
            if($(window).scrollTop()>552){
                $(".skill-level-1").animate({
                    width:"80%"
                },500)
                $(".skill-level-2").animate({
                    width:"90%"
                },500)
                $(".skill-level-3").animate({
                    width:"40%"
                },500)
                $(".skill-level-4").animate({
                    width:"60%"
                },500)
                $(".skill-level-5").animate({
                    width:"70%"
                },500)
                $(".skill-level-6").animate({
                    width:"40%"
                },500)
                $(".skill-level-7").animate({
                    width:"30%"
                },500)
                $(".skill-level-8").animate({
                    width:"60%"
                },500)
                $(".skill-level-9").animate({
                    width:"100%"
                },500)
                $(".skill-level-10").animate({
                    width:"70%"
                },500)
                $(".skill-level-11").animate({
                    width:"50%"
                },500)
                $(".skill-level-12").animate({
                    width:"60%"
                },500)
            }
        }

        if(screen.height>=1080){
            if($(window).scrollTop()>500){
                $(".skill-level-1").animate({
                    width:"80%"
                },500)
                $(".skill-level-2").animate({
                    width:"90%"
                },500)
                $(".skill-level-3").animate({
                    width:"40%"
                },500)
                $(".skill-level-4").animate({
                    width:"60%"
                },500)
                $(".skill-level-5").animate({
                    width:"70%"
                },500)
                $(".skill-level-6").animate({
                    width:"40%"
                },500)
                $(".skill-level-7").animate({
                    width:"30%"
                },500)
                $(".skill-level-8").animate({
                    width:"60%"
                },500)
                $(".skill-level-9").animate({
                    width:"100%"
                },500)
                $(".skill-level-10").animate({
                    width:"70%"
                },500)
                $(".skill-level-11").animate({
                    width:"50%"
                },500)
                $(".skill-level-12").animate({
                    width:"60%"
                },500)
            }
        }
        
        //menu border class control
        if(screen.height<=1024){
            if($(window).scrollTop()==0 || $(window).scrollTop()<=300){
                $( "a[href='#header']" ).addClass("menu-border")
            }else{
                $( "a[href='#header']" ).removeClass("menu-border")
            }
            if($(window).scrollTop()>300 && $(window).scrollTop()<=700){
                $( "a[href='#about-me']" ).addClass("menu-border")
            }else{
                $( "a[href='#about-me']" ).removeClass("menu-border")
            }
            if($(window).scrollTop()>700 && $(window).scrollTop()<=1300){
                $( "a[href='#skill']" ).addClass("menu-border")
            }else{
                $( "a[href='#skill']" ).removeClass("menu-border")
            }
            if($(window).scrollTop()>1300 && $(window).scrollTop()<=2500){
                $( "a[href='#studies']" ).addClass("menu-border")
            }else{
                $( "a[href='#studies']" ).removeClass("menu-border")
            }
            if($(window).scrollTop()>2500 && $(window).scrollTop()<=2805){
                $( "a[href='#blog']" ).addClass("menu-border")
            }else{
                $( "a[href='#blog']" ).removeClass("menu-border")
            }
            if($(window).scrollTop()>2805 && $(window).scrollTop()<=3500){
                $( "a[href='#contact']" ).addClass("menu-border")
            }else{
                $( "a[href='#contact']" ).removeClass("menu-border")
            }
        }
        if(screen.height>=1080){
            if($(window).scrollTop()==0 || $(window).scrollTop()<=200){
                $( "a[href='#header']" ).addClass("menu-border")
            }else{
                $( "a[href='#header']" ).removeClass("menu-border")
            }
            if($(window).scrollTop()>200 && $(window).scrollTop()<=600){
                $( "a[href='#about-me']" ).addClass("menu-border")
            }else{
                $( "a[href='#about-me']" ).removeClass("menu-border")
            }
            if($(window).scrollTop()>600 && $(window).scrollTop()<=1200){
                $( "a[href='#skill']" ).addClass("menu-border")
            }else{
                $( "a[href='#skill']" ).removeClass("menu-border")
            }
            if($(window).scrollTop()>1200 && $(window).scrollTop()<=2300){
                $( "a[href='#studies']" ).addClass("menu-border")
            }else{
                $( "a[href='#studies']" ).removeClass("menu-border")
            }
            if($(window).scrollTop()>2300 && $(window).scrollTop()<=3131){
                $( "a[href='#blog']" ).addClass("menu-border")
            }else{
                $( "a[href='#blog']" ).removeClass("menu-border")
            }
            if($(window).scrollTop()>3131 && $(window).scrollTop()<=5000){
                $( "a[href='#contact']" ).addClass("menu-border")
            }else{
                $( "a[href='#contact']" ).removeClass("menu-border")
            }
        }

        //load
        // if(screen.height<=1024){
        //     if($(window).scrollTop()>456){
        //         $("#skill .container").fadeIn(800)
        //     }
        //     if($(window).scrollTop()>850){
        //         $("#studies .container").fadeIn(800)
        //     }
        //     if($(window).scrollTop()>1900){
        //         $("#blog .container").fadeIn(800)
        //     }
        //     if($(window).scrollTop()>1900){
        //         $("#blog-card .container").fadeIn(800)
        //     }
        // }
        // if(screen.height>=1080){
        //     if($(window).scrollTop()>400){
        //         $("#skill .container").fadeIn(800)
        //     }
        //     if($(window).scrollTop()>800){
        //         $("#studies .container").fadeIn(800)
        //     }
        //     if($(window).scrollTop()>1826){
        //         $("#blog .container").fadeIn(800)
        //     }
        //     if($(window).scrollTop()>1826){
        //         $("#blog-card .container").fadeIn(800)
        //     }
        // }
    })

    //read counter
    $(".card .card-img").mouseenter(function(){
        $(this).siblings(".read-counter").fadeIn()
    })
    $(".card .card-img").mouseleave(function(){
        $(this).siblings(".read-counter").fadeOut()
    })

    //menu border event
    $("#menu-link ul li").mouseenter(function(){
        $(this).children("a").addClass("menu-border-2")
    })
    $("#menu-link ul li").mouseleave(function(){
        $(this).children("a").removeClass("menu-border-2")
    })

    //social media show icon
    $(".show-icon").click(function(){
        $(".bi-twitter").slideToggle()
        $(".bi-instagram").slideToggle()
        $(".bi-github").slideToggle()
        $(".bi-linkedin").slideToggle()
        $(".show-icon").toggleClass("show-icon-transform")
    })
    
    //blog text show
    $(".studies-box").mouseenter(function(){
        $(this).children(".studies-title").animate({
            top:"+=80px"
        })
        $(this).children(".studies-content").animate({
            bottom:"+=100px"
        })
        $(this).children(".studies-box-bg").css("filter","blur(2px)")
        $(this).children("img").css("transition","400ms")
        $(this).children(".studies-box-bg").css("background-position","bottom")
    })
    $(".studies-box").mouseleave(function(){
        $(this).children(".studies-title").animate({
            top:"-=80px"
        })
        $(this).children(".studies-content").animate({
            bottom:"-=100px"
        })
        $(this).children(".studies-box-bg").css("filter","blur(0)")
        $(this).children("img").css("transition","400ms")
        $(this).children(".studies-box-bg").css("background-position","top")
    })
   
})

//phone mask
document.getElementById('telefon').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });


//slider - splide js
  document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider' ).mount();
    new Splide( '#image-slider', {
        type   : 'loop',
        autoplay:"true",
    } );
} );

//dark mode
$(".form-check-input").click(function(){
    $(this).toggleClass("dark-mode")
    var darkMode = $('.form-check-input').attr('class').split(/\s+/);
    $.each(darkMode, function(index, item) {
    if (item === 'dark-mode') {
        $("body").css("background-color","#18191A")
        $("#about .section-title").css("color","#fff")
        $("#about-me p").css("color","#C4C6CB")
        $("#studies .section-title").css("color","#fff")
        $("#menu").css("background-color","#242526")
        $("#skill,#blog,#contact").css("background","#242526")
        $("#blog").css("color","#000 !important")
    }else{
        $("body").css("background-color","#fff")
        $("#about .section-title").css("color","#000")
        $("#about-me p").css("color","#000")
        $("#studies .section-title").css("color","#000")
        $("#menu").css("background-color","#008080")
        $("#skill,#blog,#contact").css("background","linear-gradient(90deg, rgba(0,102,102,1) 0%, rgba(0,128,128,1) 26%, rgba(102,178,178,1) 73%, rgba(178,216,216,1) 100%)")
        $("#blog").css("color","#000 !important")
    }
});
})
