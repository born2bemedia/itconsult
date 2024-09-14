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


/* export const metadata = {
    title: "",
    description:
        "",
    openGraph: {
        title: "",
        description:
            "",
        images: "",
    },
}; */

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