import React, { useEffect, useRef } from "react";
import "./App.css";

const UseFadeIn = (duration = 1, delay) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}`;
      current.style.opacity = 1;
    }
  }, []);

  if ((typeof duration !== "number", (delay = 0))) {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};

// const App = () => {
//   const fadeInH1 =UseFadeIn(1, 2);
//   const fadeInP = UseFadeIn(5, 10);
//   return (
//     <div className="App">
//       <h1 {...fadeInH1}>Hello</h1>
//       <p {...fadeInP}>lorem ipsum laalalla</p>
//     </div>
//   );
// };

export default UseFadeIn;
