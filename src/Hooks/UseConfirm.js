import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./App.css";

const UseConfirm = (message, onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") {
    return;
  }
  if (typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

//   const App = () => {
//     const deleteWorld = () => {
//       console.log("Delete the world");
//     };
//     const abort = () => {
//       console.log("aborted");
//     };
//     const confirmDelete = UseConfirm("Are you sure ", deleteWorld, abort); //confirmAction 함수 리턴됨
//     return (
//       <div className="App">
//         <button onClick={confirmDelete}>Delete the world</button>
//       </div>
//     );
//   };

export default UseConfirm;
