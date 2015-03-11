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
   $(".intro_section, #scene").height($(window).height());
  };

  setBackgroundHeight();

  $('.nav-pills, .nav-tabs').tabdrop()


  $('.banner').localScroll({duration:500});

  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoWidth:true,
      loop: true,
      pagination: false,
      lazyLoad: true
      // margin: 20
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });


});