import "@/styles/animation.scss";
import "@/styles/about.scss";
import "@/styles/base.scss";
import React from "react";
import AboutHero from "./_components/AboutHero";
import AboutText from "./_components/AboutText";
import AboutMain from "./_components/AboutMain";
import AboutBottom from "./_components/AboutBottom";

export const metadata = {
    title: "Our Knowledge and Expertise | Nexoria",
    description:
        "Discover how Nexoria's team delivers tailored IT and marketing solutions backed by real-world data and customer feedback. We help businesses optimise performance through expert strategies and innovative technologies.",
    openGraph: {
        title: "Our Knowledge and Expertise | Nexoria",
        description:
            "Discover how Nexoria's team delivers tailored IT and marketing solutions backed by real-world data and customer feedback. We help businesses optimise performance through expert strategies and innovative technologies.",
        images: "https://nexoria.ai/images/banner.jpg/",
    },
};

const About = () => {
    return (
        <>
            <AboutHero />
            <AboutText />
            <AboutMain />
            <AboutBottom />
        </>
    );
};

export default About;