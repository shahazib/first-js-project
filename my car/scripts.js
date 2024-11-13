document.getElementById("carCheckupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let carModel = document.getElementById("carModel").value;
    let carMileage = parseInt(document.getElementById("carMileage").value);
    let lastService = parseInt(document.getElementById("lastService").value);
    let oilLevel = parseInt(document.getElementById("oilLevel").value);

    // Health status messages
    let healthMessage = "";

    if (carMileage > 100000) {
        healthMessage += "High mileage detected. Consider a thorough checkup. ";
    }

    if (lastService > 6) {
        healthMessage += "It's been a while since the last service. Please schedule one soon. ";
    }

    if (oilLevel < 30) {
        healthMessage += "Low oil level. Consider refilling or changing the oil. ";
    }

    if (healthMessage === "") {
        healthMessage = "Your car is in good condition!";
    }

    // Show the result
    document.getElementById("healthMessage").innerText = healthMessage;
    document.getElementById("result").style.display = "block";
});


document.getElementById("carCheckupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let carModel = document.getElementById("carModel").value;
    let carMileage = parseInt(document.getElementById("carMileage").value);
    let lastService = parseInt(document.getElementById("lastService").value);
    let oilLevel = parseInt(document.getElementById("oilLevel").value);

    // Health status messages
    let healthMessage = "";

    if (carMileage > 100000) {
        healthMessage += "High mileage detected. Consider a thorough checkup. ";
    }

    if (lastService > 6) {
        healthMessage += "It's been a while since the last service. Please schedule one soon. ";
    }

    if (oilLevel < 30) {
        healthMessage += "Low oil level. Consider refilling or changing the oil. ";
    }

    if (healthMessage === "") {
        healthMessage = "Your car is in good condition!";
    }

    // Show the result
    document.getElementById("healthMessage").innerText = healthMessage;
    document.getElementById("result").style.display = "block";
});




