"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import ItConsultingSlider3 from "../_components/ItConsultingSlider3";
import { useTranslations } from "next-intl";



const ItTab3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations("itConsulting");

  const slides = [
    {
      title: t("tab3.title1", {}, "Custom <br /> Software Development"),
      text: t("tab3.text1", {}, "Development of  bespoke software solutions tailored to business needs, ensuring optimal functionality and user experience"),
      service: t("tab3.service1", {}, "Custom Software Development"),
    },
    {
      title: t("tab3.title2", {}, "Application <br /> Integration"),
      text: t("tab3.text2", {}, "Integration of various software applications, creating a unified system that enhances productivity and data flow across organisation."),
      service: t("tab3.service2", {}, "Application Integration"),
    },
    {
      title: t("tab3.title3", {}, "API <br/> Integration"),
      text: t("tab3.text3", {}, "Integration of APIs to enable seamless communication between software systems to enhance interoperability."),
      service: t("tab3.service3", {}, "API Integration"),
    },
    {
      title: t("tab3.title4", {}, "Legacy <br /> System Modernization"),
      text: t("tab3.text4", {}, "Update and integration of legacy systems with modern technologies, ensuring continued relevance and improved performance."),
      service: t("tab3.service4", {}, "Legacy System Modernization"),
    },
    {
      title: t("tab3.title5", {}, "Enterprise <br /> Resource Planning"),
      text: t("tab3.text5", {}, "Development  and implementation of ERP systems that streamline your business processes, providing a single source of truth for all your operations."),
      service: t("tab3.service5", {}, "Enterprise Resource Planning"),
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
            <span className="number">03</span> {t("tab3.title", {}, "Software Development and Integration")}
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
            <ItConsultingSlider3 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItTab3; 