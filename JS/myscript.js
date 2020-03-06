(function(){
 "use strict";

$(document).ready(function(){
  $(".carousel").owlCarousel({
   
  responsive:{
       
        240:{
            autoplay: true,
            autoplaySpeed: 2000,
            nav:false,
            items: 1
        },
        768:{
          loop: true,
          items: 1,
          nav: true,
          navSpeed: 3000,
          autoplaySpeed: 2000,
          autoplay: true,
          themeClass: 'carousel',
          dots: false
        }
    }
  });
  
});

$('.bxslider').bxSlider({
  mode: 'vertical',
  slideMargin: 200,
  controls: false,
  adaptiveHeight: false,
  auto: true,
  autoHover: true,
  speed: 1300,
});

$(document).ready(function(){
  $(".case-carousel").owlCarousel({
  	loop: true,
  autoplay: true,
  margin: 30,
  dots: true,
  	items: 1,
  	autoplaySpeed: 2000,
  themeClass: 'case-carousel',
  controlsClass: 'case-control',
  dotClass: 'case-dot',
  itemClass: 'case-item',
  nav: false
  
  });
  
});



$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
 
});


 })();