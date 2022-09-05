import React, { useEffect, useState } from "react";
import "./App.css";
const UseTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
// const App = () => {
//   const titleUpdater = useTitle("Loading..."); //'Loading...'을 초기 state로 설정 후 setTitle 리턴값으로 받음
//   setTimeout(() => titleUpdater("Home"), 5000);
//   return <div className="App"></div>;
// };

export default UseTitle;
