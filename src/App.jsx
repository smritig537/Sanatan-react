import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import KumbhAdd from "./components/KumbhAdd"
import { Outlet } from "react-router-dom";
import SparkEffect from "./components/SparkEffect";


function App() {
  return (
    <div>
      <Navbar />
      <div className="lg:block hidden">
      <SparkEffect />
      </div>
       <KumbhAdd/>
      <div className="sm:mt-[105px] mt-[93px]">
      <Outlet /></div>
      <Footer />
    </div>
  );
}

export default App;
