import { Link } from "react-router-dom"; // Viktigt att importera Link

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-logo">Pandemica</h1>
      <nav className="nav-bar">
        <Link to="/">Startsida</Link>
        <Link to="/statistik">Statistik</Link>
        <Link to="/journal">Journal</Link>
      </nav>
    </div>
  );
}

export default Header;
