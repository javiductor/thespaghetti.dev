import React, { useState, useEffect } from "react";
import { createDirectus, rest, readItems } from "@directus/sdk";
import Card from "../../shared/card";
import styles from "./blogpage.module.css";
import SEO from "../../SeoHead";

const directus = createDirectus("https://api.theatomlab.co.uk").with(rest());

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await directus.request(
          readItems("BlogPost", {
            sort: ["-date_created"],
          })
        );
        if (Array.isArray(response)) {
          setBlogs(response);
        } else if (response && Array.isArray(response.data)) {
          setBlogs(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SEO
        title="My blog | The Spaghetti Dev"
        description="Take a look at my blog about my journey in web development so far."
        ogImage="https://thespaghetti.dev/assets/SEO/seo-blog.webp"
        canonicalUrl="https://thespaghetti.dev/blog"
      />
      <div className={styles.Header}>
        <h1>My Blog</h1>
      </div>
      <div className={styles.pageContainer}>
        <div className={styles.blogGrid}>
          {blogs.map((BlogPost) => (
            <Card
              key={BlogPost.id}
              thumbImageSrc={
                BlogPost.Featured_Img
                  ? `https://api.theatomlab.co.uk/assets/${BlogPost.Featured_Img}`
                  : "/placeholder-image.jpg"
              }
              category={
                Array.isArray(BlogPost.Categories) ? BlogPost.Categories : []
              }
              altDescription={BlogPost.Title}
              heading={BlogPost.Title}
              link={`/blog/${BlogPost.slug}`}
              showArrow={false}
              showHeadingMargin={false}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
