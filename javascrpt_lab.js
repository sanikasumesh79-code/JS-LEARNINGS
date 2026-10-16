// JavaScript Lab Practical Questions


// Question 1: Print Numbers

// Write a JavaScript program using a "while" loop to print numbers from 1 to 5.

// Sample Output:

// 1
// 2
// 3
// 4
// 5



// // let i = 1;

// // while (i <= 5) {
// //     console.log(i);
// //     i++;
// // }

// Question 2: Reverse Counting

// Write a JavaScript program using a "while" loop to print numbers from 10 to 1 in reverse order.

// Sample Output:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// Question 3: Sum of Numbers

// Write a JavaScript program using a "while" loop to calculate the sum of numbers from 1 to 10.

// Sample Output:

// Sum: 55

// let i = 1;
// let sum = 0;

// while (i <= 10) {
//     sum = sum + i;
//     i++;
// }

// console.log("Sum:", sum);

// Section B: Do...While Loop

// Question 4: Print Even Numbers

// Write a JavaScript program using a "do...while" loop to print even numbers from 2 to 10.

// Sample Output:

// 2
// 4
// 6
// 8
// 10

// let i = 2;

// do {
//     console.log(i);
//     i = i + 2;
// } while (i <= 10);

// Question 5: Multiplication Table

// Write a JavaScript program using a "do...while" loop to display the multiplication table of 5 from 1 to 5.

// Sample Output:

// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25

// let i = 1;

// do {
//     console.log("5 x " + i + " = " + (5 * i));
//     i++;
// } while (i <= 5);

// Section C: For...Of Loop

// Question 6: Display Fruit Names

// Create an array containing five fruit names. Use a "for...of" loop to display each fruit.

// Sample Output:

// Apple
// Mango
// Orange
// Grapes
// Banana

// let fruits = ["Apple", "Mango", "Orange", "Grapes", "Banana"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// Question 7: Sum of Array Elements

// Create an array containing the numbers "10, 20, 30, 40, 50". Use a "for...of" loop to calculate and display their sum.

// Sample Output:

// Sum: 150

// let numbers = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let num of numbers) {
//     sum = sum + num;
// }

// console.log("Sum:", sum);

// Question 8: Display Each Character

// Create a string containing the word ""HELLO"". Use a "for...of" loop to display each character on a separate line.

// Sample Output:

// H
// E
// L
// L
// O

// let word = "HELLO";

// for (let char of word) {
//     console.log(char);
// }

// Section D: For...In Loop

// Question 9: Display Student Details

// Create an object named "student" with the properties "name", "age", and "course". Use a "for...in" loop to display each property name and its value.

// Sample Output:

// name: Rahul
// age: 20
// course: JavaScript

// let student = {
//     name: "Rahul",
//     age: 20,
//     course: "JavaScript"
// };

// for (let key in student) {
//     console.log(key + ": " + student[key]);
// }

// Question 10: Calculate Total Marks

// Create an object named "marks" containing three subjects and their marks. Use a "for...in" loop to display each subject and its mark, then calculate and display the total marks.

// Sample Output:

// English: 80
// Maths: 90
// Science: 85
// Total Marks: 255

// let marks = {
//     English: 80,
//     Maths: 90,
//     Science: 85
// };

// let total = 0;

// for (let subject in marks) {
//     console.log(subject + ": " + marks[subject]);
//     total = total + marks[subject];
// }

// console.log("Total Marks:", total);