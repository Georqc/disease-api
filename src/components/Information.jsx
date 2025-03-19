import sjukhus from "../assets/sjukhus.jpg";
import karta from "../assets/högskolanKarta.jpg";
import { Link } from "react-router-dom";

function Information() {
  return (
    <>
      <section className="moderbolag-container">
        <div className="moderbolag-content">
          <div className="moderbolag-bild">
            <img src={sjukhus} alt="Sjukhus-bild" className="sjukhus-bild" />
          </div>

          <div className="moderbolag-text">
            <h2>Varför gör vi det vi gör?</h2>
            <p>
              Vi strävar efter att göra viktig hälsodata, som{" "}
              <span className="text-overlay-bottom">Covid-19</span>,
              lättillgänglig och användbar för alla. Genom vår plattform vill vi
              ge människor och
              <br />
              <span className="text-overlay-bottom-green">
                vårdpersonal
              </span>{" "}
              den information som behövs för att fatta informerade beslut.
              Högskolan Väst Sjukhus, där vi erbjuder tjänster som{" "}
              <span className="text-overlay-bottom">bokningar</span> och{" "}
              <span className="text-overlay-bottom-green">
                journalhantering
              </span>
              , har gett oss en stark grund att bygga på. Vi ser det som vårt
              ansvar att använda vår{" "}
              <span className="text-overlay-bottom">tekniska</span>{" "}
              <span className="text-overlay-bottom-green">expertis</span> för
              att bidra med aktuell och relevant data om Covid-19 för att stödja
              både individen och vårdsystemet i dessa utmanande tider.
            </p>
            <br /> <br />
            <p>
              För mer <span className="text-overlay-bottom">information</span>{" "}
              besök din{" "}
              <Link to="/Journal" className="moderbolag-api-journal">
                Journal
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="karta-container">
        <div className="karta-content">
          <div className="karta-bild">
            <img src={karta} alt="Sjukhus-karta" />
          </div>

          <div className="karta-text">
            <h2>Hitta på sjukhuset</h2>
            <p>
              Kartan visar{" "}
              <span className="text-overlay-bottom">
                Högskolan Väst Sjukhus
              </span>{" "}
              målpunkter, entréer och parkeringar.{" "}
              <span className="text-overlay-bottom-green">Målpunkterna</span>{" "}
              anges som svarta fyrkanter med vita bokstäver. Mer information om
              hur du kan hitta rätt finns inne på sjukhuset.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Information;
