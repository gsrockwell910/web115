"use strict";
//Listen for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  //Grab all necessary elements
  const generateButton = document.getElementById("generate-button");
  const outputSection = document.getElementById("fizzbuzz1-output");

  // Listen for click event on button
  generateButton.addEventListener("click", function (event) {
    // Prevent default event behaviours
    event.preventDefault(); 
    // Set magic number (140) in const
    const loopControl = 140;
    // Create element to store output
    const outputElement = document.createElement("p");
    // Create variables for words
    const firstWord = "Rhino";
    const secondWord = "Vision";
    const fullWord = "RhinoVision";
    // Create variables for numbers
    const firstDivisor = 3;
    const secondDivisor = 5;
    // Loop 
    for (let i = 1; i <= loopControl; i++){
    // Prepend zeros if number is less than 3 digits
    if (i <= 9) outputElement.innerHTML += "00";
    if (i > 9 && i <= 99) outputElement.innerHTML += "0";
    // Check for both conditions first to avoid incorrect output
     if (i % firstDivisor === 0 && i % secondDivisor === 0) {
      // Change text conent
      outputElement.innerHTML += `${i}) ${fullWord} - This number is divisible by ${firstDivisor} and ${secondDivisor}.<br>`;
     } else if (i % firstDivisor === 0) {
      // Change text conent
      outputElement.innerHTML += `${i}) ${firstWord} - This number is divisible by ${firstDivisor} only.<br>`;
     } else if  (i % secondDivisor === 0) {
      // Change text conent
      outputElement.innerHTML += `${i}) ${secondWord} - This number is divisible by ${secondDivisor} only.<br>`;
     } else {
      // Change text conent
      outputElement.innerHTML += `${i}) This number is not divisible by ${firstDivisor} or ${secondDivisor}.<br>`;
     }
    }
    // Clear output if there is any
    outputSection.innerHTML = "";
    //append element
    outputSection.appendChild(outputElement);
  });
});
