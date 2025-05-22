"use client";
import React, { useState } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import HomeSliderFaq from "./HomeSliderFaq";
import ArrowRight from "@/icons/slider/ArrowRight";
import { useTranslations } from "next-intl";




const HomeWhy = () => {

    const t = useTranslations("home");

    const slides = [
        {
            question: t("faq.question1", {}, "We've invested $50,000 in digital marketing over the last three months, but our ROI is only 2%. We struggle to identify which channels are working and how to optimise our spending. Can you help us turn this around?"),
            label: t("faq.label1", {}, "Brand Name team:"),
            answer: t("faq.answer1", {}, "You should start by accessing your Google Analytics, Facebook Ads Manager, and CRM data to conduct a detailed multi-channel attribution analysis, pinpointing which channels contribute to conversions. <br /> <br /> We use tools like Google Data Studio for reporting and perform A/B testing on customer’s ads and landing pages to refine targeting and messaging. <br /> <br /> By reallocating your budget towards high-performing channels and optimising bids in real-time with Google Ads and Facebook Business Manager, we aim to significantly boost your ROI, providing a clear, data-driven strategy for future campaigns."),
        },
        {
            question: t("faq.question2", {}, "Our IT systems struggle with handling large volumes of data, causing delays in processing and leaving us vulnerable to security breaches. We need to optimise our data management and secure our systems to ensure seamless operations as we expand. How can you help us?"),
            label: t("faq.label2", {}, "Brand Name team:"),
            answer: t("faq.answer2", {}, "To address these challenges, we recommend implementing a data management overhaul by deploying scalable cloud storage solutions like AWS S3 paired with high-performance databases like PostgreSQL or MongoDB to handle large data volumes efficiently. <br /> <br /> For security, integrating advanced encryption and access control measures using tools like Fortinet for network security and Splunk for real-time threat detection will protect your data from breaches. <br /> <br /> Optimising data processing and enhancing security protocols, your systems will be better equipped to handle growth, ensuring reliable and secure operations."),
        },
    ];

    return (
        <section className="home-faq">
            <div className="home-faq__container _container">
                <div className="home-faq__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="home-faq__top">
                        <h2 className="home-faq__title">{t("faq.title", {}, "Your ask, we answer")}</h2>
                        <Link href="/faq" className="home-faq__link">
                            {t("faq.link", {}, "More FAQ")}
                            <ArrowRight />
                        </Link>
                    </motion.div>
                    <div className="home-faq__content">
                        <HomeSliderFaq slides={slides} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeWhy;