import "../App.css";
import Signup from "./Signup";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import ProblemStatements from "./ProblemStatements";

function App() {

  return (
    <main className="App relative h-screen py-3 px-3 text-white">
      <Navbar/>
      {/*Routes to pages*/}
      <Routes>
        <Route path="/" element={<ProblemStatements/>}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </main>
  );
}



export default App;
