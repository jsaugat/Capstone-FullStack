//? all workout app routes

import express from "express";
import Workout from "../models/workout.model.js";

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

// POST a new workout
router.post("/", async (req, res) => {
  // we're operating on promises
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
  res.json({ msg: "POST a new workout" });
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});

export default router;
