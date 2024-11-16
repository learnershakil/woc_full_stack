// import heelo from "./kaur.js";

// export const greetKaur = () => {
//     return ("Hello "+ heelo);
// }

// import greetKaur from "shakil";
// console.log(greetKaur());

// console.log("Hello "+ heelo);

// import chalk from "clear";

// console.log(chalk.blue("Hello World"));
// console.log(chalk.red("Hello World"));
// console.log(chalk.green("Hello World"));

// import http from 'http';

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//     // Check if the request is a GET request to the root path "/"
//     if (req.method === 'GET' && req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Hello, Learner');
//     } else {
//         // Handle other routes or methods
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//     }
// });

// // Define the port number
// const PORT = 3000;

// // Start the server
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// import express from 'express';
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello, Learner');
// });

// app.listen(3000,console.log(`Server is running!`));
import express from "express";
import cors from "cors";
const app = express();
const shakil = express();

app.use(cors('roshan.com'));
let student = [
  {
    name: "Mona",
    age: 20,
    location: "LPU",
  },
  {
    name: "shakil",
    age: 21,
    location: "LPU",
  },
  {
    name: "shubham",
    age: 22,
    location: "LPU",
  },
  {
    name: "ayush",
    age: 23,
    location: "LPU",
  },
];

shakil.get("/", (req, res) => {
    res.send("Welcome to Shakil Baba");
    }   );

shakil.get("/student", (req, res) => {
    res.json(student);
    });

app.use('/coffee',express.static('public'))

app.get("/data", (req, res) => {
    let data = req.query;
    let result = data.name;
    res.json({result});

});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

shakil.listen(5000, () => {
    console.log("Server is running on port 5000");
  });

// FS Module
// Path
// http

import shakilBaba from "fs"; // File System Module

shakilBaba.readFile('data.txt', "utf-8", (mona, killer) => { // Read File
    if (mona) { // Error Handling
        console.log(mona); // Log Error
    } else { // No Error then execute that block
        console.log(killer); // Log Data
    }
    });

