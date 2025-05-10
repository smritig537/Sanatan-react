import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import KumbhAdd from "./components/KumbhAdd";
import { Outlet } from "react-router-dom";
import SparkEffect from "./components/SparkEffect";
import Error from "./pages/Error";

function App() {
  const salary = true;
  return (
    <>
      {salary ? (
        <div>
          <Error />
        </div>
      ) : (
        <div>
          <Navbar />

          <SparkEffect />

          <KumbhAdd />
          <div className="sm:mt-[105px] mt-[93px]">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
