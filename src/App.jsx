import Footer from "./components/Footer";
import LogoComponent from "./components/LogoComponent";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <LogoComponent />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
