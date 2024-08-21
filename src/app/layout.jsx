import React from "react";
import { Urbanist, Roboto } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });
const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["400", "700"]
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} ${roboto.className}`}>
        <Header />
        <main className="site">{children}</main>
        <Footer />
      </body>
    </html>
  );
}; 