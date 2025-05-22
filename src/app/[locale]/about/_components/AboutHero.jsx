"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { useTranslations } from "next-intl";

const AboutHero = () => {
  const t = useTranslations("about");
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
    ? "/images/about/about-back-img-02.webp" /* Mobile */
    : "/images/about/about-back-img-01.webp"; /* Desktop */

  return (
    <Parallax bgImage={bgImage} strength={150} className="parallax-custom">
      <section className="about-hero">
        <div className="about-hero__container _container">
          <div className="about-hero__body">
            <div className="about-hero__content">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="about-hero__title"
              >
                {t("hero.title", {}, "Our Journey to Expertise")}
              </motion.h1>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.3}
                className="about-hero__subtitle"
              >
                {t("hero.subtitle", {}, "Turning data into impactful solutions for your business growth.")}
              </motion.h2>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default AboutHero;