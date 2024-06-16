import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../CSS/register.css";

function ContactForm() {
  const [isCompanyRegistrationActive, setIsCompanyRegistrationActive] =
    useState(true);

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

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);

      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      };
    });
  }, []);

  // useEffect(() => {
  //   const inputs2 = document.querySelectorAll(".input2");

  //   function focusFunc() {
  //     let parent = this.parentNode;
  //     parent.classList.add("focus");
  //   }

  //   function blurFunc() {
  //     let parent = this.parentNode;
  //     if (this.value === "") {
  //       parent.classList.remove("focus");
  //     }
  //   }

  //   inputs2.forEach((input) => {
  //     input.addEventListener("focus", focusFunc);
  //     input.addEventListener("blur", blurFunc);

  //     return () => {
  //       input.removeEventListener("focus", focusFunc);
  //       input.removeEventListener("blur", blurFunc);
  //     };
  //   });
  // }, []);

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [otherIndustry, setOtherIndustry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [otherCategory, setOtherCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleOtherCategoryChange = (e) => {
    setOtherCategory(e.target.value);
  };
  const handleIndustryChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  const handleOtherIndustryChange = (e) => {
    setOtherIndustry(e.target.value);
  };

  const handleToggleClick = () => {
    setIsCompanyRegistrationActive((prev) => !prev);
  };

  const handleSubmitCompany = async (e) => {
    alert("Congratulation, You've registered your fest. Will contact you soon");
    console.log(e.target.pocName.value);
    e.preventDefault();
    try {
      // const response = await axios.post("register/registerCompany", {
      const response = await axios.post(
        "http://localhost:8000/register/registerCompany",
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
        "http://localhost:8000/register/registerFest",
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
                  <input
                    type="text"
                    name="pocName"
                    className="input"
                    required
                  />
                  <label htmlFor="">PoC Name</label>
                  <span>PoC Name</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="position"
                    className="input"
                    required
                  />
                  <label htmlFor="">Position in the Company</label>
                  <span>Position in the Company</span>
                </div>
                <div className="input-container">
                  <input
                    type="tel"
                    name="contactNumber"
                    className="input"
                    required
                  />
                  <label htmlFor="">Contact Number</label>
                  <span>Contact Number</span>
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="input" required />
                  <label htmlFor="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="companyName"
                    className="input"
                    required
                  />
                  <label htmlFor="">Company Name</label>
                  <span>Company Name</span>
                </div>
                <div className="input-container">
                  <select
                    name="industry"
                    className="input"
                    onChange={handleIndustryChange}
                    value={selectedIndustry}
                  >
                    <option value="">Select Industry</option>
                    <option value="technology">Technology</option>
                    <option value="education">Education</option>
                    <option value="health">Health</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {selectedIndustry === "other" && (
                  <div className="input-container">
                    <input
                      type="text"
                      name="otherIndustry"
                      className="input"
                      value={otherIndustry}
                      onChange={handleOtherIndustryChange}
                      placeholder="Specify Industry"
                    />
                  </div>
                )}
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
                  <input
                    type="text"
                    name="pocName"
                    className="input"
                    required
                  />
                  <label htmlFor="">PoC Name</label>
                  <span>PoC Name</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="portfolio"
                    className="input"
                    required
                  />
                  <label htmlFor="">Portfolio in the Fest</label>
                  <span>Portfolio in the Fest</span>
                </div>
                <div className="input-container">
                  <input
                    type="tel"
                    name="contactNumber"
                    className="input"
                    required
                  />
                  <label htmlFor="">Contact Number</label>
                  <span>Contact Number</span>
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="input" required />
                  <label htmlFor="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="collegeName"
                    className="input"
                    required
                  />
                  <label htmlFor="">College Name</label>
                  <span>College Name</span>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="festName"
                    className="input"
                    placeholder="Fest Name"
                    required
                  />
                  {/* <label htmlFor="">Fest Name</label>
                  <span>Fest Name</span> */}
                </div>
                <div className="input-container">
                  {/* <textarea name="festDetails" className="input"></textarea>
                  <label htmlFor="">Fest Details</label> */}
                  <input
                    type="text"
                    name="festDetails"
                    className="input"
                    placeholder="Fest Details"
                  />
                  {/* <label htmlFor="">Fest Details</label>
                  <span>Fest Details</span> */}
                </div>
                <div className="input-container">
                  <select
                    name="category"
                    className="input"
                    onChange={handleCategoryChange}
                    value={selectedCategory}
                  >
                    <option value="">Select Category</option>
                    <option value="socult">Socult</option>
                    <option value="tech">Tech</option>
                    <option value="sports">Sports</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                {selectedCategory === "others" && (
                  <div className="input-container">
                    <input
                      type="text"
                      name="otherCategory"
                      className="input"
                      value={otherCategory}
                      onChange={handleOtherCategoryChange}
                      placeholder="Specify Category"
                    />
                  </div>
                )}
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
