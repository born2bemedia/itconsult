"use client";
import React, { useState } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import AboutForm from "@/components/AboutForm";


const AboutBottom = () => {
    return (
        <section className="about-last">
            <div className="about-last__container _container">
                <div className="about-last__body">
                    <div className="about-last__col-01">
                        <div className="about-last__wrapper">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="about-last__title">
                                Want us to speak <br /> or present at your <br /> industry event?
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="about-last__text">
                                Fill out the form below to invite our team. We’re ready to share our insights, prepare a custom report, and contribute our expertise to your conference.
                            </motion.div>
                        </div>
                    </div>
                    <div className="about-last__col-02">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="about-last__label">
                            INVITATION <br /> TO COLLABORATE
                        </motion.h3>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="about-last__form">
                            <AboutForm />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBottom;