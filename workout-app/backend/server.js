import dotenv from "dotenv";
dotenv.config(); // access the .env file in an object called process.env
import express from "express";
import mongoose from "mongoose"; // db connector
import workoutRoutes from "./src/routes/workouts.js"; // router

// express app
const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json()); // looks for and parses json request and passes it to 'req' object
// global middleware to track requests..
app.use((req, res, next) => {
  console.log(`-------------------------------`);
  console.log(`Request method = ${req.method}`);
  console.log(`Request path = ${req.originalUrl}`); //or console.log(`path = ${req.path}`)
  console.log(`Request body = ${req.body}`); // The parsed JSON data from the request body
  console.log(`-------------------------------`);
  next();
});
// routes middleware
app.use("/api/workouts", workoutRoutes); // /api/workout specified as root path

//? db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // now listen for requests, we don't wanna start listening before connecting our app to db
    app.listen(port, () => {
      console.log(`SUCCESSFULLY Connected to MongoDB`);
      console.log(`Listening on http://localhost:${port}`);
    });
  })
  .catch((error) =>
    console.error(`FAILED Connecting to MongoDB -----> ${error}`)
  );
