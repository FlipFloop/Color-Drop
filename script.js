$(document).ready(function() {
  
  $("#play").click(function() {
    $(this).hide();
    $("#options").hide();
    $("#player").show();
  });
  
  $('#options').change(function(){
    if($(this).val() == 'dark'){ 
      $("#game").css("backgroundColor", "#000000");
    }
  });
  
});
