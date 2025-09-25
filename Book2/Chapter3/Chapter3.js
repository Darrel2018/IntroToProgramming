//================ Creating varibles

// var book;

// var myFirstname;
// var favoriteFoods;
// var birthday;
// var timeOfDay;

// var _petName;
// var $schoolSubject;

// var friends_Age;
// var street$adress;

// Results in error(Reserved keyword)
// var break = "Tomorrow";
// var switch = "Today";


//================ Storing data in variables

// var book;
// book = "JavaScript For Kids For Dummies";
// console.log(book);

// book = "The Call of the Wild";
// console.log(book);


//================= Understanding Data Types

// var book;
// book = "JavaScript For Kids For Dummies";
// console.log(book.length);
// console.log("JavaScript For Kids For Dummies".length);

// var string = "I am a string".indexOf("am");
// console.log(string);

// var string1 = "I am a string".indexOf("I");
// console.log(string1);


//================== The number data type

// var numberTest = "10" + 10;
// console.log(numberTest);

// var numberTest1 = "10" / 10;
// console.log(numberTest1);


//================== The Boolean data type

// console.log(1 < 10);
// console.log(100 > 2000);
// console.log(false === false);
// console.log("apples" === "oranges");

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(false));


//=================== Prompting & Storing User Input

// var myName = prompt("What is your Name?");
// console.log(myName);

// alert("Good job!");
// alert(300);
// alert(37*37);
// alert(true);

// var myName = "Nick";
// var myAge = 102;
// alert("Hi, " + myName + ". You current age is: " + myAge);


// ================= Objects

// var truck = {
//     "color": ["Yellow", "Red"],
//     price: 15000,
//     "drive": function () {
//         console.log("I am driving a big truck");
//     }
// }

// console.log(truck.color);
// console.log(truck["color"]);
// console.log(truck.drive());


//====================== Using document.write()

// document.write("<h1>Hi, Mom!</h1><br>");
// document.write("<p>333 + 100</p>");
// document.write("How are you?");

// document.writeln("<h3>test</h3>");
// document.writeln("test");


//==================== Combining Input and Output

var toName = prompt("What is your name?");
var fromName = prompt("Who is the sender?");

var letterBody = "We are pleased to inform you that your song, 'Can't Stop Coding,' has been voted the Best Song of All Time by the awarding committee.";

document.write("Dear " + toName + ",<br><br>");
document.write(letterBody + "<br><br>");
document.write("Sincerely,<br>");
document.write(fromName);