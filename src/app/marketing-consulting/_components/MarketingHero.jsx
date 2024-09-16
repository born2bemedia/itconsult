"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const MarketingHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Проверка при загрузке
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgImage = isMobile
    ? "/images/maketing-consulting/maketing-consulting-img-back-02.webp" /* Mobile */
    : "/images/maketing-consulting/maketing-consulting-img-back-01.webp"; /* Desktop */

  return (
    <Parallax bgImage={bgImage} strength={150} className="parallax-custom">
      <section className="marketing-hero">
        <div className="marketing-hero__container _container">
          <div className="marketing-hero__body">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="marketing-hero__title"
            >
              Marketing Consulting <br /> for Measurable Impact
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
              className="marketing-hero__subtitle"
            >
              Maximising your marketing potential with strategies that resonate, <br />
              tools that engage, and data that drives success.
            </motion.h2>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default MarketingHero;