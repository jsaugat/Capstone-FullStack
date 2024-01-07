import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
//? router components
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//? pages
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

// routes
const routes = createRoutesFromElements(
  <Route path="" element={<App />}>
    <Route path="" element={<HomePage/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
  </Route>
  );

// router
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
