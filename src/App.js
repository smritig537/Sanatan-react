import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import ImageSlider from './ImageSlider';
// import ContactForm from './ContactForm';
import Routing from './Routing';



function App() {
  return (
  <>

     <Navbar/>
     <Routing/>
     <Main/>
     <ImageSlider />  
  </>
  );
}

export default App;
