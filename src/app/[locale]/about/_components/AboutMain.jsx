"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AboutMain = () => {

    const t = useTranslations("about");

    return (
        <section className="about-main">
            <div className="about-main__container _container">
                <div className="about-main__body">
                    <div className="about-main__row">
                        <div className="about-main__col-01">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="about-main__number">
                                01
                            </motion.div>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="about-main__title"  dangerouslySetInnerHTML={{ __html: t("main.title1", {br: "<br />"}, "Education <br /> and Networking") }} />
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="about-main__text">
                                {t("main.text1", {}, "Our team members come from diverse educational backgrounds, specialising in IT, marketing, and business strategy. We regularly attend key industry events, such as the Web Summit in Lisbon, DMEXCO in Cologne, and the Cannes Lions International Festival of Creativity. These conferences keep us updated on the latest developments, ensuring our knowledge is both current and globally relevant.")}
                            </motion.div>
                        </div>
                        <div className="about-main__col-02">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="about-main__items">
                                <div className="about-main__item">
                                    <img src="/images/about/about-img-01.webp" alt="image" className="image" />
                                    <h3 className="title">{t("main.item1", {}, "Web Summit in Lisbon")}</h3>
                                </div>
                                <div className="about-main__item">
                                    <img src="/images/about/about-img-02.webp" alt="image" className="image" />
                                    <h3 className="title">{t("main.item2", {}, "DMEXCO")}</h3>
                                </div>
                                <div className="about-main__item">
                                    <img src="/images/about/about-img-03.webp" alt="image" className="image" />
                                    <h3 className="title">{t("main.item3", {}, "Cannes Lions International Festival of Creativity")}</h3>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="about-main__row">
                        <div className="about-main__col-01">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="about-main__number">
                                02
                            </motion.div>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="about-main__title"  dangerouslySetInnerHTML={{ __html: t("main.title2", {br: "<br />"}, "Data-Driven <br /> Insights") }} />
                         
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="about-main__text">
                                {t("main.text2", {}, "Each project we undertake deepens our understanding of various industries and markets. We use advanced tools like Google Analytics, Tableau, and Power BI to analyse real-world data from our past and ongoing projects. This allows us to fine-tune strategies that are effective across different niches. We deliver tailored solutions that drive measurable results by continuously refining our approaches.")}
                            </motion.div>
                        </div>
                        <div className="about-main__col-02">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="about-main__items">
                                <div className="about-main__item">
                                    <img src="/images/about/about-img-04.webp" alt="image" className="image" />
                                    <h3 className="title">{t("main.item4", {}, "Google Analytics")}</h3>
                                </div>
                                <div className="about-main__item">
                                    <img src="/images/about/about-img-05.webp" alt="image" className="image" />
                                    <h3 className="title">{t("main.item5", {}, "Tableau")}</h3>
                                </div>
                                <div className="about-main__item">
                                    <img src="/images/about/about-img-06.webp" alt="image" className="image" />
                                    <h3 className="title">{t("main.item6", {}, "Power BI")}</h3>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="about-main__row">
                        <div className="about-main__col-01">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="about-main__number">
                                03
                            </motion.div>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="about-main__title"  dangerouslySetInnerHTML={{ __html: t("main.title3", {br: "<br />"}, "Customer <br /> Feedback") }} />
             
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="about-main__text">
                                {t("main.text3", {}, "Long-term customer relationships are at the heart of our business. We gather and analyse feedback through tools like SurveyMonkey, Net Promoter Score (NPS) surveys, and Zoom for in-depth client interviews. This feedback not only validates our efforts but also guides our continuous improvement. By leveraging these insights, we stay aligned with our clients' evolving needs, ensuring we deliver solutions that hit the mark.")}
                            </motion.div>
                        </div>
                        <div className="about-main__col-02">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="about-main__items">
                                <div className="about-main__item">
                                    <img src="/images/about/about-img-07.webp" alt="image" className="image" />
                                    <h3 className="title">{t("main.item7", {}, "SurveyMonkey")}</h3>
                                </div>
                                <div className="about-main__item">
                                    <img src="/images/about/about-img-08.webp" alt="image" className="image" />
                                    <h3 className="title">{t("main.item8", {}, "Net Promoter Score (NPS)")}</h3>
                                </div>
                                <div className="about-main__item">
                                    <img src="/images/about/about-img-09.webp" alt="image" className="image" />
                                    <h3 className="title">{t("main.item9", {}, "Zoom")}</h3>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMain;