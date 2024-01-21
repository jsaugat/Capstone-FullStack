// App.jsx
import * as React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
