//  Lab Practicals — while Loop
// 
// Question 1
// Print numbers from 1 to 10 using a while loop.

// let i=1;
// while (i<=10){
//     console.log(i);
//     i++;
// }
// Question 2
// Print numbers from 10 down to 1.

// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }
// Question 3
// Print all even numbers from 2 to 20.

// let i=2;
// while(i<=20){
//     console.log(i);
//     i+=2;

// }

// Question 4
// Calculate the sum of numbers from 1 to 10.
// let i=1;
// let sum=0;
// while(i<=10){
//     sum=sum+i;
//     i++;

// }
// console.log("sum=",sum)
// Question 5
// Calculate the sum of all odd numbers from 1 to 15.
// let i=1;
// let sum=0;
// while(i<=15){
//     sum=sum+i;
//     i+=2;
// }
// console.log("sum=",sum)
// Question 6
// Display the multiplication table of a number entered by the user.

// let num = number(prompt("Enter a number:"));
// let i = 1;

// while (i <= 10) {
//     console.log(num + " x " + i + " = " + (num * i));
//     i++;
// }
// Question 7
// Count how many digits are in a positive integer. Handle 0 as a one-digit number.


// Question 8
// // Calculate the factorial of a positive integer.
// let num = Number(prompt("Enter a number:"));
// let i = 1;
// let fact = 1;

// while (i <= num) {
//     fact = fact * i;
//     i++;
// }

// console.log("Factorial =", fact);
// Question 9
// Reverse the digits of a positive integer. Example: 1234 becomes 4321.
// Question 10
// Keep asking the user to enter a number until they enter 0, then display the sum of the non-zero numbers.



// Lab Practicals — for Loop
// Question 1
// Print numbers from 1 to 20 using a for loop.
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// Question 2
// Print numbers from 20 down to 1.
// for (let i = 20; i >= 1; i--) {
//     console.log(i);
// }

// Question 3
// Print all odd numbers from 1 to 25.
// for (let i = 1; i <= 25; i += 2) {
//     console.log(i);
// }
// Question 4
// Print the multiplication table of 7 from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//     console.log("7 x " + i + " = " + (7 * i));
// }

// Question 5
// Calculate the sum of numbers from 1 to 100.
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }

// console.log("Sum =", sum);
// Question 6
// Calculate the factorial of a number entered by the user.
// let num = Number(prompt("Enter a number:"));
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//     fact = fact * i;
// }

// console.log("Factorial =", fact);
// Question 7
// Count how many numbers between 1 and 50 are divisible by 3.

// let count = 0;

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         count++;
//     }
// }

// console.log("Count =", count);
// Question 8
// Print this pattern using a nested for loop: one star on the first line, two on the second, and three on the third.
// Question 9
// Print a 5 by 5 square of stars using nested for loops.
// Question 10
// Given an array of numbers, use a for loop with an index to find the largest value without using Math.max().


// Lab Practicals — for...of Loop
// Question 1
// Create an array of five fruit names and print each fruit using for...of.loop

// let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }
// // Question 2
// // Create an array of five numbers and calculate their sum.

// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let num of numbers) {
//     sum = sum + num;
// }

// console.log("Sum =", sum);
// // Question 3
// // Given an array of numbers, count how many are even.
// let numbers = [10, 15, 20, 25, 30, 35];
// let count = 0;

// for (let num of numbers) {
//     if (num % 2 === 0) {
//         count++;
//     }
// }

// console.log("Even numbers =", count);
// // Question 4
// // Given an array of marks, count how many marks are 50 or above.
// let marks = [45, 60, 75, 30, 50, 90];
// let count = 0;

// for (let mark of marks) {
//     if (mark >= 50) {
//         count++;
//     }
// }

// console.log("Passed students =", count);
// Question 5
// Find the largest number in an array using for...of without Math.max().
// let numbers = [25, 80, 45, 100, 60];
// let largest = numbers[0];

// for (let num of numbers) {
//     if (num > largest) {
//         largest = num;
//     }
// }

// console.log("Largest number =", largest);
// Question 6
// Create an array of names and print each name in uppercase.

// Question 7
// Use for...of to print each character in a word on a separate line.
// Question 8
// Accept a word and count the vowels using for...of.
// Question 9
// Given an array of prices, calculate the total and average price.
// Question 10
// Given an array of numbers,



// Lab Practicals — for...in Loop
// Question 1
// Create a student object with name, age, and course. Display every key using for...in.
// let student = {
//     name: "Anu",
//     age: 23,
//     course: "Python"
// };

// for (let key in student) {
//     console.log(key);
// }
// Question 2
// Create an employee object and display each property name and value.
// let employee = {
//     name: "Rahul",
//     age: 25,
//     salary: 20000,
//     department: "IT"
// };

// for (let key in employee) {
//     console.log(key + " : " + employee[key]);
// }
// Question 3
// Create a marks object with three subjects and calculate the total marks.

// let marks = {
//     English: 80,
//     Maths: 75,
//     Science: 90
// };

// let total = 0;

// for (let subject in marks) {
//     total = total + marks[subject];
// }

// console.log("Total marks =", total);

// Question 4
// Create an expense object with five categories and calculate the total expenses.

// let expenses = {
//     Food: 2000,
//     Travel: 1000,
//     Shopping: 1500,
//     Rent: 5000,
//     Bills: 500
// };

// let total = 0;

// for (let category in expenses) {
//     total = total + expenses[category];
// }

// console.log("Total expenses =", total);

// Question 5
// Create a product object with name, price, and stock. Display each key and value.
// let product = {
//     name: "Laptop",
//     price: 35000,
//     stock: 10
// };

// for (let key in product) {
//     console.log(key + " : " + product[key]);
// }
// Question 6
// Create a student marks object and display Pass or Fail for each student (pass mark: 50).
// Question 7
// Count the number of properties in an object using for...in.
// Question 8
// Create a car object with brand, model, year, and color. Display a formatted report.
// Question 9
// Create an object containing three item names and their prices. Find the most expensive item using for...in.
// Question 10
// Create a weekly temperature object with days as keys and temperatures as values. Display each day and temperature, and
// calculate the average temperature.
