import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <h1 className="text-5xl font-bold">Aegis</h1>
        <p className="mt-4 text-gray-400">Hello</p>
        <button className="mt-6 bg-blue-500 px-6 py-3 rounded-lg">lol</button>
      </section>
    </>
  );
}

export default App;
