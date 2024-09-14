"use client";
import React from "react";
import "@/styles/animation.scss";
import AnimatedSentence from "@/components/AnimatedSentence";

const PeopleText = () => {
    return (
        <section className="people-text">
            <div className="people-text__container _container">
                <div className="people-text__body">
                    <div className="people-text__text">
                        <AnimatedSentence text="Meet the people who turn your business challenges into opportunities. Our team of skilled professionals combines expertise in IT and marketing to deliver solutions that drive your success."/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeopleText;