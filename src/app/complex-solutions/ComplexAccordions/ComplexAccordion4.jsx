"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";

const ComplexAccordion4 = () => {
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
          <span className="number">04</span>
          <span className="title">
            Market Expansion <br /> Package
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
              Designed for businesses expanding into new markets, this package combines localised IT solutions with tailored marketing campaigns.
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
                <h3 className="title">IT Scalability</h3>
                <div className="desc">Prepare infrastructure for growth.</div>
              </div>
              <div className="row">
                <h3 className="title">Localised Websites</h3>
                <div className="desc">Region-specific sites optimised for SEO.</div>
              </div>
              <div className="row">
                <h3 className="title">Targeted Campaigns</h3>
                <div className="desc">Localised marketing efforts.</div>
              </div>
              <div className="row">
                <h3 className="title">Market Research</h3>
                <div className="desc">Understand new markets and competitors.</div>
              </div>
              <div className="row">
                <h3 className="title">CRM Customization</h3>
                <div className="desc">Tailor CRM and sales funnels for new regions.</div>
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
              <div className="text">Companies planning to expand into new geographical regions or target new customer segments. Ideal for businesses seeking to increase their market share and revenue through strategic growth initiatives.</div>
            </motion.div>
            <OrderButton
              className={"link"}
              text={"Order Now"}
              service={"Market Expansion Package"}
              icon={<ArrowRight />}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComplexAccordion4;
