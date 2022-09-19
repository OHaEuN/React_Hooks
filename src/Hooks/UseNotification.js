import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const UseNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

// const App = () => {
//   const triggerNotif = UseNotification("안뇽", { body: "from 하우니" });
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <button onClick={triggerNotif}>hello</button>
//     </div>
//   );
// };

export default UseNotification;
