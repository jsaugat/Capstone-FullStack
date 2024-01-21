import { useEffect, useState } from "react";
import axios from "axios";
// components
import WorkoutDetails from "../components/WorkoutDetails";

function Homepage() {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const url = "/api/workouts";
    // ? fetch data using fetch(url)
    /*
    const fetchWorkouts = () => {
      fetch(url)
        .then((response) => response.ok ? response.json() : Promise.reject(new Error("Network response was not ok")))
        .then(data => console.log(data))
        .catch((error) => console.error('Error fetching data:', error.message));
    };
    */

    //? fetch data using axios
    const fetchWorkouts = () => {
      axios
        .get(url)
        .then((response) => setWorkouts(response.data)) //this logs actual data from the server response either they are JSON object or array.
        .catch((error) => console.log("Error fetching data:", error.message));
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      {workouts && // initially its state is null so must use this line
        workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
    </div>
  );
}

export default Homepage;
