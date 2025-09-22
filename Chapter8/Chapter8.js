// Creating a Simple function

var ourFirstFunction = function () {
    console.log("Hello World!");
};

ourFirstFunction();

// Passing Arguments into functions

var sayHelloTo = function (name) {
    console.log("Hello " + name + "!");
}

sayHelloTo("Rick");
sayHelloTo("Jack");

// Passing Multiple Arguments to a function


var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for(var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
}

printMultipleTimes(5, "=^-^=");

printMultipleTimes(2, "^_^");

printMultipleTimes(6, "(>_<)");


// Returning Values from functions

var double = function (number) {
    return number * 2;
}

console.log(double(12));

console.log(double(5) + double(2));

console.log(double(double(10)));


// using functions to Simplify Code


var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
}

var randomWords = ["Planet", "Worm", "Flower", "Computer", "Rain", "Bread"];

console.log(pickRandomWord(randomWords));

console.log(pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]));


// A Random Insult Generator


var pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

var randomBodyParts = ["Face", "Nose", "Hair", "Legs", "Hands"];
var randomAdjectives = ["Smelly", "Boring", "Stupid", "Worthless"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var randomString =
  "Your " +
  pickRandomWord(randomBodyParts) +
  " is like a " +
  pickRandomWord(randomAdjectives) +
  " " +
  pickRandomWord(randomWords) +
  "!!!";

console.log(randomString);


// Making the Random Insult Generator into a function


var pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

var generateRandomInsult = function () {
  var randomBodyParts = ["Face", "Nose", "Hair", "Legs", "Hands"];
  var randomAdjectives = ["Smelly", "Boring", "Stupid", "Worthless"];
  var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

  var randomString =
    "Your " +
    pickRandomWord(randomBodyParts) +
    " is like a " +
    pickRandomWord(randomAdjectives) +
    " " +
    pickRandomWord(randomWords) +
    "!!!";

  return randomString;
};

console.log(generateRandomInsult());
console.log(generateRandomInsult());
console.log(generateRandomInsult());


// leaving a function early with return


var fifthLetter = function (name) {
    if (name.length < 5) {
        return "Your name is too short.";
    }

    return "The fifth letter of your name is " + name[4] + ".";
}

console.log(fifthLetter("Nicholas"));
console.log(fifthLetter("Nick"));

// using return Multiple Times Instead of if...else Statements


var medalForScore = function (score) {
    if (score < 3) {
        return "Bronze";
    }

    if (score < 7) {
        return "Silver";
    }

    return "Gold";
}

console.log(medalForScore(2));
console.log(medalForScore(5));
console.log(medalForScore(10));


// Shorthand for Creating functions

// Long hand way to make functions
var double = function (number) {
    return number * 2;
}

// Short hand way to make functions
function double(number) {
    return number * 2;
}

console.log(double(10));
