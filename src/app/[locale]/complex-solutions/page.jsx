import "@/styles/complex-solutions.scss";
import "@/styles/base.scss";
import React from "react";
import SolutionsHero from "./_components/SolutionsHero";
import SolutionsNeed from "./_components/SolutionsNeed";
import SolutionsMain from "./_components/SolutionsMain";


export const metadata = {
    title: "Complex IT and Marketing Solutions for Business | Nexoria",
    description:
        "Unlock business potential with Nexoria's tailored IT and marketing packages. From company launches to global expansions, our integrated solutions cover IT infrastructure, branding, marketing, and more.",
    openGraph: {
        title: "Complex IT and Marketing Solutions for Business | Nexoria",
        description:
            "Unlock business potential with Nexoria's tailored IT and marketing packages. From company launches to global expansions, our integrated solutions cover IT infrastructure, branding, marketing, and more.",
        images: "https://nexoria.ai/images/banner.jpg/",
    },
};

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