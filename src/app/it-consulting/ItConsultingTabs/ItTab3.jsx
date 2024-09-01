"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import ItConsultingSlider3 from "../_components/ItConsultingSlider3";

const slides = [
  {
    title: 'Custom <br /> Software Development',
    text: 'Development of  bespoke software solutions tailored to business needs, ensuring optimal functionality and user experience',
    service: 'Custom Software Development',
  },
  {
    title: 'Application <br /> Integration',
    text: 'Integration of various software applications, creating a unified system that enhances productivity and data flow across organisation.',
    service: 'Application Integration',
  },
  {
    title: 'API <br/> Integration',
    text: 'Integration of APIs to enable seamless communication between software systems to enhance interoperability.',
    service: 'API Integration',
  },
  {
    title: 'Legacy <br /> System Modernization',
    text: 'Update and integration of legacy systems with modern technologies, ensuring continued relevance and improved performance.',
    service: 'Legacy System Modernization',
  },
  {
    title: 'Enterprise <br /> Resource Planning',
    text: 'Development  and implementation of ERP systems that streamline your business processes, providing a single source of truth for all your operations.',
    service: 'Enterprise Resource Planning',
  },
];

const ItTab3 = () => {
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
            <span className="number">03</span> Software Development and Integration
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
            <ItConsultingSlider3 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItTab3; 