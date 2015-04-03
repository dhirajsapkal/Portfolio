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