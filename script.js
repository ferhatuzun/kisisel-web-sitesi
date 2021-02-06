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
        if($(window).scrollTop()>180){
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
        }
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
            if($(window).scrollTop()>2500 && $(window).scrollTop()<=3134){
                $( "a[href='#blog']" ).addClass("menu-border")
            }else{
                $( "a[href='#blog']" ).removeClass("menu-border")
            }
            if($(window).scrollTop()>3134 && $(window).scrollTop()<=3500){
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
        if(screen.height<=1024){
            if($(window).scrollTop()>456){
                $("#skill .container").fadeIn(800)
            }
            if($(window).scrollTop()>850){
                $("#studies .container").fadeIn(800)
            }
            if($(window).scrollTop()>1900){
                $("#blog .container").fadeIn(800)
            }
            if($(window).scrollTop()>1900){
                $("#blog-card .container").fadeIn(800)
            }
        }
        if(screen.height>=1080){
            if($(window).scrollTop()>400){
                $("#skill .container").fadeIn(800)
            }
            if($(window).scrollTop()>800){
                $("#studies .container").fadeIn(800)
            }
            if($(window).scrollTop()>1826){
                $("#blog .container").fadeIn(800)
            }
            if($(window).scrollTop()>1826){
                $("#blog-card .container").fadeIn(800)
            }
        }
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