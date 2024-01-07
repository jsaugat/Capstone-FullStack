import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import { App, HomePage, AboutPage, BookingPage, MenuPage } from "./master.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    {/* these children are gonna be displayed using <Outlet /> */}
    <Route path="" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/menu" element={<MenuPage />} />
    <Route path="/contact" element={<BookingPage />} />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
