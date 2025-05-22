"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { useTranslations } from "next-intl";
const NewsroomHero = () => {

  const t = useTranslations("newsroom");

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
    ? "/images/newsroom/newsroom-img-02.webp" /* Mobile */
    : "/images/newsroom/newsroom-img-01.webp"; /* Desktop */

  return (
    <Parallax bgImage={bgImage} strength={150} className="parallax-custom">
      <section className="newsroom-hero">
        <div className="newsroom-hero__container _container">
          <div className="newsroom-hero__body">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="newsroom-hero__title">
              {t("hero.title", {}, "Newsroom")}
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
              className="newsroom-hero__subtitle">
              {t("hero.subtitle", {}, "Stay updated with the latest from our company.")}
            </motion.h2>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default NewsroomHero;