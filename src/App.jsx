import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Accueil from "./Accueil";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Accueil />
    </>
  );
}

export default App
