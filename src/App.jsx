import Footer from "./components/Footer";
import LogoComponent from "./components/LogoComponent";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <LogoComponent />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
