
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var gameStarted = false;
var level = 0;

// -- Game Launch Mode. --//
$(document).keydown(function () {
    $(".btn").show();
    if (!gameStarted){
        $("#level-title").text("Level " + level + " 🤖");
        nextSequence();
        gameStarted = true;
    }
});


// -- Checking which Button is Pressed by the User. -- //
$(".btn").on("click", function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);  

    playSound(userChosenColour);     

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);  // Subtract 1 from the current length of the 'userClickedPattern' array, which tells us 
});                                            // how many colors the user has clicked so far. This is done, because array indices are zero-based in JS.


// -- Right or Wrong Answer Check Function -- //
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").html("<center>Game Over 💀 <br><br> Press Any Key to Restart</center>");

        setTimeout(function () {
            $("body").removeClass("game-over");
            $(".btn").hide();
        },600);

        startOver();        
    }
}


// -- Creation of a Pattern Sequence, when Entering the Game. Plus, Flashing the Selected Button & Playing the Corresponded Sound. -- //
function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level + " 🤖");

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(160).fadeOut(160).fadeIn(160);    //Animating a flash effect to the choosen button.
    playSound(randomChosenColour);
}


// -- Function Playing the Sound Associated with the Selected Button by the User. -- //
function playSound (name) {
    var audio = new Audio("./sounds/" + name + ".mp3");     
    audio.play();   
}


// -- Animates a Button with a Fade-In and Fade-Out Effect when Pressed by the User. -- //
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// -- Restart the Game Mode --//
function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}
