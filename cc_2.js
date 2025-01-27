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

// Task 3: Working with Objects

// Declare an object employee with properties: name, age, department, and isActive.
let employee = {name: "Kimberly Joseph", age: 36, department: "Electronics", isActive: true};

// Update the department property
update.department = "BAIS";
console.log("Updated department:", update.department);

// Add a new property 'position' to the object
employee.position = "Senior Analyst";

// Log the updated object to the console
console.log("Updated employee record:", employee);

//Task 4: Array of Objects

// Declare an array containing at least three customer objects
let customers = [
    { name: "Donna Adams", email: "donnaadams@gmail.com", purchaseAmount: 50 },
    { name: "Roshade Collins", email: "roshadecollins@gmail.com", purchaseAmount: 100 },
    { name: "Shaquille Harrigan", email: "shaquilleharrigan@gmail.com", purchaseAmount: 150 }
];

// Add a new customer object to the array
customers.push({ name: "Jessica Cuevas", email: "jessicacuevas@gmail.com", purchaseAmount: 200 });

// Log the entire customer list to the console
console.log("Updated Customer List:", customers);

// Task 5: Object Methods

// Declare an object order with properties: orderId, customerName, and amount.
let order = {
    orderId: "ANU268",
    customerName: "Donna Adams",
    amount: 499.99
};

// Add a method calculateTax that returns the tax amount (assume 10% tax rate).
order.calculateTax = function() { 
    return this.amount * 0.10; 
};

console.log("Tax Amount:", order.calculateTax().toFixed(2));

// Log the order details and tax amount to the console.
console.log("Order Details:", order);