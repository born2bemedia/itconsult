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
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
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
              <Link href="/" className="header__logo">Logo</Link>
            </div>
            <div className="header__col-02">
              <div className="header__contacts">
                <Link href="tel:" className="header__link">
                  <Phone />
                  Phone
                </Link>
                <Link href="mailto:" className="header__link">
                  <Email />
                  Email
                </Link>
              </div>
              <ul className="header__social">
                <li className="header__item"><Link href="#"><Instagram /></Link></li>
                <li className="header__item"><Link href="#"><Facebook /></Link></li>
                <li className="header__item"><Link href="#"><X /></Link></li>
              </ul>
              <Link href="/contacts" className="header__link-last">Contact us</Link>
              <button onClick={() => menuOpen()} className={`header__menu-btn ${menuOpened ? "_active" : ""}`}>
                {!menuOpened ? (
                  <img src="/images/menu-open.svg" alt="menu-buger" />
                ) : (
                  <img alt="logo" src="/images/menu-close.svg" />
                )}
              </button>
            </div>
          </div>
          <div className={`header__menu ${menuOpened ? "_active" : ""}`}>
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item-menu _submenu">
                  <span>
                    Services
                  </span>
                  <ul className="header__submenu">
                    <li className="header__subitem"><Link href="/it-consulting">IT Consulting</Link></li>
                    <li className="header__subitem"><Link href="/marketing-consulting">Marketing Consulting</Link></li>
                  </ul>
                </li>
                <li className="header__item-menu"><Link href="/complex-solutions">Complex Solutions</Link></li>
                <li className="header__item-menu"><Link href="/market-research">Market Research</Link></li>
                <li className="header__item-menu">
                  <span>
                    Company
                  </span>
                  <ul className="header__submenu">
                    <li className="header__subitem"><Link href="/about">About</Link></li>
                    <li className="header__subitem"><Link href="/people">People</Link></li>
                    <li className="header__subitem"><Link href="/newsroom">Newsroom</Link></li>
                  </ul>
                </li>
                <li className="header__item-menu"><Link href="/how-we-work">How we work</Link></li>
                <li className="header__item-menu"><Link href="/faq">FAQ</Link></li>
                <li className="header__item-menu"><Link href="/contact">Contact</Link></li>
              </ul>
              <ul className="header__contacts-menu">
                <li className="header__contacts-item">
                  <Link href="tel:">
                    <Phone />
                    Phone
                  </Link>
                </li>
                <li className="header__contacts-item">
                  <Link href="mailto:">
                    <Email />
                    Email
                  </Link>
                </li>
              </ul>
              <ul className="header__social-menu">
                <li className="header__social-item"><Link href="#"><Instagram /></Link></li>
                <li className="header__social-item"><Link href="#"><Facebook /></Link></li>
                <li className="header__social-item"><Link href="#"><X /></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
