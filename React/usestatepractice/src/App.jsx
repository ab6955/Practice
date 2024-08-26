import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 15;

  // function addValue() {
  //   counter++;
  //   console.log(counter);
  // }
  // function removeValue() {
  //   counter--;
  //   console.log(counter);
  // }

  let [counter, setCounter] = useState(15);
  const addValue = () => {
    setCounter(counter+1);
    console.log(counter);
  };
  const removeValue = () => {
    setCounter(counter-1);
    console.log(counter);
  };

  return (
    <>
      <h1>Chai aur Code {counter}</h1>
      <h2>React {counter}</h2>
      <button onClick={addValue}>Counter {counter}</button>
      <br />
      <button onClick={removeValue}>Counter {counter}</button>
      <footer>Counter {counter}</footer>
    </>
  );
}

export default App;
