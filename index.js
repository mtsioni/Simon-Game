//alert("Welcome to the game!"); - in order to see if the JS <script></script> in index.html works

var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColour);
};


nextSequence(); // The function does not need a return statement, since it pushes the data in the array.