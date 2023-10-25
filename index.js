
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var gameStarted = false;
var level = 0;

$(document).keydown(function (event) {
    if (!gameStarted){
        $("#level-title").text("Level " + level + " 🤖");
        nextSequence();
        gameStarted = true;
    }
});


// -- Check which button is pressed by the user. -- //
$(".btn").on("click", function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);  

    playSound(userChosenColour);     

    animatePress(userChosenColour);
});


// -- This is the sequence that game itself creates when you enter the web page. Plus, flashing the selected button & playing the corresponding sound. -- //
function nextSequence() {
    level++;
    $("#level-title").text("Level " + level + " 🤖");

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(160).fadeOut(160).fadeIn(160);    //Animating a flash to the choosen button.
    playSound(randomChosenColour);
}


// -- Function playing the sound for the selected button, either by the user or by the program. -- //
function playSound (name) {
    var audio = new Audio("./sounds/" + name + ".mp3");     
    audio.play();   
}


// -- Function animating a fade in and out, whenever the button is pressed by the user. -- //
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}