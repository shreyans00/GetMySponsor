import React, { useState } from "react";
import "../CSS/faqs.css";
import faqData from "../json/faq.json";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="containerFaq">
      <article>
        <div className="img-container"></div>
        <div className="faq">
          <h2>FAQ</h2>
          {faqData.map((faq, index) => (
            <div key={index} className="q-a">
              <div
                className={`q-wrapper ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleAnswer(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") toggleAnswer(index);
                }}
              >
                <h3 tabIndex="0">{faq.question}</h3>
                <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 .799l4 4 4-4"
                    stroke="#F47B56"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <p className={`answer ${activeIndex === index ? "visible" : ""}`}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default FAQAccordion;
