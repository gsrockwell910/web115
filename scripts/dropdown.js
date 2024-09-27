"use strict";
// Grab dropdown ul, dropdown button
const dropdownUL = document.getElementById("dropdown");
const dropdownButton = document.querySelector(".dropdownButton");
// Text vars
const toggledText = "⤴ FizzBuzz";
const untoggledText = "⤵ FizzBuzz";
// Flag
let toggled = false;
// Toggle class
function toggleMenu() {
  // If state was not toggled
  if (toggled === false) {
    // Toggle it
    toggled = true; 
    // add show class to make list visible
    dropdownUL.classList.add("show");
    // Change text
    dropdownButton.textContent = toggledText;
    // State is toggled
  } else {
    // Untoggle it
    toggled = false;
    // Remove class
    dropdownUL.classList.remove("show");
    // Change text
    dropdownButton.textContent = untoggledText;
  }

  // Close menu is user clicks off 
  window.onclick = function(event) {
    // If the target of the click is not the dropdown button
    if (!event.target.matches(".dropdownButton")) {
      // If the dropdown UL current has the class of show
      if (dropdownUL.classList.contains("show")) {
        // Untoggle
        toggled = false;
        // Remove class
        dropdownUL.classList.remove("show");
        // Change text
        dropdownButton.textContent = untoggledText;
      }
    }
  };
// For mobile devices
  window.ontouchstart = function (event) {
    // If the target of the click is not the dropdown button
    if (!event.target.matches(".dropdownButton")) {
      // If the dropdown UL current has the class of show
      if (dropdownUL.classList.contains("show")) {
        // Untoggle
        toggled = false;
        // Remove class
        dropdownUL.classList.remove("show");
        // Change text
        dropdownButton.textContent = untoggledText;
      }
    }
  };
}