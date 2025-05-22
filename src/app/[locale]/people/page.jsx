import "@/styles/people.scss";
import "@/styles/base.scss";
import React from "react";
import PeopleHero from "./_components/PeopleHero";
import PeopleText from "./_components/PeopleText";
import PeopleMain from "./_components/PeopleMain";
import PeopleLast from "./_components/PeopleLast";


export const metadata = {
    title: "IT and Marketing Experts | Nexoria",
    description:
        "Meet the Nexoria team of skilled IT and marketing professionals. Our experts are dedicated to helping your business succeed through tailored solutions.",
    openGraph: {
        title: "IT and Marketing Experts | Nexoria",
        description:
            "Meet the Nexoria team of skilled IT and marketing professionals. Our experts are dedicated to helping your business succeed through tailored solutions.",
        images: "https://nexoria.ai/images/banner.jpg/",
    },
};

const About = () => {
    return (
        <>
            <PeopleHero />
            <PeopleText />
            <PeopleMain />
            <PeopleLast />
        </>
    );
};

export default About;