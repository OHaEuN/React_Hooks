import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const UseNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

// const App = () => {
//   const handleNetworkChange = (online) => {
//     console.log(online ? "we just went online" : "we are offline");
//   };
//   const onLine = UseNetwork(handleNetworkChange);
//   return (
//     <div className="App">
//       <h1>{onLine ? "Online" : "Offline"}</h1>
//     </div>
//   );
// };

export default UseNetwork;
