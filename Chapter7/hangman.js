// Coding the Game

var words = [
    "javascript",
    "monkey",
    "amazing", 
    "pancake"
];

// Choosing a Random Word

var word = words[Math.floor(Math.random() * words.length)];

// Creating the Answer Array

var answerArray = [];
for(var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}


var remainingLetters = word.length;

// Coding the Game loop

while(remainingLetters > 0) {
    // Showing the Player’s Progress
    alert(answerArray.join(" "));

    // Handling the Player’s Input
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if(guess === null) {
        break;
    }
    else if(guess.length !== 1) {
        alert("Please enter a single letter.");
    }
    else {
        // Updates the game state with the guess
        for(var j = 0; j < word.length; j++) {
            if(word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

// Ending the Game

alert(answerArray.join(" "));
alert("Good job! The answer was " + word + ".");