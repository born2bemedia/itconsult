import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import { join } from "path";

export async function getPost(slug, locale) {
  let fileSlug = slug;

  const text = await readFile(
    join(process.cwd(), `src/lib/newsroom-${locale}`, `${fileSlug}.md`),
    "utf8"
  );
  const {
    content,
    data: { title, seo_title, seo_description, thumbnail },
  } = matter(text);
  const body = marked(content);
  return { slug: fileSlug, title, seo_title, seo_description, thumbnail, body };
}

export async function getSlugs(locale) {
  const files = await readdir(join(process.cwd(), `src/lib/newsroom-${locale}`));
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}

export async function getPage(slug, locale) {
  let fileSlug = slug;

  const text = await readFile(
    join(process.cwd(), `src/lib/policies-${locale}`, `${fileSlug}.md`),
    "utf8"
  );
  const {
    content,
    data: { title, date },
  } = matter(text);
  const body = marked(content);
  return { slug: fileSlug, title, date, body };
}

export async function getPageSlugs(locale) {
  const files = await readdir(join(process.cwd(), `src/lib/policies-${locale}`));
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
