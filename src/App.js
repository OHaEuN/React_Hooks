import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import UseAxios from "./Hooks/UseAxios/UseAxios";

const App = () => {
  const { loading, data, error, refetch } = UseAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `Loading:${loading}\nData:${JSON.stringify(data)}\nError:${error}\n`
  );
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default App;
