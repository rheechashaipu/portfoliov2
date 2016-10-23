$(document).ready(function() {
  var hideAddressbar = function(){
    document.body.style.minHeight = '1000px';
    window.scrollTo(0, 0);
    document.body.style.minHeight = window.innerHeight + 'px';
}

window.addEventListener('load', function() {
    hideAddressbar();
}, false);

window.addEventListener('touchstart', hideAddressbar);
   var windowHeight = $(window).height();
   var menuPos = $('.nav-menu').position().top;
   var bg = $("body");
   function resizeBackground(){
    bg.height(windowHeight);
   }
   resizeBackground();

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