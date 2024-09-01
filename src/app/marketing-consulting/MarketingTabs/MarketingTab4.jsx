"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import MarketingSlider4 from "../_components/MarketingSlider4";

const slides = [
  {
    title: "Automation <br /> Workflow Design", 
    text: "Design and implementation of automation workflows that streamline marketing tasks and enhance lead nurturing.", 
    service: "Automation Workflow Design",
  },
  {
    title: "CRM Solutions Integration", 
    text: "Integration of CRM systems with your marketing tools to ensure seamless data flow and a unified view of customer interactions.", 
    service: "CRM Solutions Integration",
  },
  {
    title: "Lead Scoring <br/> and Segmentation", 
    text: "Implementation of lead scoring models and audience segmentation to target the right prospects with the right message.", 
    service: "Lead Scoring and Segmentation",
  },
  {
    title: "User <br/> Personalization Strategies", 
    text: "Development of personalised marketing approaches using CRM data to improve customer engagement and satisfaction.", 
    service: "User Personalization Strategies",
  },
  {
    title: "Sales <br /> Funnel Optimization", 
    text: "Analysis and optimization of your sales funnel to reduce drop-off points and increase conversions.", 
    service: "Sales Funnel Optimization",
  },
];
const MarketingTab4 = () => {
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
            <span className="number">04</span> Marketing Automation and CRM
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
            <MarketingSlider4 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketingTab4; 