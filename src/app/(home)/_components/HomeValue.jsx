"use client";
import React, { useState } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowRight from "@/icons/slider/ArrowRight";
import RequestButton from "@/components/RequestButton";


const HomeValue = () => {
    return (
        <section className="home-value">
            <div className="home-value__container _container">
                <div className="home-value__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="home-value__row-01">
                        <div className="home-value__col-01">
                            <h2 className="home-value__title">360° VALUE</h2>
                        </div>
                        <div className="home-value__col-02">
                            <RequestButton
                                className={"home-value__link"}
                                text={"Let's Talk Solutions"}
                                icon={<ArrowRight />} 
                            />
                        </div>
                    </motion.div>
                    <div className="home-value__row-02">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="home-value__item">
                            <div className="label">Digital Transformation</div>
                            <div className="sublabel">Accelerate Your Digital Growth</div>
                            <div className="text">Integrating IT and Marketing is essential for staying competitive. We streamline your digital transformation by aligning technology with strategic marketing, ensuring your business adapts quickly and thrives in the digital landscape.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="home-value__item">
                            <div className="label">Efficiency and Innovation</div>
                            <div className="sublabel">Optimise and Innovate Your Marketing</div>
                            <div className="text">Our IT solutions empower your marketing efforts. We enhance your infrastructure to support scalable, data-driven campaigns that maximise impact, reduce costs, and increase speed to market.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="home-value__item">
                            <div className="label">Customer-Centric Solutions</div>
                            <div className="sublabel">Deliver Personalised CX</div>
                            <div className="text">We leverage data, CRM systems, and automation tools to craft customer-centric strategies. Our IT-backed marketing solutions ensure you meet and exceed customer expectations, driving loyalty and growth.</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="home-value__item">
                            <div className="label">Strategic Alignment</div>
                            <div className="sublabel">Align IT and Marketing for Maximum ROI</div>
                            <div className="text">We ensure your IT and Marketing strategies align, leading to unified goals and measurable results. Our approach maximises ROI by optimising resources and driving consistent business performance.</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeValue;