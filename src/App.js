import React from "react";
import Repo from "./Component/Repo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repo" element={<Repo />} />
      </Routes>
    </Router>
  );
} 

export default App;