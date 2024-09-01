"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import MarketingSlider2 from "../_components/MarketingSlider2";

const slides = [
  {
    title: "Search <br/> Engine Optimization", 
    text: "Optimization of your website and content to improve search engine rankings and increase organic traffic.", 
    service: "Search Engine Optimization",
  },
  {
    title: "Pay-Per-Click <br/> Advertising", 
    text: "Strategic management of PPC campaigns to drive targeted traffic and maximise return on ad spend (ROAS).", 
    service: "Pay-Per-Click Advertising",
  },
  {
    title: "Social Media <br/> Marketing", 
    text: "Development and execution of social media strategies to engage your audience, build brand loyalty, and increase reach.", 
    service: "Social Media Marketing",
  },
  {
    title: "Email <br /> Marketing", 
    text: "Design and execution of personalised email campaigns to nurture leads and drive customer engagement.", 
    service: "Email Marketing",
  },
  {
    title: "Online <br/> Reputation", 
    text: "Monitoring and management of your online reputation to maintain a positive brand image and respond effectively to customer feedback.", 
    service: "Online Reputation",
  },
];

const MarketingTab2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    /* Это состояние при загрузке!!! */
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleAccordion = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="wrapper-it-conslt tab1">
      <div className="wrapper-it-conslt__wrapper">
        <button
          className={`wrapper-it-conslt__btn ${isOpen && isMobile ? "_open" : ""}`}
          onClick={toggleAccordion}
        >
          <span className="title">
            <span className="number">02</span> Digital Marketing
          </span>
          <span className="icon">
            <ArrowRight />
          </span>
        </button>
        <motion.div
          className="wrapper-it-conslt__content"
          initial={{ height: isMobile ? 0 : "auto", opacity: isMobile ? 0 : 1 }}
          animate={{
            height: isMobile ? (isOpen ? "auto" : 0) : "auto",
            opacity: isMobile ? (isOpen ? 1 : 0) : 1,
          }}
          transition={{ duration: 0.5 }}
          style={{ overflow: "hidden" }}
        >
          <div className="wrapper">
            <MarketingSlider2 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketingTab2;