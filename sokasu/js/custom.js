// Wait for window load
$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
  new WOW().init();
});

$(document).ready(function() {
  $('#scene').parallax();
  $(window).on("resize", function(){
     setBackgroundHeight();
  });

  function setBackgroundHeight() {
   $("#scene").height($(window).height());
  };

  setBackgroundHeight();

  $('.nav-pills, .nav-tabs').tabdrop()


  $('.banner').localScroll({duration:500});

  $(".owl-carousel").owlCarousel({

      navigation : false, // Show next and prev buttons
      slideSpeed : 500,
      items: 1,
      paginationSpeed : 400,
      autoplay:true,
      smartSpeed: 600,
      autoplayHoverPause: true,
      autoplayTimeout:3000,
      singleItem:true,
      autoWidth:false,
      loop: true,
      lazyLoad: true,
      fluidSpeed: true
      // margin: 20

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });


});