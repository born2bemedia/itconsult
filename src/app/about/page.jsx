import "@/styles/animation.scss";
import "@/styles/about.scss";
import "@/styles/base.scss";
import React from "react";
import AboutHero from "./_components/AboutHero";
import AboutText from "./_components/AboutText";
import AboutMain from "./_components/AboutMain";
import AboutBottom from "./_components/AboutBottom";
/* import AnimatedSentence from "./_components/AnimatedSentence"; */

/* export const metadata = {
    title: "Contact  Marketing Experts",
    description:
        "Have questions or need expert help with your marketing strategy? Reach out to Next Wave Ad for personalised assistance and solutions tailored to your business needs.",
    openGraph: {
        title: "Contact  Marketing Experts",
        description:
            "Have questions or need expert help with your marketing strategy? Reach out to Next Wave Ad for personalised assistance and solutions tailored to your business needs.",
        images: "",
    },
}; */

const About = () => {
    return (
        <>
            <AboutHero />
            <AboutText />
            {/* <AnimatedSentence text="We receive many questions from our clients and have highlighted the most important ones in this section to address key business challenges." /> */}
            <AboutMain />
            <AboutBottom />
        </>
    );
};

export default About;