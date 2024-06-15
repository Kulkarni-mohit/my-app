// import React from 'react';
// import { Parallax } from 'react-parallax';
// import bg from '../OIP.jpg'

// const BasicParallax = () => {
//   return (
//     <Parallax bgImage={bg} strength={500}>
//       <div style={{ height: '1000px' }}>
//         <div>Content Goes Here</div>
//       </div>
//     </Parallax>
//   );
// };

// export default BasicParallax;

// src/ParallaxComponent.js
// import React, { useState, useEffect } from 'react';
// import './ParallaxComponent.css'; // We'll create this CSS file next

// const BasicParallax = () => {
//   const [offsetY, setOffsetY] = useState(0);

//   const handleScroll = () => {
//     setOffsetY(window.pageYOffset);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="parallax-container">
//       <div
//         className="parallax-background"
//         style={{ transform: `translateY(${offsetY * 0.5}px)` }}
//       ></div>
//       <div className="parallax-content">
//         <h1>Parallax Effect</h1>
//         <p>Scroll down to see the effect</p>
//       </div>
//     </div>
//   );
// };

// export default BasicParallax;

// src/ParallaxSection.js
import React from 'react';
import './ParallaxComponent.css'; // We'll create this CSS file next

const BasicParallax = ({ backgroundImage, children }) => {
  return (
    <div
      className="parallax-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content">{children}</div>
    </div>
  );
};

export default BasicParallax;
