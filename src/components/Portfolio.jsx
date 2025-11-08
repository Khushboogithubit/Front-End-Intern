import React from "react";
import "../styles/Portfolio.css";
import arrowImg from "../assets/images/leftarrow.png";

const Portfolio = () => {
  return (
    <section className="portfolio">
      {/* Decorative Sides */}
      <div className="decor-left"></div>
      <div className="decor-right"></div>

      <div className="portfolio-content">
        <h2 className="portfolio-heading">The Highlight Reel</h2>
        <p className="portfolio-subtext">Watch the magic we've captured.</p>

        <div className="film-frame">
          {/* Top Film Strip */}
          <div className="film-strip top-strip">
            {Array.from({ length: 12 }).map((_, i) => (
              <div className="film-box" key={i}></div>
            ))}
          </div>

          {/* Video + Arrows */}
          <div className="film-inner">
            <div className="arrow arrow-left">
              <img src={arrowImg} alt="Previous" />
            </div>

            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/GQqw4iSmOx8?si=ZxuSl5fEweTEMmcb"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className="arrow arrow-right">
              <img src={arrowImg} alt="Next" />
            </div>
          </div>

          {/* Bottom Film Strip */}
          <div className="film-strip bottom-strip">
            {Array.from({ length: 12 }).map((_, i) => (
              <div className="film-box" key={i}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
