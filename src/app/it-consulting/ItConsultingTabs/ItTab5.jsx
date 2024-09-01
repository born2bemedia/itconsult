"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import ItConsultingSlider5 from "../_components/ItConsultingSlider5";

const slides = [
  {
    title: '24/7 <br /> IT Support',
    text: 'Round-the-clock support to address IT issues promptly, minimising downtime and keeping your operations running smoothly.',
    service: '24/7 IT Support',
  },
  {
    title: 'System <br/> Monitoring',
    text: 'Detecting  and resolving issues before they impact your business, ensuring continuous system performance.',
    service: 'System Monitoring',
  },
  {
    title: 'Patch <br/> Management',
    text: 'Timely application of software patches and updates, protecting your systems from vulnerabilities and ensuring compliance.',
    service: ' Patch Management',
  },
  {
    title: 'Help Desk <br/> Services',
    text: 'Expert help desk provision of  quick and efficient support for all your IT-related queries and issues, enhancing user satisfaction.',
    service: 'Help Desk Services',
  },
  {
    title: 'On-Site <br/> and Remote Support',
    text: 'On-site and remote support services, ensuring businesses have the assistance whenever and wherever they need it.',
    service: 'On-Site and Remote Support',
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
            <span className="number">05</span> IT Support and Maintenance
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
            <ItConsultingSlider5 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItTab4; 