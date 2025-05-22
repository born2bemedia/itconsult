"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { useTranslations } from "next-intl";
const PeopleHero = () => {
  const t = useTranslations("people");
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
    ? "/images/people/people-back-img-02.webp" /* Mobile */
    : "/images/people/people-back-img-01.webp"; /* Desktop */

  return (
    <Parallax bgImage={bgImage} strength={150} className="parallax-custom">
      <section className="people-hero">
        <div className="people-hero__container _container">
          <div className="people-hero__body">
            <div className="people-hero__content">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="people-hero__title" 
                dangerouslySetInnerHTML={{ __html: t("hero.title", {}, "People Behind <br /> Your Business Success") }}
              />
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.3}
                className="people-hero__subtitle"
              >
                {t("hero.subtitle", {}, "Expertise, knowledge, and dedication driving your growth.")}
              </motion.h2>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default PeopleHero;