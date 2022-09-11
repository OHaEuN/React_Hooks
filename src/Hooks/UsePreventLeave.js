import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./App.css";

const UsePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ""; // 팝업창 실행을 위해 작성하는것
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener); // "beforeunload": window가 닫히기 전에 함수 실행
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };
  return { enablePrevent, disablePrevent };
};

// const App = () => {
//   const { enablePrevent, disablePrevent } = UsePreventLeave();
//   return (
//     <div className="App">
//       <button onClick={enablePrevent}>Protect</button>
//       <button onClick={disablePrevent}>Unprotect</button>
//     </div>
//   );
// };

export default UsePreventLeave;
