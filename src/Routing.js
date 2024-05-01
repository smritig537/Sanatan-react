import React from 'react'
import About from './About';
import './About.css';
import Services from './Services';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MessagePage from './components/MessagePage';
import VolunteerPage from './Volunteer/VolunteerPage';
import ContactForm from './ContactForm';
import Gallery from './Gallery';

const Routing = () => {
  return (

    <BrowserRouter>
     <Routes>
     <Route path='/'/>
     <Route path='/Services' element={<Services/>}/>
     <Route path="/about" element={<About />} />
     <Route path="/Message" element={<MessagePage />} />
     <Route path="/Volunteer" element={<VolunteerPage />} />
     <Route path="/contact" element={<ContactForm />} />
     <Route path="/Gallery" element={<Gallery />} />
     </Routes>
     </BrowserRouter>
    
    
    
  )
}

export default Routing
