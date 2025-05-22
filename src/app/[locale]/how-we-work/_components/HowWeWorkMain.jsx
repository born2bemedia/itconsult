"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowRight from "@/icons/slider/ArrowRight";
import RequestButton from "@/components/RequestButton";
import { useTranslations } from "next-intl";
const HowWeWorkMain = () => {

    const t = useTranslations("howWeWork");

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="work-main">
            <div className="work-main__container _container">
                <div className="work-main__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="work-main__row">
                        <div className="work-main__col-01">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="work-main__title" 
                                dangerouslySetInnerHTML={{ __html: t("main.title1", {}, "PROJECT-BASED <br /> ENGAGEMENT") }}
                                />
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="work-main__text">
                                {t("main.text1", {}, "Complete your specific projects with our end-to-end management. We handle all aspects of the project, ensuring precise execution and timely delivery.")}
                                <br />
                                <br />
                                {t("main.text2", {}, "Our project-based engagement can be managed online or on-site as needed. We use collaborative tools for remote coordination and project tracking but can also arrange in-person meetings or site visits if required. Our flexible approach ensures that we efficiently meet your project needs, whether virtually or physically.")}
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="work-main__button">
                                <RequestButton
                                    className={"work-main__link"}
                                    text={t("main.button", {}, "Request")}
                                    icon={<ArrowRight />}
                                />
                            </motion.div>
                        </div>
                        <div className="work-main__col-02">
                            {isMobile ? (
                                <img src="/images/how-we-work/how-we-work-img-01.webp" alt="image" className="work-main__img-mobile" />
                            ) : (
                                <img src="/images/how-we-work/how-we-work-img-01.webp" alt="image" className="work-main__img-desc" />
                            )}
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="work-main__row">
                        <div className="work-main__col-01">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="work-main__title" 
                                dangerouslySetInnerHTML={{ __html: t("main.title2", {}, "OUTSTAFFING") }}
                                />
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="work-main__text">
                                {t("main.text3", {}, "Integrate our skilled professionals into your team for temporary needs. This model offers additional expertise and fills skill gaps without long-term commitments.")}
                                <br />
                                <br />
                                {t("main.text4", {}, "Our outstaffing model allows you to seamlessly integrate our skilled professionals into your existing team for temporary projects. We provide the expertise you need without the long-term commitment. Our team works remotely or on-site alongside yours to fill skill gaps and support your projects. You benefit from our specialised skills while maintaining control over your day-to-day.")}
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="work-main__button">
                                <RequestButton
                                    className={"work-main__link"}
                                    text={t("main.button", {}, "Request")}
                                    icon={<ArrowRight />}
                                />
                            </motion.div>
                        </div>
                        <div className="work-main__col-02">
                            {isMobile ? (
                                <img src="/images/how-we-work/how-we-work-img-02.webp" alt="image" className="work-main__img-mobile" />
                            ) : (
                                <img src="/images/how-we-work/how-we-work-img-02.webp" alt="image" className="work-main__img-desc" />
                            )}
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="work-main__row">
                        <div className="work-main__col-01">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="work-main__title" 
                                dangerouslySetInnerHTML={{ __html: t("main.title3", {}, "MANAGED SERVICES") }}
                                />
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="work-main__text">
                                {t("main.text5", {}, "Let us manage ongoing functions like IT support or marketing. This approach ensures consistent, reliable service, allowing you to focus on your core business activities.")}
                                <br />
                                <br />
                                {t("main.text6", {}, "We take over the daily management of functions like IT support or marketing. Our team handles all operational tasks, from monitoring and troubleshooting to strategy execution, ensuring consistent and reliable service. You can focus on your core business activities, knowing that experts efficiently manage and optimise these functions.")}
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="work-main__button">
                                <RequestButton
                                    className={"work-main__link"}
                                    text={t("main.button", {}, "Request")}
                                    icon={<ArrowRight />}
                                />
                            </motion.div>

                        </div>
                        <div className="work-main__col-02">
                            {isMobile ? (
                                <img src="/images/how-we-work/how-we-work-img-03.webp" alt="image" className="work-main__img-mobile" />
                            ) : (
                                <img src="/images/how-we-work/how-we-work-img-03.webp" alt="image" className="work-main__img-desc" />
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWorkMain;