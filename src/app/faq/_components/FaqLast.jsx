"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import RequestForm from "@/components/RequestForm";

const FaqLast = () => {
    return (
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
                            Have a Question
                        </motion.h2>
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="faq-last__subtitle">
                            Get Expert Guidance on Business Optimisation with Marketing and IT solutions.
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
    );
};

export default FaqLast;