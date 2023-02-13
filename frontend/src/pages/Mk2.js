import React from "react";
import mk2img from "../images/mk2.gif";
import { Link } from "react-router-dom";

const Mk2 = () => {
  return (
    <div>
      <div className="mk2">
        <ul className="navbar">
          <Link className="link2" to="/mk1">
            Mk1
          </Link>
          <Link className="link2" to="/about">
            About
          </Link>
          <Link className="link2" to="/about">
            Demo
          </Link>
        </ul>
        <div className="img-container">
          <img className="gif blue" src={mk2img} alt="logo" />
        </div>
        <p>Brogill Mk2</p>
        <a
          className="App-link2"
          href="http://www.brogill.com/download/mk2.zip"
          target="_blank"
          rel="noopener noreferrer"
        >
          Downlaod SVG Files
        </a>
      </div>
    </div>
  );
};

export default Mk2;
