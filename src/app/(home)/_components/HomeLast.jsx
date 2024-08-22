"use client";
import React, { useState } from "react";
import "@/styles/home/home.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowRight from "@/icons/slider/ArrowRight";
import RequestForm from "@/components/RequestForm";


const HomeLast = () => {
    return (
        <section className="home-market">
            <div className="home-market__container _container">
                <div className="home-market__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="home-market__top">
                        <h2 className="home-market__title">MARKET RESEARCH INSIGHTS</h2>
                        <Link href="/market-insights" className="home-market__link">
                            Market Insights
                            <ArrowRight />
                        </Link>
                    </motion.div>
                    <div className="home-market__content"><RequestForm/></div>
                </div>
            </div>
        </section>
    );
};

export default HomeLast;