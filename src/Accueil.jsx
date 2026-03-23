import React from "react";  
import { faGithub, faLinkedin, faEnvelope } from '@fortawesome/free-brands-svg-icons'
import './style.css'
export default function Accueil() {
  return (
    <div className="section-accueil" id="accueil">
      <div className="fond-flou"></div>
      <div className="contenu-accueil">
        <h1>Développeur web orienté sécurité</h1>
        <h2>Je construis dans l'ombre pour vous faire briller</h2>
      </div>
      <div className="reseaux-sociaux">
        <a href="https://github.com/koffiwilly" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/willy-k-/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:willy.koffi@outlook.fr">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <span className="chevron-bas">⌄</span>
    </div>
  );
}
