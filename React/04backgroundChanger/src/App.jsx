import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  // const changeBg = (color) => {
  //   setColor(color);
  // };
  const change = () => {
    return "red";
  };

  return (
    <>
      <div
        className="w-full h-screen duration-300 flex justify-center items-end "
        style={{ backgroundColor: color }}
      >
        <div
          className="text-white  absolute bottom-0 flex p-4 rounded-3xl gap-6"
          style={{ backgroundColor: "white" }}
        >
          <button
            className="p-3 px-5 rounded-full"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")} // here we r giving a fun inside a fun(hence onclick satisfied).
            // onClick={change} // onclick expect a function(not a reference not return value) thats why call back.
          >
            Red
          </button>
          <button
            className="p-3 px-5 rounded-full"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="p-3 px-5 rounded-full"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="p-3 px-5 rounded-full"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="p-3 px-5 rounded-full"
            style={{ backgroundColor: "brown" }}
            onClick={() => setColor("brown")}
          >
            Brown
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
