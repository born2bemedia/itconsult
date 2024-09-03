import "@/styles/it-consulting.scss";
import "@/styles/base.scss";
import React from "react";
import ItConsultingHero from "./_components/ItConsultingHero";
import ItConsultingMain from "./_components/ItConsultingMain";
import ItConsultingNeed from "./_components/ItConsultingNeed";


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

const ItConsulting = () => {
    return (
      <>
        <ItConsultingHero />
        <ItConsultingMain />
        <ItConsultingNeed />
      </>
    );
  };
  
  export default ItConsulting;