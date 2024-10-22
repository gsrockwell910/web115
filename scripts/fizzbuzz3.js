"use strict";
//Listen for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  //Grab all necessary elements
  const generateButton = document.getElementById("generate-button-v3");
  const outputSection = document.getElementById("fizzbuzz3-output");

  // Listen for click event on button
  generateButton.addEventListener("click", function (event) {
    // Prevent default event behaviours
    event.preventDefault(); 
    // Set magic number (140) in const
    const loopControl = 140;
    let iterator = 1;
    // Create element to store output
    const outputElement = document.createElement("p");
    // Create variables for words
    // const firstWord = "Rhino";
    // const secondWord = "Vision";
    // const thirdWord = "BANG!";
    // const fullWord = "RhinoVision";
    // Strings to prepend to outputElement if i is less than 3 digits
    const oneDigitPrepend = "00";
    const twoDigitPrepend = "0";
    // Create variables for numbers
    // const firstDivisor = 3;
    // const secondDivisor = 5;
    // const thirdDivisor = 7;
    const divisorMap = new Map();
    divisorMap.set(3, "Rhino");
    divisorMap.set(5, "Vision");
    divisorMap.set(7, " BANG!");
    // Declare function (checkDivision)
    function checkDivision(dividend, divisor) {
      // Flag
      let isDivisible = dividend % divisor === 0;
      // Return boolean
      return isDivisible;
    }
    // Outer Loop - controls total iterations
    do {
      // vars to hold assembled word and numbers that are divisible by the keys
      let newWord = " ";
      let divisibleBy = [];
      // Prepend 2 zeros if number is 1 digit, 1 zero if num is 2 digits
      (iterator <= 9) ? outputElement.innerHTML += oneDigitPrepend : (iterator > 9 && iterator <= 99) ? outputElement.innerHTML += twoDigitPrepend : "";
      // inner loop compares i to each key of the hash, checkin for division
      for (let [key, value] of divisorMap) {
        if (checkDivision(iterator, key)) {
            newWord += value;
            divisibleBy.push(key);
        } 
      }
      // assemble new word
      newWord !== " " ? outputElement.innerHTML += `${iterator}) ${newWord} - This number is divisible by ${divisibleBy}.<br>` : outputElement.innerHTML += `${iterator}) This number is not divisible by any number in the hash.<br>`;
      iterator++;
    } while (iterator <= loopControl);
    // Clear output if there is any
    outputSection.innerHTML = "";
    //append element
    outputSection.appendChild(outputElement);
  });
});