"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const PeopleHero = () => {

    const t = useTranslations("people");

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
                            <h2 className="people-main__title">{t("main.chiefStrategyOfficer", {}, "Chief Strategy Officer")}</h2>
                            <div className="people-main__text">{t("main.chiefStrategyOfficerText", {}, "An expert in aligning IT and marketing strategies with business objectives, ensuring our clients’ growth and success.")}</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">02</div>
                            <h2 className="people-main__title">{t("main.leadITConsultant", {}, "Lead IT Consultant")}</h2>
                            <div className="people-main__text">{t("main.leadITConsultantText", {}, "Specialises in IT infrastructure and security, providing scalable solutions that keep businesses running smoothly and securely.")}</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">03</div>
                            <h2 className="people-main__title">{t("main.headOfMarketing", {}, "Head of Marketing")}</h2>
                            <div className="people-main__text">{t("main.headOfMarketingText", {}, "Develops data-driven marketing strategies that resonate with target audiences and drive conversions.")}</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">04</div>
                            <h2 className="people-main__title">{t("main.seniorSoftwareDeveloper", {}, "Senior Software Developer")}</h2>
                            <div className="people-main__text">{t("main.seniorSoftwareDeveloperText", {}, "Focuses on building and integrating software tailored to each client’s unique needs.")}</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">05</div>
                            <h2 className="people-main__title">{t("main.dataAnalyst", {}, "Data Analyst")}</h2>
                            <div className="people-main__text">{t("main.dataAnalystText", {}, "Extracts actionable insights from data, allowing us to refine our approaches and maximise ROI continuously.")}</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">06</div>
                            <h2 className="people-main__title">{t("main.contentStrategist", {}, "Content Strategist")}</h2>
                            <div className="people-main__text">{t("main.contentStrategistText", {}, "Crafts compelling narratives that engage audiences and build brand authority.")}</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">07</div>
                            <h2 className="people-main__title">{t("main.digitalMarketingSpecialist", {}, "Digital Marketing Specialist")}</h2>
                            <div className="people-main__text">{t("main.digitalMarketingSpecialistText", {}, "Masters the latest digital tools and platforms to enhance online visibility and lead generation.")}</div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-main__item">
                            <div className="people-main__number">08</div>
                            <h2 className="people-main__title">{t("main.customerSuccessManager", {}, "Customer Success Manager")}</h2>
                            <div className="people-main__text">{t("main.customerSuccessManagerText", {}, "Ensures our clients receive ongoing support and value, maintaining long-term relationships.")}</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeopleHero;