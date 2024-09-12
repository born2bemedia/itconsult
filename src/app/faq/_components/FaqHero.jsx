"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const FaqHero = () => {
    return (
        <section className="faq-hero">
            <div className="faq-hero__container _container">
                <div className="faq-hero__body">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="faq-hero__title">
                        You Ask, We Answer
                    </motion.h1>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="faq-hero__subtitle">
                        Find out how marketing and technology boost business performance.
                    </motion.h2>
                </div>
            </div>
        </section>
    );
};

export default FaqHero;
