// console.log("external javascript file loaded sucessfully");
// // a=30;
// // a="hello";
// let sname=22;
// const pie=3.14;
// console.log(pie)
// console.log(typeof(a));

// pie = 2.25
// console.log(pie)

// console.log("5"+5);

// console.log("hello");

// a=5;
// a++;
// a--;
// ++a;
// --a;
// console.log(a);



// let age=prompt("enter your age")
// if (age>=18){
//     console.log("you are eligible for vote....")
// }
// else{
//     console.log("you are not eligible")
// }

// console.log(typeof(age));

// let num=prompt("enter a number");
// if(num%2==0){
//         console.log("number is even");

// }
// else
// {
// console.log("number is odd");
// }




// let input=prompt("enter any string:")
// console.log(input)

// let result=confirm("are you sure you want to delete this file");
// console.lof(result)



// let num=prompt("enter a number");
// if(num>0){
//         console.log("number is positive");

// }
// else if (num<0)
// {
// console.log("number is negative");
// }
// else{
//     console.log("number is zero")
// }


// let a=20;
// let b=23;
// let c=56;
// if(a>b&&a>c){console.log(
//     a," is largest")

// }
// else if(b>a&&b>c)
    
// {console.log(b," is largest")

// }
// else{
//     console.log (c," is largest")
// }



// let num1=prompt("enter a number");
// let num2=prompt("enter a number");
// console.log("add",num1+num2);
// console.log("Substract",num1-num2);
// console.log("Multiplication",num1*num2);
// console.log("division",num1/num2);
  

// switch statements//

// let day=Number(prompt("enter a day b/w one and even"));
// console.log(typeof day);
// switch (day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("invalid input,please enter a number b/w one and even")
// }

// let num1=Number(prompt("enter a number"));
// let num2=Number(prompt("enter a number"));
// let symbol=prompt("enter a symbol");
// switch(symbol){
//     case "+":
//         console.log(num1+num2);
//         break;
//     case"-":
//         console.log(num1-num2);
//         break;
//     case"*":
//         console.log(num1*num2);
//         break;
//     case"/":
//         console.log(num1/num2);
//         break;
//     default:
//         console.log("invalid input,please enter a number b/w one and even")
// }

// Loops in JavaScript
// A loop in JavaScript is used to execute a block of code repeatedly until a condition is met.
// For example, instead of writing console.log() five times, we can use a loop to print numbers from 1 to 5.
// 1. Types of Loops
// JavaScript has these main types of loops:
// - for loop
// - while loop
// - do...while loop
// - for...of loop
// - for...in loop
// 2. for Loop
// A for loop is used when we know how many times we want to execute the code.
// Syntax:
// for (initialization; condition; increment) {
//     // code
// }


// Example:
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }


// Output:
// 1
// 2
// 3
// 4
// 5


// Explanation:
// - let i = 1 — starts from 1.
// - i <= 5 — continues while i is less than or equal to 5.
// - i++ — increases i by 1 after each iteration.   


// sir class

// for(let i=0;i<=20;i++){
//     console.log(i)
// }

// for (let i=20;i>=0;i--){
//     console.log(i)
// }
// let count=0;
// for(let i=0;i<=20;i++){
//     count+=2;
//     console.log(count)
// }

// for(let i=0;i<=20;i+=2){
//     console.log(i)
// }

// for(let i=0;i<=20;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// while loop
// is also called "entry controlled loop".karanam first thanne condition check cheyyunnu athin sheshme body
// of execute cheyyunnullu,,,,,increment kodthill enkil infinite aavunnu......

// let i=20;
// while (i<=20){
//     console.log(i)
//     i+=2;
// }

// do while loop,,,,,,,,,,,,,
// is also called "exist controlled loop"
// last condition kodukunna kond atleast one time enkilum body execute cheythale 
// condition work aavunnullu


// for of loop

// let student="sanika"
// for(i=0;i<student.length;i++){
//     console.log[i];
// }
// for (let i of student){
//     console.log[i];
// }
// for in loop
// oru object indavum athile keys acess cheyyan ahn use cheyyunnath..
// let company = {
//     name:'Quest',
//     place:'Calicut',
//     Course:['Python','Java','DA','DS']
// }

// console.log(company['course'])

// for (let k in company){
//     // console.log(k)
//     // console.log(company[k])

//     console.log("Key:",k,"value:",company[k])
// }




