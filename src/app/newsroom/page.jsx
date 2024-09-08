import "@/styles/base.scss";
import "@/styles/newsroom.scss";
import React from "react";
import NewsroomHero from "./_components/NewsroomHero";
import NewsroomMain from "./_components/NewsroomMain";
import NewsroomText from "./_components/NewsroomText";

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