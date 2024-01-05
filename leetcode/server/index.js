//npm install express

// import the 'express' module into our code.
// It allows us to easily create web servers and handle HTTP requests.
const express = require("express");
// This line creates an instance of the Express application. We'll use this 'app' object to define routes and start our server.
const app = express();
// This line defines the port number on which our server will listen for incoming requests.
const port = 3000;

const USERS = [];

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const QUESTIONS = [
  {
    question: {
      title: "Find the Sum of Squares",
      description:
        "Given an array of integers, find the sum of the squares of all elements in the array.",
      testCases: [
        {
          input: "[2, 3, 4]",
          output: "29",
        },
      ],
    },
  },
  {
    question: {
      title: "Two states",
      description: "Given an array , return the maximum of the array?",
      testCases: [
        {
          input: "[1,2,3,4,5]",
          output: "5",
        },
      ],
    },
  },
];

const SUBMISSION = [];

app.post("/signup", function (req, res) {
  // Add logic to decode body
  const { email, password } = req.body;
  // body should have email and password
  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)

  // return back 200 status code to the client
  res.send("");
});

app.post("/login", function (req, res) {
  // Add logic to decode body
  // body should have email and password

  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same

  // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //random tokenlength : max = 20, min = 10
  const tokenLength = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  const token = Array.from({ length: tokenLength }, () => {
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    const randomLetter = alphabets[randomIndex];
    return randomLetter;
  }).join("");

  console.log(token);
  // If the password is not the same, return back 401 status code to the client

  res.send("Hello World from route 2!");
});

app.get("/questions", function (req, res) {
  //return the user all the questions in the QUESTIONS array
  res.json(QUESTIONS);
});

app.get("/submissions", function (req, res) {
  // return the users submissions for this problem
  res.send("Hello World from route 4!");
});

app.post("/submissions", function (req, res) {
  // let the user submit a problem, randomly accept or reject the solution
  // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!");
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});