import React from "react";
import "../CSS/about.css";
import img from "../Images/bg3.png";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
        <div className="sec-title">
          <h2>We are building a B2B connecting platform</h2>
        </div>
        <div className="text">
          GetMySponsor provides a platform that matches the right sponsors with
          the sponsored entities. Our customized sponsorship strategies identify
          potential sponsors that align with our clients' values and goals.
        </div>
        <div className="text">
          We work to build relationships and negotiate favorable terms, ensuring
          maximum benefits for both parties.
        </div>
      </div>

      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column wow fadeInLeft">
          <div className="author-desc">
            <h2>GetMySponsor</h2>
            <span>Connect.Raise.Succeed</span>
          </div>
          <figure className="image-1">
            <a href="#" className="lightbox-image" data-fancybox="images">
              <img src={img} alt="" />
            </a>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
