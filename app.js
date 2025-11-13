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
