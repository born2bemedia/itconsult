"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import MarketingSlider4 from "../_components/MarketingSlider4";
import { useTranslations } from "next-intl";


const MarketingTab4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations("marketingConsulting");

  const slides = [
    {
      title: t("tab4.title1", {}, "Automation <br /> Workflow Design"), 
      text: t("tab4.text1", {}, "Design and implementation of automation workflows that streamline marketing tasks and enhance lead nurturing."), 
      service: t("tab4.service1", {}, "Automation Workflow Design"),
    },
    {
      title: t("tab4.title2", {}, "CRM Solutions Integration"), 
      text: t("tab4.text2", {}, "Integration of CRM systems with your marketing tools to ensure seamless data flow and a unified view of customer interactions."), 
      service: t("tab4.service2", {}, "CRM Solutions Integration"),
    },
    {
      title: t("tab4.title3", {}, "Lead Scoring <br/> and Segmentation"), 
      text: t("tab4.text3", {}, "Implementation of lead scoring models and audience segmentation to target the right prospects with the right message."), 
      service: t("tab4.service3", {}, "Lead Scoring and Segmentation"),
    },
    {
      title: t("tab4.title4", {}, "User <br/> Personalization Strategies"), 
      text: t("tab4.text4", {}, "Development of personalised marketing approaches using CRM data to improve customer engagement and satisfaction."), 
      service: t("tab4.service4", {}, "User Personalization Strategies"),
    },
    {
      title: t("tab4.title5", {}, "Sales <br /> Funnel Optimization"), 
      text: t("tab4.text5", {}, "Analysis and optimization of your sales funnel to reduce drop-off points and increase conversions."), 
      service: t("tab4.service5", {}, "Sales Funnel Optimization"),
    },
  ];

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
            <span className="number">04</span> {t("tab4.title", {}, "Marketing Automation and CRM")}
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