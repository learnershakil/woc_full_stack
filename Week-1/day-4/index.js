// let fruits = ["apple", "orange", "cherry",123];
// console.log(fruits);
// let name = "John";

// console.log(fruits[2]);

// let student = ["Mona", "Ayushman", "mayur", "ishita", "Subham"];

// console.log(student[2]);
// student.push("Rahul");
// console.log(student);
// student.pop();
// console.log(student);
// student.shift();
// console.log(student);
// student.unshift("mona");
// console.log(student);
// student.unshift("Hacknet ayush");
// console.log(student);
// student[2] = "shakil";

// let even = [2, 4, 6, 8, 10];
// let double = even.map((x) => x * 2);
// console.log(double); 

// let data = even[2]*2;
// console.log(data);

// let number1 = [1,2,3,4,5,6,7,8,9,10];
// let divisibleBy3 = number1.filter((num) => num % 3 === 0);
// console.log(divisibleBy3);

// let number = [1,2,3,4,5,6,7,8,9,10];
// let sum = number.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// console.log(number.reduce());

// let number = [1,2,3,4,5,6,7,8,9,10];
// number.forEach((num) => console.log(num)); 

// let num = [1,2,3];
// let num2 = [4,5,6];

// let num3 = num.concat(num2);
// console.log(num3);

// function findExample(arr) {
//     console.log("Original Array:", arr);
  
//     let found = arr.find(function(item) {
//       return item > 3;
//     });
//     console.log("After find:", found);
//   }
//   findExample([1, 2, 3, 5, 4]);

// let num = [1,2,3,4,5,6,7,8,9,10];
// let value = num.find((num) => num > 3);
// console.log(value);

// let num = [1,2,56,94,23,42,56,7,0];
// let sortValue = num.sort((a, b) => a - b);
// console.log(sortValue);

//Objects
// let student = {
//     name: "Shubham",
//     age: 22,
//     location: "LPU"
// }

// console.log(student.name + "is a student of " + student.location + "and he is " + student.age + "years old");

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
let student = [{
    name: "Mona",
    age: 20,
    location: "LPU"
},{
    name: "shakil",
    age: 21,
    location: "LPU"
},{
    name: "shubham",
    age: 22,
    location: "LPU"
},{
    name: "ayush",
    age: 23,
    location: "LPU"
}]

app.get('/', (req, res) => {
    res.json(student);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// let student = {
//         name: "Mona",
//         age: 20,
//         location: "LPU"
//     }

//     console.log(student);

//     student.name = "Shakil";
//     console.log(student);

// let woc = {
//     name: "Winter of code",
//     details: {
//         mentor: "Ayush",
//         duration: "2 months",
//         topics: ["HTML", "CSS", "JS"],
//         student: ["Mona", "Shakil", "Shubham", "Ayush"]
//     }
// }

// console.log(woc.details.student[2]);

// Object Methods Explanation
// function objectMethods(obj) {
//     console.log("Original Object:", obj);
  
//     let keys = Object.keys(obj);
//     console.log("After Object.keys():", keys);
  
//     let values = Object.values(obj);
//     console.log("After Object.values():", values);
  
//     let entries = Object.entries(obj);
//     console.log("After Object.entries():", entries);
  
//     let hasProp = obj.hasOwnProperty("key3");
//     console.log("After hasOwnProperty():", hasProp);
  
//     let newObj = Object.assign({}, obj, { newProperty: "newValue" });
//     console.log("After Object.assign():", newObj);
  
  
//   }
  
//   // Example Usage for Object Methods
//   const sampleObject = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
//   };
  
//   objectMethods(sampleObject);

// let student = ['mona', 'shakil', 'shubham', 'ayush'];
// let [name, second, third, fourth] = student;
// console.log(name, second);

// let book = {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     year: 1988,
// }
// let {title, author, year} = book;
// console.log(title, author, year);

// ... spread operator
// let num1 = [1,2,3,4,5];
// let num2 = [6,7,8,9,10];

// let combined = [...num1, ...num2];
// console.log(combined);

// let greet = "Hello";
// console.log([...greet]);


// class ReservationForm {
//     constructor(name, address, year) {
//        this.name = name;
//        this.address = address;
//        this.year = year;
//     }
    
//     getInfo(){
//         return `Name: ${this.name}, Address: ${this.address}, Year: ${this.year}`;
//     }

//     welcome(){
//         return "Welcome to the Reservation Form " + this.name;
//  }
// }
 
//  let Ayushman = new ReservationForm("Ayushman", "LPU", 2021);
//  console.log(Ayushman.getInfo());

//  let mona = new ReservationForm("mona", "LPU", 18);
//  console.log(mona.welcome());

