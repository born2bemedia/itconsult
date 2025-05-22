"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import MarketingSlider5 from "../_components/MarketingSlider5";
import { useTranslations } from "next-intl";



const ItTab4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations("marketingConsulting");

  const slides = [
    {
      title: t("tab5.title1", {}, "Performance <br/> Dashboard Creation"), 
      text: t("tab5.text1", {}, "Setup of real-time dashboards that provide at-a-glance insights into key marketing metrics and campaign performance."), 
      service: t("tab5.service1", {}, "Performance Dashboard Creation"),
    },
    {
      title: t("tab5.title2", {}, "Conversion <br/> Rate Analysis"), 
      text: t("tab5.text2", {}, "Detailed analysis of conversion rates to identify bottlenecks and improve overall marketing efficiency."), 
      service: t("tab5.service2", {}, "Conversion Rate Analysis"),
    },
    {
      title: t("tab5.title3", {}, "A/B Testing <br/> and Experimenting"), 
      text: t("tab5.text3", {}, "Execution of A/B tests to determine the most effective marketing strategies and tactics."), 
      service: t("tab5.service3", {}, "A/B Testing and Experimenting"),
    },
    {
      title: t("tab5.title4", {}, "Customer <br /> Behaviour Analysis"), 
      text: t("tab5.text4", {}, "In-depth analysis of customer behaviour to uncover patterns and insights that inform marketing decisions."), 
      service: t("tab5.service4", {}, "Customer Behaviour Analysis"),
    },
    {
      title: t("tab5.title5", {}, "ROI Tracking <br /> and Reporting"), 
      text: t("tab5.text5", {}, "Comprehensive reporting on the return on investment for all marketing activities to ensure accountability and improvements."), 
      service: t("tab5.service5", {}, "ROI Tracking and Reporting"),
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
            <span className="number">05</span> {t("tab5.title", {}, "Analytics and Reporting")}
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