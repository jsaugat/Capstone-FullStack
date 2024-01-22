import React, { useState } from "react";

function WorkoutForm() {
  //? states for each property user's gonna enter in form
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState();
  const [load, setLoad] = useState();
  const [error, setError] = useState();

  //? We're gonna reach out to api, hence asynchronous
  const handleSubmit = async(e) => {
    e.preventDefault();
    const workout = {title, reps, load} // workout object, {title: title, ....}
    const url = "/api/workouts"
    const response = await 
      fetch(url, 
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(workout),
      })

    //? Reference --> "controllers/workout.controller.js" in backend folder
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
      <input type="text" placeholder="Workout Title" value={title} onChange={(e)=>setTitle(e.target.value)} />

      <label>Load (in kg)</label>
      <input type="number" placeholder="How much load?" value={load} onChange={(e)=>setLoad(e.target.value)} />

      <label>Reps</label>
      <input type="number" placeholder="How many reps?" value={reps} onChange={(e)=>setReps(e.target.value)} />

      <button type="submit">Add Workout</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;