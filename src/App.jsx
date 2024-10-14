import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-[80px]">
      <Outlet /></div>
      <Footer />
    </div>
  );
}

export default App;
