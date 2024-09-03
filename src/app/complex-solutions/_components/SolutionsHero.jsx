"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const SolutionsHero = () => {
    return (
        <section className="solutions-hero">
            <div className="solutions-hero__container _container">
                <div className="solutions-hero__body">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="solutions-hero__title">
                        Comprehensive IT <br/> and Marketing Solutions
                    </motion.h1>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="solutions-hero__subtitle">
                        Tailored packages integrating technology and marketing to support <br/> your business growth and strategic objectives.
                    </motion.h2>
                </div>
            </div>
        </section>
    );
};

export default SolutionsHero;