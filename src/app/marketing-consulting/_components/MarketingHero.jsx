"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
/* import RequestForm from "@/components/RequestForm"; */

const MarketingHero = () => {
    return (
        <section className="marketing-hero">
            <div className="marketing-hero__container _container">
                <div className="marketing-hero__body">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="marketing-hero__title">
                        Marketing Consulting <br/> for Measurable Impact
                    </motion.h1>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="marketing-hero__subtitle">
                        Maximising your marketing potential with strategies that resonate, <br /> tools that engage, and data that drives success.
                    </motion.h2>
                </div>
            </div>
        </section>
    );
};

export default MarketingHero;