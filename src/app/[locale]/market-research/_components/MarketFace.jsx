"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const MarketFace = () => {
  const t = useTranslations("marketResearch");

  return (
    <section className="market-face">
      <div className="market-face__container _container">
        <div className="market-face__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="market-face__title"
          >
            {t(
              "face.title",
              {},
              "Common IT Challenges Businesses Face in 2024"
            )}
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="market-face__row"
          >
            <div className="market-face__col-01">
              <h3 className="market-face__subtitle">
                {t(
                  "face.subtitle1",
                  {},
                  "Insufficient Cybersecurity Protection"
                )}
              </h3>
              <div className="market-face__subitems">
                <div className="market-face__subitem">
                  <h4 className="title">
                    {t("face.dataPoint", {}, "Data Point:")}
                  </h4>
                  <div className="text">
                    {t(
                      "face.dataPoint1",
                      {},
                      "Cyberattacks rose by 37% in the first half of 2024, with ransomware being the top threat."
                    )}
                  </div>
                </div>
                <div className="market-face__subitem">
                  <h4 className="title">
                    {t("face.challenge", {}, "Challenge:")}
                  </h4>
                  <div className="text">
                    {t(
                      "face.challenge1",
                      {},
                      "Businesses often fail to invest in strong cybersecurity solutions, leaving them vulnerable to data breaches."
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="market-face__col-02">
              <h3 className="market-face__subtitle">
                {t("face.subtitle2", {}, "Data Management and Integration")}
              </h3>
              <div className="market-face__subitems">
                <div className="market-face__subitem _full">
                  <h4 className="title">{t("face.issue", {}, "Issue:")}</h4>
                  <div className="text">
                    {t(
                      "face.issue1",
                      {},
                      "As businesses collect increasing amounts of data, many struggle to integrate and analyse it effectively. This can lead to missed opportunities for insights and decision-making."
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="market-face__row"
          >
            <div className="market-face__col-01">
              <h3 className="market-face__subtitle">
                {t("face.subtitle3", {}, "Lack of Skilled IT Professionals")}
              </h3>
              <div className="market-face__subitems">
                <div className="market-face__subitem">
                  <h4 className="title">
                    {t("face.gapInsight", {}, "Gap Insight:")}
                  </h4>
                  <div className="text">
                    {t(
                      "face.gapInsight1",
                      {},
                      "There is a significant shortage of IT talent, particularly in fields such as AI, cloud computing, and cybersecurity."
                    )}
                  </div>
                </div>
                <div className="market-face__subitem">
                  <h4 className="title">
                    {t("face.challenge", {}, "Challenge:")}
                  </h4>
                  <div className="text">
                    {t(
                      "face.challenge2",
                      {},
                      "Businesses are unable to keep up with innovation due to a lack of qualified personnel to implement and manage advanced IT solutions."
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="market-face__col-02">
              <h3 className="market-face__subtitle">
                {t("face.subtitle4", {}, "Legacy Systems")}
              </h3>
              <div className="market-face__subitems">
                <div className="market-face__subitem">
                  <h4 className="title">{t("face.problem", {}, "Problem:")}</h4>
                  <div className="text">
                    {t(
                      "face.problem1",
                      {},
                      "Many businesses are stuck with outdated legacy systems that are difficult to modernise and integrate with newer technologies."
                    )}
                  </div>
                </div>
                <div className="market-face__subitem">
                  <h4 className="title">{t("face.gap", {}, "Gap:")}</h4>
                  <div className="text">
                    {t(
                      "face.gap1",
                      {},
                      "A lack of budget or a proper roadmap to transition from these systems creates inefficiency and limits growth."
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="market-face__row"
          >
            <div className="market-face__col-01">
              <h3 className="market-face__subtitle">
                {t("face.subtitle5", {}, "Lack of Skilled IT Professionals")}
              </h3>
              <div className="market-face__subitems">
                <div className="market-face__subitem">
                  <h4 className="title">
                    {t("face.gapInsight", {}, "Gap Insight:")}
                  </h4>
                  <div className="text">
                    {t(
                      "face.gapInsight2",
                      {},
                      "There is a significant shortage of IT talent, particularly in fields such as AI, cloud computing, and cybersecurity."
                    )}
                  </div>
                </div>
                <div className="market-face__subitem">
                  <h4 className="title">
                    {t("face.challenge", {}, "Challenge:")}
                  </h4>
                  <div className="text">
                    {t(
                      "face.challenge3",
                      {},
                      "Businesses are unable to keep up with innovation due to a lack of qualified personnel to implement and manage advanced IT solutions."
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="market-face__col-02">
              <div className="market-face__green">
                <h4 className="title">{t("face.summary", {}, "Summary:")}</h4>
                <div className="text">
                  {t(
                    "face.summary1",
                    {},
                    "This research shows that while technology and marketing are rapidly evolving, businesses often struggle with adoption, talent, and budget constraints. By addressing these gaps, businesses can unlock significant growth potential."
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketFace;
