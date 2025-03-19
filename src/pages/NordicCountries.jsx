import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NordicCountries() {
  const nordicCountries = ["Sweden", "Denmark", "Norway", "Finland", "Iceland"];
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all(
      nordicCountries.map((country) =>
        fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
          .then((response) => response.json())
          .catch((error) =>
            console.error(`Error fetching ${country} data:`, error)
          )
      )
    ).then((results) => setData(results));
  }, []);

  if (data.length === 0) {
    return <p>Laddar data...</p>;
  }

  return (
    <div className="country-container">
      <h1 className="norden-rubrik">Nordens Covid-19 Statistik</h1>
      <p className="norden-paragraf">
        Få en inblick i hur{" "}
        <span className="text-overlay-bottom">pandemin</span> har{" "}
        <span className="text-overlay-bottom">påverkat</span> de{" "}
        <span className="text-overlay-bottom">nordiska länderna</span>. Här
        hittar du uppdaterad data om{" "}
        <span className="text-overlay-bottom-green">bekräftade fall</span>,
        <span className="text-overlay-bottom-green">dödsfall</span> och{" "}
        <span className="text-overlay-bottom-green">återhämtade patienter</span>{" "}
        för Sverige, Norge, Danmark, Finland och Island.
      </p>
      <div className="country-list">
        {data.map((countryData, index) => (
          <div key={index} className="country-box">
            <h1>Statistik för {countryData.country}</h1>
            <p>Population: {countryData.population.toLocaleString()}</p>
            <p>Totala fall: {countryData.cases.toLocaleString()}</p>
            <p>Dödsfall: {countryData.deaths.toLocaleString()}</p>
            <p>Återhämtade: {countryData.recovered.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div>
        <Link to="/Statistik" className="utforska-link">
          Utforska mer
        </Link>
      </div>
    </div>
  );
}

export default NordicCountries;
