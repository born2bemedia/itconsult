"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { useTranslations } from "next-intl";
const FaqHero = () => {

    const t = useTranslations("faq");

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const bgImage = isMobile
        ? "/images/faq/faq-back-02.webp" /* Mobile */
        : "/images/faq/faq-back-01.webp"; /* Desktop */

    return (
        <Parallax bgImage={bgImage} strength={150} className="parallax-custom">
            <section className="faq-hero">
                <div className="faq-hero__container _container">
                    <div className="faq-hero__body">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="faq-hero__title">
                            {t("hero.title", {}, "You Ask, We Answer")}
                        </motion.h1>
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="faq-hero__subtitle">
                            {t("hero.subtitle", {}, "Find out how marketing and technology boost business performance.")}
                        </motion.h2>
                    </div>
                </div>
            </section>
        </Parallax>
    );
};

export default FaqHero;