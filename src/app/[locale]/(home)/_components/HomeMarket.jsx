"use client";
import React from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import HomeSliderMarket from "./HomeSliderMarket";
import ArrowRight from "@/icons/slider/ArrowRight";
import { useTranslations } from "next-intl";



const HomeMarket = () => {

    const t = useTranslations("home");

    const slides = [
        {
            label: t("market.label1", {}, "Our Participation in SMX Advanced Europe 2024"),
            description: t("market.description1", {}, "We’re heading to SMX Advanced Europe in Berlin on September 10-11! Discover cutting-edge SEO and PPC strategies with us. Stay tuned for updates, and follow us for the latest news!"),
            imageSrc: "/images/newsroom/newsroom-article-02.webp",
            alt: t("market.alt1", {}, "Our Participation in SMX Advanced Europe 2024"),
            link: "/newsroom/we-re-officially-here",
        },
        {
            label: t("market.label2", {}, "We’re Officially Here!"),
            description: t("market.description2", {}, "Our new website is live, marking our official launch. We’ve combined our freelance expertise into a unified company to deliver top IT and marketing solutions. Explore our services now."),
            imageSrc: "/images/newsroom/newsroom-article-01.webp",
            alt: t("market.alt2", {}, "We’re Officially Here!"),
            link: "/newsroom/our-participation-in-smx-advanced-europe-2024",
        },
    ];

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
                        <h2 className="home-market__title">{t("market.title", {}, "MARKET RESEARCH INSIGHTS")}</h2>
                        <Link href="/newsroom" className="home-market__link">
                            {t("market.link", {}, "Market Insights")}
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