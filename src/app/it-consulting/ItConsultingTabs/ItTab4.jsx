"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import ItConsultingSlider4 from "../_components/ItConsultingSlider4";

const slides = [
  {
    title: 'Data <br /> Warehousing',
    text: 'Design and implementation of data warehouses that centralise business data, making data management  easier.',
    service: 'Data Warehousing',
  },
  {
    title: 'Business <br /> Intelligence',
    text: 'Expert provision of actionable insights, enabling data-driven decision-making to drive growth and efficiency.',
    service: 'Business Intelligence',
  },
  {
    title: 'Big <br /> Data Analytics',
    text: 'Assistance in  leveraging  big data technologies to analyse large datasets, uncovering trends and insights.',
    service: 'Big Data Analytics',
  },
  {
    title: 'Data <br/> Migration Services',
    text: 'Expert management of a secure and seamless data migration between systems, minimising downtime.',
    service: 'Data Migration Services',
  },
  {
    title: 'Data <br /> Governance',
    text: 'Establishing data governance frameworks that ensure your data is accurate, accessible, and compliant with relevant regulations.',
    service: 'Data Governance',
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
            <span className="number">04</span> Data Management and Analytics
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
            <ItConsultingSlider4 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItTab4; 