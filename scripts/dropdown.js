"use strict";
// Grab dropdown ul, dropdown button
const dropdownUL = document.getElementById("dropdown");
const dropdownButton = document.querySelector(".dropdownButton");
// Flag
let toggled = false;
// Toggle class
function toggleMenu() {
  if (toggled === false) {
      toggled = true;
      dropdownButton.textContent = "FizzBuzz↑";
      // add show class to make list visible
      dropdownUL.classList.add("show");
  } else {
    toggled = false;
    dropdownButton.textContent = "FizzBuzz↓";
    dropdownUL.classList.remove("show");
  }

// Close menu is user clicks off 
window.onclick = function(e) {
  // If the target of the click is not the dropdown button
  if (!e.target.matches(".dropdownButton")) {
    // If the dropdown UL current has the class of show
    if (dropdownUL.classList.contains("show")) {
      // Remove it
      toggled = false;
      dropdownUL.classList.remove("show");
      dropdownButton.textContent = "FizzBuzz↓";
    }
  }
};
}