import React, { useEffect, useState, useRef } from "react";
import Swiper from "swiper";
import "../../node_modules/swiper/swiper-bundle.min.css";
import "../CSS/testimonials.css";

import testimonialsData from "../json/testimonials.json";

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2.3,
      loop: true,
      spaceBetween: 30,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 500, // Auto slide every 5 seconds
        disableOnInteraction: false, // Prevent autoplay stopping on user interaction
      },
    });

    const swiperContainer = document.querySelector(".swiper-container");
    swiperContainer.addEventListener("mouseenter", pauseOnHover);
    swiperContainer.addEventListener("mouseleave", resumeOnLeave);

    function pauseOnHover() {
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.stop();
      }
    }

    function resumeOnLeave() {
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.start();
      }
    }

    return () => {
      swiperContainer.removeEventListener("mouseenter", pauseOnHover);
      swiperContainer.removeEventListener("mouseleave", resumeOnLeave);
    };
  }, []);

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div id="testimonials" className="swiper-container">
      <div className="swiper-wrapper" id="slideHolder">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="swiper-slide">
            <div className="ImgHolder">
              <img src={testimonial.avatar} alt="Avatar" />
            </div>
            <div className="ContentHolder">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.review}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination">
        <button onClick={goToPrevSlide}>&#8249;</button>
        <button onClick={goToNextSlide}>&#8250;</button>
      </div>
    </div>
  );
};

export default Testimonials;
