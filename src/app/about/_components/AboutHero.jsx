"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const AboutHero = () => {
    return (
        <section className="about-hero">
            <div className="about-hero__container _container">
                <div className="about-hero__body">
                    <div className="about-hero__content">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="about-hero__title">
                            Our Journey to Expertise
                        </motion.h1>
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="about-hero__subtitle">
                            Turning data into impactful solutions for your business growth.
                        </motion.h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;