"use client";
import React, { useState } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Parallax } from 'react-parallax';
import HomeSlider from "./HomeSlider";


const slides = [
  "Empowering business with the right technology and marketing strategies to drive growth, efficiency, and innovation.",
  "Success in today’s digital landscape requires the seamless integration of technology and marketing.",
  "We align your IT capabilities with strategic marketing to drive efficiency, boost customer engagement, and fuel sustainable growth.",
];

const HomeHero = () => {
  return (
    <section className="home-hero">
        <div className="home-hero__container _container">
          <div className="home-hero__body">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="home-hero__title">
              Integrated Growth Solutions <br /> through IT & Marketing Expertise
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
              className="home-hero__slider">
              <HomeSlider slides={slides} />
            </motion.div>
          </div>
        </div>
      </section>

  );
};

export default HomeHero;