import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const UseScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

// const App = () => {
//   const { y } = UseScroll();
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <h1
//         style={{ position: "fixed", color: y > 100 ? "salmon" : "blueviolet" }}
//       >
//         Hi
//       </h1>
//     </div>
//   );
// };

export default UseScroll;
