$(document).ready(function() {
   var windowHeight = $(window).height();
   var menuPos = $('.nav-menu').position().top;
    

   $(window).scroll(function() {
       var scrollVal = $(this).scrollTop();
        if ( scrollVal > menuPos ) {
          $('.nav-menu').addClass('nav-menu-fixed menu-items-fixed');
        }
        if(scrollVal<menuPos){
          $(".nav-menu").removeClass('nav-menu-fixed menu-items-fixed');
        }
    });
 });