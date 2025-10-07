// Writing and using for loops

// Listing 17-1
// for(var i = 10; i > 0; i--) {
//     alert(i);
// }
// alert("Blast Off!!");

// Listing 17-2
// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];

// for(var i = 0; i < myFriends.length; i++) {
//     alert(myFriends[i] + " is my friend.");
// }

// Using Math.random()

// alert(Math.random());

// alert(Math.random() * 11);

// alert(Math.floor(Math.random() * (1000 - 100) + 100));

// Finding a Random Friend
// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// var randomFriend = Math.floor(Math.random() * myFriends.length);

// alert(myFriends[randomFriend]);

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];
var minTemp = 0;
var maxTemp = 100;

function generateWeather() {
    for(var i = 0; i < days.length; i++) {
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday 
        + "'><b>Forcast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}

generateWeather();