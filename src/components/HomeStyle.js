import React from "react";
import "./HomeStyle.css";



function HomeStyle() {
    return (
    <div className="service-features">
        <h1>We are the leader in new developments.</h1>
        <p class="desc">
        Browse our collection of exceptional new and upcoming residential
        developments.
        </p>
    <div class="homes-wrapper">
        <div class="home-card">
            <div class="title">
            <h2 >CENTRAL PARK TOWER</h2>
    </div>
        <div class="home1">
            <p >217 WEST 57TH ST, Midtown West, Other, NY.</p>
            <p >NEW DEVEOPMENT CONDOMINIUM</p>
            <p>Occupcancy: Immediate</p>
            <img 
            src="https://images.unsplash.com/photo-1614002128779-35f1ffaa5b50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG55YyUyMGhpZ2glMjByaXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="hi"></img>
        </div>
    <div class="home-card">
        <div class="title">
            <h2>35 HUDSON YARDS</h2>
    </div>
        <div class="home1">
            <p>35 HUDSON YARDS, Chelsea/Hudson Yards, Manhattan, NY.</p>
            <p>NEW DEVEOPMENT CONDOMINIUM</p>
            <p>Occupcancy: Immediate</p>
            <img
                src="https://images.unsplash.com/photo-1614002128779-35f1ffaa5b50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG55YyUyMGhpZ2glMjByaXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60"alt="hi"></img>
        </div>
    </div>
        <div class="home-card">
            <div class="title">
                <h2>130 WILLIAM</h2>
    </div>
        <div class="home1">
            <p>130 WILLIAM ST, Financial District, Manhattan, NY</p>
            <p>NEW DEVEOPMENT CONDOMINIUM</p>
            <p>Occupcancy: Immediate</p>
            <img
            src="https://images.unsplash.com/photo-1629263937997-f89f44b4108e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bnljJTIwYnVpbGRpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"alt="hi"></img>
                </div>
            </div>
        </div>
    </div>
</div>
);
}


export default HomeStyle;


// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { Link } from "react-router-dom";

// import {
//   staggerText,
//   staggerReveal,
//   fadeInUp,
//   handleHover,
//   handleHoverExit,
//   handleCityReturn,
//   handleCity,
//   staggerRevealClose
// } from "./Animations";

// import NewYork from "./images/nyc.jpg";
// import Dallas from "./images/dallas.jpg";
// import Los Angeles from "../images/newyork.webp";
// import SanFrancisco from "../images/sanfrancisco.webp";
// import beijing from "../images/beijing.webp";

// const cities = [
//   { name: "New York", image: NewYork },
//   { name: "Dallas", image: Dallas },
//   { name: "Los Angeles", image: newyork },
//   { name: "San Francisco", image: sanfrancisco },
//   { name: "Beijing", image: beijing }
// ];

// const Hamburger = ({ state }) => {
//   // Create varibles of our dom nodes
//   let menuLayer = useRef(null);
//   let reveal1 = useRef(null);
//   let reveal2 = useRef(null);
//   let cityBackground = useRef(null);
//   let line1 = useRef(null);
//   let line2 = useRef(null);
//   let line3 = useRef(null);
//   let info = useRef(null);

//   useEffect(() => {
//     // If the menu is open and we click the menu button to close it.
//     if (state.clicked === false) {
//       // If menu is closed and we want to open it.

//       staggerRevealClose(reveal2, reveal1);
//       // Set menu to display none
//       gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
//     } else if (
//       state.clicked === true ||
//       (state.clicked === true && state.initial === null)
//     ) {
//       // Set menu to display block
//       gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
//       //Allow menu to have height of 100%
//       gsap.to([reveal1, reveal2], {
//         duration: 0,
//         opacity: 1,
//         height: "100%"
//       });
//       staggerReveal(reveal1, reveal2);
//       fadeInUp(info);
//       staggerText(line1, line2, line3);
//     }
//   }, [state]);

//   return (
//     <div ref={el => (menuLayer = el)} className='hamburger-menu'>
//       <div
//         ref={el => (reveal1 = el)}
//         className='menu-secondary-background-color'></div>
//       <div ref={el => (reveal2 = el)} className='menu-layer'>
//         <div
//           ref={el => (cityBackground = el)}
//           className='menu-city-background'></div>
//         <div className='container'>
//           <div className='wrapper'>
//             <div className='menu-links'>
//               <nav>
//                 <ul>
//                   <li>
//                     <Link
//                       onMouseEnter={e => handleHover(e)}
//                       onMouseOut={e => handleHoverExit(e)}
//                       ref={el => (line1 = el)}
//                       to='/opportunities'>
//                       Opportunities
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       onMouseEnter={e => handleHover(e)}
//                       onMouseOut={e => handleHoverExit(e)}
//                       ref={el => (line2 = el)}
//                       to='/solutions'>
//                       Solutions
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       onMouseEnter={e => handleHover(e)}
//                       onMouseOut={e => handleHoverExit(e)}
//                       ref={el => (line3 = el)}
//                       to='/contact-us'>
//                       Contact us
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//               <div ref={el => (info = el)} className='info'>
//                 <h3>Our Promise</h3>
//                 <p>
//                   The passage experienced a surge in popularity during the 1960s
//                   when Letraset used it on their dry-transfer sheets, and again
//                   during the 90s as desktop publishers bundled the text with
//                   their software.
//                 </p>
//               </div>
//               <div className='locations'>
//                 Locations:
//                 {/* Returning the list of cities */}
//                 {cities.map(el => (
//                   <span
//                     key={el.name}
//                     onMouseEnter={() => handleCity(el.image, cityBackground)}
//                     onMouseOut={() => handleCityReturn(cityBackground)}>
//                     {el.name}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hamburger;