import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Gallery from "./pages/Gallery";
import Bookings from "./pages/Bookings";
import VolunteerPage from "./pages/Volunteer";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { ThemeProvider } from "@material-tailwind/react";

const appRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="volunteer" element={<VolunteerPage />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <RouterProvider router={appRouter} />
  </ThemeProvider>
);
