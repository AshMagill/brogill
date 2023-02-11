import React from "react";
import logo from "../images/brogill-logo.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <ul className="navbar">
        <Link className="linkabout" to="/mk1">
          Mk1
        </Link>
        <Link className="linkabout" to="/">
          Mk2
        </Link>
      </ul>
      <div className="img-container-about">
        <img className="logo " src={logo} alt="Brogill logo" />
      </div>
      <p>Designed by Diede Broers and Ash Magill</p>
    </div>
  );
};

export default About;
