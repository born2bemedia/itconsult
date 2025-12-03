'use client';

import { useEffect, useState } from 'react';

import st from './CookiePopup.module.scss';
import cn from 'classnames';
import Link from 'next/link';

export const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(st.cookiePopup, {
        [st.visible]: isVisible,
      })}
    >
      <div className={st.content}>
        <h2>Cookie settings</h2>
        <p>
        Cookies help us improve our website. By clicking ‘Accept,’ you agree to our use of cookies for functionality, analytics, and personalized content. Learn more in our{' '}
          <Link href="/cookie-policy" className={st.link}>
          Cookie Policy
          </Link>
          .
        </p>
      </div>
      <div className={st.buttons}>
        <button onClick={handleAccept} className={st.decline}>
        Decline
        </button>
        <button onClick={handleAccept} className={st.accept}>
        Accept
        <svg className={st.icon} xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path d="M0.75 4.75H10.75M10.75 4.75L6.75 0.75M10.75 4.75L6.75 8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button>
      </div>
    </div>
  );
};
