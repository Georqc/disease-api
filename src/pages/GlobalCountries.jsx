import { useState, useEffect } from "react";

function GlobalCountries() {
  const [data, setData] = useState([]);
  const [lasMer, setLasMer] = useState(10);

  useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/countries`)
      .then((response) => response.json())
      .then((results) => setData(results))
      .catch((error) => console.error(`Error fetching data:`, error));
  }, []);

  if (data.length === 0) {
    return <p>Laddar data...</p>;
  }

  const hanteraToggle = (country) => {
    setLasMer(lasMer === country ? null : country);
  };

  return (
    <div className="global-container">
      <h1 className="global-rubrik">Global Covid-19 Statistik</h1>
      <p className="global-paragraf">
        Få en översikt av hur{" "}
        <span className="text-overlay-bottom">pandemin</span> har påverkat{" "}
        <span className="text-overlay-bottom">olika länder</span>{" "}
        <span className="text-overlay-bottom">världen över</span>. Här hittar du
        aktuell data om{" "}
        <span className="text-overlay-bottom-green">bekräftade fall</span>,
        <span className="text-overlay-bottom-green">dödsfall</span> och{" "}
        <span className="text-overlay-bottom-green">återhämtade patienter</span>
        , uppdaterad i realtid.
      </p>
      <div className="global-list">
        {data.map((countryData, index) => (
          <div key={index} className="global-box">
            <h1>Statistik för {countryData.country}</h1>
            <p>Population: {countryData.population.toLocaleString()}</p>
            <p>Totala fall: {countryData.cases.toLocaleString()}</p>
            <p>Dödsfall: {countryData.deaths.toLocaleString()}</p>
            <p>Återhämtade: {countryData.recovered.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <div className="button-content">
          <button className="las-mer">Visa mer</button>
        </div>
      </div>
    </div>
  );
}

export default GlobalCountries;
