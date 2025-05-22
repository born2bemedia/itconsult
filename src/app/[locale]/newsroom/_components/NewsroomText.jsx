"use client";
import React from "react";
import "@/styles/animation.scss";
import AnimatedSentence from "@/components/AnimatedSentence";
import { useTranslations } from "next-intl";
const NewsroomText = () => {
    const t = useTranslations("newsroom");
    return (
        <section className="newsroom-text">
            <div className="newsroom-text__container _container">
                <div className="newsroom-text__body">
                    <div className="newsroom-text__text">
                        <AnimatedSentence text={t("animated.text", {}, "Welcome to our Newsroom, where you can find our team's latest updates, announcements, and insights. Stay informed about our latest projects, industry events, and company milestones.")} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsroomText;