import "@/styles/market-research.scss";
import "@/styles/base.scss";
import React from "react";
import MarketHero from "./_components/MarketHero";
import MarketTop from "./_components/MarketTop";
import MarketTrends from "./_components/MarketTrends";


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
        </>
    );
};

export default MarketResearch;