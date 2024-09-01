"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowRight from "@/icons/slider/ArrowRight";


const SolutionsNeed = () => {
    return (
        <section className="solutions-need">
            <div className="solutions-need__container _container">
                <div className="solutions-need__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="solutions-need__content">
                        <h2 className="solutions-need__title">Need Assistance?</h2>
                        <Link
                            href="/contact"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="solutions-need__link">
                            Contact Us
                            <ArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsNeed;