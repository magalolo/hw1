import Home from "./home";
import Page from "./page";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h1>aura</h1>
      <h1>{num}</h1>

      <button onClick={() => {
        if (num < 20) setNum(num + 1);
      }}>+1</button>

      <button onClick={() => {
        if (num > 0) setNum(num - 1);
      }}>-1</button>

      <button onClick={() => {
        if (num <= 15) {
          setNum(num + 5);
        } else {
          setNum(20);
        }
      }}>+5</button>

      <button onClick={() => {
        if (num >= 5) {
          setNum(num - 5);
        } else {
          setNum(0);
        }
      }}>-5</button>

      <button onClick={() => {
        setNum(0);
      }}>reset</button>
    </div>
  );
}

export default App;
