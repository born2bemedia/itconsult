import "@/styles/base.scss";
import "@/styles/newsroom.scss";
import React from "react";
import NewsroomHero from "./_components/NewsroomHero";
import NewsroomMain from "./_components/NewsroomMain";
import NewsroomText from "./_components/NewsroomText";

export const metadata = {
  title: "Latest Company Updates and Announcements | Nexoria",
  description:
      "Stay informed with the latest news and updates from Nexoria. Learn about our events, company milestones, and industry insights.",
  openGraph: {
      title: "Latest Company Updates and Announcements | Nexoria",
      description:
          "Stay informed with the latest news and updates from Nexoria. Learn about our events, company milestones, and industry insights.",
      images: "https://nexoria.ai/images/banner.jpg/",
  },
};

const Newsroom = () => {
  return (
    <>
      <NewsroomHero />
      <NewsroomText />
      <NewsroomMain />
    </>
  );
};

export default Newsroom;