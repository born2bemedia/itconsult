import "@/styles/marketing-consulting.scss";
import "@/styles/base.scss";
import React from "react";
import MarketingHero from "./_components/MarketingHero";
import MarketingNeed from "./_components/MarketingNeed";
import MarketingMain from "./_components/MarketingMain"; 


/* export const metadata = {
    title: "Contact  Marketing Experts",
    description:
        "Have questions or need expert help with your marketing strategy? Reach out to Next Wave Ad for personalised assistance and solutions tailored to your business needs.",
    openGraph: {
        title: "Contact  Marketing Experts",
        description:
            "Have questions or need expert help with your marketing strategy? Reach out to Next Wave Ad for personalised assistance and solutions tailored to your business needs.",
        images: "https://nextwavead.com/images/meta.png",
    },
}; */

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