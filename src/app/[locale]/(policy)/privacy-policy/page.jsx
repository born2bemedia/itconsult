import { getPage, getPageSlugs } from "@/utils/blogUtils";
import React from "react";
import "@/styles/policy.scss";

export async function generateStaticParams() {
  const locales = ["en", "de", "it"];
  const params = [];

  for (const locale of locales) {
    const slugs = await getPageSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const { locale } = awaitedParams;

  const page = await getPage("privacy-policy", locale);

  return {
    title: page.title,
    openGraph: {
      title: page.title,
      images: "",
    },
  };
}

const PrivacyPolicy = async ({ params }) => {
  const awaitedParams = await params;
  const { locale } = awaitedParams;

  const page = await getPage("privacy-policy", locale);
  return (
    <>
      <div className="policy-head"></div>
      <section className="policy">
        <div className="policy__container">
          <div className="policy__body">
            <h1 className="policy__title">{page.title}</h1>
            <article
              dangerouslySetInnerHTML={{ __html: page.body }}
              className="policy__content"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
