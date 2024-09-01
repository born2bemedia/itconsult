"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import MarketingSlider1 from "../_components/MarketingSlider1";

const slides = [
  {
    title: "Market Research <br /> and Analysis", 
    text: "In-depth analysis of market trends, consumer behaviour, and competitor strategies to inform and tailor your marketing approach.", 
    service: "Market Research and Analysis",
  },
  {
    title: "Brand <br/> Positioning", 
    text: "Clear definition and positioning of your brand to differentiate from competitors and connect with your target audience.", 
    service: "Brand Positioning",
  },
  {
    title: "Go-to-Market <br /> Strategy", 
    text: "Strategic planning for the successful launch of new products or services, ensuring market readiness and maximum impact.", 
    service: "Go-to-Market Strategy",
  },
  {
    title: "Multichannel <br /> Campaign Planning", 
    text: "Coordination of marketing campaigns across multiple channels to ensure consistent messaging and broader reach.", 
    service: "Multichannel Campaign Planning",
  },
  {
    title: "Customer <br /> Journey Mapping", 
    text: "Detailed mapping of customer interactions with your brand to optimise the overall experience and improve conversion rates.", 
    service: "Customer Journey Mapping",
  },
];

const MarketingTab1 = () => {
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
            <span className="number">01</span> Marketing Strategy and Planning
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
            <MarketingSlider1 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketingTab1;