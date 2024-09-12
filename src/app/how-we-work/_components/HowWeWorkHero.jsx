"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const HowWeWorkHero = () => {
  return (
    <section className="work-hero">
      <div className="work-hero__container _container">
        <div className="work-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="work-hero__title">
            How We Work
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="work-hero__subtitle">
            Flexible approaches to meet your needs.
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkHero;
