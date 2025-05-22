"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import ArrowLeft from "@/icons/slider/ArrowLeft";
import ArrowRight from "@/icons/slider/ArrowRight";

const HomeSlider = ({ slides }) => {
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
        <div className="home-hero-slider">
            <div className="home-hero-slider__count">
                <span className="current-slide">{String(currentSlide).padStart(2, "0")}</span>
                <span className="separator">/</span>
                <span className="all-slides">{String(slides.length).padStart(2, "0")}</span>
            </div>

            <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={30}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="home-hero-slider__item">
                            <div className="home-hero-slider__wrapper">
                                <div className="home-hero-slider__text">{slide}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="home-hero-slider__buttons">
                <button ref={prevRef} className="home-hero-slider__prev"><ArrowLeft /></button>
                <button ref={nextRef} className="home-hero-slider__next"><ArrowRight /></button>
            </div>
        </div>
    );
};

export default HomeSlider;
