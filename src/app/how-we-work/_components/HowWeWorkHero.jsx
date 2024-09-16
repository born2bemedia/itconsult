"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const HowWeWorkHero = () => {
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
        ? "/images/how-we-work/how-we-work-back-02.webp" /* Mobile */
        : "/images/how-we-work/how-we-work-back-01.webp"; /* Desktop */

    return (
        <Parallax bgImage={bgImage} strength={150} className="parallax-custom">
            <section className="work-hero">
                <div className="work-hero__container _container">
                    <div className="work-hero__body">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="work-hero__title">
                            How We Work
                        </motion.h1>
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="work-hero__subtitle">
                            Flexible approaches to meet your needs.
                        </motion.h2>
                    </div>
                </div>
            </section>
        </Parallax>
    );
};

export default HowWeWorkHero;