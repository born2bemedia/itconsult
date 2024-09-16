"use client";
import React, { useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import X from "@/icons/social/X";
import Email from "@/icons/other/Email";
import Phone from "@/icons/other/Phone";
import RequestForm from "@/components/RequestForm";

const ContactsHero = () => {
    // Состояние для активного таба
    const [activeTab, setActiveTab] = useState("registration");

    // Навигация для табов
    const TabsNavigation = () => (
        <div className="contacts-hero__tabs-nav">
            <button
                className={`contacts-hero__btn ${activeTab === "registration" ? "_active" : ""}`}
                onClick={() => setActiveTab("registration")}
            >
                Registration Address
            </button>
            <button
                className={`contacts-hero__btn ${activeTab === "office" ? "_active" : ""}`}
                onClick={() => setActiveTab("office")}
            >
                Office Address
            </button>
        </div>
    );

    // Контент для табов
    const TabsContent = () => (
        <div className="contacts-hero__tabs-content">
            {activeTab === "registration" && (
                <div className="contacts-hero__content">
                    <div className="wrapper">
                        <h5 className="title">
                            Register address:
                            <br />
                            <br />
                            Hamilton Development, Unit B, Charlestown, Nevis, West Indies
                        </h5>
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.6957147334333!2d-62.60779912484061!3d17.13971208370585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c123d4f9d487ba9%3A0xc3260550868187ff!2sGAMBL!5e1!3m2!1sru!2sua!4v1726492464685!5m2!1sru!2sua" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === "office" && (
                <div className="contacts-hero__content">
                    <div className="wrapper">
                        <h5 className="title">Office Address</h5>
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157326.6211001865!2d8.324746661082315!3d50.12079451248056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%2C%20Germany!5e1!3m2!1sen!2sua!4v1726353354421!5m2!1sen!2sua" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <section className="contacts-hero">
            <div className="contacts-hero__container _container">
                <div className="contacts-hero__body">
                    <div className="contacts-hero__col-01">
                        <div className="contacts-hero__wrapper">
                            <h1 className="contacts-hero__title">Get in Touch</h1>
                            <h2 className="contacts-hero__subtitle">We're ready to assist with any inquiry or need.</h2>
                            <div className="contacts-hero__contacts">
                                <h3 className="title"></h3>
                                <ul className="contacts-hero__list">
                                    <li className="contacts-hero__item">
                                        <Link href="#" className="contacts-hero__link">
                                            <Phone />
                                            Phone
                                        </Link>
                                    </li>
                                    <li className="contacts-hero__item">
                                        <Link href="mailto:info@nexoria.ai" className="contacts-hero__link">
                                            <Email />
                                            info@nexoria.ai
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="contacts-hero__socials">
                                    <li className="contacts-hero__social"><Link href="#"><Instagram /></Link></li>
                                    <li className="contacts-hero__social"><Link href="#"><Facebook /></Link></li>
                                    <li className="contacts-hero__social"><Link href="#"><X /></Link></li>
                                </ul>
                                <h4 className="contacts-hero__title-bold">Business Correspondence</h4>
                            </div>
                        </div>
                        <TabsNavigation />
                        <TabsContent />
                    </div>

                    <div className="contacts-hero__col-02">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="contacts-hero__label"
                        >
                            Have a Question
                        </motion.h2>
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="contacts-hero__sublabel"
                        >
                            Get Expert Guidance on Business Optimisation with Marketing and IT solutions.
                        </motion.h3>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.3}
                            className="contacts-hero__form"
                        >
                            <RequestForm />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsHero;