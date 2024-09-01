import "@/styles/complex-solutions.scss";
import "@/styles/base.scss";
import React from "react";
import SolutionsHero from "./_components/SolutionsHero";
import SolutionsNeed from "./_components/SolutionsNeed";
import SolutionsMain from "./_components/SolutionsMain";


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

const ComplesSolutions = () => {
    return (
        <>
            <SolutionsHero />
            <SolutionsMain />
            <SolutionsNeed />
        </>
    );
};

export default ComplesSolutions;