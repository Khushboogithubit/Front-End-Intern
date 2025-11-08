import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";   // ✅ Added import
import AboutTeam from "./components/AboutTeam";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutTeam />
      <AboutUs /> 
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
