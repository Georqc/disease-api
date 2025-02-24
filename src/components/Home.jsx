import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to DiseaseAPI</h1>
      <p>Choose an option to view statistics:</p>
      <div className="home-links">
        <Link to="/CountryStats">View statistics for Sweden</Link>
        <br />
        <Link to="/global-stats">View global statistics</Link>
      </div>
    </div>
  );
}

export default Home;
