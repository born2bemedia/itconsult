import "@/styles/newsroom.scss";
import { getPost, getSlugs } from "@/utils/blogUtils";
import React from "react";
import Link from "next/link";
import ArrowRight from "@/icons/slider/ArrowRight";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  const locales = ["en", "it", "de"];

  const params = [];
  slugs.forEach((slug) => {
    if (!slug.startsWith("IT-") && !slug.startsWith("DE-")) {
      locales.forEach((locale) => {
        params.push({ slug, locale });
      });
    }
  });

  return params;
}

export async function generateMetadata({ params: { slug, locale } }) {
  const post = await getPost(slug, locale);

  return {
    title: post.seo_title,
    description: post.seo_description,
    openGraph: {
      title: post.seo_title,
      description: post.seo_description,
      images: post.thumbnail,
    },
  };
}

const BlogSingle = async ({ params: { slug, locale } }) => {
  const post = await getPost(slug, locale);

  // console.log(post);

  return (
    <>
      <section className="article-hero">
        <div className="article-hero__container">
          <div className="article-hero__body">
            <div className="article-hero__poster">
              <img src={post.thumbnail} alt="poster" />
            </div>
          </div>
        </div>
      </section>
      <section className="article-main">
        <div className="article-main__container">
          <div className="article-main__body">
            <h1 className="article-main__title">{post.title}</h1>
            <div
              className="article-main__text"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
            <Link href="/newsroom/" className="article-main__link">
              More News
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;