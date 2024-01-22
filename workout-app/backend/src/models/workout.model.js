//? mongodb alone is schema-less , mongoose allows us create models and schemas
// Schema defines structure of a particular document inside our db.
// Model applies that schema to interact with collections
import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    reps: { type: Number, required: true },
    load: { type: Number, required: true }
  },
  { timestamps: true } // when we create a document, it automatically add a createdAt and updatedAt properties for us
);

const Workout = mongoose.model("Workout", workoutSchema) // mongoose.model(name, schema)

export default Workout;
