import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import HeroBanner from "../components/HeroBanner";
import NordicCountries from "./NordicCountries";
import Footer from "../components/Footer";
import Information from "../components/Information";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <HeroBanner />
      <NordicCountries />

      <Information />
      <Footer />
    </div>
  );
}

export default Home;
