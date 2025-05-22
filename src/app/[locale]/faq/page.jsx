import "@/styles/faq.scss";
import "@/styles/base.scss";
import React from "react";
import FaqHero from "./_components/FaqHero";
import FaqText from "./_components/FaqText";
import FaqMain from "./_components/FaqMain";
import FaqLast from "./_components/FaqLast";


export const metadata = {
    title: "IT and Marketing FAQ | Nexoria",
    description:
        "Find answers to common questions about Nexoria's IT and marketing services. Explore our FAQ section for detailed information on our solutions and processes.",
    openGraph: {
        title: "IT and Marketing FAQ | Nexoria",
        description:
            "Find answers to common questions about Nexoria's IT and marketing services. Explore our FAQ section for detailed information on our solutions and processes.",
        images: "https://nexoria.ai/images/banner.jpg/",
    },
};

const HowWeWork = () => {
    return (
        <>
            <FaqHero />
            <FaqText />
            <FaqMain />
            <FaqLast />
        </>
    );
};

export default HowWeWork;