import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./src/routes/router.js";

dotenv.config(); // can use process.env now

const app = express();
const port = process.env.PORT || 6900;

//? parse incoming requests with JSON payloads. and make it availble in request body (req.body)
app.use(express.json());

//? GLOBAL middleware
app.use("/", (req, res, next) => {
  console.log(`- Request Method -> ${req.method}`);
  console.log(`- Request Path -> ${req.url}`);
  console.log(`- Request Body -> ${JSON.stringify(req.body)}`);
  next();
});

//? ROUTES middleware
app.use("/app", router);

//? Database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ SUCCESS :: MongoDB Connection");
    // start listening once the db is connected...
    app.listen(port, () => {
      console.log(`👁️  WATCHING PORT : http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ FAILURE :: MongoDB Connection:", error);
  });
