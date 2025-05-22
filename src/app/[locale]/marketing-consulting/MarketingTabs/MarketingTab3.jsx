"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import MarketingSlider3 from "../_components/MarketingSlider3";
import { useTranslations } from "next-intl";



const MarketingTab3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations("marketingConsulting");

  const slides = [
    {
      title: t("tab3.title1", {}, "Content <br /> Strategy Development"), 
      text: t("tab3.text1", {}, "Creation of a comprehensive content plan that aligns with your marketing goals and speaks to your audience’s needs."), 
      service: t("tab3.service1", {}, "Content Strategy Development"),
    },
    {
      title: t("tab3.title2", {}, "Blogging and <br /> Article Writing"), 
      text: t("tab3.text2", {}, "Production of high-quality blog posts and articles that establish your brand as an authority and improve SEO."), 
      service: t("tab3.service2", {}, "Blogging and Article Writing"),
    },
    {
      title: t("tab3.title3", {}, "Video <br/> Content Creation"), 
      text: t("tab3.text3", {}, "Development of engaging video content to capture attention and communicate your brand message effectively."), 
      service: t("tab3.service3", {}, "Video Content Creation"),
    },
    {
      title: t("tab3.title4", {}, "Expert <br /> Infographic Design"), 
      text: t("tab3.text4", {}, "Creation of visually compelling infographics that simplify complex information and enhance content sharing."), 
      service: t("tab3.service4", {}, "Expert Infographic Design"),
    },
    {
      title: t("tab3.title5", {}, "Brand <br/> Content Distribution"), 
      text: t("tab3.text5", {}, "Strategic placement of content across various channels to maximise visibility and audience engagement."), 
      service: t("tab3.service5", {}, "Brand Content Distribution"),
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
            <span className="number">03</span> {t("tab3.title", {}, "Content Marketing")}
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