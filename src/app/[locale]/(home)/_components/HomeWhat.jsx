"use client";
import React, { useState } from "react";
import "@/styles/home/home.scss";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import ArrowRight from "@/icons/slider/ArrowRight";
import { useTranslations } from "next-intl";


const HomeWhat = () => {

    const t = useTranslations("home");
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
                        {t("what.title", {}, "What we do")}
                    </motion.h2>
                    <div className="home-what__content">
                        <div className="home-what__col-01">
                            <div className="home-what__wrapper">
                                <div className="home-what__front">
                                    <div className="home-what__info">
                                        <h3 className="home-what__label">{t("what.label1", {}, "IT Consulting")}</h3>
                                        <div className="home-what__icon"><ArrowRight /></div>
                                    </div>
                                </div>
                                <div className="home-what__back">
                                    <div className="home-what__top">
                                        <div className="home-what__image-01"></div>
                                        <div className="home-what__row-01">
                                            <h4 className="title"  dangerouslySetInnerHTML={{ __html: t("what.title1", {}, "IT Consulting") }} />
                                            <div className="text">{t("what.text1", {}, "We turn your technology into a strategic advantage by developing customised solutions that support your business goals and drive efficiency.")}</div>
                                        </div>
                                    </div>
                                    <div className="home-what__bottom">
                                        <div className="home-what__items">
                                            <div className="home-what__item">
                                                <h4 className="title"  dangerouslySetInnerHTML={{ __html: t("what.title2", {}, "IT Strategy <br /> and Planning") }} />
                                                <div className="text">{t("what.text2", {}, "We create clear, actionable roadmaps that align your IT with your business objectives, setting you up for sustained success.")}</div>
                                            </div>
                                            <div className="home-what__item">
                                                <h4 className="title"  dangerouslySetInnerHTML={{ __html: t("what.title3", {}, "IT Infrastructure <br /> Management") }} />
                                                <div className="text">{t("what.text3", {}, "Our team ensures your IT systems are optimised and reliable so you can focus on what matters most—growing your business.")}</div>
                                            </div>
                                            <div className="home-what__item">
                                                <h4 className="title"  dangerouslySetInnerHTML={{ __html: t("what.title4", {}, "Software Development <br /> and Integration") }} />
                                                <div className="text">{t("what.text4", {}, "We build and integrate software solutions tailored to your unique needs, ensuring seamless operation and scalability.")}</div>
                                            </div>
                                            <div className="home-what__item">
                                                <h4 className="title"  dangerouslySetInnerHTML={{ __html: t("what.title5", {}, "Data Management <br /> and Analytics") }} />
                                                <div className="text">{t("what.text5", {}, "We help you unlock the potential of your data, providing insights that inform smarter decisions and strategic growth.")}</div>
                                            </div>
                                            <div className="home-what__item">
                                                <h4 className="title"  dangerouslySetInnerHTML={{ __html: t("what.title6", {}, "IT Support <br /> and Maintenance") }} />
                                                <div className="text">{t("what.text6", {}, "Our proactive support and maintenance services keep your IT environment running smoothly, minimising downtime and disruptions")}</div>
                                            </div>
                                            <div className="home-what__item">
                                                <Link href="/it-consulting" className="home-what__link">
                                                    {t("what.link1", {}, "Explore Services")}
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
                                        <h3 className="home-what__label">{t("what.label2", {}, "Marketing Consulting")}</h3>
                                        <div className="home-what__icon"><ArrowRight /></div>
                                    </div>
                                </div>
                                <div className="home-what__back">
                                    <div className="home-what__top">
                                        <div className="home-what__image-02"></div>
                                        <div className="home-what__row-01 _right">
                                            <h4 className="title">{t("what.title7", {}, "Marketing Consulting")}</h4>
                                            <div className="text">{t("what.text7", {}, "We bridge the gap between technology and marketing to help you effectively reach and engage your target audience. ")}</div>
                                        </div>
                                    </div>
                                    <div className="home-what__bottom">
                                        <div className="home-what__items">
                                            <div className="home-what__item _right">
                                                <h4 className="title"  dangerouslySetInnerHTML={{ __html: t("what.title8", {}, "Marketing Strategy <br /> and Planning") }} />
                                                <div className="text">{t("what.text8", {}, "We develop comprehensive marketing strategies that resonate with your audience and align with your business goals.")}</div>
                                            </div>
                                            <div className="home-what__item _right">
                                                <h4 className="title"  dangerouslySetInnerHTML={{ __html: t("what.title9", {}, "Digital <br /> Marketing") }} />
                                                <div className="text">{t("what.text9", {}, "Our experts use the latest digital tools and channels to increase your brand’s visibility, attract qualified leads, and drive conversions.")}</div>
                                            </div>
                                            <div className="home-what__item _right">
                                                <h4 className="title"  dangerouslySetInnerHTML={{ __html: t("what.title10", {}, "Content <br /> Marketing") }} />
                                                <div className="text">{t("what.text10", {}, "We create compelling content that tells your brand’s story, engages your audience, and builds trust.")}</div>
                                            </div>
                                            <div className="home-what__item _right">
                                                <h4 className="title"  dangerouslySetInnerHTML={{ __html: t("what.title11", {}, "Marketing Automation <br /> and CRM") }} />
                                                <div className="text">{t("what.text11", {}, "We implement and optimise automation tools and CRM systems to enhance your marketing efforts and improve customer relationships.")}</div>
                                            </div>
                                            <div className="home-what__item _right">
                                                <h4 className="title"  dangerouslySetInnerHTML={{ __html: t("what.title12", {}, "Analytics <br /> and Reporting") }} />
                                                <div className="text">{t("what.text12", {}, "We provide detailed analytics and reporting to track your marketing performance, allowing us to refine strategies and maximise your ROI.")}</div>
                                            </div>
                                            <div className="home-what__item _right">
                                                <Link href="/marketing-consulting" className="home-what__link">
                                                    {t("what.link2", {}, "Explore Services")}
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