"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import "@/styles/base.scss";
import Link from "next/link";
import Facebook from "@/icons/social/Facebook";
import Instagram from "@/icons/social/Instagram";
import X from "@/icons/social/X";
import Email from "@/icons/other/Email";
import Phone from "@/icons/other/Phone";
import LogoWhite from "@/icons/other/LogoWhite";
import { usePathname } from "next/navigation";
import LangSwitcher from "./LangSwitcher";
import LangChanger from "./LangChanger";
import { useTranslations } from "next-intl";
const Header = () => {

  const t = useTranslations("header");

  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const pathname = usePathname();

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <header className="header">
        <div className="header__container _container">
          <div className="header__body">
            <div className="header__col-01">
              <Link href="/" className="header__logo"><LogoWhite /></Link>
            </div>
            <div className="header__col-02">
              <div className="header__contacts">
                <LangChanger />
                <Link href="tel:+48573587868" className="header__link">
                  <Phone />
                  +48573587868
                </Link>
                <Link href="mailto:info@nexoria.ai" className="header__link">
                  <Email />
                  info@nexoria.ai
                </Link>
              </div>
              <ul className="header__social">
                <li className="header__item"><Link href="https://www.instagram.com/nexoria.ai/"><Instagram /></Link></li>
                <li className="header__item"><Link href="https://www.facebook.com/nexoria.fb"><Facebook /></Link></li>
                <li className="header__item"><Link href="https://x.com/nexoria_ai"><X /></Link></li>
              </ul>
              <Link href="/contacts" className="header__link-last">{t("contactUs", {}, "Contact us")}</Link>
              <button onClick={() => menuOpen()} className={`header__menu-btn ${menuOpened ? "_active" : ""}`}>
                {!menuOpened ? (
                  <img src="/images/menu-open.svg" alt="menu-burger" />
                ) : (
                  <img alt="logo" src="/images/menu-close.svg" />
                )}
              </button>
            </div>
          </div>
          <div className={`header__menu ${menuOpened ? "_active" : ""}`}>
            <nav className="header__nav">
              <ul className="header__list">
                <li
                  className={`header__item-menu _submenu ${submenuOpen["services"] ? "_open" : ""}`}
                  onClick={(event) => toggleSubmenu("services", event)}
                >
                  <div className="wrapper">
                    <span>{t("services", {}, "Services")}</span>
                    <button type="button" className="btn">
                      {!submenuOpen["services"] ? (
                        <img src="/images/menu-plus.svg" alt="expand" />
                      ) : (
                        <img src="/images/menu-minus.svg" alt="collapse" />
                      )}
                    </button>
                  </div>
                  <ul
                    className={`header__submenu ${submenuOpen["services"] ? "_active" : ""}`}
                    style={{
                      maxHeight: submenuOpen["services"] ? "200px" : "0",
                      overflow: "hidden",
                      transition: "all 0.3s ease 0s",
                      borderTop: submenuOpen["services"] ? "1px solid #6d6d6d4d" : "none",
                      paddingTop: submenuOpen["services"] ? "24px" : "0",
                      marginTop: submenuOpen["services"] ? "24px" : "0",
                    }}
                  >
                    <li className="header__subitem"><Link href="/it-consulting">{t("it-consulting", {}, "IT Consulting")}</Link></li>
                    <li className="header__subitem"><Link href="/marketing-consulting">{t("marketing-consulting", {}, "Marketing Consulting")}</Link></li>
                  </ul>
                </li>

                <li className="header__item-menu"><Link href="/complex-solutions">{t("complex-solutions", {}, "Complex Solutions")}</Link></li>
                <li className="header__item-menu"><Link href="/market-research">{t("market-research", {}, "Market Research")}</Link></li>

                <li
                  className={`header__item-menu _submenu ${submenuOpen["company"] ? "_open" : ""}`}
                  onClick={() => toggleSubmenu("company")}
                >
                  <div className="wrapper">
                    <span>{t("company", {}, "Company")}</span>
                    <button type="button" className="btn">
                      {!submenuOpen["company"] ? (
                        <img src="/images/menu-plus.svg" alt="expand" />
                      ) : (
                        <img src="/images/menu-minus.svg" alt="collapse" />
                      )}
                    </button>
                  </div>
                  <ul
                    className={`header__submenu ${submenuOpen["company"] ? "_active" : ""}`}
                    style={{
                      maxHeight: submenuOpen["company"] ? "200px" : "0",
                      overflow: "hidden",
                      transition: "all 0.3s ease 0s",
                      borderTop: submenuOpen["company"] ? "1px solid #6d6d6d4d" : "none",
                      paddingTop: submenuOpen["company"] ? "24px" : "0",
                      marginTop: submenuOpen["company"] ? "24px" : "0",
                    }}
                  >
                    <li className="header__subitem"><Link href="/about">{t("about", {}, "About")}</Link></li>
                    <li className="header__subitem"><Link href="/people">{t("people", {}, "People")}</Link></li>
                    <li className="header__subitem"><Link href="/newsroom">{t("newsroom", {}, "Newsroom")}</Link></li>
                  </ul>
                </li>

                <li className="header__item-menu"><Link href="/how-we-work">{t("how-we-work", {}, "How we work")}</Link></li>
                <li className="header__item-menu"><Link href="/faq">{t("faq", {}, "FAQ")}</Link></li>
                <li className="header__item-menu"><Link href="/contacts">{t("contacts", {}, "Contact")}</Link></li>
              </ul>

              <ul className="header__contacts-menu">
                <li className="header__contacts-item">
                  <Link href="tel:+48573587868">
                    <Phone />
                    +48573587868
                  </Link>
                </li>
                <li className="header__contacts-item">
                  <Link href="mailto:info@nexoria.ai">
                    <Email />
                    info@nexoria.ai
                  </Link>
                </li>
              </ul>
              <ul className="header__social-menu">
                <li className="header__social-item"><Link href="https://www.instagram.com/nexoria.ai/"><Instagram /></Link></li>
                <li className="header__social-item"><Link href="https://www.facebook.com/nexoria.fb"><Facebook /></Link></li>
                <li className="header__social-item"><Link href="https://x.com/nexoria_ai"><X /></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
