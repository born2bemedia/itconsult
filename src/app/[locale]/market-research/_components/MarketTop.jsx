"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const MarketTop = () => {

    const t = useTranslations("marketResearch");

    return (
        <section className="market-research">
            <div className="market-research__container _container">
                <div className="market-research__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="market-research__title">
                        {t("top.title", {}, "Market Research Insights: First Half of 2025")}
                    </motion.h2>
                    <div className="market-research__content">
                        <div className="market-research__col-01">
                            <motion.h3
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="market-research__subtitle _left">
                                {t("top.objective", {}, "Objective:")}
                            </motion.h3>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="market-research__text _left">
                                {t("top.objectiveText", {}, "Provide businesses with a comprehensive analysis of 2025’s marketing and IT trends, highlighting key challenges and potential solutions.")}
                            </motion.div>
                        </div>
                        <div className="market-research__col-02">
                            <motion.h3
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.1}
                                className="market-research__subtitle">
                                {t("top.scope", {}, "Scope:")}
                            </motion.h3>
                            <motion.ul
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="market-research__list">
                                <li className="market-research__item">{t("top.item1", {}, "Marketing and IT trends")}</li>
                                <li className="market-research__item">{t("top.item2", {}, "Business gaps and common issues in both fields.")}</li>
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketTop;