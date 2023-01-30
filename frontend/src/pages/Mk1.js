import React from "react";
import mk1img from "../images/mk1.gif";
import { Link } from "react-router-dom";

const Mk1 = () => {
  return (
    <div className="mk2">
      <ul className="navbar">
        <Link className="link1" to="/">
          Mk2
        </Link>
        <Link className="link1" to="/about">
          About
        </Link>
        <Link className="link1" to="/about">
          Demo
        </Link>
      </ul>
      <div className="img-container">
        <img className="gif" src={mk1img} alt="logo" />
      </div>
      <p>Brogill Mk1</p>
      <a
        className="App-link1"
        href="http://localhost:5000/download/mk1.zip"
        target="_blank"
        rel="noopener noreferrer"
      >
        Downlaod SVG Files
      </a>
    </div>
  );
};

export default Mk1;
