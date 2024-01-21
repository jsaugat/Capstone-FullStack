import React, { useState } from "react";

function WorkoutForm() {
  //? states for each property user's gonna enter in form
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState();
  const [load, setLoad] = useState();
  const [error, setError] = useState();

  //? we're gonna reach out to api, hence asynchronous
  const handleSubmit = async(e) => {
    e.preventDefault();
    const workout = {title, load, reps}

    const response = await fetch("/api/workouts", {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
            "Content-type": "application/json"
        }
    })
    //? reference "controllers/workout.controller.js" in backend folder
    // store json cuz its either success or failure status while createWorkout in the controller
    const json = await response.json();
    if(!response.ok){
        setError(json.error) // res.status(400).json({ error: error.message }); in controller
    }
    if(response.ok){
        setTitle("")
        setLoad("")
        setReps("")
        setError(null)
        console.log("new workout created", json)
    }
  }
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title</label>
      <input type="text" placeholder="workout title" value={title} onChange={(e)=>setTitle(e.target.value)} />

      <label>Load (in kg)</label>
      <input type="number" placeholder="load" value={load} onChange={(e)=>setLoad(e.target.value)} />

      <label>Reps</label>
      <input type="number" placeholder="reps" value={reps} onChange={(e)=>setReps(e.target.value)} />

      <button type="submit">Add Workout</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
