import React, { useState, useEffect } from "react";

const Journal = () => {
  const [journalData, setJournalData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5020/api/Journal")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data hämtad:", data); // Lägg till denna rad
        setJournalData(data); // Sätt datan i state
      })
      .catch((error) => {
        console.error("Fel vid hämtning av data:", error);
      });
  }, []);

  return (
    <div className="journal-container">
      <h1 className="journal-rubrik">Journal</h1>
      <p className="journal-paragraf">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
        labore exercitationem nobis voluptatibus sint iusto fuga laudantium ab,
        sit dignissimos. Assumenda maxime molestias at ipsa nesciunt quibusdam
        ullam id fugit.
      </p>
      <div className="journal-section">
        {journalData.length > 0 ? (
          journalData.map((journal, index) => (
            <div key={index} className="journal-ruta">
              <div className="journal-avstand">
                <p className="journal-patient">
                  <strong>Patient ID:</strong> {journal.patientId}
                </p>
                <p className="journal-anteckningar">
                  <strong>Anteckningar:</strong> {journal.anteckning}{" "}
                </p>{" "}
                <br />
              </div>
            </div>
          ))
        ) : (
          <p>Ingen data tillgänglig.</p>
        )}
      </div>
    </div>
  );
};

export default Journal;
