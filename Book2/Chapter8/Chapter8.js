// Knowing Your Operands

// typeof 8;
// var doTheMath = 7 + 8 + 36 + 18 + 12;
// typeof doTheMath;
// typeof "the cat's favorite toy"
// typeof automobile;

// Working with Objects
var dreamCar = {
  make: "Oldsmobile",
  model: "1983",
  color: "aquamarine",
  year: 1983,
  bodyStyle: "Luxury Car",
  price: 450000
}

//alert("The type of dreamCar is: " + typeof dreamCar);
document.getElementById("priceTag").innerHTML = dreamCar.price;
document.getElementById("modelYear").innerHTML = dreamCar.model;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;
