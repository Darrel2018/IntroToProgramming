// Chapter 8 Homework

// Homework 1

/*
#1: Doing Arithmetic with functions
Create two functions, add and multiply. Each should take
two arguments. The add function should sum its arguments
and return the result, and multiply should multiply its
arguments.
Using only these two functions, solve this simple
mathematical problem:
36325 * 9824 + 777
*/

function add(number1, number2) {
  return number1 + number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

console.log(add(multiply(36325, 9824), 777));

// Homework 2

/*
#2: Are These Arrays the Same?
Write a function called areArraysSame that takes two arrays
of numbers as arguments. It should return true if the two
arrays are the same (that is, they have the same numbers
in the same order) and false if they’re different. Try running
the following code to make sure your functions are working
correctly:
areArraysSame([1, 2, 3], [4, 5, 6]);
false
areArraysSame([1, 2, 3], [1, 2, 3]);
true
areArraysSame([1, 2, 3], [1, 2, 3, 4]);
false
Hint 1: you’ll need to use a for loop to go through each of
the values in the first array to see whether they’re the same
in the second array. You can return false in the for loop if
you find a value that’s not equal.
Hint 2: you can leave the function early and skip the for
loop altogether if the arrays are different lengths.
*/

function areArraysSame(numberArray1, numberArray2) {
  if (numberArray1.length !== numberArray2.length) {
    return false;
  }

  for (var i = 0; i < numberArray1.length; i++) {
    if (numberArray1[i] !== numberArray2[i]) {
      return false;
    }
  }

  return true;
}

console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

// Homework 3

/*
#3: Hangman, using functions
Go back to your Hangman game from Chapter 7. We’re going
to rewrite it using functions.
I’ve rewritten the final Hangman code here, but with
certain parts of the code replaced by function calls. All you
need to do is write the functions!
// Write your functions here
    var word = pickWord();
    var answerArray = setupAnswerArray(word);
    var remainingLetters = word.length;
    while (remainingLetters > 0) {
        showPlayerProgress(answerArray);
        var guess = getGuess();
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Please enter a single letter.");
        } else {
            var correctGuesses = updateGameState(guess, word, answerArray);
            remainingLetters -= correctGuesses;
        }
    }
    showAnswerAndCongratulatePlayer(answerArray);


This version of the code using functions is almost as
simple as the pseudocode version from Chapter 7. This should
give you some idea of how useful functions can be for making
code easier to understand.
Here are the functions you need to fill in:
    var pickWord = function () {
        // Return a random word
    };
    var setupAnswerArray = function (word) {
        // Return the answer array
    };
    var showPlayerProgress = function (answerArray) {
        // Use alert to show the player their progress
    };
    var getGuess = function () {
        // Use prompt to get a guess
    };
    var updateGameState = function (guess, word, answerArray) {
        // Update answerArray and return a number showing how many
        // times the guess appears in the word so remainingLetters
        // can be updated
    };
    var showAnswerAndCongratulatePlayer = function (answerArray) {
        // Use alert to show the answer and congratulate the player
    };

*/


// CODE STARTS HERE PLEASE UNCOMMMENT
/*
// Functions

var pickWord = function () {
  // Return a random word
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

  return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function (word) {
  // Return the answer array
  var answerArray = [];

  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  return answerArray;
};

var showPlayerProgress = function (answerArray) {
  // Use alert to show the player their progress
  alert(answerArray.join(" "));
};

var getGuess = function () {
  // Use prompt to get a guess
  var guess = prompt("Guess a letter, or click Cancel to stop playing.");
  return guess;
};

var updateGameState = function (guess, word, answerArray) {
  // Update answerArray and return a number showing how many
  // times the guess appears in the word so remainingLetters
  // can be updated

  var correctGuesses = 0;

  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      if (answerArray[j] === "_") {
        answerArray[j] = guess;
        correctGuesses++;
      }
    }
  }

  return correctGuesses;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
  // Use alert to show the answer and congratulate the player
  alert(answerArray.join(" "));
  alert("Good job! The answer was " + word + ".");
};


// Game
var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  var guess = getGuess();

  if (guess === null) {
    break;
  } 
  else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } 
  else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}

showAnswerAndCongratulatePlayer(answerArray);
*/
