import React, { useState, useCallback, useEffect } from "react";
import Child from "./component/child";
import { useCount } from "./component/customhook";
import axios from "axios";
import { Axiosapi } from "./component/axiosapi";

function App() {
  // const [count, setcount] = useState(0);

  // const increase = () => {
  //   setcount(count + 1);
  // };
  // const decrease = () => {
  //   setcount(count - 1);
  // };
  const [count, increase, decrease] = useCallback(useCount(0));
  // ________________________________
  const { users, load, error } = Axiosapi("http://localhost:3000/users");
  return (
    <div className="App">
      <header className="App-header">
        <h2>App-15</h2>
        <p>Create Custom Hook</p>
      </header>
      <hr />
      this from app
      {/* <button onClick={increase}>+</button>
      {count}
      <button onClick={decrease}>-</button> */}
      <hr />
      <Child />
      <hr />
      <hr />
      <hr />
      {load && <p>Loading.......</p>}
      {users && (
        <div>
          {users.map((e) => (
            <p key={e.id}>{e.name}</p>
          ))}
        </div>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
