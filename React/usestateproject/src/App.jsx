import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  const [color, setColor] = useState("white");
  return (
    <>
      <div className="h-screen w-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-flex-wrap justify-center bottom-12">
          <div className="flex justify-center">
            <button
              className=" rounded-3xl"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className=" rounded-3xl"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>{" "}
            <button
              className=" rounded-3xl"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>{" "}
            <button
              className=" rounded-3xl"
              style={{ backgroundColor: "orange" }}
              onClick={() => setColor("orange")}
            >
              Orange
            </button>{" "}
            <button
              className=" rounded-3xl"
              style={{ backgroundColor: "brown" }}
              onClick={() => setColor("brown")}
            >
              Brown
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
