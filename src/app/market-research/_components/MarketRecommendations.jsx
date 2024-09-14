"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const MarketRecommendations = () => {
    return (
        <section className="market-recom">
            <div className="market-recom__container _container">
                <div className="market-recom__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="market-recom__title">
                        Recommendations
                    </motion.h2>
                    <div className="market-recom__content">
                        <div className="market-recom__col-01">
                            <motion.h3
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="market-recom__subtitle _left">
                                For Businesses:
                            </motion.h3>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="market-recom__text _left">
                                Invest in cybersecurity, AI/ML expertise, cloud solutions, and marketing automation tools.
                            </motion.div>
                        </div>
                        <div className="market-recom__col-02">
                            <motion.h3
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="market-recom__subtitle">
                                For SMBs:
                            </motion.h3>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="market-recom__text">
                                Leverage low-cost tools that provide high ROI, such as targeted marketing automation, cloud IT infrastructure, and data analytics platforms.
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketRecommendations;