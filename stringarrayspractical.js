// Part A — String Basics and Access
// 1. Personal Name Profile — Store your full name in a string. Display its length, first character, last character,
// uppercase version, and lowercase version.
// let s="sanika sumesh";
// console.log(s.length)
// console.log(s[0])
// console.log(s[-1])
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())

// 2. Clean User Input — Given a string with spaces before and after it, use trim() to remove the extra spaces. Print
// both the original and cleaned values to show whether the original changed.

// let a=" sanikasumesh ";
// // console.log(a);
// // console.log(a.trim());

// 3. Initials Generator — Given a first name and surname, display the initials in uppercase. Example: "maya nair"
// // should produce "MN".

// let firstName = "sanika";
// let surname = "sumesh";

// let initials =
//     firstName[0].toUpperCase() +
//     surname[0].toUpperCase();

// console.log("Initials:", initials);

// 4. Extract a Word — Given "JavaScript is fun to learn", use slice() or substring() to extract
// "JavaScript" and "fun".

// let word="javasript is fun to learn"
// console.log(word.slice(0,10));
// console.log(word.slice(13,17));

// Part B — String Searching and Modification
// 5. Email Text Check — Ask for an email string and check whether it contains "@" using includes(). Display a
// suitable message. This is a basic check, not full email validation.

// let email = prompt("Enter your email:");

// if (email.includes("@")) {
//     console.log("Email contains @");
// } else {
//     console.log("Email does not contain @");
// }
// 6. Find a Word — Given a sentence, use indexOf(), startsWith(), and endsWith() to report whether a chosen
// word or phrase appears at the required position.

// let sentence = "JavaScript is fun to learn";
// let word = "JavaScript";

// console.log("Index:", sentence.indexOf(word));
// console.log("Starts with word:", sentence.startsWith(word));
// console.log("Ends with word:", sentence.endsWith("learn"));
// 7. Replace a Word — Given a sentence containing the word "bad", replace the first occurrence with "good" using
// replace(). Print the original and modified strings.
//  let a="good girl"
// console.log(a.replace('good','bad'))

// 8. Word Counter — Use split(" ") to turn a sentence into an array of words and display the number of words.
// Consider how repeated spaces affect your result.
// let sentence = "JavaScript is fun to learn";

// let words = sentence.split(" ");

// console.log("Words:", words);
// console.log("Word count:", words.length);
// 9. Repeat a Pattern — Use repeat() to display a line or pattern, such as "* " repeated 10 times. Then create a
// simple 3-line pattern using loops.
// console.log("* ".repeat(10));

// for (let i = 1; i <= 3; i++) {
//     console.log("* ".repeat(5));
// }

// Part C — Array Basics and Updating
// 10. Student Marks — Create an array containing five marks. Display the first mark, last mark, array length, and the
// // mark at index 2. Then update one mark and print the array.
// let marks = [75, 80, 65, 90, 85];

// console.log("First mark:", marks[0]);
// console.log("Last mark:", marks[marks.length - 1]);
// console.log("Array length:", marks.length);
// console.log("Mark at index 2:", marks[2]);

// marks[2] = 70;

// console.log("Updated marks:", marks);


// 11. Shopping List — Create an array of at least four items. Add one item to the end using push(), remove the last
// item using pop(), add an item at the beginning using unshift(), and remove the first item using shift(). Print the
// array after every operation.
// let shoppingList = ["Milk", "Bread", "Eggs", "Rice"];

// console.log("Original Array:", shoppingList);

// Add item at the end
// shoppingList.push("Sugar");
// console.log("After push():", shoppingList);

// // Remove last item
// shoppingList.pop();
// console.log("After pop():", shoppingList);

// // Add item at the beginning
// shoppingList.unshift("Apple");
// console.log("After unshift():", shoppingList);

// // Remove first item
// shoppingList.shift();
// console.log("After shift():", shoppingList);
// 12. Search for an Item — Given an array of colours or fruits, use includes() and indexOf() to check whether a
// chosen item exists and find its index.

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let searchItem = "Mango";

// console.log("Item exists:", fruits.includes(searchItem));
// console.log("Item index:", fruits.indexOf(searchItem));
// 13. Slice vs Splice — Create an array of six numbers. Use slice() to copy a portion, print the original array, then
// use splice() to remove two items and print the original array again. Explain the difference.
// let numbers = [10, 20, 30, 40, 50, 60];

// Copy a portion
// let copiedNumbers = numbers.slice(1, 4);

// console.log("Copied Array:", copiedNumbers);
// console.log("Original after slice():", numbers);

// // Remove two items starting from index 2
// numbers.splice(2, 2);

// console.log("Original after splice():", numbers);
// 14. Join Array Items — Create an array of words and use join(" ") to combine them into a sentence. Also join a
// list of names using ", " as the separator.
// let words = ["JavaScript", "is", "easy", "to", "learn"];

// let sentence = words.join(" ");

// console.log("Sentence:", sentence);

// let names = ["Anu", "Ammu", "Riya", "Meera"];

// let joinedNames = names.join(", ");

// console.log("Names:", joinedNames);

// JavaScript Strings & Arrays — Homework and Lab Practical Page 2
// Part D — Array Processing and Sorting
// 15. Manual Double Values — Given an array of numbers, create a new array containing each number doubled using
// a for loop and push(). Do not use map().
// 16. Manual Filter — Given an array of numbers, create a new array containing only values greater than 10 using a
// loop and an if statement. Do not use filter().
// 17. Find the Largest Number — Find the largest value in a numeric array using a loop. Do not use
// Math.max(...array) or sort().
// 18. Sort Marks — Sort an array of numeric marks in ascending order using sort((a, b) => a - b). Then sort in
// descending order and explain why plain sort() may not sort numbers as expected.
// 19. Array Summary — Using loops and basic array access, calculate the total and average of an array of marks. Also
// count how many marks are at least 50.