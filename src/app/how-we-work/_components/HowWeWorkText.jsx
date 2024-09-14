"use client";
import React from "react";
import "@/styles/animation.scss";
import AnimatedSentence from "@/components/AnimatedSentence";

const HowWeWorkText = () => {
    return (
        <section className="work-text">
            <div className="work-text__container _container">
                <div className="work-text__body">
                    <div className="work-text__text">
                        <AnimatedSentence text="At Nexoria, we are highly adaptable to your business requirements. Our services can be customised to fit your needs, whether you require a full-scale project, temporary expertise, or ongoing support. We offer flexible engagement models and can work with you online, offline, or globally." />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWorkText;