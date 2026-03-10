import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

export default function App() {
  return (
    <>
      {/*
        1. h-screen -> Affects all the screen
        2. flex items-center -> Puts the text in the center of the screen (Large)
        3. justify-center -> Puts the text in the center of the screen (Width)
        4. flex flex-col items-center -> Puts the items in the center and one below the other
        */}

      <div className="flex flex-col items-center h-screen bg-gray-900 gap-y-20">
        <h1 className=" text-6xl font-bold text-blue-400">Aegis Security</h1>
        <div className="flex items-center justify-center gap-x-100">
          <Sections>Section 1</Sections>
          <Sections>Section 2</Sections>
          <Sections>Section 3</Sections>
        </div>
      </div>
    </>
  );
}

function Sections(hold) {
  const [bg, setBgColor] = useState("bg-gray-900");
  function changeName() {
    setBgColor("bg-red-100");
  }

  return (
    <button
      className={`text-4xl text-blue-400 font-bold ${bg}`}
      onClick={changeName}
    >
      {hold.children}
    </button>
  );
}
