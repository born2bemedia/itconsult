import "@/styles/faq.scss";
import "@/styles/base.scss";
import React from "react";
import FaqHero from "./_components/FaqHero";
import FaqText from "./_components/FaqText";
import FaqMain from "./_components/FaqMain";
import FaqLast from "./_components/FaqLast";


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