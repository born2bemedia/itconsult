"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import MarketingSlider2 from "../_components/MarketingSlider2";
import { useTranslations } from "next-intl";



const MarketingTab2 = () => {

 
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations("marketingConsulting");

  const slides = [
    {
      title: t("tab2.title1", {}, "Search <br/> Engine Optimization"), 
      text: t("tab2.text1", {}, "Optimization of your website and content to improve search engine rankings and increase organic traffic."), 
      service: t("tab2.service1", {}, "Search Engine Optimization"),
    },
    {
      title: t("tab2.title2", {}, "Pay-Per-Click <br/> Advertising"), 
      text: t("tab2.text2", {}, "Strategic management of PPC campaigns to drive targeted traffic and maximise return on ad spend (ROAS)."), 
      service: t("tab2.service2", {}, "Pay-Per-Click Advertising"),
    },
    {
      title: t("tab2.title3", {}, "Social Media <br/> Marketing"), 
      text: t("tab2.text3", {}, "Development and execution of social media strategies to engage your audience, build brand loyalty, and increase reach."), 
      service: t("tab2.service3", {}, "Social Media Marketing"),
    },
    {
      title: t("tab2.title4", {}, "Email <br /> Marketing"), 
      text: t("tab2.text4", {}, "Design and execution of personalised email campaigns to nurture leads and drive customer engagement."), 
      service: t("tab2.service4", {}, "Email Marketing"),
    },
    {
      title: t("tab2.title5", {}, "Online <br/> Reputation"), 
      text: t("tab2.text5", {}, "Monitoring and management of your online reputation to maintain a positive brand image and respond effectively to customer feedback."), 
      service: t("tab2.service5", {}, "Online Reputation"),
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
            <span className="number">02</span> {t("tab2.title", {}, "Digital Marketing")}
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
            <MarketingSlider2 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketingTab2;