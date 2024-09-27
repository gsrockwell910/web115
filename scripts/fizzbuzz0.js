"use strict";
//Listen for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  //Grab all necessary elements
  const greeting = document.getElementById("greeting");
  const form = document.getElementById("fizzbuzz-form");
  const firstNameField = document.getElementById("first-name");
  const lastNameField = document.getElementById("last-name");
  const middleInitialField = document.getElementById("middle-initial");
  const outputSection = document.getElementById("output-section");

  // Listen for submit event on form
  form.addEventListener("submit", function (event) {
    // Prevent default event behaviours
    event.preventDefault();
    // Grab field inputs and store in variables, all fields will be present 
    // due to fields being required in HTML, should validate to ensure only 
    // proper input will be processed (TODO).
    let firstName = firstNameField.value.trim();
    let lastName = lastNameField.value.trim();
    let middleInitial = middleInitialField.value.trim(); 
    // Store formatted full name in variable
    const fullName = firstName + " " + middleInitial + ". " + lastName;
    // Update greeting with custom greeting that uses full name 
    greeting.textContent = `Hello, ${fullName}, Welcome to RhinoVision Software!`;
    // prompt user to enter a number and store in variable
    const loopControl = prompt(`How high do you want to count, ${firstName}`);
    // Create element to store output
    const outputElement = document.createElement("p");
    // Create flag to tell if number is even or odd
    let isEven;
    // Loop 
    for (let i = 0; i < loopControl; i++){
      // Change value of isEven based on current num
      isEven = (i + 1) % 2 === 0 ? true : false;
      // Create string
      let evenOrOdd = isEven ? "even" : "odd";
      // Change text conent
      outputElement.innerHTML += `${i + 1}) Rhino Vision - This number is ${evenOrOdd}.<br>`;
    }
    //append element
    outputSection.appendChild(outputElement);
  });
});
