"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";

const MarketTrends = () => {
    return (
        <section className="market-trends">
            <div className="market-trends__container _container">
                <div className="market-trends__body">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="market-trends__title">
                        Marketing Trends in 2024
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="market-trends__row-top">
                        <h3 className="market-trends__subtitle">AI-Powered Marketing Automation</h3>
                        <div className="market-trends__items">
                            <div className="market-trends__item">
                                <h4 className="title">Growth Rate:</h4>
                                <div className="text">The global marketing automation market is expected to reach $8.42 billion by 2027.</div>
                            </div>
                            <div className="market-trends__item">
                                <h4 className="title">Key Trend:</h4>
                                <div className="text">Businesses increasingly adopt AI to automate repetitive tasks like email marketing, social media posting, and ad optimization.</div>
                            </div>
                            <div className="market-trends__item">
                                <h4 className="title">Business Gap:</h4>
                                <div className="text">Many businesses lack the technical knowledge or resources to properly implement and manage these tools, leading to suboptimal use of AI technology.</div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="market-trends__row">
                        <div className="market-trends__col-01">
                            <h3 className="market-trends__subtitle">Personalization in Marketing</h3>
                            <div className="market-trends__subitems">
                                <div className="market-trends__subitem">
                                    <h4 className="title">Trend Insight:</h4>
                                    <div className="text">Consumers expect hyper-personalised content. According to a report, 80% of consumers are more likely to purchase from a brand that offers personalised experiences.</div>
                                </div>
                                <div className="market-trends__subitem">
                                    <h4 className="title">Gap:</h4>
                                    <div className="text">Many small and medium-sized businesses struggle to collect, analyse, and act on customer data to offer personalised marketing at scale.</div>
                                </div>
                            </div>
                        </div>
                        <div className="market-trends__col-02">
                            <h3 className="market-trends__subtitle">Video Marketing Dominance</h3>
                            <div className="market-trends__subitems">
                                <div className="market-trends__subitem">
                                    <h4 className="title">Trend:</h4>
                                    <div className="text">Video content continues to dominate platforms like TikTok, YouTube, and Instagram. Video marketing offers higher engagement, with a 54% increase in purchasing intent among viewers.</div>
                                </div>
                                <div className="market-trends__subitem">
                                    <h4 className="title">Gap:</h4>
                                    <div className="text">Limited resources for video production remain a challenge, especially for small businesses. Many also lack clear strategies on how to integrate video into their overall content marketing plan.</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="market-trends__row">
                        <div className="market-trends__col-01">
                            <h3 className="market-trends__subtitle">Influencer Marketing Expansion</h3>
                            <div className="market-trends__subitems">
                                <div className="market-trends__subitem">
                                    <h4 className="title">Trend Insight:</h4>
                                    <div className="text">Micro and nano-influencers are gaining popularity as businesses target more niche audiences. Spending on influencer marketing is projected to exceed $21 billion in 2024.</div>
                                </div>
                                <div className="market-trends__subitem">
                                    <h4 className="title">Gap:</h4>
                                    <div className="text">Many businesses find it difficult to identify the right influencers who align with their brand values and audience, while also ensuring that campaigns deliver measurable ROI.</div>
                                </div>
                            </div>
                        </div>
                        <div className="market-trends__col-02">
                            <h3 className="market-trends__subtitle">SEO Evolution with AI and Voice Search</h3>
                            <div className="market-trends__subitems">
                                <div className="market-trends__subitem">
                                    <h4 className="title">Trend:</h4>
                                    <div className="text">AI is shaping search algorithms, and voice search is increasingly influencing SEO strategies. Businesses are optimising content for voice queries and natural language.</div>
                                </div>
                                <div className="market-trends__subitem">
                                    <h4 className="title">Gap:</h4>
                                    <div className="text">Smaller businesses often struggle with keeping up with rapid algorithm changes and optimising content for both traditional and voice search.</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MarketTrends;