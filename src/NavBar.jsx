import React from "react";
import "./style.css";

export default function NavBar() {
  return (
    <header>
      <nav className="nav">
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#projets">Projets</a></li>
          <li className="bouton-contact"><a href="#accueil">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
