import { createDirectus, rest, readItems } from "@directus/sdk";
import { create } from "xmlbuilder2";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const directus = createDirectus("https://api.theatomlab.co.uk").with(rest());

const staticRoutes = ["/", "/about", "/contact", "/blog"];

const getBlogPosts = async () => {
  try {
    const response = await directus.request(readItems("BlogPost"));
    const posts = Array.isArray(response) ? response : response?.data || [];

    return posts.map((post) => `/blog/${post.slug}`);
  } catch (error) {
    console.error("Error fetching blog posts from Directus:", error);
    return [];
  }
};

const generateSitemap = async () => {
  try {
    const blogRoutes = await getBlogPosts();
    const allRoutes = [...staticRoutes, ...blogRoutes];

    const doc = create({ version: "1.0", encoding: "UTF-8" }).ele("urlset", {
      xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
    });

    allRoutes.forEach((route) => {
      doc
        .ele("url")
        .ele("loc")
        .txt(`https://thespaghetti.dev${route}`)
        .up()
        .ele("lastmod")
        .txt(new Date().toISOString().split("T")[0])
        .up()
        .ele("changefreq")
        .txt(route.includes("/blog/") ? "weekly" : "monthly")
        .up()
        .ele("priority")
        .txt(route === "/" ? "1.0" : "0.8")
        .up();
    });

    const xml = doc.end({ prettyPrint: true });

    // Write directly to current directory
    const sitemapPath = resolve(__dirname, "sitemap.xml");
    writeFileSync(sitemapPath, xml);

    console.log("Sitemap generated successfully at:", sitemapPath);
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

generateSitemap();
