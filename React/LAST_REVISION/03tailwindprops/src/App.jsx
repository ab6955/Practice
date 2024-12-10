import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  // let chaiAurCode = "Abdullah";
  const myObj = {
    name: "Abdullah",
    Age: 21,
  };
  const myArr=[1,2,3,4,5]

  return (
    <>
      <h1 className="bg-green-400 text-black  p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="Abdullah" someObj={myObj} someArr={myArr} />
      <Card username="Ansari" btnText="Visit Me"/>
    </>
  );
}

export default App;
