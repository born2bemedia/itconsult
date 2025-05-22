"use client";
import React from "react";
import "@/styles/animation.scss";
import AnimatedSentence from "@/components/AnimatedSentence";
import { useTranslations } from "next-intl";

const FaqText = () => {
    const t = useTranslations("faq");
    return (
        <section className="faq-text">
            <div className="faq-text__container _container">
                <div className="faq-text__body">
                    <div className="faq-text__text">
                        <AnimatedSentence text={t("animated.text", {}, "We receive many questions from our clients and have highlighted the most important ones in this section to address key business challenges.")} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqText;