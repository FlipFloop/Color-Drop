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
      if (event.which == 39 || event.which == 68) { // right arrow or D
        if ( $("#player").position().left < $("#game").width()-$("#player").width() ) {
		  		$("#player").css("left", "+=10");
		  	}
      }
      if (event.which == 37 || event.which == 81 || event.which == 65) { // left arrow or Q on AZERTY or A on QWERTY
        if ( $("#player").position().left > $("#player").width() - 40 ) {
		  		$("#player").css("left", "-=10");
		  	}
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
