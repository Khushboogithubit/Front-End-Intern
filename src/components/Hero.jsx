import React from "react";
import Mandala from "../assets/images/Hero Mandala.png";
import Logo from "../assets/images/logo.png";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="mandala-wrapper">
          <img src={Mandala} alt="Mandala" className="mandala" />
          <img src={Logo} alt="V Films Logo" className="hero-logo" />
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-content">
          <h2 className="hero-title">
            Varnan is where stories find<br />their voice and form
          </h2>
          <h3 className="hero-subtitle">Films . Brands . Art</h3>
          <p className="hero-desc">
            Since 2009, V’ve been telling stories – stories of people, their
            journeys, and the places that shape them. Some begin in polished
            boardrooms, others in humble village squares. But every story starts
            the same way – by listening with intention. V believes it takes trust,
            patience, and an eye for the unseen to capture what truly matters. V
            doesn’t just tell stories – V honors them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
