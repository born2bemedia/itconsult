"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import ArrowLeft from "@/icons/slider/ArrowLeft";
import ArrowRight from "@/icons/slider/ArrowRight";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import OrderButton from "@/components/OrderButton";
import { useTranslations } from "next-intl";

const ItConsultingSlider2 = ({ slides }) => {

    const t = useTranslations("marketingConsulting");

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
        <div className="wrapper-it-conslt__slider">
            <motion.div className="wrapper-it-conslt-slider2">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={16}
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
                            slidesPerView: 5,
                        },
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="wrapper-it-conslt-slider2__item">
                                <div className="wrapper-it-conslt-slider2__wrapper">
                                    <h3
                                        className="wrapper-it-conslt-slider2__title"
                                        dangerouslySetInnerHTML={{ __html: slide.title }}
                                    />
                                    <div className="wrapper-it-conslt-slider2__text">{slide.text}</div>
                                    <OrderButton
                                        className={"wrapper-it-conslt-slider2__link"}
                                        text={t("orderNow", {}, "Order Now")}
                                        service={slide.service}
                                        icon={<ArrowRight />} 
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            <div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.2}
                className="wrapper-it-conslt-slider2__buttons">
                <button ref={prevRef} className="wrapper-it-conslt-slider2__prev">
                    <ArrowLeft />
                </button>
                <button ref={nextRef} className="wrapper-it-conslt-slider2__next">
                    <ArrowRight />
                </button>
            </div>

        </div>
    );
};

export default ItConsultingSlider2;