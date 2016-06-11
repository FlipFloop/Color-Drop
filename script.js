$(document).ready(function() {

  $('#options').change(function(){ // NOTE: all themes have capital letters on colors
    if($(this).val() === 'Dark'){
      $("#game").css("background-color", "black");
      $("#player").css({
        "background-color": "white" // using CSS function in case you want to add other stuff
      });
    }
    if($(this).val() === 'Light'){
      $("#game").css("background-color", "white");
      $("#player").css({
        "background-color": "black" // using CSS function in case you want to add other stuff
      });
    }
  });

  var game = function() {
    $(document).keydown(function(event) { // keycodes: left = 37, right = 39
      if (event.which == 37 || event.which == 81) { // left arrow
        $("#player").css("left", "-5px")
      }
    });
  };

  $("#play").click(function() {
    if($("#options").val() != "none") {
      $(this).hide();
      $("#options").hide();
      $("#player").show();

      game();

    } else {
      alert("You haven't selected a theme")
    }
  });


});
