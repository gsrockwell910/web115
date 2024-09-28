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

  // Close menu if user clicks off 
  window.onclick = function(event) {
    // If the target of the click is not the dropdown button and the dropdown ul classlist contains show
    if (!event.target.matches(".dropdownButton") && 
        dropdownUL.classList.contains("show")) {
        // Untoggle
        toggled = false;
        // Remove class
        dropdownUL.classList.remove("show");
        // Change text
        dropdownButton.textContent = untoggledText;
    }
  };

  // Close menu on mobile if user touches any part of the window that is not the dropdown menu or dd menu links
  window.ontouchend = function(event) {
    // If the target of the click is not the dropdown button, 
    // extra condition checks if object being touched is a dropdown link. 
    // without this links will not open in mobile view.
    if (!event.target.matches(".dropdownButton") && 
        !event.target.matches(".dropdown-link") && 
        dropdownUL.classList.contains("show")) {
      // Untoggle
      toggled = false;
      // Remove class
      dropdownUL.classList.remove("show");
      // Change text
      dropdownButton.textContent = untoggledText;
    }
  };
}