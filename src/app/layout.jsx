import React from "react";
import { DM_Sans } from "next/font/google";import "@/styles/base.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmsans = DM_Sans({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        <Header />
        <main className="site">{children}</main>
        <Footer />
      </body>
    </html>
  );
};