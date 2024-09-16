"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import OrderButton from "@/components/OrderButton";
import ArrowRight from "@/icons/slider/ArrowRight";
import ResponsiveCol from "./ResponsiveCol";
import ComplexAccordion1 from "../ComplexAccordions/ComplexAccordion1";
import ComplexAccordion2 from "../ComplexAccordions/ComplexAccordion2";
import ComplexAccordion3 from "../ComplexAccordions/ComplexAccordion3";
import ComplexAccordion4 from "../ComplexAccordions/ComplexAccordion4";

const SolutionsMain = () => {
    return (
        <section className="solutions-main">
            <div className="solutions-main__container _container">
                <div className="solutions-main__body">
                    <div className="solutions-main__row">
                        <ResponsiveCol>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="solutions-main__title">
                                LaunchPad <br /> Package
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="solutions-main__desc">
                                Perfect for startups, this package provides the essential IT infrastructure and marketing strategy for a smooth and successful launch.
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="solutions-main__price">
                                Price: On Request
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="solutions main__btn">
                                <OrderButton
                                    className={"solutions-main__link"}
                                    text={"Order Now"}
                                    service={"LaunchPad Package"}
                                    icon={<ArrowRight />}
                                />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="solutions-main__number">
                                01
                            </motion.div>
                        </ResponsiveCol>
                        <div className="solutions-main__col-02"><ComplexAccordion1 /></div>
                    </div>

                    <div className="solutions-main__row">
                        <ResponsiveCol>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="solutions-main__title">
                                Growth Accelerator <br /> Package
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="solutions-main__desc">
                                Ideal for SMEs looking to scale, this package enhances your IT capabilities and drives your marketing efforts for rapid growth.
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="solutions-main__price">
                                Price: On Request
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="solutions main__btn">
                                <OrderButton
                                    className={"solutions-main__link"}
                                    text={"Order Now"}
                                    service={"Growth Accelerator Package"}
                                    icon={<ArrowRight />}
                                />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="solutions-main__number">
                                02
                            </motion.div>
                        </ResponsiveCol>
                        <div className="solutions-main__col-02"><ComplexAccordion2 /></div>
                    </div>

                    <div className="solutions-main__row">
                        <ResponsiveCol>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="solutions-main__title">
                                Digital <br /> Transformation <br /> Package
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="solutions-main__desc">
                                For established businesses, this package modernises IT systems and marketing strategies to keep you competitive.
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="solutions-main__price">
                                Price: On Request
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="solutions main__btn">
                                <OrderButton
                                    className={"solutions-main__link"}
                                    text={"Order Now"}
                                    service={"Digital Transformation Package"}
                                    icon={<ArrowRight />}
                                />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="solutions-main__number">
                                03
                            </motion.div>
                        </ResponsiveCol>
                        <div className="solutions-main__col-02"><ComplexAccordion3 /></div>
                    </div>

                    <div className="solutions-main__row">
                        <ResponsiveCol>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="solutions-main__title">
                                Market Expansion <br /> Package
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="solutions-main__desc">
                                Designed for businesses expanding into new markets, this package combines localised IT solutions with tailored marketing campaigns.
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="solutions-main__price">
                                Price: On Request
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="solutions main__btn">
                                <OrderButton
                                    className={"solutions-main__link"}
                                    text={"Order Now"}
                                    service={"Market Expansion Package"}
                                    icon={<ArrowRight />}
                                />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.4}
                                className="solutions-main__number">
                                04
                            </motion.div>
                        </ResponsiveCol>
                        <div className="solutions-main__col-02"><ComplexAccordion4 /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsMain;