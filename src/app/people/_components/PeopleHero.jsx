"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const PeopleHero = () => {
    return (
        <section className="people-hero">
            <div className="people-hero__container _container">
                <div className="people-hero__body">
                    <div className="people-hero__content">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-hero__title">
                            People Behind <br /> Your Business Success
                        </motion.h1>
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="people-hero__subtitle">
                            Expertise, knowledge, and dedication driving your growth.
                        </motion.h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeopleHero;