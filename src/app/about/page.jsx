import "@/styles/animation.scss";
import "@/styles/about.scss";
import "@/styles/base.scss";
import React from "react";
import AboutHero from "./_components/AboutHero";
import AboutText from "./_components/AboutText";
import AboutMain from "./_components/AboutMain";
import AboutBottom from "./_components/AboutBottom";

export const metadata = {
    title: "",
    description:
      "",
    openGraph: {
      title: "",
      description:
        "",
      images: "",
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