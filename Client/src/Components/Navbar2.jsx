import React from "react";
import "../CSS/navbar2.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container2">
        <span className="navbar-brand2">
          <img
            src="/images/gms_icon-nobg.png"
            alt="logo"
            width="80"
            height="60"
            className="d-inline-block align-text-top"
          />
          <p>GetMySponsor</p>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
