// Please share link to the demo video.

// Specs:

// var secret = 7;

// let answer = prompt (“Please guess the secret number (1-20)”);

// // Convert the string guess to an integer so that we can compare
// var guess = parseInt (answer);

// /////////////////////////////////////////////////////////

// Please add an if statement which checks if the guess is correct, if it is, then display a message: Correct Guess!, otherwise “Sorry, incorrect Guess!

// Code A)
// var secret = 7;

// let answer = prompt("Please guess the secret number (1-20)");

// var guess = parseInt(answer);

// if(guess === secret) {
//     alert("Correct Guess!");
// }
// else {
//     alert("Sorry, incorrect Guess!");
// }


// =====================================================================


// How can you combine line 2 and 3 into one line

// Code B)
// var secret = 7;

// var guess = parseInt(prompt("Please guess the secret number (1-20)"));

// if(guess === secret) {
//     alert("Correct Guess!");
// }
// else {
//     alert("Sorry, incorrect Guess!");
// }


// =====================================================================


// Expand the program to do this in a while loop, only exiting when the guess was correct

// Code C)
// var secret = 7;

// var guessedCorrectly = false;

// while (guessedCorrectly != true) {

//     var guess = parseInt(prompt("Please guess the secret number (1-20)"));

//     if (guess === secret) {
//         alert("Correct Guess!");
//         guessedCorrectly = true;
//     }
//     else {
//         alert("Sorry, incorrect Guess!");
//     }
// }


// =====================================================================


// While the guess is incorrect, test also if it is too low or too high and display the message “Incorrect, too low” or “Incorrect, too high”.

// Code D)
// var secret = 7;

// var correctGuess = false;

// while (correctGuess != true) {

//     var guess = parseInt(prompt("Please guess the secret number (1-20)"));

//     if (guess === secret) {
//         alert("Correct Guess!");
//         correctGuess = true;
//     }
//     else {
//         // give a hint to the user when they guess wrong.
//         if(guess > secret) {
//             alert("Incorrect, too high!");
//         }
//         else if(guess < secret) {
//             alert("Incorrect, too low!");
//         }
//     }
// }


// =====================================================================


// When you are done make the secret number random.

// Code E)

// Gets a random number in the range of 1 to 20.
var secret = Math.floor(Math.random() * (21 - 1) + 1);

var correctGuess = false;

while (correctGuess != true) {

    var guess = parseInt(prompt("Please guess the secret number (1-20)"));

    if (guess === secret) {
        alert("Correct Guess!");
        correctGuess = true;
    }
    else {
        // give a hint to the user when they guess wrong.
        if(guess > secret) {
            alert("Incorrect, too high!");
        }
        else if(guess < secret) {
            alert("Incorrect, too low!");
        }
    }
}
