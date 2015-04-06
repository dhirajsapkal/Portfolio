$(document).ready(function() {
  $('#scene').parallax();
  $(window).on("load", function(){
     setBackgroundHeight();
  });  

  function setBackgroundHeight() {
   $(".intro_section, #scene").height($(window).height());
  };

  setBackgroundHeight();
    
});

// Wait for window load
$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
  new WOW().init();
});