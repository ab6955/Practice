import { useState } from "react";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(10);
  // let Counter = 15;
  const addvalue = () => {
    if (Counter >= 20) return;
    Counter++;
    // console.log(`Value added ${Math.random()}`);
    // console.log(Counter);
    setCounter(Counter);
  };
  const removeValue = () => {
    if (Counter <= 0) return;
    Counter--;
    // console.log(Counter);
    setCounter(Counter);
  };

  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter: {Counter}</h2>

      <button onClick={addvalue}>Add Value {Counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {Counter}</button>
    </>
  );
}

export default App;
