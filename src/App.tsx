import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { HashRouter as Router, Routes, Route } from "react-router";
import { Home } from "./Pages/home";
import { Downloads } from "./Pages/downloads";
import { Layout } from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/down" element={<Downloads />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
