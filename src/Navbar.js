import React from 'react'
import Logo from'./LOGO.jpg';
import './App.css';
import Krishna from './Shri_Jagannatha_Temple.jpg';
import useScroll from './useScroll';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Contact1 from './Contact';

// import { Link } from 'react-router-dom';

const Navbar = () => {
  // const isScrolled = useScroll();
  return (
    <>
    <nav>
    <div class="Container">
    <img class="logo" src={Logo} alt="logo" />
    <ul>
 
        <li><a href="/">Home</a></li>  
        <li><a href="/about">About</a></li> 
        <li><a href="/Gallery">Gallary</a></li> 
        <li><a href="/Bookings">Bookings</a></li>
        <li><a href="/Message">Message</a></li>
        <li><a href="/Volunteer">Volunteer</a></li>
        <li><a href='/contact'>Contact Us</a></li>
    
    </ul>
    </div>
    </nav>
   
    
    
   </>
    
  )
}

export default Navbar


// import Krishna from './Shri_Jagannatha_Temple.jpg';
// import useScroll from './useScroll';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Navbar = () => {
//   const isScrolled = useScroll();

//   // Configuration for the slider
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000
//   };

//   return (
//     <>
//       <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
//         <div className="Container">
//           <img className="logo" src={Logo} alt="logo" />
//           <ul>
//             <li><a href="/">Home</a></li>  
//             <li><a href="/about">About</a></li> 
//             <li><a href="/Services">Services</a></li>
//             <li><a href="/Message">Message</a></li>
//             <li><a href="/Volunteer">Volunteer</a></li>
//             <li><a href='/contact'>Contact Us</a></li>
//           </ul>
//         </div>
//       </nav>
//       <div className='krishna'>
//         <Slider {...sliderSettings}>
//           <div>
//             <img src={Krishna} alt="" className='Mandir'/>
//             <div className="overlay">
//               <h1 className="text">Jaggannath Puri</h1>
//               <p className='textp'>
//                 The Jagannath Temple in Puri, Odisha, India, is a revered Hindu shrine known for its stunning architecture and spiritual significance. Dedicated to Lord Jagannath, along with his siblings, the temple hosts the famous Rath Yatra procession each year, drawing millions of devotees. With its ancient rituals and festivals like Snana Yatra, the temple remains a cherished pilgrimage site, managed by the Shree Jagannath Temple Administration.
//               </p>
//             </div>
//           </div>
//           {/* Add more slider items here if needed */}
//         </Slider>
//       </div>
//     </>
//   );
// }

// export default Navbar;

// // App.js
// // import React from 'react';
// // import './App.css';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function App() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <div className="App">
//       <h1>React Slick Slider Example</h1>
//       <Slider {...settings}>
//         <div>
//           <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
//         </div>
//         <div>
//           <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
//         </div>
//         <div>
//           <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import Logo from './LOGO.jpg';
// import './App.css';
// import Krishna from './Shri_Jagannatha_Temple.jpg';
// import useScroll from './useScroll';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// // Custom next arrow component
// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button className="next-arrow" onClick={onClick}>
//       Next
//     </button>
//   );
// };

// // Custom previous arrow component
// const PrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button className="prev-arrow" onClick={onClick}>
//       Prev
//     </button>
//   );
// };

// const Navbar = () => {
//   const isScrolled = useScroll();

//   // Configuration for the slider
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />
//   };

//   return (
//     <>
//       <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
//         <div className="Container">
//           <img className="logo" src={Logo} alt="logo" />
//           <ul>
//             <li><a href="/">Home</a></li>  
//             <li><a href="/about">About</a></li> 
//             <li><a href="/Services">Services</a></li>
//             <li><a href="/Message">Message</a></li>
//             <li><a href="/Volunteer">Volunteer</a></li>
//             <li><a href='/contact'>Contact Us</a></li>
//           </ul>
//         </div>
//       </nav>
//       <div className='krishna'>
//         <Slider {...sliderSettings}>
//           <div>
//             <img src={Krishna} alt="" className='Mandir'/>
//             <div className="overlay">
//               <h1 className="text">Jaggannath Puri</h1>
//               <p className='textp'>
//                 The Jagannath Temple in Puri, Odisha, India, is a revered Hindu shrine known for its stunning architecture and spiritual significance. Dedicated to Lord Jagannath, along with his siblings, the temple hosts the famous Rath Yatra procession each year, drawing millions of devotees. With its ancient rituals and festivals like Snana Yatra, the temple remains a cherished pilgrimage site, managed by the Shree Jagannath Temple Administration.
//               </p>
//             </div>
//           </div>
//           {/* Add more slider items here if needed */}
//         </Slider>
//       </div>
//     </>
//   );
// }

// export default Navbar;
