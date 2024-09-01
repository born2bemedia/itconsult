"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import MarketingSlider3 from "../_components/MarketingSlider3";

const slides = [
  {
    title: "Content <br /> Strategy Development", 
    text: "Creation of a comprehensive content plan that aligns with your marketing goals and speaks to your audience’s needs.", 
    service: "Content Strategy Development",
  },
  {
    title: "Blogging and <br /> Article Writing", 
    text: "Production of high-quality blog posts and articles that establish your brand as an authority and improve SEO.", 
    service: "Blogging and Article Writing",
  },
  {
    title: "Video <br/> Content Creation", 
    text: "Development of engaging video content to capture attention and communicate your brand message effectively.", 
    service: "Video Content Creation",
  },
  {
    title: "Expert <br /> Infographic Design", 
    text: "Creation of visually compelling infographics that simplify complex information and enhance content sharing.", 
    service: "Expert Infographic Design",
  },
  {
    title: "Brand <br/> Content Distribution", 
    text: "Strategic placement of content across various channels to maximise visibility and audience engagement.", 
    service: "Brand Content Distribution",
  },
];

const MarketingTab3 = () => {
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
            <span className="number">03</span> Content Marketing
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
            <MarketingSlider3 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketingTab3; 