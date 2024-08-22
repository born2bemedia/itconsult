"use client";
import React, { useState } from "react";
import "@/styles/home/home.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowRight from "@/icons/slider/ArrowRight";


const HomeWhat = () => {
    return (
        <section className="home-what">
            <div className="home-what__container">
                <div className="home-what__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="home-what__title">
                        What we do
                    </motion.h2>
                    <div className="home-what__content">
                        <div className="home-what__col-01">
                            <div className="home-what__wrapper">
                                <div className="home-what__front">
                                    <div className="home-what__info">
                                        <h3 className="home-what__label">IT Consulting</h3>
                                        <div className="home-what__icon"><ArrowRight /></div>
                                    </div>
                                </div>
                                <div className="home-what__back">
                                    <div className="home-what__top">
                                        <div className="home-what__image-01"></div>
                                        <div className="home-what__row-01">
                                            <h4 className="title">IT Consulting</h4>
                                            <div className="text">We turn your technology into a strategic advantage by developing customised solutions that support your business goals and drive efficiency.</div>
                                        </div>
                                    </div>
                                    <div className="home-what__bottom">
                                        <div className="home-what__items">
                                            <div className="home-what__item">
                                                <h4 className="title">IT Strategy <br /> and Planning</h4>
                                                <div className="text">We create clear, actionable roadmaps that align your IT with your business objectives, setting you up for sustained success.</div>
                                            </div>
                                            <div className="home-what__item">
                                                <h4 className="title">IT Infrastructure <br /> Management</h4>
                                                <div className="text">Our team ensures your IT systems are optimised and reliable so you can focus on what matters most—growing your business.</div>
                                            </div>
                                            <div className="home-what__item">
                                                <h4 className="title">Software Development <br /> and Integration</h4>
                                                <div className="text">We build and integrate software solutions tailored to your unique needs, ensuring seamless operation and scalability.</div>
                                            </div>
                                            <div className="home-what__item">
                                                <h4 className="title">Data Management <br /> and Analytics  </h4>
                                                <div className="text">We help you unlock the potential of your data, providing insights that inform smarter decisions and strategic growth.</div>
                                            </div>
                                            <div className="home-what__item">
                                                <h4 className="title">IT Support <br /> and Maintenance</h4>
                                                <div className="text">Our proactive support and maintenance services keep your IT environment running smoothly, minimising downtime and disruptions</div>
                                            </div>
                                            <div className="home-what__item">
                                                <Link href="/it-consulting" className="home-what__link">
                                                    Explore Services
                                                    <ArrowRight />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-what__col-02">
                            <div className="home-what__wrapper">
                                <div className="home-what__front">
                                    <div className="home-what__info">
                                        <h3 className="home-what__label">Marketing Consulting</h3>
                                        <div className="home-what__icon"><ArrowRight /></div>
                                    </div>
                                </div>
                                <div className="home-what__back">
                                    <div className="home-what__top">
                                        <div className="home-what__image-02"></div>
                                        <div className="home-what__row-01 _right">
                                            <h4 className="title">Marketing Consulting</h4>
                                            <div className="text">We bridge the gap between technology and marketing to help you effectively reach and engage your target audience. </div>
                                        </div>
                                    </div>
                                    <div className="home-what__bottom">
                                        <div className="home-what__items">
                                            <div className="home-what__item _right">
                                                <h4 className="title">Marketing Strategy <br /> and Planning</h4>
                                                <div className="text">We develop comprehensive marketing strategies that resonate with your audience and align with your business goals.</div>
                                            </div>
                                            <div className="home-what__item _right">
                                                <h4 className="title">Digital <br /> Marketing</h4>
                                                <div className="text">Our experts use the latest digital tools and channels to increase your brand’s visibility, attract qualified leads, and drive conversions.</div>
                                            </div>
                                            <div className="home-what__item _right">
                                                <h4 className="title">Content <br /> Marketing</h4>
                                                <div className="text">We create compelling content that tells your brand’s story, engages your audience, and builds trust.</div>
                                            </div>
                                            <div className="home-what__item _right">
                                                <h4 className="title">Marketing Automation <br /> and CRM</h4>
                                                <div className="text">We implement and optimise automation tools and CRM systems to enhance your marketing efforts and improve customer relationships.</div>
                                            </div>
                                            <div className="home-what__item _right">
                                                <h4 className="title">Analytics <br /> and Reporting</h4>
                                                <div className="text">We provide detailed analytics and reporting to track your marketing performance, allowing us to refine strategies and maximise your ROI.</div>
                                            </div>
                                            <div className="home-what__item _right">
                                                <Link href="/marketing-consulting" className="home-what__link">
                                                    Explore Services
                                                    <ArrowRight />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeWhat;