import React, { useEffect, useRef, useState } from "react";
import { ReactDOM } from "react";
import "./App.css";

const UseFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, triggerFull, exitFull };
};

// const App = () => {
//   const onFulls = (isFull) => {};
//   const { element, triggerFull, exitFull } = UseFullscreen();
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <div ref={element}>
//         <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
//         <button onClick={exitFull}>exit fullscreen</button>
//       </div>
//       <button onClick={triggerFull}>make fullscreen</button>
//     </div>
//   );
// };

export default UseFullscreen;
