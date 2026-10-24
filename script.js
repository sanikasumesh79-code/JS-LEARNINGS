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

// // for (let k in company){
// //     // console.log(k)
// //     // console.log(company[k])

// //     console.log("Key:",k,"value:",company[k])
// // }


// // functions in javascript
// function greet() {

// console.log("Hello, Student!");

// }

// greet();


// Parameters and Default Values


// function add(a, b) {

// console.log(a + b);

// }

// add(5, 3);

// add(10, 20);

// returning a value


// function square(n) {

// return n * n;

// }

// let result = square(4);

// console.log(result);

// nb:without return a value avde undefined enn kaanikum

// function add(a, b) {

// a + b; // no return!

// }

// console.log(add(2, 3)); // undefined

// function declaration with const

// const multiply = function (a, b) {

// return a * b;

// };

// console.log(multiply(4, 5));
 


// lambda functione aahn aarow function enn prayunnath

// const add=(a,b)=>{
//     return(a+b)
// }
// console.log(add(20,30));                               retrun cheythal console cheyyanam allell variable store cheyyanam


// const greet=()=>{"hello"};

// console.log(greet())

// ...curly brces kodthal return kodkkanam allell undefined enn kaanikkum

// higher order functions
// function calculate (a,b,func){
//     return func(a,b)//add(30,50)//func ennath oru parameter ahn
// }
// const add =(a,b)=>a+b;
// const multiply=(x,y)=>x*y;
// console.log(calculate(30,50,add))
// console.log(calculate(30,50,multiply))
////


// Write an arrow function that returns the
// larger of three  numbers.

// const largest=(a,b,c)=>{
//     if(a>b&&a>c){
//         return "largest number is"+a
//     }
//     else if(b>a&&b>c){
//         return "largest number is"+b
//     }
//     else{
//         return"largest number is"+c
//     }

    
// }
// console.log(largest(20,30,50))


// popup boxes
// 1...alert onclick kodkkum script vayi
// 2...confirm ====ok and cancel====true or false return cheyth kittum
// 3...prompt====vayi kittunnath string aayirkkum.....

// sname=prompt("enter your name:")
// console.log(sname)
// console.log(typeof sname)
// let age=Number(prompt("enter your age:"))
// console.log(age)
// console.log(typeof age)


// write a javascript program using an arrow function named calculatearea()that accepts the length and width of
// rectangle and return its area
// let length= Number(prompt("enter a length:"))
// let width=Number(prompt("enter a width:"))
// const calculatearea=(a,b)=>{
//     return a*b
// }
// console.log(calculatearea(length,width))

// odd or even
// let a=Number(prompt("enter a number:"))
// const oddoreven=(a)=>{
//     if (a==0){
//         return "a is zero"
//     }
//     else if(a%2==0){
//         return "a is even"

//     }
//     else{
//         "a is odd"
//     }
// }
// console.log(oddoreven(a))

// strings in javascript
//immutable
//indexing


// let stack="python python";
// // console.log(stack[-2])//undefined ///javascriptl negtive indexing illah....
// // console.log(stack[2])

// ///includes ///....oru iterable string indon nokkan
// console.log(stack.includes("Y"))//FLASE BEACAUSE CASESENSITIVE AHN

// ///indexof///
// console.log(stack.indexOf('t'))
// //illathe value kodthal -1
// console.log(stack.lastIndexOf('p'))//occurence of lastindex
// console.log(stack.startsWith('py'))///phonenumber+91
// console.log(stack.endsWith('on'))///email

// /////extracting and changing strings///////////////
// slicing ending position included alla,negative index illah..
// console.log(stack.slice(2,20));
// let newstack=stack.replace('python','java')
// console.log(newstack)
// let newstack=stack.replaceAll('python','java')
// console.log(newstack)

// console.log(stack.split())
// console.log(stack.split('y',1))
// console.log(stack.toUpperCase())
// console.log(stack.toLowerCase())

// substring//
// console.log(stack.substring(6))
// console.log(stack.substring(6,9))
// console.log(stack.substring(6,-2))

// let s="sanika";
// console.log(s.length)
// console.log(s.toUpperCase())

// let email="sanika@gmail.com"
// console.log(email.includes('@gmail.com'))
// console.log(email.endsWith('@gmail.com'))

// let a="good girl"
// console.log(a.replace('good','bad'))

// let s="sanika"
// console.log(s.slice(3))

//array//single variable multiple values store cheyyam
// //collection of muliple datatypes//so its a hetrogenous

// let students=['navaneetha','nidhu','sanika','ziyu',[200,300]]
// console.log(students.length)
// console.log(typeof students)
// console.log(students[4][1])

// console.log(students[2])

// students.push('sayana')//last index add cheyum

// // students.pop(0)///last index remove
// // students.unshift(5)//muliple values 1st indexilek addavum
// // students.shift//first index values remove
// // console.log(students)

// // console.log(students.includes('sanika'))
// // console.log(students.indexOf('ziyu'))
// // console.log(students.indexOf(120))
// // console.log(students.slice(-1))
// // console.log(students.slice(2,3))


// // slice////remove value in a  specified index 

// // console.log(students.slice(1,4))

// // let s=students.join('-')//join(),join(" ")
// // console.log(s)

// // Map()//do these to every item//function elle elements aayitt apply cheyyum
// // nums=[2,3,5,6,7,8,9]
// // doubled=nums.map(n=>n*2)
// // console.log(doubled)
// // square=nums.map(n=>n**2)
// // console.log(square)
// // filter() oru condition kodkkum ath ellathilum apply
// // even=nums.filter(n=>n%2==0)
// // console.log(even)

// // nums.foreach(element=>{
// //     console.log(element)

// // });
// // oroo elementsum display cheyyanam

// // nums.foreach((Element,index)=>{
// //     console.log(index,Element)
// // });
// // arrays=>find,some,every,reduce,sort
// // /some or/any function equal ahn...

// // nums=[20,30,40,50,60,70,80,90]

// // console.log(nums.find(n=>n>50))....oru iterable first element ath match aavunne
// // console.log(nums.some(n=>n>50)).....atleast one item

// // console.log(nums.every(n=>n>50))....and or all equal ahn

// // reduce=listle ella elementsile sum kanan ahn reduce use cheyyunnath....
// // console.log(nums.reduce((sum,n)=>sum+n,0))
// //return single value or one combined value
// // console.log(nums.reduce((product,n)=>product*n,1))

// // nums=[20,13,45,62,45,67,8,9]
// // console.log(typeof nums[0])

// // console.log(nums.sort());     ...numbersineyum string aayittan 
// // students=['sanika','ziyu','navaneetha','nidhu','nivin']
// // console.log(students.sort());

// // console.log([10,9,1].sort());
// // console.log([10,9,1].sort((a,b)=>a-b));
// // console.log([10,9,1].sort((a,b)=>b-a));//descending order

// let marks = [75, 80, 65, 90, 85];
// console.log(marks[0]);
// console.log(marks[marks.length-1]);
// console.log(marks+','+20);
// console.log(marks.push())
// console.log(marks.pop());

// let number=[1,2,3,4];
// nums=number.map(m=>m*2);
// console.log(nums);

// add 
// students={
//     name:'ziyu',
//     age:22,
//     place:'calicut',
//     isgraduated:'true'

// }
// console.log(typeof students)
// console.log(students['place'])

// for(let key in students){
//     console.log(key+":"+students[key])
//     console.log(students[key])
// }

// update a keyvalue pair
// students.age=24
// console.log(students)
// students['age']=19
// console.log(students)

// students.phone=7736210541
// console.log(students)
// students['email']='sanika@123'
// console.log(students)

// delete a keyvaluepair
// delete students.isgraduated
// console.log(students)
// delete students['age']
// console.log(students)