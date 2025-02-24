import { useState, useEffect } from "react";

function CountryStats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries/sweden")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (data === null) {
    return <p>Laddar data...</p>;
  }

  return (
    <>
      <div className="country-container">
        <div className="country-box">
          <h1 className="country-stats">Stats for {data.country}</h1>
          <p>Population: {data.population}</p>
          <p>Total cases: {data.cases}</p>
          <p>Deaths: {data.deaths}</p>
          <p>Recovered: {data.recovered}</p>
        </div>
        <p>More to come...</p>
      </div>
    </>
  );
}

export default CountryStats;
