import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const myObj = {
    name: "Abdullah",
    age: 21,
  };

  const myarr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      {/* <Card username="chaiaurcode" someObj={myObj} someArr={myarr} /> */}
      <Card username="chaiaurcode" btntext="click me" />
      <Card username="Abdullah" btntext="click here" />
    </>
  );
}

export default App;
