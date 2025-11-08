import React from "react";
import "../styles/AboutUs.css";
import Mountain from "../assets/images/Mountain.png";
import LogoArc from "../assets/images/LogoArc.png"; // ✅ your semicircle logo image

const AboutUs = () => {
  return (
    <section className="aboutus">
      {/* LEFT SIDE */}
      <div className="aboutus-left">
        <h2 className="aboutus-heading">
          A montage of familiar faces and names.
        </h2>
        <p className="aboutus-subtext">
          Some stories come from the biggest names.
          <br />
          Others begin with bold, rising voices.
          <br />
          We’ve been fortunate to walk alongside both –
          <br />
          listening, creating, and building stories that matter.
        </p>

        <div className="aboutus-stats">
          <div className="note note1">
            <h3>85+</h3>
            <p>Projects</p>
          </div>
          <div className="note note2">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="note note3">
            <h3>10+</h3>
            <p>Experts Team</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="aboutus-right">
        <p className="quote">
          Every project is more than just a brief – <br />
          it’s a new chapter waiting to be written. <br />
          Together, we’ve crafted tales that inspire, <br />
          connect, and endure.
        </p>

        {/* ✅ One semicircular logo image */}
        <img src={LogoArc} alt="Our Partners" className="logo-arc" />

        <img src={Mountain} alt="Mountain" className="mountain-img" />
      </div>
    </section>
  );
};

export default AboutUs;
