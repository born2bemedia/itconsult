"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import ItConsultingSlider2 from "../_components/ItConsultingSlider2";

const slides = [
  {
    title: 'Network Design <br /> and Optimization',
    text: 'Design and optimisation of business network infrastructure to ensure reliable, high-performance connectivity across all business locations.',
    service: 'Network Design and Optimization',
  },
  {
    title: 'Cloud Infrastructure <br/> Management',
    text: 'Managing and optimisation of  business cloud environments (e.g., AWS, Azure), ensuring scalability, security, and cost-efficiency',
    service: 'Cloud Infrastructure Management',
  },
  {
    title: 'Professional <br/> Virtualization Services',
    text: 'Expert assistance in implementation and management of  virtualized environments, reducing hardware costs and improving system flexibility.',
    service: 'Professional Virtualization Services',
  },
  {
    title: 'Disaster <br /> Recovery Planning',
    text: 'Development and implementation of disaster recovery plans to safeguard your data and ensure business continuity in case of disruptions.',
    service: 'Disaster Recovery Planning',
  },
  {
    title: 'Security Infrastructure <br/> Implementation',
    text: 'Design and deployment of  robust security measures to protect your IT infrastructure from cyber threats and unauthorised access.',
    service: 'Security Infrastructure Implementation',
  },
];

const ItTab2 = () => {
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
            <span className="number">02</span> IT Infrastructure Management
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
            <ItConsultingSlider2 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItTab2;