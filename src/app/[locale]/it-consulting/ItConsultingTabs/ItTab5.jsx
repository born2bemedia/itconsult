"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import ItConsultingSlider5 from "../_components/ItConsultingSlider5";
import { useTranslations } from "next-intl";



const ItTab4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations("itConsulting");

  const slides = [
    {
      title: t("tab5.title1", {}, "24/7 <br /> IT Support"),
      text: t("tab5.text1", {}, "Round-the-clock support to address IT issues promptly, minimising downtime and keeping your operations running smoothly."),
      service: t("tab5.service1", {}, "24/7 IT Support"),
    },
    {
      title: t("tab5.title2", {}, "System <br/> Monitoring"),
      text: t("tab5.text2", {}, "Detecting  and resolving issues before they impact your business, ensuring continuous system performance."),
      service: t("tab5.service2", {}, "System Monitoring"),
    },
    {
      title: t("tab5.title3", {}, "Patch <br/> Management"),
      text: t("tab5.text3", {}, "Timely application of software patches and updates, protecting your systems from vulnerabilities and ensuring compliance."),
      service: t("tab5.service3", {}, " Patch Management"),
    },
    {
      title: t("tab5.title4", {}, "Help Desk <br/> Services"),
      text: t("tab5.text4", {}, "Expert help desk provision of  quick and efficient support for all your IT-related queries and issues, enhancing user satisfaction."),
      service: t("tab5.service4", {}, "Help Desk Services"),
    },
    {
      title: t("tab5.title5", {}, "On-Site <br/> and Remote Support"),
      text: t("tab5.text5", {}, "On-site and remote support services, ensuring businesses have the assistance whenever and wherever they need it."),
      service: t("tab5.service5", {}, "On-Site and Remote Support"),
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
            <span className="number">05</span> {t("tab5.title", {}, "IT Support and Maintenance")}
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
            <ItConsultingSlider5 slides={slides} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItTab4; 