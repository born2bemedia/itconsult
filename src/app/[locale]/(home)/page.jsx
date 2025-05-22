import HomeHero from "./_components/HomeHero";
import HomeValue from "./_components/HomeValue";
import HomeWhy from "./_components/HomeWhy";
import HomeFaq from "./_components/HomeFaq";
import HomeWhat from "./_components/HomeWhat";
import HomeMarket from "./_components/HomeMarket";
import HomeLast from "./_components/HomeLast";

export const metadata = {
  title: "IT and Marketing Solutions for Business Growth | Nexoria",
  description:
    "Explore Nexoria's comprehensive IT and marketing solutions designed to drive your business forward. From IT infrastructure to targeted marketing strategies, we optimise growth and efficiency.",
  openGraph: {
    title: "IT and Marketing Solutions for Business Growth | Nexoria",
    description:
      "Explore Nexoria's comprehensive IT and marketing solutions designed to drive your business forward. From IT infrastructure to targeted marketing strategies, we optimise growth and efficiency.",
    images: "https://nexoria.ai/images/banner.jpg/",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeValue />
      <HomeWhy />
      <HomeWhat />
      <HomeFaq />
      <HomeMarket />
      <HomeLast />
    </>
  );
}
