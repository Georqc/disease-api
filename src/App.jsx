import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Home />
      {/* <Home /> */}
      <Routes></Routes>
    </Router>
  );
}

export default App;
