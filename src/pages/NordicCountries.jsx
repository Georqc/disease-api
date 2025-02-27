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
      <h1 className="norden-rubrik">
        <span className="text-overlay-bottom">Covid-19 Statistik</span> - Norden
      </h1>
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
        <Link to="" className="utforska-link">
          Utforska mer
        </Link>
      </div>
    </div>
  );
}

export default NordicCountries;
