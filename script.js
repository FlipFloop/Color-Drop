$(document).ready(function() {
  
  $("#play").click(function() {
    $(this).hide();
    $("#options").hide();
    $("#player").show();
  });
  
  $('#options').change(function(){
    if($(this).val() == 'dark'){ 
      $("#game").css("backgroundColor", "#000000");
      $("#player").css({
        "background-color": "#FFFFFF" // using CSS function in case you want to add other stuff
      });
    }
  });
  
});
