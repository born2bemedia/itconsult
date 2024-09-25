"use client";
import React, { useState, useEffect } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowRight from "@/icons/slider/ArrowRight";
import { Parallax } from "react-parallax";

const MarketingNeed = () => {
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
    ? "/images/it-consulting/it-consulting-img-back-05.webp" /* Mobile */
    : "/images/it-consulting/it-consulting-img-back-04.webp"; /* Desktop */

  return (
    <Parallax bgImage={bgImage} strength={150}>
      <section className="marketing-need">
        <div className="marketing-need__container _container">
          <div className="marketing-need__body">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="marketing-need__content"
            >
              <h2 className="marketing-need__title">Need Assistance?</h2>
              <Link
                href="/contacts"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="marketing-need__link"
              >
                Contact Us
                <ArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default MarketingNeed;