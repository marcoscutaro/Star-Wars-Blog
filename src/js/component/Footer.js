import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer_bg ">
        <div className="container text-white">
      <nav>
        <ul>
          <li>
            <Link className="link" to="/"><h1 className="text-white footer-links">Home</h1></Link>
          </li>
          <li>
            <Link className="link"  to="/TypesOfCharacters"><h1 className="text-white footer-links">Characters</h1></Link>
          </li>
          <li>
            <Link  className="link" to="/TypesOfPlanets"><h1 className="text-white footer-links">Planets</h1></Link>
          </li>

        </ul>
      </nav>
      </div>
    </footer>
  );
}

export default Footer;