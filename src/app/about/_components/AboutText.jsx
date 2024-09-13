"use client";
import "@/styles/animation.scss";
import React from "react";
import AnimatedSentence from "./AnimatedSentence";

const AboutText = () => {
    return (
        <section className="about-text">
            <div className="about-text__container _container">
                <div className="about-text__body">
                    <div className="about-text__text">
                    <AnimatedSentence text="At Nexoria, we blend deep theoretical knowledge with real-world insights. Our expertise is honed through continuous learning and practical application. Discover how we turn knowledge into impactful solutions." />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutText;