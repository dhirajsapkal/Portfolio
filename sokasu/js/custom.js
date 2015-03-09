// Wait for window load
$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
  console.log( "preloader" );
  new WOW().init();
  console.log( "started" );
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

  $("#b1").click(function(){
    $("#pane1").hide();
    $("#pane3").hide();
    $("#pane4").hide();
    $("#pane2").show();
  });

  $("#b2").click(function(){
    $("#pane1").hide();
    $("#pane3").show();
    $("#pane4").hide();
    $("#pane2").hide();
  });

  $("#b3").click(function(){
    $("#pane1").hide();
    $("#pane3").hide();
    $("#pane4").show();
    $("#pane2").hide();
  });


});