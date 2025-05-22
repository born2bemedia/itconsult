"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import RequestForm from "@/components/RequestForm";
import { Parallax } from "react-parallax";
import { useTranslations } from "next-intl";

const MarketLast = () => {
    const t = useTranslations("marketResearch");

    return (
        <Parallax bgImage="/images/people/people-back-img-03.webp" strength={150}>
            <section className="market-last">
                <div className="market-last__container _container">
                    <div className="market-last__body">
                        <div className="market-last__content">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="market-last__title">
                                {t("last.title", {}, "Request a Consultation")}
                            </motion.h2>
                            <motion.h3
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="market-last__subtitle">
                                {t("last.subtitle", {}, "Let’s Discuss How We Can Help Your Business Grow.")}
                            </motion.h3>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="market-last__form">
                                <RequestForm />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </Parallax>
    );
};

export default MarketLast;