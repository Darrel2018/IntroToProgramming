// Writing a Switch

// var myNumber = prompt("Enter your favorite day of the week!");
// var theResponse;

// switch(myNumber) {
//     case "Monday":
//         theResponse = "Ack!";
//         break;
//     case "Tuesday":
//         theResponse = "Taco day!";
//         break;
//     case "Wednesday":
//         theResponse = "Halfway there!";
//         break;
//     case "Thursday":
//         theResponse = "It's the new Friday!";
//         break;
//     case "Friday":
//         theResponse = "TGIF! Yeah!";
//         break;
//     case "Saturday":
//         theResponse = "What a day!";
//         break;
//     case "Sunday":
//         theResponse = "Sunday = Funday!";
//         break;
//     default:
//         theResponse = "I haven't heard of that one!";
//         break;
// }

// alert(theResponse);

// ==================== Building the Activity‐of‐the‐Day Calendar


// Using the Date object
// var myDate = new Date();

// console.log(myDate);

// console.log("Day of the week: " + myDate.getDay());

// console.log("Month: " + myDate.getMonth());

// console.log("Day of the month: " + myDate.getDate());

// console.log("Full Year: " + myDate.getFullYear());

// var myNewDate = new Date();

// console.log("Unix time: " + myNewDate.setMonth(7));

// console.log("full date object: " + myNewDate);


// ============== Building the Activity Calendar program

var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date Object
var d = new Date();

// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    var dayOfWeek = d.getDay();
    var youShould;

    switch(dayOfWeek) {
        case 0: // Sunday
            youShould = "Take it easy. You've earned it!"
            break;
        case 1: // Monday
            youShould = "Join class";
            break;
        case 2: // Tuesday
            youShould = "Go to the park";
            break;
        case 3: // Wednesday
            youShould = "Hang out with friends";
            break;
        case 4: // Thursday
            youShould = "Go to work";
            break;
        case 5: // Friday
            youShould = "Hope for the weekend";
            break;
        case 6: // Saturday
            youShould = "Party!!!";
            break;
        default:
            youShould = "Hmm. Something has gone wrong."
            break;
    }

    document.getElementById("thingToDo").innerHTML = youShould;
}