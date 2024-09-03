"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";

const ComplexAccordion3 = () => {
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
          <span className="number">03</span>
          <span className="title">
            Digital <br /> Transformation <br /> Package
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
              For established businesses, this package modernises IT systems and marketing strategies to keep you competitive.
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
                <h3 className="title">IT Modernization</h3>
                <div className="desc">Upgrade systems, cloud solutions, and cybersecurity.</div>
              </div>
              <div className="row">
                <h3 className="title">E-Commerce</h3>
                <div className="desc">Develop or optimise your online store.</div>
              </div>
              <div className="row">
                <h3 className="title">Advanced Automation</h3>
                <div className="desc">Complex workflows and personalised marketing.</div>
              </div>
              <div className="row">
                <h3 className="title">Big Data</h3>
                <div className="desc">Actionable insights from large datasets.</div>
              </div>
              <div className="row">
                <h3 className="title">Omnichannel Strategy</h3>
                <div className="desc">Integrated marketing across all channels.</div>
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
              <div className="text">Established businesses that need to modernise their IT infrastructure and adopt a digital-first approach to stay competitive. Ideal for companies ready to embrace digital transformation across all functions.</div>
            </motion.div>
            <OrderButton
              className={"link"}
              text={"Order Now"}
              service={"Digital Transformation Package"}
              icon={<ArrowRight />}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComplexAccordion3;
