"use client";
import React, { useState } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import HomeSliderWhy from "./HomeSliderWhy";
import { useTranslations } from "next-intl";



const HomeWhy = () => {

    const t = useTranslations("home");


    const slides = [
        {
            title: t("why.slide1.title", {}, "Integrated IT and Marketing Expertise"),
            text: t("why.slide1.text", {}, "We merge IT and Marketing to deliver cohesive solutions across your business."),
            number: "01",
        },
        {
            title: t("why.slide2.title", {}, "Data-Driven Decisions, Not Guesswork"),
            text: t("why.slide2.text", {}, "Our strategies are grounded in data, ensuring effectiveness and continuous improvement."),
            number: "02",
        },
        {
            title: t("why.slide3.title", {}, "Rapid Implementation with Minimal Disruption"),
            text: t("why.slide3.text", {}, "We implement solutions quickly and efficiently, minimising impact on your operations."),
            number: "03",
        },
        {
            title: t("why.slide4.title", {}, "End-to-End Accountability"),
            text: t("why.slide4.text", {}, "We handle every aspect of your project with one point of contact, ensuring seamless execution."),
            number: "04",
        },
        {
            title: t("why.slide5.title", {}, "Future-Proof Solutions"),
            text: t("why.slide5.text", {}, "Our solutions are scalable and adaptable, keeping you ahead of technological and marketing trends."),
            number: "05",
        },
        {
            title: t("why.slide6.title", {}, "Transparent Communication, No Surprises"),
            text: t("why.slide6.text", {}, "Expect clear updates and no hidden costs, with open channels for feedback throughout."),
            number: "06",
        },
        {
            title: t("why.slide7.title", {}, "Collaborative Partnership"),
            text: t("why.slide7.text", {}, "We work alongside your team, sharing knowledge and empowering you to leverage our solutions fully."),
            number: "07",
        },
        {
            title: t("why.slide8.title", {}, "Flexible Engagement Models"),
            text: t("why.slide8.text", {}, "Choose from project-based, managed services, or staff augmentation to match your needs and goals."),
            number: "08",
        },
    ];

    return (
        <section className="home-why">
            <div className="home-why__container _container">
                <div className="home-why__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="home-why__title">
                        {t("why.title", {}, "Why choose Nexoria")}
                    </motion.h2>
                    <div className="home-why__content">
                        <HomeSliderWhy slides={slides} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeWhy;