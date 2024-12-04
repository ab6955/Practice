import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let Counter = 15;

  const addValue = () => {
    // console.log("Clicked", Math.random());
    if (counter >= 20) return;
    counter++;
    setCounter(counter);
    console.log(counter);
  };
  const removeValue = () => {
    // console.log("Clicked", Math.random());
    if (counter <= 0) return;
    counter--;
    setCounter(counter);
    console.log(counter);
  };
  return (
    <>
      <h1>Chai aur React {counter}</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
