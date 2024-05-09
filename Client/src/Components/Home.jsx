import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Home2 from "./Home2";
import About from "./About";
import Client from "./Client";
import Testimonial from "./Testimonials";
import Faq from "./Faqs";
import "../CSS/home.css";

const Home = () => {
  const loc = useLocation();

  useEffect(() => {
    console.log(loc);
    if (!loc.hash.length) {
      window.scrollTo(0, 0);
    }
  }, [loc]);
  return (
    <>
      <div className="home">
        <div className="heading-texts">
          <img
            src="/images/gms_icon-nobg.png"
            alt="logo"
            style={{ width: "12rem", borderRadius: "20%" }}
          />
          <h1>
            Get<span>My</span>Sponsor
          </h1>
          <h5>Connect. Raise. Succeed</h5>
          <h2>Get your college fest sponsored</h2>
        </div>
        <div className="home-img">
          <img src="/images/people.png" alt="" />
        </div>
        {/* <Home2 /> */}
      </div>

      <About />
      <Client />
      <Testimonial />
      <Faq />
    </>
  );
};

export default Home;
