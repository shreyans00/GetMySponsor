import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../CSS/register.css";

function ContactForm() {
  const [isCompanyRegistrationActive, setIsCompanyRegistrationActive] =
    useState(true);

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);

      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      };
    });
  }, []);

  const handleToggleClick = () => {
    setIsCompanyRegistrationActive((prev) => !prev);
  };

  const handleSubmitCompany = async (e) => {
    alert("Congratulation, You've registered your fest. Will contact you soon");
    console.log(e.target.pocName.value);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/register/registerCompany",
        {
          poc_name: e.target.pocName.value,
          position: e.target.position.value,
          contact: e.target.contactNumber.value,
          email: e.target.email.value,
          company_name: e.target.companyName.value,
          industry: e.target.industry.value,
          LinkedIn: e.target.linkedin.value,
          facebook: e.target.facebook.value,
        }
      );
      console.log(`response data is: ${response.data}`);
      e.target.reset();
    } catch (error) {
      console.error("Error registering company:", error);
    }
  };

  const handleSubmitFest = async (e) => {
    alert(
      "Congratulation, You've registered your company. Will contact you soon"
    );
    console.log(e.target);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/register/registerFest",
        {
          poc_name: e.target.pocName.value,
          portfolio: e.target.portfolio.value,
          contact: e.target.contactNumber.value,
          email: e.target.email.value,
          fest_name: e.target.festName.value,
          college: e.target.collegeName.value,
          fest_details: e.target.festDetails.value,
          category: e.target.category.value,
        }
      );
      console.log(`response data is: ${response.data}`);
      e.target.reset();
    } catch (error) {
      console.error("Error registering fest:", error);
    }
  };

  return (
    <div className="containerRegis">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <img
            src="/images/gms_icon-nobg.png"
            alt="logo"
            width="48"
            height="40"
            className="d-inline-block align-text-top"
          />
          <h3 className="title">Let's get in touch</h3>
          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i>
              <p>
                Indian Institute of Technology Kharagpur, West Bengal, India
                (721302)
              </p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i>
              <p>contact@getmysponsor.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>
              <p>+91 7011841506 / 6205839994</p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <Link
                to="https://www.facebook.com/people/Get-My-Sponsor/100092603765889/"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/company/getmysponsor/about"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="RegisPart">
          {/* <p>Toggle between Company and Fest Registration</p> */}
          <div className="toggle-button">
            <button
              className={`toggle-btn ${
                isCompanyRegistrationActive ? "active" : ""
              }`}
              onClick={handleToggleClick}
            >
              Company
            </button>
            <button
              className={`toggle-btn ${
                !isCompanyRegistrationActive ? "active" : ""
              }`}
              onClick={handleToggleClick}
            >
              Fest
            </button>
          </div>
          {isCompanyRegistrationActive ? (
            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>
              <form
                onSubmit={handleSubmitCompany}
                autoComplete="off"
                method="POST"
              >
                <h3 className="title">Company Registration</h3>
                <div className="input-container">
                  <input type="text" name="pocName" className="input" />
                  <label htmlFor="">PoC Name</label>
                  <span>PoC Name</span>
                </div>
                <div className="input-container">
                  <input type="text" name="position" className="input" />
                  <label htmlFor="">Position in the Company</label>
                  <span>Position in the Company</span>
                </div>
                <div className="input-container">
                  <input type="tel" name="contactNumber" className="input" />
                  <label htmlFor="">Contact Number</label>
                  <span>Contact Number</span>
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="input" />
                  <label htmlFor="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input type="text" name="companyName" className="input" />
                  <label htmlFor="">Company Name</label>
                  <span>Company Name</span>
                </div>
                <div className="input-container">
                  <select name="industry" className="input">
                    <option value="">Select Industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="education">Education</option>
                    <option value="health">Health</option>
                  </select>
                </div>
                <div className="input-container">
                  <input type="text" name="linkedin" className="input" />
                  <label htmlFor="">LinkedIn</label>
                  <span>LinkedIn</span>
                </div>
                <div className="input-container">
                  <input type="text" name="facebook" className="input" />
                  <label htmlFor="">Facebook</label>
                  <span>Facebook</span>
                </div>
                <input type="submit" value="Send" className="btn" />
              </form>
            </div>
          ) : (
            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>
              <form
                onSubmit={handleSubmitFest}
                autoComplete="off"
                method="POST"
              >
                <h3 className="title">Fest/Event Registration</h3>
                <div className="input-container">
                  <input type="text" name="pocName" className="input" />
                  <label htmlFor="">PoC Name</label>
                  <span>PoC Name</span>
                </div>
                <div className="input-container">
                  <input type="text" name="portfolio" className="input" />
                  <label htmlFor="">Portfolio in the Fest</label>
                  <span>Portfolio in the Fest</span>
                </div>
                <div className="input-container">
                  <input type="tel" name="contactNumber" className="input" />
                  <label htmlFor="">Contact Number</label>
                  <span>Contact Number</span>
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="input" />
                  <label htmlFor="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input type="text" name="festName" className="input" />
                  <label htmlFor="">Fest Name</label>
                  <span>Fest Name</span>
                </div>
                <div className="input-container">
                  <input type="text" name="collegeName" className="input" />
                  <label htmlFor="">College Name</label>
                  <span>College Name</span>
                </div>
                <div className="input-container">
                  {/* <textarea name="festDetails" className="input"></textarea>
                  <label htmlFor="">Fest Details</label> */}
                  <input type="text" name="festDetails" className="input" />
                  <label htmlFor="">Fest Details</label>
                  <span>Fest Details</span>
                </div>
                <div className="input-container">
                  <select name="category" className="input">
                    <option value="">Select Category</option>
                    <option value="socult">Socult</option>
                    <option value="tech">Tech</option>
                    <option value="sports">Sports</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <input type="submit" value="Send" className="btn" />
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
