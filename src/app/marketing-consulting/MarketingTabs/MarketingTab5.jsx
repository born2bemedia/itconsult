"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import MarketingSlider5 from "../_components/MarketingSlider5";

const slides = [
  {
    title: "Performance <br/> Dashboard Creation", 
    text: "Setup of real-time dashboards that provide at-a-glance insights into key marketing metrics and campaign performance.", 
    service: "Performance Dashboard Creation",
  },
  {
    title: "Conversion <br/> Rate Analysis", 
    text: "Detailed analysis of conversion rates to identify bottlenecks and improve overall marketing efficiency.", 
    service: "Conversion Rate Analysis",
  },
  {
    title: "A/B Testing <br/> and Experimenting", 
    text: "Execution of A/B tests to determine the most effective marketing strategies and tactics.", 
    service: "A/B Testing and Experimenting",
  },
  {
    title: "Customer <br /> Behaviour Analysis", 
    text: "In-depth analysis of customer behaviour to uncover patterns and insights that inform marketing decisions.", 
    service: "Customer Behaviour Analysis",
  },
  {
    title: "ROI Tracking <br /> and Reporting", 
    text: "Comprehensive reporting on the return on investment for all marketing activities to ensure accountability and improvements.", 
    service: "ROI Tracking and Reporting",
  },
];

const ItTab4 = () => {
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
            <span className="number">05</span> Analytics and Reporting
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
            <MarketingSlider5 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItTab4; 