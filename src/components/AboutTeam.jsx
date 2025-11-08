import React from "react";
import "../styles/AboutTeam.css";
import IndiaGate from "../assets/images/IndiaGate.png";
// import Note from "../assets/images/Note.png";
import Clip from "../assets/images/Clip.png";
import TeamPeople from "../assets/images/TeamPeople.png";
import ArrowLeft from "../assets/images/ArrowLeft.png";
import ArrowRight from "../assets/images/ArrowRight.png";
import ArrowTop from "../assets/images/ArrowTop.png";

const AboutTeam = () => {
  return (
    <section className="about-team">
      <div className="about-left">
        <div className="note-container">
          {/* <img src={Note} alt="Note" className="note-bg" /> */}
          <img src={Clip} alt="Clip" className="note-clip" />
          <div className="note-text">
            <p>
              Some craft films. Some build brands. Some curate art.
              We bring it all together — a collective of storytellers
              driven by one belief: every project deserves to be more than just
              a message; it should become a masterpiece.
              <br />
              <br />
              From first spark to final frame, from raw ideas to timeless
              visuals — we shape stories that stay with you.
            </p>
          </div>
        </div>
        <img src={IndiaGate} alt="India Gate" className="india-gate" />
        <p className="arrow-label-left">Branding Experts</p>
        <img src={ArrowLeft} alt="Arrow Left" className="arrow-left" />
      </div>

      <div className="about-right">
        <div className="people-section">
          <img src={TeamPeople} alt="Team" className="team-people" />
          <img src={ArrowRight} alt="Arrow Right" className="arrow-right" />
          <img src={ArrowTop} alt="Arrow Bottom" className="arrow-bottom" />

          <p className="arrow-label-top">Film Makers</p>
          <p className="arrow-label-right">Art Curators</p>
        </div>

        <div className="about-desc">
          <p>Take a closer look at the stories V bring to life.</p>
          <button className="portfolio-btn">View Portfolio</button>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
