import "@/styles/it-consulting.scss";
import "@/styles/base.scss";
import React from "react";
import ItConsultingHero from "./_components/ItConsultingHero";
import ItConsultingMain from "./_components/ItConsultingMain";
import ItConsultingNeed from "./_components/ItConsultingNeed";


export const metadata = {
  title: "Expert IT Consulting Services for Businesses | Nexoria",
  description:
      "Discover Nexoria's IT consulting services. We provide solutions that optimise your business operations, from IT strategy and infrastructure management to data analytics and software integration.",
  openGraph: {
      title: "Expert IT Consulting Services for Businesses | Nexoria",
      description:
          "Discover Nexoria's IT consulting services. We provide solutions that optimise your business operations, from IT strategy and infrastructure management to data analytics and software integration.",
      images: "https://nexoria.ai/images/banner.jpg/",
  },
};

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