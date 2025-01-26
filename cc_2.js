// Task 1: Working with Arrays

// Declare an array with at least five product names
let products = ["Headphones", "Controller", "Keyboard", "Mouse", "Camera"];
// Add a new product to the array
products.push("Router");
// Remove the last product from the array
products.pop();
// Log the updated product list to the console
console.log("Updated product list:", products);

//Task 2: Accessing and Modifying Arrays

// Declare an array scores with at least five numerical values.
let scores = [10, 20, 30, 40, 50];
// Update the second score in the array.
scores[1] = 60;
// Calculate the average of all scores.
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
//Log the updated array and the average score to the console.
console.log("Updated Scores:", scores);
console.log("Average Score:", average.toFixed(2));