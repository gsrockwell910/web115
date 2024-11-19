"use strict";
//Listen for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  //Grab all necessary elements
  const form = document.getElementById("fizzbuzz-form");

  // Listen for submit event on form
  form.addEventListener("submit", function (event) {
    // Prevent default event behaviours
    event.preventDefault();
    // Grab necessary elements
    const firstNameField = document.getElementById("first-name");
    const lastNameField = document.getElementById("last-name");
    const middleInitialField = document.getElementById("middle-initial");
    const outputSection = document.querySelector("section");
    const greeting = document.querySelector("h3");
    // Grab field inputs and store in variables, all fields will be present 
    // due to fields being required in HTML, should validate to ensure only 
    // proper input will be processed (TODO).
    let firstName = firstNameField.value.trim();
    let lastName = lastNameField.value.trim();
    let middleInitial = middleInitialField.value.trim(); 
    let fullName;
    // Store formatted full name in variable
    middleInitial ? fullName = firstName + " " + middleInitial + ". " + lastName : fullName = firstName + " " + lastName;
    // Update greeting with custom greeting that uses full name 
    greeting.textContent = `Hello, ${fullName}! Welcome to RhinoVision Software`;
    // prompt user to enter a number and store in variable
    let loopControl = parseInt(prompt(`How high do you want to count, ${firstName}`));
    // validate input.
    while (loopControl <= 0) {
      // prompt again
      alert("Your input could not be verified. Please enter a number greater than 0.");
      loopControl = parseInt(prompt(`How high do you want to count, ${firstName}`));
    }
    // Strings to prepend to outputElement if i is less than 3 digits
    const oneDigitPrepend = "00";
    const twoDigitPrepend = "0";
    // Create element to store output
    const outputElement = document.createElement("p");
    // Create flag to tell if number is even or odd
    let isEven;
    // Loop 
    for (let i = 1; i <= loopControl; i++){
      // Prepend 2 zeros if number is 1 digit, 1 zero if num is 2 digits
      (i <= 9) ? outputElement.innerHTML += oneDigitPrepend : (i > 9 && i <= 99) ? outputElement.innerHTML += twoDigitPrepend : null;
      // Change value of isEven based on current num
      isEven = (i) % 2 === 0 ? true : false;
      // Create string
      let evenOrOdd = isEven ? "even" : "odd";
      // Change text conent
      outputElement.innerHTML += `${i}) Rhino Vision - This number is ${evenOrOdd}.<br>`;
    }
    // Clear output if there is any
    outputSection.innerHTML = "";
    // Append element
    outputSection.appendChild(outputElement);
  });
});
