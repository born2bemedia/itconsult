"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const MarketCommon = () => {
    return (
        <section className="market-common">
            <div className="market-common__container _container">
                <div className="market-common__body">
                    <div className="market-common__top">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="market-common__title">
                            Common Marketing Challenges <br /> Businesses Face in 2024
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="market-common__row-top">
                            <h3 className="market-common__subtitle">Inadequate Digital Transformation</h3>
                            <div className="market-common__items">
                                <div className="market-common__item">
                                    <h4 className="title">Data Point:</h4>
                                    <div className="text">45% of businesses report they are struggling with fully implementing digital marketing strategies due to limited resources or technical expertise.</div>
                                </div>
                                <div className="market-common__item">
                                    <h4 className="title">Challenge:</h4>
                                    <div className="text">Many businesses still use outdated methods and are slow to adapt to new tools and strategies, resulting in missed opportunities.</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="market-common__row">
                        <div className="market-common__col-01">
                            <h3 className="market-common__subtitle">Difficulty in Measuring ROI</h3>
                            <div className="market-common__subitems _green">
                                <div className="market-common__subitem">
                                    <h4 className="title">Gap Insight:</h4>
                                    <div className="text">While businesses are investing more in digital marketing channels, 40% struggle with measuring the ROI of campaigns. Attribution remains a key issue as businesses use multiple touchpoints.</div>
                                </div>
                                <div className="market-common__subitem _green">
                                    <div className="text">40%</div>
                                </div>
                            </div>
                        </div>
                        <div className="market-common__col-02">
                            <h3 className="market-common__subtitle">Budget Constraints</h3>
                            <div className="market-common__subitems">
                                <div className="market-common__subitem">
                                    <h4 className="title">Fact:</h4>
                                    <div className="text">Businesses, especially SMEs, often struggle with allocating sufficient budget for comprehensive marketing strategies, leading to reliance on outdated or ineffective tactics.</div>
                                </div>
                                <div className="market-common__subitem">
                                    <h4 className="title">Gap:</h4>
                                    <div className="text">A lack of resources to invest in critical tools such as CRM systems, paid advertising, and advanced analytics.</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* 01 */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="market-common__row">
                        <div className="market-common__col-01">
                            <h3 className="market-common__subtitle">Content Saturation and Engagement Decline</h3>
                            <div className="market-common__subitems _green">
                                <div className="market-common__subitem">
                                    <h4 className="title">Issue:</h4>
                                    <div className="text">With 2X more content being produced every day, businesses face a challenge in standing out and maintaining audience engagement, particularly on social platforms.</div>
                                </div>
                                <div className="market-common__subitem _green">
                                    <div className="text">2X</div>
                                </div>
                            </div>
                        </div>
                        <div className="market-common__col-02">
                            <h3 className="market-common__subtitle">Fragmented Customer Journeys</h3>
                            <div className="market-common__subitems _green">
                                <div className="market-common__subitem">
                                    <h4 className="title">Challenge:</h4>
                                    <div className="text">Businesses struggle to unify customer data and deliver cohesive, personalised experiences across multiple channels. Thai results in a 36% decrease in operational efficiency.</div>
                                </div>
                                <div className="market-common__subitem _green">
                                    <div className="text">36%</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MarketCommon;