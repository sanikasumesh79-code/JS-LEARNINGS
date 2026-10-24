// Part A — Array Iteration Methods
// 1. forEach() — Display Product Names (5 marks)
// Given the array below, use forEach() to display each product name on a separate line.
// Given data:
// let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
// Expected output (format may vary slightly):
// Laptop
// Mouse
// Keyboard
// Monitor
///answer:=
// let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
// products.forEach(element=>{
//     console.log(element)
// });


// 2. map() — Calculate Prices After Tax (5 marks)
// Given the prices below, use map() to create a new array where each price includes 5% tax. Keep the original array
// unchanged.
// Given data:
// let prices = [100, 250, 400, 800];
// Expected output (format may vary slightly):
// Original prices: [100, 250, 400, 800]
// Prices with tax: [105, 262.5, 420, 840]

// let prices = [100, 250, 400, 800];

// let pricesWithTax = prices.map(n => n * 1.05);

// console.log("Original prices:", prices);
// console.log("Prices with tax:", pricesWithTax);


// 3. filter() — Find Passing Marks (5 marks)
// Use filter() to create a new array containing only marks greater than or equal to 40.
// Given data:
// let marks = [32, 76, 45, 28, 90, 39, 61];
// Expected output (format may vary slightly):
// Passing marks: [76, 45, 90, 61]
// let marks = [32, 76, 45, 28, 90, 39, 61];
// passingmarks=marks.filter(n=>n>=40)
// console.log(passingmarks)
// 4. find() — Find a Specific Student (5 marks)
// Use find() to find the first student whose name is "Nila". Print the matching student object. If no student is found,
// print "Student not found".
// Given data:
// let students = [{name: "Asha", mark: 78}, {name: "Nila", mark: 91}, {name: "Ravi", mark:
// 66}];
// Expected output (format may vary slightly):

// JavaScript Lab Practical Homework Page 2
// Found student: { name: "Nila", mark: 91 }
// let students = [{name: "Asha", mark: 78}, {name: "Nila", mark: 91}, {name: "Ravi", mark:
// 66}];
// foundStudent=students.find(student=>student.name=="nila");
// if (foundStudent) {
//     console.log("Found student:", foundStudent);
// } else {
//     console.log("Student not found");
// }
// 5. some() and every() — Check Scores (5 marks)
// Use some() to check whether at least one mark is below 35. Then use every() to check whether all marks are 35 or
// above.
// Given data:
// let marks = [55, 72, 29, 84, 41];
// Expected output (format may vary slightly):
// Any mark below 35? true
// All marks are 35 or above? false


// let marks = [55, 72, 29, 84, 41];

// let hasLowMark = marks.some(mark => mark < 35);
// let allPassed = marks.every(mark => mark >= 35);

// console.log("Any mark below 35?", hasLowMark);
// console.log("All marks are 35 or above?", allPassed);

// 6. reduce() — Calculate Total Cart Value (5 marks)
// Use reduce() to calculate the total value of all items in the cart.
// Given data:
// let cartPrices = [299, 150, 450, 100];
// Expected output (format may vary slightly):
// Total cart value: 999

// let cartPrices = [299, 150, 450, 100];

// let total = cartPrices.reduce((sum, price) => sum + price, 0);

// console.log("Total cart value:", total);

// 7. sort() — Sort Numbers and Names (5 marks)
// Sort the numbers in ascending numeric order and the names in alphabetical order. Remember that the default
// numeric sort is not a numeric sort unless a comparison function is supplied.
// Given data:
// let numbers = [40, 5, 100, 25, 9];
// let names = ["Zara", "Akhil", "Meera", "Binu"];
// Expected output (format may vary slightly):
// Sorted numbers: [5, 9, 25, 40, 100]
// Sorted names: ["Akhil", "Binu", "Meera", "Zara"]

// let numbers = [40, 5, 100, 25, 9];
// let names = ["Zara", "Akhil", "Meera", "Binu"];

// numbers.sort((a, b) => a - b);
// names.sort();

// console.log("Sorted numbers:", numbers);
// console.log("Sorted names:", names);

// 8. Objects — Create and Update a Student (10 marks)
// Create a student object with the properties name, age, course, and isPassed. Print the student's name using dot
// notation and age using bracket notation. Then update the age, add a city property, delete isPassed, and print the
// final object.
// Given data:
// // let student = { name: "Asha", age: 20, course: "JavaScript", isPassed: true };
// // Expected output (format may vary slightly):
// // Name: Asha
// // Age: 20
// // Final object: { name: "Asha", age: 21, course: "JavaScript", city: "Kochi" }

// let student = {
//     name: "Asha",
//     age: 20,
//     course: "JavaScript",
//     isPassed: true
// };

// console.log("Name:", student.name);
// console.log("Age:", student["age"]);

// student.age = 21;
// student.city = "Kochi";
// delete student.isPassed;

// console.log("Final object:", student);
