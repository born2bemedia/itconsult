"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";

const ComplexAccordion1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    // Проверка при загрузке страницы
    handleResize();

    window.addEventListener("resize", handleResize);

    // Очистка обработчика событий при размонтировании компонента
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
    <div className="complex-accordion">
      <div className="complex-accordion__wrapper">
        <button
          className={`complex-accordion__btn ${isOpen && isMobile ? "_open" : ""}`}
          onClick={toggleAccordion}
        >
          <span className="number">01</span>
          <span className="title">
            LaunchPad <br /> Package
          </span>
          <span className="icon">
            <ArrowRight />
          </span>
        </button>
        <motion.div
          className="complex-accordion__content"
          initial={{ height: isMobile ? 0 : "auto", opacity: isMobile ? 0 : 1 }}
          animate={{
            height: isMobile ? (isOpen ? "auto" : 0) : "auto",
            opacity: isMobile ? (isOpen ? 1 : 0) : 1,
          }}
          transition={{ duration: 0.5 }}
          style={{ overflow: isMobile ? "hidden" : "visible" }}
        >
          <div className="wrapper">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.2}
              className="text">
              Perfect for startups, this package provides the essential IT infrastructure and marketing strategy for a smooth and successful launch.
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
              className="price">
              Price: On Request
            </motion.div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="label"
            >
              Included Services:
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.4}
              className="rows">
              <div className="row">
                <h3 className="title">IT Setup</h3>
                <div className="desc">Network design, cloud integration, and security.</div>
              </div>
              <div className="row">
                <h3 className="title">Brand Identity</h3>
                <div className="desc">Logo design, messaging, and positioning.</div>
              </div>
              <div className="row">
                <h3 className="title">Website Development</h3>
                <div className="desc">Custom, SEO-optimised website.</div>
              </div>
              <div className="row">
                <h3 className="title">Digital Marketing</h3>
                <div className="desc">Social media, content, and email campaigns.</div>
              </div>
              <div className="row">
                <h3 className="title">CRM and Automation</h3>
                <div className="desc">CRM setup and marketing automation.</div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.4}
              className="best">
              <h4 className="title">Best For:</h4>
              <div className="text">Startups, new businesses, or companies launching a new product/service. Ideal for those needing a strong foundation in both IT and marketing to ensure a successful market entry.</div>
            </motion.div>
            <OrderButton
              className={"link"}
              text={"Order Now"}
              service={"LaunchPad Package"}
              icon={<ArrowRight />}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComplexAccordion1;
