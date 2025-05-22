"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowRight from "@/icons/slider/ArrowRight";
import { useTranslations } from "next-intl";

const NewsroomMain = () => {

  const t = useTranslations("newsroom");

  return (
    <section className="newsroom-main">
      <div className="newsroom-main__container _container">
        <div className="newsroom-main__body">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="newsroom-main__article">
            <div className="newsroom-main__col-01">
              <Link href="/newsroom/we-re-officially-here/" className="newsroom-main__poster"><img src="/images/newsroom/newsroom-article-01.webp" alt="We’re Officially Here!" /></Link>
            </div>
            <div className="newsroom-main__col-02">
              <h2 className="newsroom-main__title">{t("main.title01", {}, "We’re Officially Here!")}</h2>
              <p className="newsroom-main__text">{t("main.text01", {}, "Our new website is live, marking our official launch. We’ve combined our freelance expertise into a unified company to deliver top IT and marketing solutions. Explore our services now.")}</p>
              <Link href="/newsroom/we-re-officially-here/" className="newsroom-main__link">
                {t("main.readMore", {}, "Read")}
                <ArrowRight />
              </Link>
            </div>
          </motion.article>
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
            className="newsroom-main__article">
            <div className="newsroom-main__col-01">
              <Link href="/newsroom/our-participation-in-smx-advanced-europe-2024/" className="newsroom-main__poster"><img src="/images/newsroom/newsroom-article-02.webp" alt="Our Participation in SMX Advanced Europe 2024" /></Link>
            </div>
            <div className="newsroom-main__col-02">
              <h2 className="newsroom-main__title">{t("main.title02", {}, "Our Participation in SMX Advanced Europe 2024")}</h2>
              <p className="newsroom-main__text">{t("main.text02", {}, "We’re heading to SMX Advanced Europe in Berlin on September 10-11! Discover cutting-edge SEO and PPC strategies with us. Stay tuned for updates, and follow us for the latest news!")}</p>
              <Link href="/newsroom/our-participation-in-smx-advanced-europe-2024/" className="newsroom-main__link">
                {t("main.readMore", {}, "Read")}
                <ArrowRight />
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default NewsroomMain;
