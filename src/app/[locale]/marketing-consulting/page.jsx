import "@/styles/marketing-consulting.scss";
import "@/styles/base.scss";
import React from "react";
import MarketingHero from "./_components/MarketingHero";
import MarketingNeed from "./_components/MarketingNeed";
import MarketingMain from "./_components/MarketingMain";


export const metadata = {
  title: "Expert Marketing Consulting Businesses | Nexoria",
  description:
      "Maximise your marketing efforts with Nexoria's consulting services. We offer strategic planning, digital marketing, content creation, CRM optimization, and performance analytics to drive growth and engagement.",
  openGraph: {
      title: "Expert Marketing Consulting Businesses | Nexoria",
      description:
          "Maximise your marketing efforts with Nexoria's consulting services. We offer strategic planning, digital marketing, content creation, CRM optimization, and performance analytics to drive growth and engagement.",
      images: "https://nexoria.ai/images/banner.jpg/",
  },
};

const ItConsulting = () => {
  return (
    <>
      <MarketingHero />
      <MarketingMain />
      <MarketingNeed />
    </>
  );
};

export default ItConsulting;