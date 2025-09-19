// Programming Challenges
// Homework 1
/*

#1: More Words
Add your own words to the words array. Remember to enter
words in all lowercase.

*/
/*
var words = [
    "rain",
    "bush",
    "shoe",
    "apple",
    "moon",
    "tree",
    "bread",
    "python",
    "bumblebee",
    "elephant"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for(var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}


var remainingLetters = word.length;

while(remainingLetters > 0) {
    alert(answerArray.join(" "));

    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if(guess === null) {
        break;
    }
    else if(guess.length !== 1) {
        alert("Please enter a single letter.");
    }
    else {
        for(var j = 0; j < word.length; j++) {
            if(word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(" "));
alert("Good job! The answer was " + word + ".");
*/

// Homework 2
/*

#2: Capital letters
If a player guesses a capital letter, it won’t match a lowercase
letter in the secret word. To address this potential problem,
convert the player’s guess to lowercase. (Hint: You can use
the toLowerCase method to convert a string to lowercase.)

*/
/*
var words = [
    "rain",
    "bush",
    "shoe",
    "apple",
    "moon",
    "tree",
    "bread",
    "python",
    "bumblebee",
    "elephant"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for(var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}


var remainingLetters = word.length;

while(remainingLetters > 0) {
    alert(answerArray.join(" "));

    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    guess = guess.toLowerCase();
    if(guess === null) {
        break;
    }
    else if(guess.length !== 1) {
        alert("Please enter a single letter. ");
    }
    else {
        for(var j = 0; j < word.length; j++) {
            if(word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(" "));
alert("Good job! The answer was " + word + ".");
*/

// Homework 3
/*

#3: limiting Guesses
Our Hangman game gives a player unlimited guesses. Add
a variable to track the number of guesses and end the game
if the player runs out of guesses. (Hint: Check this variable in
the same while loop that checks whether remainingLetters > 0.
As we did in Chapter 2, you can use && to check whether two
Boolean conditions are true.)

*/
/*
var words = [
    "rain",
    "bush",
    "shoe",
    "apple",
    "moon",
    "tree",
    "bread",
    "python",
    "bumblebee",
    "elephant"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for(var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}


var remainingLetters = word.length;
var amountOfGuesses = word.length + 5;

while(remainingLetters > 0 && amountOfGuesses > 0) {
    alert(answerArray.join(" "));

    var guess = prompt("Guess a letter, or click Cancel to stop playing. Amount of guesses left: " + amountOfGuesses);
    guess = guess.toLowerCase();
    amountOfGuesses--;
    if(guess === null) {
        break;
    }
    else if(guess.length !== 1) {
        alert("Please enter a single letter. ");
    }
    else {
        for(var j = 0; j < word.length; j++) {
            if(word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(" "));
alert("Good job! The answer was " + word + ".");
*/

// Homework 4
/*

#4: fixing a Bug
There’s a bug in the game: if you keep guessing the same
correct letter, remainingLetters will keep decrementing. Can
you fix it? (Hint: You could add another condition to check
whether a value in answerArray is still an underscore. If it’s
not an underscore, then that letter must have been guessed
already.)


*/

var words = [
    "rain",
    "bush",
    "shoe",
    "apple",
    "moon",
    "tree",
    "bread",
    "python",
    "bumblebee",
    "elephant"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for(var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}


var remainingLetters = word.length;
var amountOfGuesses = word.length + 5;

while(remainingLetters > 0 && amountOfGuesses > 0) {
    alert(answerArray.join(" "));

    var guess = prompt("Guess a letter, or click Cancel to stop playing. Amount of guesses left: " + amountOfGuesses);
    guess = guess.toLowerCase();
    amountOfGuesses--;
    if(guess === null) {
        break;
    }
    else if(guess.length !== 1) {
        alert("Please enter a single letter.");
    }
    else {
        for(var j = 0; j < word.length; j++) {
            if(word[j] === guess) {
                if(answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        }
    }
}

alert(answerArray.join(" "));
alert("Good job! The answer was " + word + ".");