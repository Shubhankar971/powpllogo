import React from "react";
import "./PowerPlayLogo.css";

const PowerPlayLogo = () => {
  return (
    <div className="logo-container">

      {/* Shield */}
      <div className="shield">
        <div className="player"></div>
        <div className="ball"></div>
      </div>

      {/* Text */}
      <h1 className="logo-text">
        <span className="power">Power</span>
        <span className="play">Play</span>
      </h1>

      <p className="sub-text">CRICKET ACADEMY</p>

    </div>
  );
};

export default PowerPlayLogo;