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
import { useTranslations } from "next-intl";

const ContactsHero = () => {
    

    const t = useTranslations("contacts");

    const [activeTab, setActiveTab] = useState("registration");

    // Навигация для табов
    const TabsNavigation = () => (
        <div className="contacts-hero__tabs-nav">
            <button
                className={`contacts-hero__btn ${activeTab === "registration" ? "_active" : ""}`}
                onClick={() => setActiveTab("registration")}
            >
                {t("tabs.registration", {}, "Registration Address")}
            </button>
            <button
                className={`contacts-hero__btn ${activeTab === "office" ? "_active" : ""}`}
                onClick={() => setActiveTab("office")}
            >
                {t("tabs.office", {}, "Office Address")}
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
                            Registered Address:
                        </h5>
                        <div className="map">
                            Address
                        </div>
                    </div>
                </div>
            )}
            {activeTab === "office" && (
                <div className="contacts-hero__content">
                    <div className="wrapper">
                        <h5 className="title">Office Address:</h5>
                        <div className="map">
                            Address
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
                            <h1 className="contacts-hero__title">{t("title", {}, "Get in Touch")}</h1>
                            <h2 className="contacts-hero__subtitle">{t("subtitle", {}, "We're ready to assist with any inquiry or need.")}</h2>
                            <div className="contacts-hero__contacts">
                                <h3 className="title"></h3>
                                <ul className="contacts-hero__list">
                                    
                                    <li className="contacts-hero__item">
                                        <Link href="mailto:info@nexoria.ai" className="contacts-hero__link">
                                            <Email />
                                            info@nexoria.ai
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="contacts-hero__socials">
                                    <li className="contacts-hero__social"><Link href="https://www.instagram.com/nexoria.ai/"><Instagram /></Link></li>
                                    <li className="contacts-hero__social"><Link href="https://www.facebook.com/nexoria.fb"><Facebook /></Link></li>
                                    <li className="contacts-hero__social"><Link href="https://x.com/nexoria_ai"><X /></Link></li>
                                </ul>
                                <h4 className="contacts-hero__title-bold">{t("business", {}, "Business Correspondence")}</h4>
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
                            {t("label", {}, "Have a Question")}
                        </motion.h2>
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={0.2}
                            className="contacts-hero__sublabel"
                        >
                            {t("sublabel", {}, "Get Expert Guidance on Business Optimisation with Marketing and IT solutions.")}
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