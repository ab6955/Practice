import { useState } from "react";
// import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState("<bg-gray-1></bg-gray-1>00");

  return (
    <>
      <div
        className="w-full h-screen bg-gray-500 text-white flex justify-center items-end"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="flex bg-slate-300 m-10 p-2 rounded-3xl gap-x-3">
          <button
            className=" text-white font-bold bg-red-600 p-1 px-5 m-2 rounded-3xl"
            onClick={() => setBackgroundColor("red")}
          >
            Red
          </button>

          <button
            className=" text-white font-bold bg-blue-600 p-1 px-5 m-2 rounded-3xl"
            onClick={() => setBackgroundColor("blue")}
          >
            Green
          </button>

          <button
            className=" text-white font-bold bg-green-600 p-1 px-5 m-2 rounded-3xl"
            onClick={() => setBackgroundColor("green")}
          >
            Blue
          </button>

          <button
            className=" text-white font-bold bg-gray-600 p-1 px-5 m-2 rounded-3xl"
            onClick={() => setBackgroundColor("gray")}
          >
            Gray
          </button>
          <button
            className=" text-white font-bold bg-yellow-600 p-1 px-5 m-2 rounded-3xl"
            onClick={() => setBackgroundColor("yellow")}
          >
            Yellow
          </button>
          <button
            className=" text-white font-bold bg-pink-600 p-1 px-5 m-2 rounded-3xl"
            onClick={() => setBackgroundColor("pink")}
          >
            Pink
          </button>
          <button
            className=" text-white font-bold bg-purple-600 p-1 px-5 m-2 rounded-3xl"
            onClick={() => setBackgroundColor("purple")}
          >
            Purple
          </button>
          <button
            className=" text-black font-bold bg-white p-1 px-5 m-2 rounded-3xl"
            onClick={() => setBackgroundColor("white")}
          >
            White
          </button>
          <button
            className=" text-white font-bold bg-black p-1 px-5 m-2 rounded-3xl"
            onClick={() => setBackgroundColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
