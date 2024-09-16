"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const NewsroomHero = () => {
  return (
    <Parallax bgImage="/images/newsroom/newsroom-img-01.webp" strength={150} className="parallax-custom">
      <section className="newsroom-hero">
        <div className="newsroom-hero__container _container">
          <div className="newsroom-hero__body">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="newsroom-hero__title">
              Newsroom
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
              className="newsroom-hero__subtitle">
              Stay updated with the latest from our company.
            </motion.h2>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default NewsroomHero;
