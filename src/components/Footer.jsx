"use client";
import React from "react";
import "@/styles/footer.scss";
import "@/styles/base.scss";
import Link from "next/link";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import X from "@/icons/social/X";
import Email from "@/icons/other/Email";
import Phone from "@/icons/other/Phone";
import LogoBlack from "@/icons/other/LogoBlack";
import { useTranslations } from "next-intl";
const Footer = () => {

  const t = useTranslations("footer");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__body">
          <div className="footer__row-01">
            <div className="footer__col-01">
              <Link href="/" className="footer__logo"><LogoBlack /></Link>
              <div className="footer__text">{t("text", {}, "Where Technology Meets Strategy")}</div>
            </div>
            <div className="footer__col-02">
              <Link href="/contacts" className="footer__contact-link">{t("contact", {}, "Contact Us")}</Link>
              <ul className="footer__contacts">
                <li className="footer__contact">
                  
                </li>
                <li className="footer__contact">
                  <Link href="matilto:info@nexoria.ai">
                    <span>{t("email", {}, "Email:")}</span>
                    info@nexoria.ai
                  </Link>
                </li>
                <li className="footer__address">
                  
                </li>
              </ul>
            </div>
            <div className="footer__col-03">
              <nav className="footer__nav">
                <ul className="footer__menu">
                  <li className="footer__item"><Link href="/it-consulting">{t("it-consulting", {}, "IT Consulting")}</Link></li>
                  <li className="footer__item"><Link href="/marketing-consulting">{t("marketing-consulting", {}, "Marketing Consulting")}</Link></li>
                  <li className="footer__item"><Link href="/complex-solutions">{t("complex-solutions", {}, "Complex Solutions")}</Link></li>
                </ul>
                <ul className="footer__menu">
                  <li className="footer__item"><Link href="/faq">{t("faq", {}, "FAQ")}</Link></li>
                  <li className="footer__item"><Link href="/how-we-work">{t("how-we-work", {}, "How We Work")}</Link></li>
                  <li className="footer__item"><Link href="/market-research">{t("market-research", {}, "Market Research")}</Link></li>
                </ul>
                <ul className="footer__menu">
                  <li className="footer__item"><Link href="/about">{t("about", {}, "About")}</Link></li>
                  <li className="footer__item"><Link href="/people">{t("people", {}, "People")}</Link></li>
                  <li className="footer__item"><Link href="/newsroom">{t("newsroom", {}, "Newsroom")}</Link></li>
                </ul>
                <ul className="footer__menu">
                  <li className="footer__item"><Link href="/terms-and-conditions">{t("terms-and-conditions", {}, "Terms and Conditions")}</Link></li>
                  <li className="footer__item"><Link href="/privacy-policy">{t("privacy-policy", {}, "Privacy Policy")}</Link></li>
                  <li className="footer__item"><Link href="/cookie-policy">{t("cookie-policy", {}, "Cookie Policy")}</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer__row-02">
            <div className="footer__col-4">
              <ul className="footer__social">
                <li className="footer__social-link"><Link href="https://www.instagram.com/nexoria.ai/"><Instagram /></Link></li>
                <li className="footer__social-link"><Link href="https://www.facebook.com/nexoria.fb"><Facebook /></Link></li>
                <li className="footer__social-link"><Link href="https://x.com/nexoria_ai"><X /></Link></li>
              </ul>
            </div>
            <div className="footer__col-5">
              <div className="footer__copy">
                © {currentYear} {t("copyright", {}, "All rights reserved.")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;