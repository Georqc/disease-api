import { Link } from "react-router-dom"; // Viktigt att importera Link
import "../index.css";

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-logo">DiseaseAPI</h1>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/CountryStats">Sweden</Link>
        <a href="#">Global</a>
      </nav>
    </div>
  );
}

export default Header;
