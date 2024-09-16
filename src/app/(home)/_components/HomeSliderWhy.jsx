"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import ArrowLeft from "@/icons/slider/ArrowLeft";
import ArrowRight from "@/icons/slider/ArrowRight";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const HomeSliderWhy = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, []);

    return (
        <div className="home-why__slider">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.3}
                className="home-why-slider"
            >
                <Swiper
                    ref={swiperRef} 
                    modules={[Navigation]}
                    spaceBetween={24}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
                    breakpoints={{
                        575: {
                            slidesPerView: 1,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="home-why-slider__item">
                                <div className="home-why-slider__wrapper">
                                    <h3 className="home-why-slider__title">{slide.title}</h3>
                                    <div className="home-why-slider__text">{slide.text}</div>
                                    <div className="home-why-slider__number">{slide.number}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.4}
                className="home-why-slider__bottom"
            >
                <div className="home-why-slider__buttons">
                    <button ref={prevRef} className="home-why-slider__prev">
                        <ArrowLeft />
                    </button>
                    <button ref={nextRef} className="home-why-slider__next">
                        <ArrowRight />
                    </button>
                </div>
                <Link href="/how-we-work" className="home-why__link">
                    Learn More
                    <ArrowRight />
                </Link>
            </motion.div>
        </div>
    );
};

export default HomeSliderWhy;