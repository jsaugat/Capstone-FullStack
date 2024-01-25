import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function WorkoutForm() {
  const { dispatch } = useWorkoutsContext();
  //? states for each property user's gonna enter in form
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState();
  const [emptyFields, setEmptyFields] = useState([]);

  //? We're gonna reach out to api, hence asynchronous
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "/api/workouts";
    // create workout OBJECT based on form input values {title: title, reps: reps, load: load}
    const workout = { title, reps: Number(reps), load: Number(load) };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      // send the workout OBJECT to the url, as a JSON though..
      body: JSON.stringify(workout),
    });

    // store json cuz its either success or failure status while createWorkout in the workout.controller.js
    const json = await response.json();
    if (!response.ok) {
      setError(json.error); // res.status(400).json({ error: error.message }); in controller
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      console.log("new workout created", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
        className={emptyFields.includes('load') ? 'error' : ''}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
