"use client";
import React, { useState, useEffect } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import HomeSlider from "./HomeSlider";
import { useTranslations } from "next-intl";

const HomeHero = () => {
  const t = useTranslations("home");

  const slides = [
    t(
      "hero.slide1",
      {},
      "Empowering business with the right technology and marketing strategies to drive growth, efficiency, and innovation."
    ),
    t(
      "hero.slide2",
      {},
      "Success in today's digital landscape requires the seamless integration of technology and marketing."
    ),
    t(
      "hero.slide3",
      {},
      "We align your IT capabilities with strategic marketing to drive efficiency, boost customer engagement, and fuel sustainable growth."
    ),
  ];

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
    ? "/images/home/home-back-03.webp" /* Mobile */
    : "/images/home/home-img-01.webp"; /* Desktop */

  return (
    <Parallax bgImage={bgImage} strength={150} className="parallax-custom">
      <section className="home-hero">
        <div className="home-hero__container _container">
          <div className="home-hero__body">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="home-hero__title"
              dangerouslySetInnerHTML={{
                __html: t("hero.title", {}, "Integrated Growth Solutions <br /> through IT & Marketing Expertise"),
              }}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
              className="home-hero__slider"
            >
              <HomeSlider slides={slides} />
            </motion.div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default HomeHero;
