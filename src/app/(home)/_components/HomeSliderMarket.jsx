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
import Image from "next/image";

const HomeSliderMarket = ({ slides }) => {
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
        <div className="home-market__content">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.3}
                className="home-market-slider"
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
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="home-market-slider__item">
                                <div className="home-market-slider__wrapper">
                                    <div className="home-market-slider__col-01">
                                        <div className="home-market-slider__image">
                                            <Image
                                                src={slide.imageSrc}
                                                alt={slide.alt}
                                                width={600}
                                                height={400}
                                                className="image"
                                            />
                                        </div>
                                    </div>
                                    <div className="home-market-slider__col-02">
                                        <h4 className="home-market-slider__label">
                                            {slide.label}
                                        </h4>
                                        <p className="home-market-slider__text">
                                            {slide.description}
                                        </p>
                                        {slide.link && (
                                            <Link href={slide.link} passHref className="home-market-slider__link">
                                                Read Full Report
                                                <ArrowRight />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            <div className="home-market-slider__buttons">
                <button ref={prevRef} className="home-market-slider__prev">
                    <ArrowLeft />
                </button>
                <button ref={nextRef} className="home-market-slider__next">
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};

export default HomeSliderMarket;