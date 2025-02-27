import { Link } from "react-router-dom"; // Viktigt att importera Link

function HeroBanner() {
  return (
    <div className="hero-container">
      <p>
        Utforska <span className="text-overlay">COVID-19-statistik</span> för
        länder runt om i <span className="text-overlay-bottom">världen</span>{" "}
        och följ de senaste{" "}
        <span className="text-overlay-bottom">trenderna</span> i din region.
      </p>
      <Link to="" className="hero-link">
        Utforska Statistik
      </Link>
    </div>
  );
}

export default HeroBanner;
