// main.js
import React from "react";
import "./index.css";
// router dom
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// pages and components
import App from "./App";
import Homepage from "./pages/Homepage";
// context
import { WorkoutsContextProvider } from "./context/workoutContext";

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="" element={<Homepage />} />
  </Route>
);
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <RouterProvider router={router} />
    </WorkoutsContextProvider>
  </React.StrictMode>
);
