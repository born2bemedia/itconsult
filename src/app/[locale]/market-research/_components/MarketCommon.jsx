"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const MarketCommon = () => {
    const t = useTranslations("marketResearch");
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
                            className="market-common__title"
                            dangerouslySetInnerHTML={{ __html: t("common.title", {br: "<br />"}, "Common Marketing Challenges <br /> Businesses Face in 2024") }}
                        />
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="market-common__row-top">
                            <h3 className="market-common__subtitle"
                                dangerouslySetInnerHTML={{ __html: t("common.subtitle1", {}, "Inadequate Digital Transformation") }}
                            />
                            <div className="market-common__items">
                                <div className="market-common__item">
                                    <h4 className="title">{t("common.dataPoint", {}, "Data Point:")}</h4>
                                    <div className="text"
                                        dangerouslySetInnerHTML={{ __html: t("common.dataPoint1", {}, "45% of businesses report they are struggling with fully implementing digital marketing strategies due to limited resources or technical expertise.") }}
                                    />
                                </div>
                                <div className="market-common__item">
                                    <h4 className="title">{t("common.challenge", {}, "Challenge:")}</h4>
                                    <div className="text"
                                        dangerouslySetInnerHTML={{ __html: t("common.challenge1", {}, "Many businesses still use outdated methods and are slow to adapt to new tools and strategies, resulting in missed opportunities.") }}
                                    />
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
                            <h3 className="market-common__subtitle"
                                dangerouslySetInnerHTML={{ __html: t("common.subtitle2", {}, "Difficulty in Measuring ROI") }}
                            />
                            <div className="market-common__subitems _green">
                                <div className="market-common__subitem">
                                    <h4 className="title">{t("common.gapInsight", {}, "Gap Insight:")}</h4>
                                    <div className="text"
                                        dangerouslySetInnerHTML={{ __html: t("common.gapInsight1", {}, "While businesses are investing more in digital marketing channels, 40% struggle with measuring the ROI of campaigns. Attribution remains a key issue as businesses use multiple touchpoints.") }}
                                    />
                                </div>
                                <div className="market-common__subitem _green">
                                    <div className="text">40%</div>
                                </div>
                            </div>
                        </div>
                        <div className="market-common__col-02">
                            <h3 className="market-common__subtitle"
                                dangerouslySetInnerHTML={{ __html: t("common.subtitle3", {}, "Budget Constraints") }}
                            />
                            <div className="market-common__subitems">
                                <div className="market-common__subitem">
                                    <h4 className="title">{t("common.fact", {}, "Fact:")}</h4>
                                    <div className="text"
                                        dangerouslySetInnerHTML={{ __html: t("common.fact1", {}, "Businesses, especially SMEs, often struggle with allocating sufficient budget for comprehensive marketing strategies, leading to reliance on outdated or ineffective tactics.") }}
                                    />
                                </div>
                                <div className="market-common__subitem">
                                    <h4 className="title">{t("common.gap", {}, "Gap:")}</h4>
                                    <div className="text"
                                        dangerouslySetInnerHTML={{ __html: t("common.gap1", {}, "A lack of resources to invest in critical tools such as CRM systems, paid advertising, and advanced analytics.") }}
                                    />
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
                            <h3 className="market-common__subtitle"
                                dangerouslySetInnerHTML={{ __html: t("common.subtitle4", {}, "Content Saturation and Engagement Decline") }}
                            />
                            <div className="market-common__subitems _green">
                                <div className="market-common__subitem">
                                    <h4 className="title">{t("common.issue", {}, "Issue:")}</h4>
                                    <div className="text"
                                        dangerouslySetInnerHTML={{ __html: t("common.issue1", {}, "With 2X more content being produced every day, businesses face a challenge in standing out and maintaining audience engagement, particularly on social platforms.") }}
                                    />
                                </div>
                                <div className="market-common__subitem _green">
                                    <div className="text">2X</div>
                                </div>
                            </div>
                        </div>
                        <div className="market-common__col-02">
                            <h3 className="market-common__subtitle"
                                dangerouslySetInnerHTML={{ __html: t("common.subtitle5", {}, "Fragmented Customer Journeys") }}
                            />
                            <div className="market-common__subitems _green">
                                <div className="market-common__subitem">
                                    <h4 className="title">{t("common.challenge", {}, "Challenge:")}</h4>
                                    <div className="text"
                                        dangerouslySetInnerHTML={{ __html: t("common.challenge2", {}, "Businesses struggle to unify customer data and deliver cohesive, personalised experiences across multiple channels. This results in a 36% decrease in operational efficiency.") }}
                                    />
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