console.log("✅ JS is linked and running!");


// String
let name = "Chiyle";

// Number
let age = 22;

// Boolean
let isStudent = true;

// Array
let favoriteFoods = ["Fried Rice", "Burger", "Chicken"];

// Object
let student = {
  name: "Chiyle",
  major: "Computer Science",
  year: "Senior"
};

// Null
let currentJob = null;

// Log them to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is a student?", isStudent);
console.log("Favorite Foods:", favoriteFoods);
console.log("Student Info:", student);
console.log("Current Job:", currentJob);

// Operators
let sum = age + 5;
let isAdult = age >= 18;
let canGraduate = isStudent && (student.year === "Senior");

console.log("Sum (age + 5):", sum);
console.log("Is an adult?", isAdult);
console.log("Can graduate?", canGraduate);

//  User Input, Validation, and Loops

// Ask the user for a number
let userNumber = prompt("Enter a number between 1 and 5:");

// Validate the input
if (userNumber >= 1 && userNumber <= 5) {
  console.log(`✅ You entered a valid number: ${userNumber}`);

  // Use a for loop to count up to the number entered
  for (let i = 1; i <= userNumber; i++) {
    console.log(`Counting: ${i}`);
  }

} else {
  console.log("⚠️ Invalid input. Please refresh and enter a number between 1 and 5.");
}
// Step 3: Event Listeners & Dynamic DOM Updates

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get button and output paragraph
    const button = document.getElementById("greetButton");
    const output = document.getElementById("greetingOutput");
  
    //click event listener
    button.addEventListener("click", function() {
      output.textContent = "👋 Hello, welcome to my webpage, I Hope you like it!";
      output.style.color = "blue";
      output.style.fontWeight = "bold";
    });
  });

  // Step 4: Fetch API Example

// Wait for the DOM again (or reuse existing listener)
document.addEventListener("DOMContentLoaded", function() {
    const factButton = document.getElementById("factButton");
    const factOutput = document.getElementById("factOutput");
  
    factButton.addEventListener("click", async function() {
      factOutput.textContent = "Loading fact...";
  
      try {
        const response = await fetch("https://dog-api.kinduff.com/api/facts");
        const data = await response.json();
  
        // Display the dog fact
        factOutput.textContent = `🐶 ${data.facts[0]}`;
        factOutput.style.color = "green";
        factOutput.style.fontStyle = "italic";
      } catch (error) {
        factOutput.textContent = "⚠️ Error loading dog fact. Please try again.";
        factOutput.style.color = "red";
        console.error(error);
      }
    });
  });
  
  