import { useState, useEffect } from "react";

function GlobalCountries() {
  const globalCountries = [
    "USA",
    "France",
    "UK",
    "Germany",
    "Italy",
    "China",
    "Russia",
    "Japan",
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all(
      globalCountries.map((country) =>
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
      {data.map((countryData, index) => (
        <div key={index} className="country-box">
          <h1>Stats for {countryData.country}</h1>
          <p>Population: {countryData.population}</p>
          <p>Total cases: {countryData.cases}</p>
          <p>Deaths: {countryData.deaths}</p>
          <p>Recovered: {countryData.recovered}</p>
        </div>
      ))}
    </div>
  );
}

export default GlobalCountries;
