// Prompt user to enter a city name
var city = prompt("Enter your city name:");

// Check if the city is "Karachi"
if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights!");
} else {
    alert("Welcome to " + city + "!");
}
// Function to greet the user based on gender input
function greetUser() {
    // Prompt the user to enter their gender
    var gender = prompt("Please enter your gender (male/female):").toLowerCase();

    // Check the gender and display the appropriate message
    if (gender === "male") {
        alert("Good Morning Sir.");
    } else if (gender === "female") {
        alert("Good Morning Ma’am.");
    } else {
        alert("Invalid input. Please enter 'male' or 'female'.");
    }
}

// Call the function
greetUser();
// Function to show traffic signal message based on input color
function showTrafficMessage() {
    // Prompt the user to enter the color of the traffic signal
    var color = prompt("Enter the color of the traffic signal (Red/Yellow/Green):").toLowerCase();

    // Determine the message based on the color
    var message;
    switch (color) {
        case 'red':
            message = "Stop";
            break;
        case 'yellow':
            message = "Get Ready";
            break;
        case 'green':
            message = "Go";
            break;
        default:
            message = "Invalid color. Please enter 'Red', 'Yellow', or 'Green'.";
            break;
    }

    // Display the message
    alert(message);
}

// Call the function
showTrafficMessage();

// Function to check the fuel level and display a message
function checkFuelLevel() {
    // Prompt user to enter the remaining fuel in liters
    var fuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

    // Check if the input is a valid number
    if (isNaN(fuel)) {
        alert("Invalid input. Please enter a valid number.");
    } else if (fuel < 0.25) {
        alert("Please refill the fuel in your car.");
    } else {
        alert("Fuel level is sufficient.");
    }
}

// Call the function
checkFuelLevel();
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
function calculateGrade() {
    // Prompt the user for input
    var marks1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
    var marks2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
    var marks3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
    var totalMarks = parseFloat(prompt("Enter total marks:"));

    // Calculate total obtained marks and percentage
    var obtainedMarks = marks1 + marks2 + marks3;
    var percentage = (obtainedMarks / totalMarks) * 100;

    // Determine grade based on percentage
    var grade, remarks;
    if (percentage >= 90) {
        grade = 'A';
        remarks = 'Excellent';
    } else if (percentage >= 80) {
        grade = 'B';
        remarks = 'Very Good';
    } else if (percentage >= 70) {
        grade = 'C';
        remarks = 'Good';
    } else if (percentage >= 60) {
        grade = 'D';
        remarks = 'Satisfactory';
    } else {
        grade = 'F';
        remarks = 'Needs Improvement';
    }

    // Display the results
    document.body.innerHTML = `
        <div class="result">
            <h2>Result</h2>
            <p>Total Marks: ${totalMarks}</p>
            <p>Marks Obtained: ${obtainedMarks}</p>
            <p>Percentage: ${percentage.toFixed(2)}%</p>
            <p>Grade: ${grade}</p>
            <p class="remark">Remarks: ${remarks}</p>
        </div>
    `;
}

// Call the function
calculateGrade();
// Store the secret number
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the secret number
const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"), 10);

// Check the user's guess
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, that's not correct. The secret number was " + secretNumber);
}
// Prompt user for input
const number = parseInt(prompt("Enter a number:"), 10);

// Check if the number is even or odd
if (number % 2 === 0) {
    alert("The number is even.");
} else {
    alert("The number is odd.");
}
// Prompt user for temperature input
const temperature = parseFloat(prompt("Enter the temperature:"));

// Check temperature and display message
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is quite cold outside.");
}
// Prompt user for inputs
const firstNumber = parseFloat(prompt("Enter the first number:"));
const secondNumber = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (+, -, *, /, %):");

// Perform the calculation based on the operation
let result;
switch (operation) {
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '/':
        if (secondNumber === 0) {
            alert("Division by zero is not allowed.");
            break;
        }
        result = firstNumber / secondNumber;
        break;
    case '%':
        result = firstNumber % secondNumber;
        break;
    default:
        alert("Invalid operation.");
        break;
}

// Show the result if it was computed
if (result !== undefined) {
    alert("The result is: " + result);
}
