var message = "Hello world!";
onsole.log(message);

// Conditionals
// IF statments


var firstName = "Darrel";
console.log(firstName);

if(firstName.length > 7){
    console.log("Wow, you have a REALLY long name!");
} 
else {
    console.log("Your name isn't very long.");
}


// Chaining if…else Statements


var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;

if (lemonChicken) {
    console.log("Great! I'm having lemon chicken!");
}
else if(beefWithBlackBean) {
    console.log("I'm having the beef.");
}
else if(sweetAndSourPork) {
    console.log("OK, I'll have the pork.");
}
else {
    console.log("Well, I guess I'll have rice then.");
}


// Loops
// while loops


var sheepCounted = 0;
while(sheepCounted < 10) {
    sheepCounted++;
    console.log("I have counted " + sheepCounted + " sheep!");
}

console.log("zzzzzzzzzzzzzzzz");


// For Loops


for(var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log("I have counted " + sheepCounted + " sheep!");
}

console.log("zzzzzzzzz");


var timesToSayHello = 3;

for (var i = 0; i < timesToSayHello; i++) {
    console.log(" Hello!");
}


// using for loops with Arrays and Strings


var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

for(var i = 0; i < animals.length; i++) {
    console.log("This zoo contains a " + animals[i] + ".");
}



var personName = "Darrel";

for(var i = 0; i < personName.length; i++) {
    console.log("My name contains the letter " + personName[i] + ".");
}


// Other Ways to use for loops


for(var x = 2; x < 10000; x = x * 2) {
    console.log(x);
}

