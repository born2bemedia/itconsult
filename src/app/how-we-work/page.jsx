import "@/styles/how-we-work.scss";
import "@/styles/base.scss";
import React from "react";
import HowWeWorkHero from "./_components/HowWeWorkHero";
import HowWeWorkMain from "./_components/HowWeWorkMain";
import HowWeWorkText from "./_components/HowWeWorkText";


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
        <HowWeWorkHero />
        <HowWeWorkText />
        <HowWeWorkMain />
      </>
    );
  };
  
  export default HowWeWork;