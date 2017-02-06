$(document).ready(function() {
  $('#scene').parallax();
  $(window).on("load", function(){
     setBackgroundHeight();
  });  

  function setBackgroundHeight() {
   $(".intro_section, #scene").height($(window).height());
  };

  setBackgroundHeight();

  $("#topsubmit").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#confirm").offset().top + offset
    }, 800);
	});
    
});

// Wait for window load
$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
  new WOW().init();
});