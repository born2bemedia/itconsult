"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { useTranslations } from "next-intl";
const ItConsultingHero = () => {

    const t = useTranslations("itConsulting");

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
        ? "/images/it-consulting/it-consulting-img-back-03.webp" /* Mobile */
        : "/images/it-consulting/it-consulting-img-back-02.webp"; /* Desktop */

    return (
        <Parallax bgImage={bgImage} strength={150} className="parallax-custom">
            <section className="itCons-hero">
                <div className="itCons-hero__container _container">
                    <div className="itCons-hero__body">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="itCons-hero__title"
                            dangerouslySetInnerHTML={{ __html: t("hero.title", {br: "<br />"}, "Tailored IT Consulting <br /> Solutions for Business Success") }}
                        />
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="itCons-hero__subtitle"
                        >
                            {t("hero.subtitle", {}, "Delivering IT solutions that enhance efficiency, security, and scalability to drive your business forward.")}
                        </motion.h2>
                    </div>
                </div>
            </section>
        </Parallax>
    );
};

export default ItConsultingHero;