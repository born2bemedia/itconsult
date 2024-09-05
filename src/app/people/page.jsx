import "@/styles/people.scss";
import "@/styles/base.scss";
import React from "react";
import PeopleHero from "./_components/PeopleHero";
import PeopleText from "./_components/PeopleText";
import PeopleMain from "./_components/PeopleMain";
import PeopleLast from "./_components/PeopleLast";


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
        <PeopleHero />
        <PeopleText />
        <PeopleMain />
        <PeopleLast />
        </>
    );
};

export default About;