import React, { useState, useEffect } from "react";
import { createDirectus, rest, readItems } from "@directus/sdk";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import parse from "html-react-parser";
import styles from "./individual-blog.module.css";
import CodeDisplay from "./code-display";
import SocialMediaIcons from "../../../shared/social-media-icons";

const directus = createDirectus("https://api.theatomlab.co.uk").with(rest());

const BlogContent = () => {
  const [blog, setBlog] = useState(null);
  const [contentBlocks, setContentBlocks] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        setError(null);

        const blogResponse = await directus.request(
          readItems("BlogPost", {
            filter: { slug: { _eq: slug } },
            limit: 1,
          })
        );

        if (!Array.isArray(blogResponse) || blogResponse.length === 0) {
          throw new Error("Blog post not found");
        }

        const currentBlog = blogResponse[0];
        setBlog(currentBlog);

        const contentBlocksResponse = await directus.request(
          readItems("Content_Blocks", {
            filter: { Blog_Post: { _eq: currentBlog.id } },
            sort: ["Order"],
          })
        );

        if (Array.isArray(contentBlocksResponse)) {
          setContentBlocks(contentBlocksResponse);
        }

        const relatedResponse = await directus.request(
          readItems("BlogPost", {
            filter: {
              Categories: { _has: currentBlog.Categories },
              slug: { _neq: slug },
            },
            limit: 4,
          })
        );

        if (Array.isArray(relatedResponse)) {
          setRelatedPosts(relatedResponse);
        }
      } catch (error) {
        console.error("Error fetching blog content:", error);
        setError(error.message);
      }
    };

    fetchBlogContent();
  }, [slug]);

  const formatTitle = (title) => {
    const parts = title.split(":");
    if (parts.length > 1) {
      return (
        <h1 className={styles.title}>
          <span className={styles.titleFirst}>{parts[0]}:</span>
          <span className={styles.titleSecond}>{parts[1].trim()}</span>
        </h1>
      );
    }
    return <h1 className={styles.title}>{title}</h1>;
  };

  const renderContent = (block) => {
    switch (block.Block_Type) {
      case "Image":
        return (
          <img
            key={block.id}
            src={`https://api.theatomlab.co.uk/assets/${block.Image}`}
            alt={block.Image_Alt || ""}
            className={styles.image}
          />
        );

      case "Code":
        return (
          <CodeDisplay
            key={block.id}
            code={block.Code_Content}
            language={block.Code_Content_Language}
          />
        );

      case "Text Block":
        return (
          <div key={block.id} className={styles.text}>
            {parse(block.Text_Block)}
          </div>
        );

      default:
        console.log("Unknown block type:", block.Block_Type);
        return null;
    }
  };

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className={styles.errorContainer}>
        <h2>Blog post not found</h2>
        <p>The requested blog post could not be found.</p>
      </div>
    );
  }

  const canonicalUrl = `https://thespaghetti.dev/blog/${slug}`;
  const ogImageUrl = blog.Header_Img
    ? `https://api.theatomlab.co.uk/assets/${blog.Header_Img}`
    : "https://thespaghetti.dev/assets/SEO/seo-blog.webp";

  return (
    <>
      <Helmet>
        <title>{`${blog.Title} | The Spaghetti Dev`}</title>
        <meta name="description" content={blog.description_meta} />
        <meta name="author" content={blog.Author} />
        <meta name="keywords" content={blog.Categories?.join(", ")} />

        {/* Open Graph tags */}
        <meta property="og:title" content={blog.Title} />
        <meta property="og:description" content={blog.description_meta} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.Title} />
        <meta name="twitter:description" content={blog.description_meta} />
        <meta name="twitter:image" content={ogImageUrl} />

        {/* Article specific metadata */}
        <meta property="article:published_time" content={blog.date_created} />
        <meta property="article:author" content={blog.Author} />
        {blog.Categories?.map((category) => (
          <meta property="article:tag" content={category} key={category} />
        ))}

        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className={styles.blogContainer}>
        <div className={styles.headerContainer}>
          {blog.Header_Img && (
            <>
              <img
                src={`https://api.theatomlab.co.uk/assets/${blog.Header_Img}`}
                alt={blog.Title}
                className={styles.headerImage}
              />
              <div className={styles.overlay}>
                {formatTitle(blog.Title)}
                <p className={styles.description}>{blog.description_meta}</p>
                <div className={styles.categoryContainer}>
                  {Array.isArray(blog.Categories) &&
                    blog.Categories.map((category, index) => (
                      <span key={index} className={styles.category}>
                        {category}
                      </span>
                    ))}
                </div>
              </div>
            </>
          )}
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.content}>
            {contentBlocks.map((block) => renderContent(block))}
          </div>

          <div className={styles.authorContainer}>
            <div className={styles.authorContainerInfo}>
              {blog.Author_Img && (
                <img
                  src={`https://api.theatomlab.co.uk/assets/${blog.Author_Img}`}
                  alt={blog.Author || "Author"}
                  className={styles.authorImage}
                />
              )}
              <div className={styles.authorInfo}>
                {blog.Author && <h5>Written by {blog.Author}</h5>}
                {blog.Author_Role && (
                  <p className={styles.authorRole}>{blog.Author_Role}</p>
                )}
                <SocialMediaIcons className={styles.socialIcons} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
