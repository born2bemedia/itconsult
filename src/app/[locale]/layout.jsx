import React from "react";
import { Urbanist, Roboto } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
/* import RequestPopup from "@/components/RequestPopup"; */
import { GoogleAnalytics } from "@next/third-parties/google";
import { PopupsProvider } from "@/context/PopupsContext";
import OrderPopup from "@/components/OrderPopup";
import ServicePopup from "@/components/ServicePopup";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body className={`${urbanist.className} ${roboto.className}`}>
        <GoogleAnalytics gaId="G-2CTH8M2SJ4" />
        <NextIntlClientProvider>
          <PopupsProvider>
            <Preloader />
            <Header />
            <main className="site">{children}</main>
            <Footer />
            <OrderPopup />
            <ServicePopup />
          </PopupsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
