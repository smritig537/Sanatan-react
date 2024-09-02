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
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Media from "./pages/Media";
import PresenceIndia from "./pages/PresenceIndia";
import SanatanaDharma from "./pages/SanatanaDharma";
import Supporters from "./pages/Supporters";
import { ThemeProvider } from "@material-tailwind/react";
import NotFound from "./components/NotFound";
import FAQ from "./pages/Faq";

const appRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="sanatanadharma" element={<SanatanaDharma />} />
      <Route path="supporters" element={<Supporters />} />
      <Route path="presence-in-india" element={<PresenceIndia />} />
      <Route path="media" element={<Media />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="achievements" element={<Achievements />} />
      <Route path="contact" element={<Contact />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <RouterProvider router={appRouter} />
  </ThemeProvider>
);
