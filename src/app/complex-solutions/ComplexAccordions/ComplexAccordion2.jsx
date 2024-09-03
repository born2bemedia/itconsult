"use client";
import React, { useState, useEffect } from "react";
import ArrowRight from "@/icons/slider/ArrowRight";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";

const ComplexAccordion2 = () => {
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
          <span className="number">02</span>
          <span className="title">
          Growth <br /> Accelerator <br /> Package
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
              Ideal for SMEs looking to scale, this package enhances your IT capabilities and drives your marketing efforts for rapid growth.
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
                <h3 className="title">IT Roadmap</h3>
                <div className="desc">Strategic planning for growth.</div>
              </div>
              <div className="row">
                <h3 className="title">Website Optimization</h3>
                <div className="desc">SEO and performance improvements.</div>
              </div>
              <div className="row">
                <h3 className="title">Content Strategy</h3>
                <div className="desc">Engage and build brand authority.</div>
              </div>
              <div className="row">
                <h3 className="title">Targeted Advertising</h3>
                <div className="desc">PPC and social media ads.</div>
              </div>
              <div className="row">
                <h3 className="title">Analytics</h3>
                <div className="desc">Performance tracking and optimization.</div>
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
              <div className="text">Small to medium-sized enterprises looking to scale operations, improve efficiency, and boost their market presence. Ideal for companies that have outgrown their initial setup and need a strategic upgrade.</div>
            </motion.div>
            <OrderButton
              className={"link"}
              text={"Order Now"}
              service={"Growth Accelerator Package"}
              icon={<ArrowRight />}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComplexAccordion2;
