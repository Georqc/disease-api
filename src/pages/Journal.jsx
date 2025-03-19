import React, { useState, useEffect } from "react";

const Journal = () => {
  const [journalData, setJournalData] = useState([]);

  useEffect(() => {
    fetch("https://informatik12.ei.hv.se/JournalAPI/api/Journal/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data hämtad:", data);
        setJournalData(data);
      })
      .catch((error) => {
        console.error("Fel vid hämtning av data:", error);
      });
  }, []);

  return (
    <div className="journal-container">
      <h1 className="journal-rubrik">Journal</h1>
      <p className="journal-paragraf">
        Få en översikt av patientens aktuella status, inklusive{" "}
        <span className="text-overlay-bottom">ID</span>,{" "}
        <span className="text-overlay-bottom-green">postnummer</span> och
        viktiga <span className="text-overlay-bottom">anteckningar</span>. Här
        kan du se <span className="text-overlay-bottom-green">relevant</span>{" "}
        <span className="text-overlay-bottom">information</span> som hjälper
        till att säkerställa korrekt och snabb hantering av{" "}
        <span className="text-overlay-bottom">patientens</span>{" "}
        <span className="text-overlay-bottom-green">ärende</span>.
      </p>
      <div className="journal-section">
        {journalData.length > 0 ? (
          journalData.map((journal, index) => (
            <div key={index} className="journal-ruta">
              <div className="journal-avstand">
                <p className="journal-patient">
                  <strong>Patient ID</strong> {journal.journalId}
                </p>
                <p className="journal-personnummer">
                  <strong>Pers. nummer</strong> {journal.personnummer}
                </p>
              </div>
              <p className="journal-anteckningar">
                <strong>Anteckningar:</strong> {journal.anteckning}{" "}
              </p>{" "}
              <br />
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
