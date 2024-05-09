import React from "react";
import "../CSS/footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="pg-footer">
      <footer className="footer">
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <h1>GetMySponsor</h1>
              </a>
            </div>
            {/* <div className="footer-menu">
              <h2 className="footer-menu-name"> Get Started</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Start</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Documentation</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Installation</a>
                </li>
              </ul>
            </div> */}
          </div>
          {/* <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Company</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Contact</a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a href="#">News</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Legal</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <a href="#">Privacy Notice</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Quick Links</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    Support Center
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    Service Status
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Security</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Blog</a>
                </li>
                <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                  <a href="#">Customers</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Reviews</a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="footer-content-column">
            {/* <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> Let's Chat</h2>
              <p className="footer-call-to-action-description">
                {" "}
                Have a support question?
              </p>
              <Link
                className="footer-call-to-action-button button"
                href="#"
                target="_self"
              >
                {" "}
                Get In Touch
              </Link>
            </div> */}
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> Call Us At</h2>
              <p className="footer-call-to-action-link-wrapper">
                {" "}
                <Link
                  className="footer-call-to-action-link"
                  href="tel:0124-64XXXX"
                  target="_self"
                >
                  {" "}
                  +91 6205839994{" "}
                </Link>
              </p>
            </div>
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> Email Us At</h2>
              <p className="footer-call-to-action-link-wrapper">
                {" "}
                <Link
                  className="footer-call-to-action-link"
                  href="tel:0124-64XXXX"
                  target="_self"
                >
                  {" "}
                  contact@getmysponsor.com{" "}
                </Link>
              </p>
            </div>
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> Follow Us At</h2>
              <p className="footer-call-to-action-link-wrapper">
                <Link
                  className="footer-call-to-action-link"
                  href="https://www.linkedin.com/company/getmysponsor/about/"
                  target="_blank"
                >
                  <i
                    className="fab fa-linkedin"
                    onClick={(e) => e.stopPropagation()}
                  ></i>
                </Link>
                <Link
                  className="footer-call-to-action-link"
                  href="https://www.facebook.com/people/Get-My-Sponsor/100092603765889/"
                  target="_blank"
                >
                  <i
                    className="fab fa-facebook"
                    onClick={(e) => e.stopPropagation()}
                  ></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
              GetMySponsor
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
