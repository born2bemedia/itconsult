"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const MarketTrendsIt = () => {

    const t = useTranslations("marketResearch");

    return (
        <section className="market-trends-it">
            <div className="market-trends-it__container _container">
                <div className="market-trends-it__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="market-trends-it__title">
                        {t("trendsIt.title", {}, "IT Trends in 2024")}
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="market-trends-it__row-top">
                        <h3 className="market-trends-it__subtitle">{t("trendsIt.subtitle1", {}, "Cloud Computing and Hybrid Cloud Adoption")}</h3>
                        <div className="market-trends-it__items">
                            <div className="market-trends-it__item">
                                <h4 className="title">{t("trendsIt.trend", {}, "Trend:")}</h4>
                                <div className="text">{t("trendsIt.trendText1", {}, "As remote work and digital transformation continue, businesses are increasingly adopting hybrid cloud models for scalability and cost-effectiveness.")}</div>
                            </div>
                            <div className="market-trends-it__item">
                                <h4 className="title">{t("trendsIt.gap", {}, "Gap:")}</h4>
                                <div className="text">{t("trendsIt.gapText1", {}, "Many businesses experience difficulties in optimising cloud costs and ensuring data security when integrating cloud solutions.")}</div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="market-trends-it__row">
                        <div className="market-trends-it__col-01">
                            <h3 className="market-trends-it__subtitle">{t("trendsIt.subtitle2", {}, "AI and Machine Learning Integration")}</h3>
                            <div className="market-trends-it__subitems">
                                <div className="market-trends-it__subitem">
                                    <h4 className="title">{t("trendsIt.trendInsight", {}, "Trend Insight:")}</h4>
                                    <div className="text">{t("trendsIt.trendInsightText1", {}, "AI-driven solutions are being used for data analytics, customer service (e.g., chatbots), and IT automation. According to a report, AI adoption in IT has increased by 30% since 2023.")}</div>
                                </div>
                                <div className="market-trends-it__subitem">
                                    <h4 className="title">{t("trendsIt.gap", {}, "Gap:")}</h4>
                                    <div className="text">{t("trendsIt.gapText2", {}, "A major challenge is the lack of skilled personnel and data quality issues that hinder the effective deployment of AI/ML solutions.")}</div>
                                </div>
                            </div>
                        </div>
                        <div className="market-trends-it__col-02">
                            <h3 className="market-trends-it__subtitle">{t("trendsIt.subtitle3", {}, "Cybersecurity Concerns and Solutions")}</h3>
                            <div className="market-trends-it__subitems">
                                <div className="market-trends-it__subitem">
                                    <h4 className="title">{t("trendsIt.trend", {}, "Trend:")}</h4>
                                    <div className="text">{t("trendsIt.trendText3", {}, "With more businesses going digital, cybersecurity is a top priority. Ransomware attacks have surged, and the demand for stronger IT security protocols is higher than ever.")}</div>
                                </div>
                                <div className="market-trends-it__subitem">
                                    <h4 className="title">{t("trendsIt.gap", {}, "Gap:")}</h4>
                                    <div className="text">{t("trendsIt.gapText3", {}, "Small businesses struggle to allocate budgets for robust cybersecurity measures, leaving them vulnerable to attacks.")}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="market-trends-it__row">
                        <div className="market-trends-it__col-01">
                            <h3 className="market-trends-it__subtitle">{t("trendsIt.subtitle4", {}, "Edge Computing Growth")}</h3>
                            <div className="market-trends-it__subitems">
                                <div className="market-trends-it__subitem">
                                    <h4 className="title">{t("trendsIt.trendInsight", {}, "Trend Insight:")}</h4>
                                    <div className="text">{t("trendsIt.trendInsightText4", {}, "Edge computing is gaining traction as businesses look for low-latency solutions that enable real-time data processing closer to the source.")}</div>
                                </div>
                                <div className="market-trends-it__subitem">
                                    <h4 className="title">{t("trendsIt.gap", {}, "Gap:")}</h4>
                                    <div className="text">{t("trendsIt.gapText4", {}, "The complexity of implementing edge solutions and managing the infrastructure is a common barrier for businesses, particularly in industries with legacy IT systems.")}</div>
                                </div>
                            </div>
                        </div>
                        <div className="market-trends-it__col-02">
                            <h3 className="market-trends-it__subtitle">{t("trendsIt.subtitle5", {}, "5G Implementation in Business Operations")}</h3>
                            <div className="market-trends-it__subitems">
                                <div className="market-trends-it__subitem">
                                    <h4 className="title">{t("trendsIt.trend", {}, "Trend:")}</h4>
                                    <div className="text">{t("trendsIt.trendText5", {}, "5G is enabling faster data transfer rates, improving IoT functionality, and enabling remote work and collaboration tools to function seamlessly.")}</div>
                                </div>
                                <div className="market-trends-it__subitem">
                                    <h4 className="title">{t("trendsIt.gap", {}, "Gap:")}</h4>
                                    <div className="text">{t("trendsIt.gapText5", {}, "High implementation costs and lack of infrastructure in certain regions make it difficult for some businesses to fully leverage 5G’s benefits.")}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MarketTrendsIt;