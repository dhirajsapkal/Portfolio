$(document).ready(function() {

    var options={}
    if(document.location.href.substr("accumen"))
      options = {
        autoPlay : 3000,
        // stopOnHover : true,
        // navigation:true,
        paginationSpeed : 1000,
        goToFirstSpeed : 2000,
        singleItem : true,
        autoHeight : true,
        transitionStyle:"fade"
      }
    else
      options = {
        paginationSpeed : 1000,
        goToFirstSpeed : 2000,
        singleItem : true,
        autoHeight : true,
        transitionStyle:"fade"
      }



  $("#owl-demo").owlCarousel(options);
  $("#temp1").click(function(){
    $(".owl-wrapper").css("left", -$(".owl-item").width());
  })

  $("#temp2").click(function(){
    $(".owl-wrapper").css("left", 0);
  })

});