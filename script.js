$(document).ready(function() {

    var $game = $("#game")
    var $player = $("#player")

    $('#options').change(function() { // NOTE: all themes have capital letters on colors
        if ($(this).val() === 'Dark') {
            $game.removeClass(); //removes all classes
            $game.addClass("dark"); //changes css theme
        }
        if ($(this).val() === 'Light') {
            $game.removeClass(); //removes all classes
            $game.addClass("light"); //changes css theme
        }
        if ($(this).val() === 'Blue_White') {
            $game.removeClass(); //removes all classes
            $game.addClass("blue_white"); //changes css theme
        }
        if ($(this).val() === 'Red_White') {
            $game.removeClass(); //removes all classes
            $game.addClass("red_white"); //changes css theme
        }
    });

    var game = function() {
        $(document).keydown(function(event) { // keycodes: left = 37, right = 39
            if (event.which == 39 || event.which == 68) { // right arrow or D
                if ($player.position().left < $game.width() - $("#player").width()) {
                    $player.css("left", "+=10");
                }
            }
            if (event.which == 37 || event.which == 81 || event.which == 65) { // left arrow or Q on AZERTY or A on QWERTY
                if ($player.position().left > $("#player").width() - 40) {
                    $player.css("left", "-=10");
                }
            }
        });
    };

    function getRandomInt(min, max) {
        //Returns a random integer between min (inclusive) and max (inclusive)
        //Using Math.round() will give you a non-uniform distribution!
        return Math.floor(Math.random() * (max - min + 1)) + min;
        //Math.random return random number between 0 and 1 excluded
        //That * (max-min+1) will give you a number between 0 and (max-min+1) excluded
        //floor with turn the number into an integer (whole number) ex: 3.2 => 3 3.6 => 3
        //this will give whole numbers between 0 and max-min : [0;max-min] since max-min+1 was excluded
        //+min will give use an integer between 0+min and max-min+min=max : [min; max]
    };

    function getRandomColor() {
        //TODO: make it check that it is not the same as the background color
        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    };

    function spawn_block() {
        $spawned_block = $("<div class='block'></div>")
        $game.append($spawned_block); //add div with class block to #game div
        var left = getRandomInt(0, $game.width() - $spawned_block.width()); //gets a random value from left of screen where div can appear
        var top = getRandomInt(0, $game.height() - $spawned_block.height()); //not useful unless you don't want the div to appear at the top
        //adds a random position and color to spawned_block
        $spawned_block.css({
            "left": left,
            "background-color": getRandomColor()
        });
        //if you want a random position from top add "top" : top,
        if($spawned_block.position().top < $game.position().top + $game.height() ) {
        	$spawned_block.css("top", "+=5px");
        }

    };

    function anim() {
        $("#game .block").each(function(index) {
            if ($(this).position().top < $game.position().top + $game.height()) {
                $(this).css("top", "+=25px");
            }
        });
        window.requestAnimationFrame(anim);
    }
    
    function endGame() {
     $("#game .block").each(function(index) {
            if ($(this).position().top + $(this).height() >= $player.position().top && $(this).position().left === $player.position().left {
                $("#game .block").each(function() {
                    $(this).hide();
                })
            })
        });   
    }


    $("#play").click(function() {
        if ($("#options").val() != "none") {
            $("#play").hide();
            $("#options").hide();
            $player.show();

            game(); //start game engine
            var spawnBlockInterval = setInterval(function() {
                spawn_block();
            }, 3000); //run spawn_block every 3000ms=3s
            //to stop interval from running add: clearInterval(spawnBlockInterval);
            window.requestAnimationFrame(anim);
            
            endGame();

        } else {
            alert("You haven't selected a theme")
        }
    });


});
