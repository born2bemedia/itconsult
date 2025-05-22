"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import RequestForm from "@/components/RequestForm";
import { Parallax } from "react-parallax";
import { useTranslations } from "next-intl";

const FaqLast = () => {

    const t = useTranslations("faq");

    return (
        <Parallax bgImage="/images/people/people-back-img-03.webp" strength={150}>
            <section className="faq-last">
                <div className="faq-last__container _container">
                    <div className="faq-last__body">
                        <div className="faq-last__content">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="faq-last__title">
                                {t("last.title", {}, "Have a Question")}
                            </motion.h2>
                            <motion.h3
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="faq-last__subtitle">
                                {t("last.subtitle", {}, "Get Expert Guidance on Business Optimisation with Marketing and IT solutions.")}
                            </motion.h3>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="faq-last__form">
                                <RequestForm />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </Parallax>

    );
};

export default FaqLast;