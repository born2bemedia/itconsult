"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const PeopleHero = () => {
    return (
        <section className="people-main">
            <div className="people-main__container _container">
                <div className="people-main__body">
                    <div className="people-main__items">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">01</div>
                            <h2 className="people-main__title">Chief Strategy Officer</h2>
                            <div className="people-main__text">An expert in aligning IT and marketing strategies with business objectives, ensuring our clients’ growth and success.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">02</div>
                            <h2 className="people-main__title">Lead IT Consultant</h2>
                            <div className="people-main__text">Specialises in IT infrastructure and security, providing scalable solutions that keep businesses running smoothly and securely.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">03</div>
                            <h2 className="people-main__title">Head of Marketing</h2>
                            <div className="people-main__text">Develops data-driven marketing strategies that resonate with target audiences and drive conversions.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">04</div>
                            <h2 className="people-main__title">Senior Software Developer</h2>
                            <div className="people-main__text">Focuses on building and integrating software tailored to each client’s unique needs.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">05</div>
                            <h2 className="people-main__title">Data Analyst</h2>
                            <div className="people-main__text">Extracts actionable insights from data, allowing us to refine our approaches and maximise ROI continuously.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">06</div>
                            <h2 className="people-main__title">Content Strategist</h2>
                            <div className="people-main__text">Crafts compelling narratives that engage audiences and build brand authority.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">07</div>
                            <h2 className="people-main__title">Digital Marketing Specialist</h2>
                            <div className="people-main__text">Masters the latest digital tools and platforms to enhance online visibility and lead generation.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">08</div>
                            <h2 className="people-main__title">Customer Success Manager</h2>
                            <div className="people-main__text">Ensures our clients receive ongoing support and value, maintaining long-term relationships.</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeopleHero;