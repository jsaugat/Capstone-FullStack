import Workout from "../models/workout.model.js";
import mongoose from "mongoose"

//!ALL THE CONTROLLER FUNCTIONS TO HANDLE HTTP REQUESTS

//? GET all workouts
const getWorkouts = async (req, res) => {
  //* find all workouts, sort them by createdAt in descending order. 
  //* if you wanna find only some workouts with certain properties, use Workout.find({title: "...."})
  const workouts = await Workout.find({}).sort({createdAt: -1}) 
  res.status(200).json(workouts)
}

//? GET a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params // got id from req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "Invalid Mongoose ObjectId"})
  }
  const workout = await Workout.findById(id)
  if(!workout) {return res.status(404).json({error: "No such workout found"})}
  res.status(200).json(workout)
}

//? CREATE a new workout
const createWorkout = async (req, res) => {
  
  const { title, reps, load } = req.body; // destructuring properties from req.body object. this assumes that the request body contains an object with properties named title, reps, and load. For example, a client might send a POST request with JSON data like { "title": "Workout1", "reps": 10, "load": 50 }.
  // create a new document in db

  // when user leaves some field empty in workoutForm
  let emptyFields = []
  let fields = [title, reps, load]
  for(let field of fields){
    if(!field){
      emptyFields.push(field)
    }
  }
  if(emptyFields.length > 0){
    // return res.status(400).json({error: error.message)
    return res.status(400).json({error: "Please fill-in all the fields", emptyFields})
  }

  try {
    const createWorkout = await Workout.create({ title, reps, load }); //If the document creation is successful, the server 'responds with a status of 200 '
    res.status(200).json(createWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
    // this error is thrown by mongoose, 
    // if mongoose tries to save a new doc where it doesn't correspond with schema. for example if it doesn't have load or reps properties, the error is shown
  }
};

//? UPDATE a workout
const updateWorkout = async (req, res) => {
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "Invalid Mongoose ObjectId"})
  }
  // find workout with id and spread req.body as it is, (you write json to update in postman receive new workout)
  const workout = await Workout.findOneAndUpdate({_id:id},{...req.body},{new: true})
  if(!workout){
    return res.status(400).json({error: "No such workout found"})
  }
  res.status(200).json(workout)
}

//? DELETE a workout
const deleteWorkout = async (req, res) => {
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "Invalid Mongoose ObjectId"})
  }
  const workout = await Workout.findOneAndDelete({_id: id})
  if(!workout){
    return res.status(400).json({error: "No such workout found"})
  }
  res.status(200).json(workout);
}


export {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
}