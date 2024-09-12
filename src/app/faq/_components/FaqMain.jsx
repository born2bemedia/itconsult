"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import PeopleForm from "@/components/PeopleForm";

const FaqMain = () => {
    return (
        <section className="faq-main">
            <div className="faq-main__container _container">
                <div className="faq-main__body">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="faq-main__row">
                        <div className="faq-main__col-01">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="faq-main__number">
                                01
                            </motion.div>
                        </div>
                        <div className="faq-main__col-02">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="faq-main__title">
                                How can we improve our website’s SEO performance without overhauling our <br /> entire site design?
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="faq-main__text">
                                Effective SEO doesn’t always require a complete website redesign. Our SEO experts conduct a comprehensive audit to identify areas for optimization, such as improving site speed, enhancing mobile responsiveness, and optimising your site’s structure for search engines. We focus on technical SEO, which includes cleaning up broken links, enhancing metadata, and ensuring your site is fully indexed by search engines. We also work on content strategies, updating existing pages with targeted keywords and creating high-quality, SEO-rich content that aligns with your industry trends and audience needs. Focusing on these areas, we help your website rank higher without requiring significant structural changes.
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="faq-main__row">
                        <div className="faq-main__col-01">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="faq-main__number">
                                02
                            </motion.div>
                        </div>
                        <div className="faq-main__col-02">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="faq-main__title">
                                We’re struggling with data management and analysis across multiple <br /> departments. How can Nexoria help us streamline our data processes?
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="faq-main__text">
                                Nexoria specialises in designing centralised data management systems that streamline and integrate data across various departments. We begin by assessing your current data infrastructure, identifying pain points such as data silos, inconsistent data formats, and slow processing times. Then, we implement a unified data warehouse or cloud-based solution that consolidates your data, allowing easy access and analysis for all stakeholders. We enable real-time data visualisation by employing advanced tools like Power BI, Tableau, or Google BigQuery, ensuring your team can make informed decisions faster. This process significantly reduces manual data handling, improves accuracy, and enhances the overall efficiency of your business operations.
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="faq-main__row">
                        <div className="faq-main__col-01">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="faq-main__number">
                                03
                            </motion.div>
                        </div>
                        <div className="faq-main__col-02">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="faq-main__title">
                                How can marketing automation help us manage lead generation and improve <br /> customer engagement?
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="faq-main__text">
                                Marketing automation can significantly improve your lead generation efforts and enhance customer engagement by allowing you to create personalised, data-driven campaigns at scale. At Nexoria, we implement automation tools like HubSpot, Marketo, or Salesforce Pardot, enabling segmentation, targeting, and automated messaging based on user behaviour and data insights. We automate email sequences, follow-up messages, and customer segmentation through these tools, ensuring each prospect receives the proper communication at the right time. Furthermore, by integrating CRM systems with your marketing automation, we provide a complete view of customer journeys, making it easier to nurture leads with personalised content and drive them through your sales funnel more efficiently.
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="faq-main__row">
                        <div className="faq-main__col-01">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="faq-main__number">
                                04
                            </motion.div>
                        </div>
                        <div className="faq-main__col-02">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="faq-main__title">
                                Our business is expanding internationally. How can Nexoria help us manage <br /> our IT infrastructure for multiple locations?
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="faq-main__text">
                                Managing IT infrastructure across multiple locations requires a strategy that balances central control with localised flexibility. Nexoria’s approach begins with evaluating your current infrastructure and ensuring it can scale across geographies. We recommend cloud-based solutions like Microsoft Azure or Amazon Web Services (AWS) to centralise data management and offer seamless access to all branches. Additionally, we implement VPNs, cybersecurity protocols, and network optimizations that ensure consistent performance and security regardless of location. To handle local compliance requirements, we integrate region-specific adjustments to ensure you meet legal and operational standards. With centralised IT governance and scalable solutions, your business can expand seamlessly without compromising efficiency or security.
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="faq-main__row">
                        <div className="faq-main__col-01">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="faq-main__number">
                                05
                            </motion.div>
                        </div>
                        <div className="faq-main__col-02">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="faq-main__title">
                                We are experiencing long delays in our software development cycles. How can <br /> Nexoria help reduce the time to market for new software features?
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="faq-main__text">
                                Nexoria addresses this issue by implementing agile development methodologies and DevOps practices. We first evaluate your current development processes to identify bottlenecks, such as inefficient coding practices or poor team collaboration. Our team then implements a streamlined, iterative approach using agile frameworks like Scrum or Kanban to break down the development process into manageable sprints. We automate testing and deployment by adopting continuous integration and continuous deployment (CI/CD) pipelines, drastically reducing manual errors and shortening release cycles. Additionally, tools like Jenkins, Docker, and Kubernetes enable rapid testing, ensuring that new software features are deployed faster, with fewer bugs, and with quicker feedback from stakeholders, helping you get your product to market sooner.
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="faq-main__row">
                        <div className="faq-main__col-01">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="faq-main__number">
                                06
                            </motion.div>
                        </div>
                        <div className="faq-main__col-02">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.2}
                                className="faq-main__title">
                                We have invested in paid advertising but struggle to see significant <br /> ROI. How can Nexoria help optimise our PPC campaigns?
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={0.3}
                                className="faq-main__text">
                                To maximise the ROI of your paid advertising, Nexoria takes a data-driven approach to optimise your PPC campaigns. We begin with an in-depth analysis of your current campaign performance using tools like Google Ads, Facebook Ads Manager, and Google Analytics. We identify where inefficiencies lie by reviewing key metrics like click-through rate (CTR), cost-per-click (CPC), and conversion rates. From there, we refine your targeting strategies, adjust ad copy, and experiment with A/B testing to find what resonates best with your audience. We also focus on optimising landing pages for conversions, ensuring your traffic is directed to user-friendly pages aligned with the ad content. Through continuous monitoring and optimization, we help improve your ad spend efficiency and increase your return on investment.
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FaqMain;