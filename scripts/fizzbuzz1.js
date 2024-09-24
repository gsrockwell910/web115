//Listen for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  //Grab all necessary elements
  const generateButton = document.getElementById("generate-button");
  const outputSection = document.getElementById("output-section");

  // Listen for submit event on form
  generateButton.addEventListener("click", function (event) {
    // Prevent default event behaviours
    event.preventDefault();

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
