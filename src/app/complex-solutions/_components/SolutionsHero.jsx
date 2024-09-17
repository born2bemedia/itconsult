"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const SolutionsHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgImage = isMobile
    ? "/images/complex-solutions/complex-solutions-img-back-02.jpg" /* Mobile */
    : "/images/complex-solutions/complex-solutions-img-back-01.webp"; /* Desktop */

  return (
    <Parallax bgImage={bgImage} strength={150} className="parallax-custom">
      <section className="solutions-hero">
        <div className="solutions-hero__container _container">
          <div className="solutions-hero__body">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="solutions-hero__title"
            >
              Comprehensive IT <br /> and Marketing Solutions
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
              className="solutions-hero__subtitle"
            >
              Tailored packages integrating technology and marketing to support{" "}
              <br /> your business growth and strategic objectives.
            </motion.h2>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default SolutionsHero;