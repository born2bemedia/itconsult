"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import ItConsultingSlider4 from "../_components/ItConsultingSlider4";
import { useTranslations } from "next-intl";



const ItTab4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations("itConsulting");

  const slides = [
    {
      title: t("tab4.title1", {}, "Data <br /> Warehousing"),
      text: t("tab4.text1", {}, "Design and implementation of data warehouses that centralise business data, making data management  easier."),
      service: t("tab4.service1", {}, "Data Warehousing"),
    },
    {
      title: t("tab4.title2", {}, "Business <br /> Intelligence"),
      text: t("tab4.text2", {}, "Expert provision of actionable insights, enabling data-driven decision-making to drive growth and efficiency."),
      service: t("tab4.service2", {}, "Business Intelligence"),
    },
    {
      title: t("tab4.title3", {}, "Big <br /> Data Analytics"),
      text: t("tab4.text3", {}, "Assistance in  leveraging  big data technologies to analyse large datasets, uncovering trends and insights."),
      service: t("tab4.service3", {}, "Big Data Analytics"),
    },
    {
      title: t("tab4.title4", {}, "Data <br/> Migration Services"),
      text: t("tab4.text4", {}, "Expert management of a secure and seamless data migration between systems, minimising downtime."),
      service: t("tab4.service4", {}, "Data Migration Services"),
    },
    {
      title: t("tab4.title5", {}, "Data <br /> Governance"),
      text: t("tab4.text5", {}, "Establishing data governance frameworks that ensure your data is accurate, accessible, and compliant with relevant regulations."),
      service: t("tab4.service5", {}, "Data Governance"),
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
            <span className="number">04</span> {t("tab4.title", {}, "Data Management and Analytics")}
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
            <ItConsultingSlider4 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItTab4; 