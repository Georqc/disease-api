import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-om-oss">
        <p className="om-oss">
          Vår sida tillhandahåller aktuell statistik och nyheter om Covid-19,
          med information hämtad från pålitliga källor. Vi strävar efter att
          göra data om smittspridning, vaccinationer och globala trender
          lättillgänglig för alla. Genom att samla och presentera uppdaterad
          information på ett tydligt sätt vill vi bidra till en bättre
          förståelse av pandemins utveckling.
        </p>
      </div>

      <p className="copyright"> © 2025 Pandemica. All Rights Reserved</p>

      <div className="footer-nav">
        <ul>
          <h1>Navigationslänkar</h1>

          <li>
            <Link to="/">Startsida</Link>
          </li>
          <li>
            <Link to="../pages/NordicCountries">Statistik</Link>
          </li>
          <li>Globalt</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
