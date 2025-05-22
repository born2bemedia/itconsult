"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import PeopleForm from "@/components/PeopleForm";
import { Parallax } from "react-parallax";
import { useTranslations } from "next-intl";

const PeopleLast = () => {

    const t = useTranslations("people");

    return (
        <Parallax bgImage="/images/people/people-back-img-03.webp" strength={150}>
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
                                {t("last.applyToJoinOurTeam", {}, "APPLY TO JOIN OUR TEAM")}
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="people-last__form">
                                <PeopleForm />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </Parallax>
    );
};

export default PeopleLast;