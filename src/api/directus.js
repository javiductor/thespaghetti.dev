import { createDirectus, rest, readItems } from "@directus/sdk";

const directus = createDirectus("https://api.theatomlab.co.uk/").with(rest());

export const fetchBlogs = async () => {
  try {
    const blogs = await directus.request(readItems("Blog"));
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export const fetchBlogBySlug = async (slug) => {
  try {
    const blogs = await directus.request(
      readItems("Blog", {
        filter: {
          slug: {
            _eq: slug,
          },
        },
      })
    );
    return blogs[0];
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};
