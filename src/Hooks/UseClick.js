import React, { useEffect, useRef } from "react";
import ReactDOM from "react";
import "./App.css";

const UseClick = (onClick) => {
  const element = useRef(); //doucment.getElementById()와 같은 기능 - DOM요소에 접근
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      //useEffect의 return은 componentWillUnmount 할 때 호출
      //cleanup function
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};

// const App = () => {
//   const sayHello = () => console.log("say Hello");
//   const title = useClick(sayHello);
//   return (
//     <div className="App">
//       <h1 ref={title}>Hi</h1>
//     </div>
//   );
// };

export default UseClick;
