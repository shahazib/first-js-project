// Step 1: Declare a variable and assign a number
let number = 10;
document.write("Initial number: " + number + "<br>");

// Step 2: Increment the number
number++;
document.write("After incrementing: " + number + "<br>");

// Step 3: Add a certain value (e.g., 5) to the number
number += 5;
document.write("After adding 5: " + number + "<br>");

// Step 4: Decrement the number
number--;
document.write("After decrementing: " + number + "<br>");

// Step 5: Perform modulus operation (e.g., modulus with 3)
let modulusResult = number % 3;
document.write("Modulus with 3: " + modulusResult + "<br>");

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(result)

// Function to greet the user
function greetUser() {
    // Prompt the user to enter their name
    var userName = prompt("Please enter your name:");
    
    // Create the greeting message
    var greeting = 'Hello, ' + userName + '!';
    
    // Display the greeting message in an alert box
    alert(greeting);
}

// Call the function to greet the user
greetUser();

// Function to display the multiplication table
function displayMultiplicationTable(numbr) {
    // Create a table element
    var tableHTML = '<table border="1" style="border-collapse: collapse; width: 50%;">';
    tableHTML += '<tr><th>Multiplier</th><th>Result</th></tr>';
    
    for (var i = 1; i <= 10; i++) {
        tableHTML += '<tr><td>' + numbr + ' x ' + i + '</td><td>' + (numbr * i) + '</td></tr>';
    }
    
    tableHTML += '</table>';
    
    // Display the table in the HTML body
    document.body.innerHTML = tableHTML;
}

// Prompt the user for a number
var userInput = prompt("Enter a number to display its multiplication table (leave blank for default 5):");

// If the user doesn't enter a number, default to 5
var numbr = userInput ? parseInt(userInput) : 5;

// Call the function to display the multiplication table
displayMultiplicationTable(numbr);




// // Function to display the results
// function displayResults(subjects, obtainedMarks, totalMarks, percentage) {
//     // Create a table element to display the results
//     var tableHTML = '<table border="1" style="border-collapse: collapse; width: 60%;">';
//     tableHTML += '<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>';
    
//     for (var i = 0; i < subjects.length; i++) {
//         tableHTML += '<tr><td>' + subjects[i] + '</td><td>' + obtainedMarks[i] + '</td><td>' + totalMarks + '</td></tr>';
//     }
    
//     tableHTML += '<tr><td><strong>Total</strong></td><td><strong>' + obtainedMarks.reduce((a, b) => a + b, 0) + '</strong></td><td><strong>' + (totalMarks * subjects.length) + '</strong></td></tr>';
//     tableHTML += '<tr><td colspan="3"><strong>Percentage: ' + percentage.toFixed(2) + '%</strong></td></tr>';
//     tableHTML += '</table>';
    
//     // Display the table in the HTML body
//     document.body.innerHTML = tableHTML;
// }

// // Take subject names from the user
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// // Store subject names in an array
// var subjects = [subject1, subject2, subject3];

// // Total marks for each subject
// var totalMarks = 100;

// // Take obtained marks for each subject from the user
// var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// // Store obtained marks in an array
// var obtainedMarks = [obtainedMarks1, obtainedMarks2, obtainedMarks3];

// // Calculate total obtained marks and percentage
// var totalObtainedMarks = obtainedMarks.reduce((a, b) => a + b, 0);
// var percentage = (totalObtainedMarks / (totalMarks * subjects.length)) * 100;

// // Call the function to display the results
// displayResults(subjects, obtainedMarks, totalMarks, percentage);


x++;
x += 1;
console.log(x)
x--;
x -= 1;
console.log(x)

var x = 50;
var y = x++;
console.log(y)

var x = 50;
var y = x++;
console.log(y)

var y = 50;
var z = --y;
console.log(z)


var num = 10; // Example initial value
var newNum = num--;
console.log(newNum)

var num = 5;           // Initial value of num
var originalValue = num++;  // Assigns the original value of num to originalValue, then increments num

// Output the results
console.log("Original Value: " + originalValue); // Outputs: Original Value: 5
console.log("Updated num: " + num);              // Outputs: Updated num: 6


// Assign a number value to a variable
var num = 10;  // Example initial value

// Increment the variable
num++;

// Display the new value in an alert
alert("The new value is: " + num);


var calculatedNum = 2 + (2 * 6);
console.log(calculatedNum); // Outputs: 14




var calculatedNum = (2 + 2) * 6;
console.log(calculatedNum); // Outputs: 24


var calculatedNum = (2 + 2) * (4 + 2);
console.log(calculatedNum); // Outputs: 24


var calculatedNum = ((2 + 2) * 4) + 2;
console.log(calculatedNum); // Outputs: 18



var cost = (2 + 2) * (4 + 10);

var cost = (2 + 2) * (4 + 10);
console.log(cost); // Outputs: 56


var units = (2 + 2) * 4 + 10;

var units = 2 + (2 * (4 + 10));

var units = (2 + 2) * (4 + 2) - 10;

var units = (2 + 2) * 4 + 10; // Produces 20
console.log(units); // Outputs: 20

var num = "2" + "2";
console.log(num); // Outputs: "22"

var message = "Hello," + "Dolly";
console.log(message); // Outputs: "Hello,Dolly"
alert(message); // Displays: Hello,Dolly

alert("33" + 3);

alert("Pakistan " + "Zindabad");

var result = "The number is " + 7;
console.log(result); // Outputs: "The number is 7"

var firstPart = "Hello";
var secondPart = "World";
var fullMessage = firstPart + " " + secondPart;
console.log(fullMessage); // Outputs: "Hello World"

// 1. Prompt to enter first name
var firstName = prompt("Enter first name");
console.log("First Name:", firstName);

// 2. Prompt to enter country with default value "China"
var country = prompt("Country?", "China");
console.log("Country:", country);

// 3. Corrected statement for prompt
var yourName = prompt("Enter Your Name");
console.log("Your Name:", yourName);

// 4. Prompt with a string message and default input
var defaultInput = prompt("Enter a value:", "DefaultValue");
console.log("Default Input:", defaultInput);

// 5. Prompt with a message and default response
var message = "Enter your age";
var defaultResponse = "25";
var userResponse = prompt(message, defaultResponse);
console.log("User Response:", userResponse);

// 6. Display a prompt with a message and default response, then show the response in an alert
var alertMessage = "What's your favorite color?";
var defaultResponseForAlert = "Blue";
var userFavoriteColor = prompt(alertMessage, defaultResponseForAlert);
alert("Your favorite color is: " + userFavoriteColor);







