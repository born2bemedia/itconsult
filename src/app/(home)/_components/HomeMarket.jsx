"use client";
import React from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import HomeSliderMarket from "./HomeSliderMarket";
import ArrowRight from "@/icons/slider/ArrowRight";

const slides = [
    {
        label: "Статья №1",
        description: "Описание №1",
        imageSrc: "",
        alt: "",
        link: "/newsroom/we-re-officially-here",
    },
    {
        label: "Статья №2",
        description: "Описание №2",
        imageSrc: "",
        alt: "",
        link: "/newsroom/our-participation-in-smx-advanced-europe-2024",
    },
];

const HomeMarket = () => {
    return (
        <section className="home-market">
            <div className="home-market__container _container">
                <div className="home-market__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="home-market__top"
                    >
                        <h2 className="home-market__title">MARKET RESEARCH INSIGHTS</h2>
                        <Link href="/market-insights" className="home-market__link">
                            Market Insights
                            <ArrowRight />
                        </Link>
                    </motion.div>
                    <div className="home-market__content">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="home-market__slider"
                        >
                            <HomeSliderMarket slides={slides} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMarket;