import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./App.css";

const UseBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY >= 0) {
      //마우스가 창 아래 방향으로 내려갈 때 실행
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    }
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};

// const App = () => {
//   const begForLife = () => console.log("Pls dont leave");
//   UseBeforeLeave(begForLife);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// };

export default UseBeforeLeave;
