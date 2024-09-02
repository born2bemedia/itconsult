"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";


const ComplexAccordion3 = () => {
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
    <div className="complex-accordion">
      <div className="complex-accordion__wrapper">
        <button
          className={`complex-accordion__btn ${isOpen && isMobile ? "_open" : ""}`}
          onClick={toggleAccordion}
        >
          <span className="title">
            SOME TEXT #333333
          </span>
          <span className="icon">
            <ArrowRight />
          </span>
        </button>
        <motion.div
          className="complex-accordion__content"
          initial={{ height: isMobile ? 0 : "auto", opacity: isMobile ? 0 : 1 }}
          animate={{
            height: isMobile ? (isOpen ? "auto" : 0) : "auto",
            opacity: isMobile ? (isOpen ? 1 : 0) : 1,
          }}
          transition={{ duration: 0.5 }}
          style={{ overflow: "hidden" }}
        >
          <div className="wrapper">
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComplexAccordion3;