"use strict";
// Grab dropdown ul, dropdown button
const dropdownUL = document.getElementById("dropdown");
const dropdownButton = document.querySelector(".dropdownButton");
// Text vars
const toggledText = "⤴ FizzBuzz";
const untoggledText = "⤵ FizzBuzz";
// Color vars 
const backgroundColor = "#1F2A38";
const textColor = "#F8F4F1";
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

  // Close menu on mobile if user touches any part of the window that is not the dropdown menu or dd menu links
  window.ontouchend = function(event) {
    // Change color of dropdown button when clicked (for mobile hover effect)
    dropdownButton.style.backgroundColor = backgroundColor;
    dropdownButton.style.color = textColor;
    // If the target of the click is not the dropdown button, 
    // extra condition checks if object being touched is a dropdown link. 
    // without this links will not open in mobile view.
    if (!event.target.matches(".dropdownButton") && !event.target.matches(".dropdown-link")) {
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