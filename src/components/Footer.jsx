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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__body">
          <div className="footer__row-01">
            <div className="footer__col-01">
              <Link href="/" className="footer__logo"><LogoBlack/></Link>
              <div className="footer__text">Where Technology Meets Strategy</div>
            </div>
            <div className="footer__col-02">
              <Link href="/contacts" className="footer__contact-link">Contact Us</Link>
              <ul className="footer__contacts">
                <li className="footer__contact">
                  <Link href="tel:">
                  <Phone/>
                  Phone
                  </Link>
                </li>
                <li className="footer__contact">
                  <Link href="matilto:">
                  <Email/>
                  Email
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__col-03">
              <nav className="footer__nav">
                <ul className="footer__menu">
                  <li className="footer__item"><Link href="/it-consulting">IT Consulting</Link></li>
                  <li className="footer__item"><Link href="/marketing-consulting">Marketing Consulting</Link></li>
                  <li className="footer__item"><Link href="/complex-solutions">Complex Solutions</Link></li>
                </ul>
                <ul className="footer__menu">
                  <li className="footer__item"><Link href="/faq">FAQ</Link></li>
                  <li className="footer__item"><Link href="/how-we-Work">How We Work</Link></li>
                  <li className="footer__item"><Link href="/market-research">Market Research</Link></li>
                </ul>
                <ul className="footer__menu">
                  <li className="footer__item"><Link href="/about">About</Link></li>
                  <li className="footer__item"><Link href="/people">People</Link></li>
                  <li className="footer__item"><Link href="/newsroom">Newsroom</Link></li>
                </ul>
                <ul className="footer__menu">
                  <li className="footer__item"><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
                  <li className="footer__item"><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li className="footer__item"><Link href="/cookie-policy">Cookie Policy</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer__row-02">
            <div className="footer__col-4">
              <ul className="footer__social">
                <li className="footer__social-link"><Link href="#"><Instagram /></Link></li>
                <li className="footer__social-link"><Link href="#"><Facebook /></Link></li>
                <li className="footer__social-link"><Link href="#"><X /></Link></li>
              </ul>
            </div>
            <div className="footer__col-5">
              <div className="footer__copy">
                © {currentYear} All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;