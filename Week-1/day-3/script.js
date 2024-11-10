// function showMessage() {
//     alert('Hello, World!');
// }

// console.log('Hello, World!');

// var name = 'John';
// console.log(name);
// {
//     name = 'aryan';
//     console.log(name);
//     name = 'aayushman';
//     console.log(name);
//     name = 'muskan';
//     console.log(name);
// }
// console.log(name);

// let test = 'John';
// console.log(test);
// {
//    let test = 'aryan';
//     console.log(test);

// }
// console.log(test);

// const student = 'mona';
// console.log(student);
// student = 'sona';
// console.log(student);

// const pi = 3.1416;

// let data1 = 10;
// let data2 = "hello";
// let data3 = true;
// let data4 = null;
// let data5;


// console.log(typeof data1);
// console.log(typeof data2);
// console.log(typeof data3);
// console.log(typeof data4);
// console.log(typeof data5);

// Arthemetic Operators

// let x = 10;
// let y = 3;
// console.log(x + y); // 13
// console.log(x - y); // 7
// console.log(x * y); // 30
// console.log(x / y); // 3.3333
// console.log(x % y); // 1 (remainder of 10 / 3)

// Assignment Operator

// let score = 10;
// score += 5; // Same as score = score + 5
// console.log(score); // 15

// Comparison operator

// console.log(5 == "5"); // true (loose comparison)
// console.log(5 === "5"); // false (strict comparison)
// console.log(10 >= 10); // true

// let a = true;
// let b = false;
// console.log(a && b);// false
// console.log(a || b); // true
// console.log(!a); // false

// let temp = 25;

// if (temp > 25) {
//     console.log('It is hot outside');
// } else if (temp < 25) {
//     console.log('It is cold outside');
    
// }else if (temp < 25) {
//     console.log('It is cold outside');
    
// }else if (temp < 25) {
//     console.log('It is cold outside');
    
// }else if (temp < 25) {
//     console.log('It is cold outside');
    
// } else {
//     console.log('It is moderate outside');
// }

// Electric bill calculation

// function calculateElectricityBill(units) {
//     let bill = 0;

//     if (units <= 100) {
//         bill = units * 5;
//     } else if (units <= 200) {
//         bill = (100 * 5) + ((units - 100) * 7);
//     } else {
//         bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
//     }

//     return bill;
// }

// let units = 192;  
// console.log("The electricity bill is: $" + calculateElectricityBill(units));

// Switch Statement

// let day = 'sat';

// switch (day) {
//     case 'mon':
//         console.log('Today is Monday');
//         break;
//     case 'tue':
//         console.log('Today is Tuesday');
//         break;
//     case 'wed':
//         console.log('Today is Wednesday');
//         break;
//     case 'thu':
//         console.log('Today is Thursday');
//         break;
//     case 'fri':
//         console.log('Today is Friday');
//         break;
//     case 'sat':
//         console.log('Today is Saturday');
//         break;
//     case 'sun':
//         console.log('Today is Sunday');
//         break;
//     default:
//         console.log('Invalid day');
// }

// For Loop

// for (let i = 0; i < 5; i++) {
//     console.log(` value of ${i} is ${i} `);
// }

// let count = 11;
// while (count <= 10) {
//    console.log("Count:", count);
//    count++;
// }

// do {
//    console.log("Count:", count);
//    count++;
// } while (count <= 5);

//Funtion
// function greet(){
//     console.log('Hello, World!');
// }

// greet(); // Hello, World!
// greet();
// greet();
// greet();
// greet();

// Funtion with parameter
// function greet(name, name2, name3){
//     console.log('Hello, ' + name + ' ' + name2 + ' ' + name3);
// }

// greet('mona','mayur','aryan'); // Hello, mona

// Function Expression
// const greet = function(name){
//     console.log('Hello, ' + name);
// }

// greet('aryan'); // Hello, aryan

// Arrow Function

// const add = (a, b) => {
//     console.log(a + b);
// }

// const add1 = (a, b) => a + b;

// add(10, 20); // 30
// console.log(add1(10, 20)); // 30

// let data = 'shakil';

// function greet(){
//     let data = 'aryan';
//     console.log(data);
// }
// greet();
// console.log(data);

// var data = 'shakil';

// function greet(){
//      data = 'aryan';
//     console.log(data);
// }
// greet();
// console.log(data);

// function greet(){
//     var data = 'aryan';
//     console.log(data);
// }
// greet();
// console.log(data);

// function heelo(){
//     let naam = 'ayushman';

//     function greet(){
//         console.log(naam);
//     }
//     return greet;
//     console.log('Hello, World!');
// }
// const sayHello = heelo();
// sayHello(); // ayushman

// This keyword

// console.log(this); // Window object

// const person = {
//     naam: 'mona',
//     greet(){
//         console.log("hello "+ this.naam);
//     }
// }

// person.greet(); // hello mona

// let shakil = {
//     name: 'shakil',
//     age: 21,
//     university: 'LPU',
//     data: {
//         city: 'lucknow',
//         state: 'UP',
//         greet(){
//             console.log('Hello, ' + this.city);
//         }
//     }
// }

// shakil.data.greet(); // Hello, shakil