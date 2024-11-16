import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import KumbhAdd from './components/KumbhAdd'

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
