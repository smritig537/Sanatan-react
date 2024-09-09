import Footer from "./components/Footer";
import LogoComponent from "./components/LogoComponent";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import logo from "./assets/om-bg-remove.png"
function App() {
  return (
    <div className="font-mukta flex flex-col min-h-screen">
      <img src={logo} className="App-logo" alt="logo" />
      <LogoComponent />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
