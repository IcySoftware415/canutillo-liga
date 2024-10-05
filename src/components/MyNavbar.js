import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import logo from "../images/futlogo.png";

import "./MyNavbar.css";

const MyNavbar = () => {
  return isMobile ? <MyMobileNavbar /> : <MyDesktopNavbar />;
};

const MyDesktopNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-desktop">
      <div>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="canutillo" />
        </Link>
        <Link className="navbar-brand" to="/ligas">
          Ligas
        </Link>
        <Link className="navbar-brand" to="/partidos">
          Partidos
        </Link>
      </div>
    </Navbar>
  );
};

const MyMobileNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-mobile">
      <div>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="canutillo" />
        </Link>
        <Link className="navbar-brand" to="/ligas">
          Ligas
        </Link>
        <Link className="navbar-brand" to="/partidos">
          Partidos
        </Link>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
