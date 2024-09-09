"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import PeopleForm from "@/components/PeopleForm";

const PeopleLast = () => {
    return (
        <section className="people-last">
            <div className="people-last__container _container">
                <div className="people-last__body">
                    <div className="people-last__content">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="people-last__title">
                            APPLY TO JOIN OUR TEAM
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="people-last__form">
                                <PeopleForm/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeopleLast;