"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import ArrowLeft from "@/icons/slider/ArrowLeft";
import ArrowRight from "@/icons/slider/ArrowRight";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const HomeSliderFaq = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="home-faq__slider">

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.3}
                className="home-faq-slider">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSwiper={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
                >
                    {slides.map((slide, index) => (


                        <SwiperSlide key={index}>
                            <div className="home-faq-slider__item">
                                <div className="home-faq-slider__wrapper">
                                    <div className="home-faq-slider__question">{slide.question}</div>
                                    <div className="home-faq-slider__answer">
                                        <h4 className="home-faq-slider__label">{slide.label}</h4>
                                        <div
                                            className="home-faq-slider__text"
                                            dangerouslySetInnerHTML={{ __html: slide.answer }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </motion.div>

            <div className="home-faq-slider__buttons">
                <button ref={prevRef} className="home-faq-slider__prev">
                    <ArrowLeft />
                </button>
                <button ref={nextRef} className="home-faq-slider__next">
                    <ArrowRight />
                </button>
            </div>

        </div>
    );
};

export default HomeSliderFaq;