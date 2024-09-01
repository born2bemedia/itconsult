"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import ItConsultingSlider1 from "../_components/ItConsultingSlider1";

const slides = [
  {
    title: "IT Roadmap <br /> Development",
    text: "Comprehensive IT roadmaps that guide your technology investments and initiatives, ensuring alignment with your long-term business goals.",
    service: 'IT Roadmap Development',
  },
  {
    title: "Technology <br /> Assessment",
    text: "Analysis of  current IT infrastructure, identifying strengths and areas for improvement to optimise performance.",
    service: 'Technology Assessment',
  },
  {
    title: "Digital Transformation <br /> Strategy",
    text: "Customised strategies to help your business transition to digital platforms, enhancing efficiency, innovation, and competitiveness.",
    service: 'Digital Transformation Strategy',
  },
  {
    title: "IT Budgeting <br /> and Forecasting",
    text: "Planning your IT expenditures, ensuring that business investments are cost-effective and aligned with your growth objectives.",
    service: 'IT Budgeting and Forecasting',
  },
  {
    title: "Risk <br /> Management",
    text: "Identifying and mitigating IT risks, ensuring business systems comply with relevant regulations and industry standards.",
    service: 'Risk Management',
  },
];

const ItTab1 = () => {
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
            <span className="number">01</span> IT Strategy and Planning
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
            <ItConsultingSlider1 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItTab1;