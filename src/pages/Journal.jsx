import React, { useState, useEffect } from "react";

const Journal = () => {
  const [journalData, setJournalData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5020/api/journal")
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
    <div className="test">
      <h1>Journal-sidan</h1>
      <ul>
        {journalData.length > 0 ? (
          journalData.map((journal, index) => (
            <li key={index}>
              <strong>Patient ID:</strong> {journal.patientId} <br />
              <strong>Anteckning:</strong> {journal.anteckning}
            </li>
          ))
        ) : (
          <p>Ingen data tillgänglig.</p>
        )}
      </ul>
    </div>
  );
};

export default Journal;
