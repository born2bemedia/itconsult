"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import ItConsultingSlider1 from "../_components/ItConsultingSlider1";
import { useTranslations } from "next-intl";



const ItTab1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations("itConsulting");
  const slides = [
    {
      title: t("tab1.title1", {}, "IT Roadmap <br /> Development"),
      text: t("tab1.text1", {}, "Comprehensive IT roadmaps that guide your technology investments and initiatives, ensuring alignment with your long-term business goals."),
      service: t("tab1.service1", {}, "IT Roadmap Development"),
    },
    {
      title: t("tab1.title2", {}, "Technology <br /> Assessment"),
      text: t("tab1.text2", {}, "Analysis of  current IT infrastructure, identifying strengths and areas for improvement to optimise performance."),
      service: t("tab1.service2", {}, "Technology Assessment"),
    },
    {
      title: t("tab1.title3", {}, "Digital Transformation <br /> Strategy"),
      text: t("tab1.text3", {}, "Customised strategies to help your business transition to digital platforms, enhancing efficiency, innovation, and competitiveness."),
      service: t("tab1.service3", {}, "Digital Transformation Strategy"),
    },
    {
      title: t("tab1.title4", {}, "IT Budgeting <br /> and Forecasting"),
      text: t("tab1.text4", {}, "Planning your IT expenditures, ensuring that business investments are cost-effective and aligned with your growth objectives."),
      service: t("tab1.service4", {}, "IT Budgeting and Forecasting"),
    },
    {
      title: t("tab1.title5", {}, "Risk <br /> Management"),
      text: t("tab1.text5", {}, "Identifying and mitigating IT risks, ensuring business systems comply with relevant regulations and industry standards."),
      service: t("tab1.service5", {}, "Risk Management"),
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
            <span className="number">01</span> {t("tab1.title", {}, "IT Strategy and Planning")}
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
            <ItConsultingSlider1 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItTab1;