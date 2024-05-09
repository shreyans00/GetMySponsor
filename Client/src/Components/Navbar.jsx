import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const location = useLocation();
  const regis_token = localStorage.getItem("ocms_token");
  const dash =
    regis_token === null ? { to: "/register" } : { to: "/dashboard" };

  const handleNavLinkClick = (targetSection) => {
    // If the current route is not the root route, navigate directly to the target section
    if (location.pathname !== "/") {
      window.location.href = `/#${targetSection}`; // Redirect to the target section
    }
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bgval hover-nav ho_navbar">
      <div className="container">
        <span className="navbar-brand">
          <img
            src="/images/gms_icon-nobg.png"
            alt="logo"
            width="48"
            height="40"
            className="d-inline-block align-text-top"
          />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item navg">
              <ScrollLink
                className="nav-link active"
                to="home"
                spy={true}
                smooth={true}
                duration={0}
                onClick={() => handleNavLinkClick("home")}
              >
                <span className="tex">Home</span>
              </ScrollLink>
            </li>
            <li className="nav-item navg">
              <ScrollLink
                className="nav-link active"
                to="about"
                spy={true}
                smooth={true}
                duration={0}
                onClick={() => handleNavLinkClick("about")}
              >
                <span className="tex">About</span>
              </ScrollLink>
            </li>
            <li className="nav-item navg">
              <ScrollLink
                className="nav-link"
                to="clients"
                spy={true}
                smooth={true}
                duration={0}
                onClick={() => handleNavLinkClick("clients")}
              >
                <span className="tex"> Clients</span>
              </ScrollLink>
            </li>
            <li className="nav-item navg">
              <ScrollLink
                className="nav-link"
                to="testimonials"
                spy={true}
                smooth={true}
                duration={0}
                onClick={() => handleNavLinkClick("testimonials")}
              >
                <span className="tex"> Testimonials</span>
              </ScrollLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item navg">
              <Link
                className="nav-link active regis"
                aria-current="page"
                {...dash}
              >
                <span className="tex">
                  {regis_token === null ? "Register" : "Dashboard"}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
