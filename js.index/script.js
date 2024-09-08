// Prompt the user to enter details
var message = "This is a message stored in a variable!";
var firstName = ("Enter your First Name:");
var lastName = ("Enter your Last Name:");
var email = ("Enter your Email:");
var phone = ("Enter your Phone Number:");
var password = ("Enter your Password:");




// Alert each input individually

alert(message);
alert("First Name: " + firstName);
alert("Last Name: " + lastName);
alert("Email: " + email);
alert("Phone Number: " + phone);
alert("Password: " + password);


var myFirstVariable = "Hello, world";
console.log ("Hello, world")



var myVariable ;  
myVariable = "";  
console.log (myVariable)

var teamName = "The Avengers"; 
alert(teamName); 
console.log("The Avengers")
var bestMan = "Charlie"; 
bestMan = "Alex";
console.log(bestMan)
var caseQty;
var caseQty = 10; 
console.log(caseQty)
caseQty = 144;
console.log(caseQty)
var num = "9"; 
var result = (num, 10) + 1; 
console.log(num)
var total; 
total = 5 + 7; 
console.log(total)


var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log(orderTotal  )

var myNumber = 25; 
myNumber = myNumber + 15; 
console.log(myNumber)

var firstName = "John", lastName = "Doe", age = 30;
var firstName = "John", lastName = "Doe", age = 30; console.log(firstName, lastName, age);

// Declare and initialize two numbers
var num1 = 10; // You can change this value
var num2 = 20; // You can change this value

// Calculate the sum
var result = num1 + num2;

// Display the result in the browser
document.write("The result of adding " + num1 + " and " + num2 + " is: " + result);
// Declare and initialize two numbers
var num1 = 10; // You can change this value
var num2 = 5;  // You can change this value

// Calculate the results of various operations
var addition = num1 + num2;
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;


document.write("<h1>Results:</h1>");
document.write("Addition: " + num1 + " + " + num2 + " = " + addition + "<br>");
document.write("Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "<br>");
document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "<br>");
document.write("Division: " + num1 + " / " + num2 + " = " + division + "<br>");
document.write("Modulus: " + num1 + " % " + num2 + " = " + modulus + "<br>");








var myVariable;


document.write("Value after variable declaration is: " + myVariable + "<br>");


myVariable = 5;


document.write("Initial value: " + myVariable + "<br>");


myVariable++;


document.write("Value after increment is: " + myVariable + "<br>");

myVariable += 7;


document.write("Value after addition is: " + myVariable + "<br>");


myVariable--;


document.write("Value after decrement is: " + myVariable + "<br>");


var remainder = myVariable % 3;

document.write("The remainder is: " + remainder);






var ticketPrice = 600; 


var numberOfTickets = 5;


var totalCost = ticketPrice * numberOfTickets;


document.write("The total cost of buying " + numberOfTickets + " tickets is: " + totalCost + " PKR");



var number = 7; 


document.write("<h1>Multiplication Table for " + number + "</h1>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}


var celsiusTemperature = 25; 

var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;


document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");


var fahrenheitTemperatureInput = 77; 


var celsiusTemperatureConverted = (fahrenheitTemperatureInput - 32) * 5/9;


document.write(fahrenheitTemperatureInput + "°F is " + celsiusTemperatureConverted + "°C");

var priceItem1 = 500; 

var priceItem2 = 300; 


var quantityItem1 = 2; 


var quantityItem2 = 3; 


var shippingCharges = 100; 


var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;


document.write("<h1>Shopping Cart Receipt</h1>");
document.write("Price of Item 1: " + priceItem1 + " PKR<br>");
document.write("Quantity of Item 1: " + quantityItem1 + "<br>");
document.write("Price of Item 2: " + priceItem2 + " PKR<br>");
document.write("Quantity of Item 2: " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br>");
document.write("<br><strong>Total Cost: " + totalCost + " PKR</strong>");


var totalMarks = 500; 
var marksObtained = 400; 


var percentage = (marksObtained / totalMarks) * 100;


document.write("<h1>Student Marks Sheet</h1>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");






var usDollars = 10; 
var saudiRiyals = 25; 


var usdToPkr = 104.80; 
var riyalToPkr = 28.00; 

var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * riyalToPkr);


document.write("<h1>Currency Conversion</h1>");
document.write("Total Currency in Pakistani Rupees: " + totalPkr + " PKR");



var number = 20; 


var result = ((number + 5) * 10) / 2;


document.write("<h1>Arithmetic Operations</h1>");
document.write("Initial number: " + number + "<br>");
document.write("Result after operations: " + result);



var currentYear = 2024; 


var birthYear = 1990; 


var age1 = currentYear - birthYear; 
var age2 = age1 - 1; 


document.write("<h1>Age Calculator</h1>");
document.write("They are either " + age1 + " or " + age2 + " years old.");





var radius = 10; 


var pi = 3.142;


var circumference = 2 * pi * radius;


var area = pi * radius * radius;


document.write("<h1>The Geometrizer</h1>");
document.write("Radius of the circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);



var favoriteSnack = "chocolate"; 

var currentAge = 25; 


var maxAge = 80; 


var amountPerDay = 2; 


var totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;


document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favorite snack: " + favoriteSnack + "<br>");
document.write("You will need " + totalSnacks + " " + favoriteSnack + "(s) to last you until the ripe old age of " + maxAge + ".");



