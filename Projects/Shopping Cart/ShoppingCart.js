// Please share link to the demo video.

// Specs:

// Take the start code for the Shopping Cart Project

// Then complete the shopping cart by adding REMOVE buttons that performs the opposite to the Add Button

// Please remember if you remove - to prevent from going into negative quantities

// Also add a Checkout Button that calculates the total price of items in the Shopping cart and places the total on the page (make a new function for this ).


var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

document.getElementById("checkOutButton").addEventListener("click", calculateTotalPrice);

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function remove_selection(x) {
    console.log(x);

    if((quantities[x] - 1) < 0) {
        return;
    }

    quantities[x] = quantities[x] - 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt -= prices[x];

    display_all();
}


function calculateTotalPrice() {
    var total = document.getElementById("total");
    var totalItemAmount = 0;
    
    // make the total container visible.
    document.getElementById("containTotal").style.display = "block";

    // reset previous total.
    total.innerHTML = "";

    total.innerHTML = "<h3>TOTAL PRICE</h3><br>";

    for(var i = 0; i < items.length; i++) {
        if(quantities[i] > 0) {

            total.innerHTML += "<div><span class='itemSpan'>" + items[i] + ": " + quantities[i] + "</span>" 
            + "<span class='itemSpan'>Total: R" + totals[i] + "</span></div>";

            totalItemAmount += quantities[i];
        }
    }

    total.innerHTML += "<div><span class='itemSpan'><h3>Item Amount: " + totalItemAmount + "</h3></span>" 
                     + "<span class='itemSpan'><h3>Total Cost: R" + totalOrderAmt + "</h3></span></div>"
}


function display_all() {



    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")' class='addButton'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")' class='removeButton'>Remove</button></td>";
    }

    myTable += "</table>";
    // myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";



    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;


}

window.onload = function() {
    display_all();
}