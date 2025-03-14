import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import GlobalCountries from "./pages/GlobalCountries";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/statistik" element={<GlobalCountries />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
