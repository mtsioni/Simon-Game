//alert("Welcome to the game!"); - in order to see if the JS <script></script> in index.html works

var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(160).fadeOut(160).fadeIn(160);    //Animating a flash to the choosen button.
    $("#"+randomChosenColour).click(function(){
        var audio = new Audio("./sounds/" + randomChosenColour + ".mp3");     //Playing the sound for the button colour selected.
        audio.play();
    });
};

// The function does not need a return statement, since it pushes the data in the array.
nextSequence(); 