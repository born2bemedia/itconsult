"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import MarketingSlider1 from "../_components/MarketingSlider1";
import { useTranslations } from "next-intl";


const MarketingTab1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations("marketingConsulting");

  const slides = [
    {
      title: t("tab1.title1", {}, "Market Research <br /> and Analysis"), 
      text: t("tab1.text1", {}, "In-depth analysis of market trends, consumer behaviour, and competitor strategies to inform and tailor your marketing approach."), 
      service: t("tab1.service1", {}, "Market Research and Analysis"),
    },
    {
      title: t("tab1.title2", {}, "Brand <br/> Positioning"), 
      text: t("tab1.text2", {}, "Clear definition and positioning of your brand to differentiate from competitors and connect with your target audience."), 
      service: t("tab1.service2", {}, "Brand Positioning"),
    },
    {
      title: t("tab1.title3", {}, "Go-to-Market <br /> Strategy"), 
      text: t("tab1.text3", {}, "Strategic planning for the successful launch of new products or services, ensuring market readiness and maximum impact."), 
      service: t("tab1.service3", {}, "Go-to-Market Strategy"),
    },
    {
      title: t("tab1.title4", {}, "Multichannel <br /> Campaign Planning"), 
      text: t("tab1.text4", {}, "Coordination of marketing campaigns across multiple channels to ensure consistent messaging and broader reach."), 
      service: t("tab1.service4", {}, "Multichannel Campaign Planning"),
    },
    {
      title: t("tab1.title5", {}, "Customer <br /> Journey Mapping"), 
      text: t("tab1.text5", {}, "Detailed mapping of customer interactions with your brand to optimise the overall experience and improve conversion rates."), 
      service: t("tab1.service5", {}, "Customer Journey Mapping"),
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
            <span className="number">01</span> {t("tab1.title", {}, "Marketing Strategy and Planning")}
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
            <MarketingSlider1 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketingTab1;