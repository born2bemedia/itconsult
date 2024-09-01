"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
/* import RequestForm from "@/components/RequestForm"; */

const ItConsultingHero = () => {
    return (
        <section className="itCons-hero">
            <div className="itCons-hero__container _container">
                <div className="itCons-hero__body">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="itCons-hero__title">
                        Tailored IT Consulting <br /> Solutions for Business Success
                    </motion.h1>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={0.3}
                        className="itCons-hero__subtitle">
                        Delivering IT solutions that enhance efficiency, security, and scalability to drive your business forward.
                    </motion.h2>
                </div>
            </div>
        </section>
    );
};

export default ItConsultingHero;