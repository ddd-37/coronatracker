import React from "react";
import { Link } from "gatsby";
import { GiWorld } from "react-icons/gi";
import { FaFlagUsa } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link activeClassName="navbar-active" to="/">
        <GiWorld />
        <h4>World Map</h4>
      </Link>
      <Link activeClassName="navbar-active" to="/usa">
        <FaFlagUsa />
        <h4>USA Map</h4>
      </Link>
    </div>
  );
};

export default Navbar;
