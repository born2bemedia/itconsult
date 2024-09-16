"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowRight from "@/icons/slider/ArrowRight";


const ItConsultingNeed = () => {
    return (
        <section className="itCons-need">
            <div className="itCons-need__container _container">
                <div className="itCons-need__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="itCons-need__content">
                        <h2 className="itCons-need__title">Need Assistance?</h2>
                        <Link
                            href="/contacts"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="itCons-need__link">
                            Contact Us
                            <ArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ItConsultingNeed;