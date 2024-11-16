// Parent class
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(`${this.name} is eating.`);
//     }
// }

// // Child class
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Calls the parent class constructor
//         this.breed = breed;
//     }

//     bark() {
//         console.log(`${this.name} is barking! Woof Woof!`);
//     }
// }

// // Usage example
// const myDog = new Dog("Buddy", "Golden Retriever");

// myDog.eat(); // Inherited from Animal class
// myDog.bark(); // Defined in Dog class

// console.log(`${myDog.name} is a ${myDog.breed}.`); // Accessing properties

// function hello() {
//     console.log("Hello World!");
// }

// hello();

// const student = function() {
//     console.log("Student is studying.");
// }

// student();

// const ishita = () => {
//     console.log("Ishita is coding.");
// }
// ishita();

// function car(make, model,year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }

// let camry = new car('Toyota', 'Camry', 2020);
// console.log(camry);

// car.prototype.getInfo = function() {
//     return `${this.make} ${this.model} ${this.year}`;
// }

// console.log(camry.getInfo());

// let numbers = ['shakil','sam','kaur','ishita',];

// let newArr = numbers.reverse();
// console.log(newArr);
// console.log(numbers);

// Asynchronous JavaScript

// {
//     Console.log(1);
//     Console.log(2);
//     Console.log(3);
//     Console.log(4);
//     Console.log(5);    
// }

// {
//     Console.log(1);
//     Console.log(2);
//     Console.log(3);
//     Console.log(4);
//     Console9.log(5);    
// }


// setTimeout(() => {
    //     console.log('Hello World!');
    // }, 4000);
    
    // Callbacks, Promises, then, async/ await
    
    // function tostBanano(callback){
        //     console.log('Tost ban raha hai!');
        //     setTimeout(() => {
            //         console.log('Tost ban gaya!');
            //         callback();
            //     }, 2000);
            // }
            
            // tostBanano(() => {
                //     console.log('Tost kha lo!');
                // });
                
                // Passing function inside function is called callback function
                
                // function calc(data,n1,n2){
                    //     console.log('Calculating...');
                    //     let work = data(n1,n2);
                    //     console.log(work);  
                    // }
                    
                    // function add(a,b){
                        //     return a+b;
                        // }
                        
                        // function sub(a,b){
                            //     return a-b;
                            // }
                            
                            // calc(add, 5, 3);
                            
                            // function firstTask(callback) {
                                //     setTimeout(() => {
                                    //         console.log('First task completed');
                                    //         callback();
                                    //     }, 1000);
                                    // }
                                    
                                    // function secondTask(callback) {
                                        //     setTimeout(() => {
                                            //         console.log('Second task completed');
                                            //         callback();
                                            //     }, 1000);
                                            // }
                                            
                                            // function thirdTask(callback) {
                                                //     setTimeout(() => {
                                                    //         console.log('Third task completed');
                                                    //         callback();
                                                    //     }, 1000);
                                                    // }
                                                    
                                                    // function fourthTask(callback) {
                                                        //     setTimeout(() => {
                                                            //         console.log('Fourth task completed');
                                                            //         callback();
                                                            //     }, 1000);
                                                            // }
                                                            
                                                            // firstTask(() => {
                                                                //     secondTask(() => {
                                                                    //         thirdTask(() => {
                                                                        //             fourthTask(() => {
                                                                            //                 console.log('All tasks completed');
                                                                            //             });
//         });
//     });
// });

// Promises in js - fullfil, reject, pending

// function data(){
// console.log('Hello World!');
// let data = fetch('http://localhost:3000/');
// console.log(data);
// console.log(data[1]);
// console.log('byeworld');
// }

// data();

// function makeToast() {
//     return new Promise((resolve, reject) => {
//         console.log("Putting bread in the toaster...");
//         setTimeout(() => {
//             let success = false; // Change to false to simulate failure
//             if (success) {
//                 resolve("Toast is ready!");
//             } else {
//                 reject("Toaster broke!");
//             }
//         }, 2000);
//     });
// }

// makeToast().then(message => {
//     console.log(message);
//     console.log("Now I'll put butter on the toast.");
// })
// .catch(error => {
//     console.log(error);
// });


// setTimeout(function(){
    //     console.log('Aryan khayega!');
    // }, 10000);
    
    
    // let c = 5;
    // try {
        //     console.log("Result:", c);
        //     console.log("Result:", d);
        // } catch (error) {
            //     console.log("Error:", error.message);
            // }
            
            // setTimeout(() => {
                //     console.log("Result:", c);
                // }, 5000);
                
                // Async Await
//                 function maggi(){
//                     return new Promise((resolve, reject)=>{
//                         console.log('Maggi bana raha hai!');
//                         setTimeout(() => {
//                             let smell = 'a';
//                             if(smell == 'a'){
//                                 resolve('Maggi ban gaya!');
//                             }else if(!smell == 'b'){
//                                 reject('maggi kharab ho gya!');
//                             }else{
//                                 reject('Induction kharab ho gya!');
//                             }},5000);
//                     })
//                 }
                
// async function snaks(){
//     try {
//         console.log('Are u excited to taste!');
//         const data = await maggi();
//         console.log(data);
//         console.log('Socho mt khalo!');

//     } catch (error) {
//         console.log('Error:', error.message); 
//     }
// }

// snaks();

// async function shakilKeStudent(){
//     try {
//     console.log('These are shakil students!');   
//     let data = await fetch('http://localhost:3000/');
//     let students = await data.json();
//     let data2 = JSON.stringify(students);
//     console.log(students);
//     let div = document.querySelector('#students');
//     div.textContent = data2;
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }

//Modules - import and export

// import { shakil, add, sub } from './shakil.js';
// const { shakil, add, sub } = require('./shakil.js');

// console.log(shakil);
// console.log(add(5, 3));
// console.log(sub(5, 3));

// import leela from './ayushman.js';
// // const leela = require('./ayushman.js');

// console.log(leela('Aryan'));

// import { batman } from './ayushman.js';

// console.log(batman('Aryan'));

// import { mayur } from './shakil.js';
// console.log(mayur);

// localStorage.setItem('name', 'shakil');
// localStorage.setItem('age', 24);
// localStorage.setItem('location', 'lpu');

// const userName = localStorage.getItem('name');
// const age = localStorage.getItem(age);
// const location = localStorage.getItem('location');

// console.log(userName);
// console.log(age);
// console.log(location);

// let a = {
//     "name": 'shakil',
//     "age": 24,
//     "location": 'lpu'
// }

// console.log(a);
// const obj = JSON.stringify(a);
// console.log(obj);