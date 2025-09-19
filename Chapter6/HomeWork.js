// Homework 1
/*

Write a program with a name variable. If name is your name,
print out Hello me!; otherwise, print Hello stranger!. (Hint:
Use === to compare name to your name.)
Next, rewrite the program so it’ll say hi to your dad if
name is set to your dad’s name or hi to your mom if name is
your mom’s name. If it’s neither of them, say Hello stranger!
as before.

*/

// part 1
var userName = "Nick";

if(userName === "Nick") {
    console.log("Hello me!");
}
else {
    console.log("Hello stranger!");
}

// part 2
var userName = "Bob";

if(userName === "Bob") {
    console.log("Hi dad!");
}
else if(userName === "Amelia") {
    console.log("Hi mom!");
}
else {
    console.log("Hello stranger!");
}


// Homework 2
/*

Write a loop to print the powers of 3 under 10,000 (it should
print 3, 9, 27, etc.).
Rewrite this loop with a while loop. (Hint: Provide the
setup before the loop.)

*/

for(var i = 3; i < 10000; i *= 3) {
    console.log(i);
}

var i = 3;

while(i < 10000) {
    console.log(i);
    i *= 3;
}


// Homework 3
/* 

 Awesome Animals
Write a for loop that modifies an
array of animals, making them
awesome! For example, if your
starting array is . . .
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
then after you run your loop, it
should look like this:
["Awesome Cat", "Awesome Fish", "Awesome Lemur", "Awesome Komodo Dragon"]
Hint: You’ll need to reassign values to the array at each
index. This just means assigning a new value at an existing
position in the array. For example, to make the first animal
awesome, you could say:
animals[0] = "Awesome " + animals[0];

*/

var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

for(var i = 0; i < animals.length; i++) {
    animals[i] = "Awesome " + animals[i];
}

console.log(animals);



// Homework 4
/*

 Random String Generator
Make a random string generator. You’ll need to start with a
string containing all the letters in the alphabet:
var alphabet = "abcdefghijklmnopqrstuvwxyz";
To pick a random letter from this string, you can
update the code we used for the random insult generator in
Chapter 3: Math.floor(Math.random() * alphabet.length). This
will create a random index into the string. You can then use
square brackets to get the character at that index. 

To create the random string, start with an empty string
(var randomString = ""). Then, create a while loop that will
continually add new random letters to this string, as long
as the string length is less than 6 (or any length you choose).
You could use the += operator to add a new letter to the end
of the string. After the loop has finished, log it to the console
to see your creation!

*/

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";

var i = 0;
while(i < 6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    i++;
}

console.log(randomString);



// Homework 5
/*

 h4ck3r sp34k
Turn text into h4ck3r sp34k! A lot of people on the Internet
like to replace certain letters with numbers that look like
those letters. Some numbers that look like letters are 4 for
A, 3 for E, 1 for I, and 0 for O. Even though the numbers look
more like capital letters, we’ll be replacing the lowercase
versions of those letters. To change normal text to h4ck3r
sp34k, we’ll need an input string and a new empty string:

var input = "javascript is awesome";
var output = "";

You’ll then need to use a for loop to go through all the
letters of the input string. If the letter is "a", add a "4" to the
output string. If it’s "e", add a "3". If it’s "i", add a "1", and
if it’s "o", add a "0". Otherwise, just add the original letter
to the new string. As before, you can use += to add each new
letter to the output string.
After the loop, log the output string to the console. If it
works correctly, you should see it log "j4v4scr1pt 1s 4w3s0m3".

*/

var input = "javascript is awesome";
var output = "";

for(var i = 0; i < input.length; i++) {
    if(input[i] === "a") {
        output += "4";
    }
    else if(input[i] === "e") {
        output += "3";
    }
    else if(input[i] === "i") {
        output += "1";
    }
    else if(input[i] === "o") {
        output += "0";
    }
    else {
        output += input[i];
    }
}

console.log("input text: " + input);
console.log("output text: " + output);