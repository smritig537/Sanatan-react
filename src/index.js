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
import Blogs from "./blogPages/Blogs";
import Blog1 from "./blogPages/blog1";
import Blog2 from "./blogPages/blog2";
import Blog3 from "./blogPages/blog3"
import { ThemeProvider } from "@material-tailwind/react";
import NotFound from "./components/NotFound";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider

const appRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="sanatanadharma" element={<SanatanaDharma />} />
      <Route path="supporters" element={<Supporters />} />
      <Route path="Locations-in-india" element={<PresenceIndia />} />
      <Route path="media" element={<Media />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="blogs/reviving-ancient-wisdom" element={<Blog1 />} />
      <Route path="blogs/hindu-religious-texts-and-scriptures" element={<Blog2 />} />
      <Route path="blogs/indian-culture-and-traditions" element={<Blog3 />} />
      <Route path="achievements" element={<Achievements />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider> {/* Wrap the application with HelmetProvider */}
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </HelmetProvider>
);
