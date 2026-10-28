// Part A — Variables and Types (6 marks)
// 1. Declare a variable studentName with the type string and assign your name. (1 mark)

// ans:
// let studentname:string="sanika";
// console.log(studentname);

// 2. Declare studentAge as a number and isEnrolled as a boolean. Assign suitable values. (2 marks)

// ans:

// let studentAge:number=23;
// let isEnrolled:boolean=true;
// console.log(studentAge);
// console.log(isEnrolled);

// 3. Declare a variable with an explicit type and another variable that uses type inference. Print both values. (2 marks)
// ans:

// let city: string = "Kozhikode";
// let course = "TypeScript";

// console.log(city);
// console.log(course);

// 4. In one comment, explain the difference between explicit typing and type inference. (1 mark)
// ans:
//  Explicit typing: We specify the type manually.
// Type inference: TypeScript automatically identifies the type.

// Part B — Special Types (6 marks)
// 5. Declare a variable using any. Assign a string to it, then assign a number and print the value after each assignment.
// (2 marks)
// ans:

// let value:any="sanika";
// console.log(value);
// value=100;
// console.log(value)

// 6. Declare a variable of type unknown and assign it a string value. Show a safe way to check its type before using a
// string method or printing it as a string. (2 marks)

// ans:

// let data:unknown="welcome to typescript";
// if (typeof data==="string"){

//     console.log(data.toUpperCase())
// }

// 7. Create one variable whose value is null and another variable that demonstrates undefined. Print both values. (2
// marks)

// ans:

// let null_value:null=null;
// let undefined_value:undefined=undefined;
// console.log(null_value);
// console.log(undefined_value);

// Part C — Arrays (8 marks)
// 8. Create a string array named subjects containing: TypeScript, HTML, CSS and JavaScript. Print the complete
// array. (2 marks)

// ans:

// let subjects:string[]=["TypeScript", "HTML","CSS" ,"JavaScript"];
// console.log(subjects);

// 9. Create a number array named marks containing 75, 82, 68, 90 and 77. Print the first and last elements. (2 marks)

// ans:
// let marks:number[]=[75,82,68,90,77];
// console.log(marks[0]);
// console.log(marks[marks.length -1]);
// 10. Add one more subject to the subjects array using an array method, then print the updated array. (2 marks)
// ans:
//  let subjects:string[]=["TypeScript", "HTML","CSS" ,"JavaScript"];
// console.log(subjects);
// subjects.push("Python");
// console.log(subjects);
// 11. Print the number of elements in the marks array. (2 marks)
// ans:
// let marks:number[]=[75,82,68,90,77];
// console.log(marks.length);
// Part D — Tuples (10 marks)
// 12. Create a tuple named student with the type [string, number]. Store a student name and age, then print both
// values using their indexes. (3 marks)
// ans:

// let student: [string, number] = ["Anu", 23];

// console.log(student[0]);
// console.log(student[1]);
// 13. Create a tuple named product with the type [number, string, number], representing product ID, product name
// and price. Assign suitable values and print each item. (3 marks)
// ans:

// let product: [number, string, number] = [101, "Laptop", 35000];

// console.log(product[0]); 
// console.log(product[1]); 
// console.log(product[2]);
// 14. Declare a tuple for an employee using the type [number, string]. Assign an employee ID and name in the correct
// order. Add a comment showing an example of an incorrect order that TypeScript should reject. (2 marks)
// let employee:[number,string]=[123,'sanika'];
//incorrect order that TypeScript should reject
// 15. In two or three sentences, explain one difference between an array and a tuple. (2 marks)
// An array can store multiple values of the same type, such as number[].
// A tuple stores values in a specific order with predefined types for each position, such as [string, number].