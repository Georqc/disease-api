import React from "react";
import HeroBanner from "../components/HeroBanner";
import NordicCountries from "./NordicCountries";
import Information from "../components/Information";

function Home() {
  return (
    <div className="home-container">
      <HeroBanner />
      <NordicCountries />
      <Information />
    </div>
  );
}

export default Home;
