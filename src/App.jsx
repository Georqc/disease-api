import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import CountryStats from "./components/CountryStats";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Sida för Sverige-statistik */}
        <Route path="/CountryStats" element={<CountryStats />} />
      </Routes>
    </Router>
  );
}

export default App;
