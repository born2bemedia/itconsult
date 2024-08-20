"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
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
              <Link href="/">Logo</Link>
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
              <button onClick={() => menuOpen()} className="header__menu-btn">
              {!menuOpened ? (
                <img src="/images/menu-open.svg" alt="menu-buger" />
              ) : (
                <img alt="logo" src="/images/menu-close.svg" />
              )}
            </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
