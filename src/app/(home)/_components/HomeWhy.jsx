"use client";
import React, { useState } from "react";
import "@/styles/home/home.scss";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import HomeSliderWhy from "./HomeSliderWhy";

const slides = [
    {
        title: "Integrated IT and Marketing Expertise",
        text: "We merge IT and Marketing to deliver cohesive solutions across your business.",
        number: "01",
    },
    {
        title: "Data-Driven Decisions, Not Guesswork",
        text: "Our strategies are grounded in data, ensuring effectiveness and continuous improvement.",
        number: "02",
    },
    {
        title: "Rapid Implementation with Minimal Disruption",
        text: "We implement solutions quickly and efficiently, minimising impact on your operations.",
        number: "03",
    },
    {
        title: "End-to-End Accountability",
        text: "We handle every aspect of your project with one point of contact, ensuring seamless execution.",
        number: "04",
    },
    {
        title: "Future-Proof Solutions",
        text: "Our solutions are scalable and adaptable, keeping you ahead of technological and marketing trends.",
        number: "05",
    },
    {
        title: "Transparent Communication, No Surprises",
        text: "Expect clear updates and no hidden costs, with open channels for feedback throughout.",
        number: "06",
    },
    {
        title: "Collaborative Partnership",
        text: "We work alongside your team, sharing knowledge and empowering you to leverage our solutions fully.",
        number: "07",
    },
    {
        title: "Flexible Engagement Models",
        text: "Choose from project-based, managed services, or staff augmentation to match your needs and goals.",
        number: "08",
    },
];

const HomeWhy = () => {
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
                        Why choose Nexoria
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