import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import KumbhAdd from "./components/KumbhAdd"
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
       <KumbhAdd/>
      <div className="sm:mt-[105px] mt-[93px]">
      <Outlet /></div>
      <Footer />
    </div>
  );
}

export default App;
