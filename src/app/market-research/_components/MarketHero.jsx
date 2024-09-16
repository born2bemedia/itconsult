"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const MarketHero = () => {
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
        ? "/images/market-research/market-back-02.webp" /* Mobile */
        : "/images/market-research/market-back-01.webp"; /* Desktop */

    return (
        <Parallax bgImage={bgImage} strength={150} className="parallax-custom">
            <section className="market-hero">
                <div className="market-hero__container _container">
                    <div className="market-hero__body">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="market-hero__title">
                            Market Research
                        </motion.h1>
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="market-hero__subtitle">
                            Explore our findings on the latest marketing and IT trends, business gaps, and emerging <br /> demands to understand how we can address your specific challenges.
                        </motion.h2>
                    </div>
                </div>
            </section>
        </Parallax>
    );
};

export default MarketHero;