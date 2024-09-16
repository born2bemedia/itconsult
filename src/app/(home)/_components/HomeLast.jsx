"use client";
import React, { useState } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import RequestForm from "@/components/RequestForm";
import { Parallax } from 'react-parallax';


const HomeLast = () => {
    return (
        <section className="home-last">
            <div className="home-last__container">
                <div className="home-last__body">
                    <Parallax bgImage="/images/home/home-img-06.webp" strength={150}>
                        <div className="home-last__col-01">
                            <div className="home-last__wrapper">
                                <motion.h2
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    className="home-last__title">
                                    INTEGRATED <br /> GROWTH AWAITS
                                </motion.h2>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    custom={0.3}
                                    className="home-last__text">
                                    Ready to see how seamless integration can drive your business forward? Let’s create solutions that transform your operations and accelerate your growth.
                                </motion.div>
                            </div>
                        </div></Parallax>
                    <div className="home-last__col-02">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="home-last__label">
                            Harness the Power <br /> of Unified IT and Marketing
                        </motion.h3>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.4}
                            className="home-last__form">
                            <RequestForm />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeLast;