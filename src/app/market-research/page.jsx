import "@/styles/market-research.scss";
import "@/styles/base.scss";
import React from "react";
import MarketHero from "./_components/MarketHero";
import MarketTop from "./_components/MarketTop";
import MarketTrends from "./_components/MarketTrends";
import MarketTrendsIt from "./_components/MarketTrendsIt";
import MarketCommon from "./_components/MarketCommon";
import MarketFace from "./_components/MarketFace";
import MarketRecommendations from "./_components/MarketRecommendations";
import MarketLast from "./_components/MarketLast";

export const metadata = {
    title: "IT and Marketing Trends, Business Gaps, and Insights 2024 | Nexoria",
    description:
      "Explore our comprehensive market research for the first half 2024, covering IT and marketing trends, common business gaps, and valuable insights for optimizing your strategies.",
    openGraph: {
      title: "IT and Marketing Trends, Business Gaps, and Insights 2024 | Nexoria",
      description:
        "Explore our comprehensive market research for the first half 2024, covering IT and marketing trends, common business gaps, and valuable insights for optimizing your strategies.",
      images: "https://nexoria.ai/images/banner.jpg/",
    },
  };
const MarketResearch = () => {
    return (
        <>
            <MarketHero />
            <MarketTop />
            <MarketTrends />
            <MarketTrendsIt />
            <MarketCommon />
            <MarketFace />
            <MarketRecommendations />
            <MarketLast />
        </>
    );
};

export default MarketResearch;