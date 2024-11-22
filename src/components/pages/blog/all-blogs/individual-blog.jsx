import React, { useState, useEffect } from "react";
import { createDirectus, rest, readItems } from "@directus/sdk";
import { useParams } from "react-router-dom";
import styles from "./individual-blog.module.css";
import CodeDisplay from "./code-display";
// import Card from "../../../shared/card";
import LoadingSpinner from "./LoadingSpinner.jsx";
import SocialMediaIcons from "../../../shared/social-media-icons";

const directus = createDirectus("https://api.theatomlab.co.uk").with(rest());

const BlogContent = () => {
  const [blog, setBlog] = useState(null);
  const [contentBlocks, setContentBlocks] = useState([]);
  //   const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        setLoading(true);
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

        // Fetch content blocks
        const contentBlocksResponse = await directus.request(
          readItems("Content_Blocks", {
            filter: { Blog_Post: { _eq: currentBlog.id } },
            sort: ["Order"],
          })
        );

        if (Array.isArray(contentBlocksResponse)) {
          setContentBlocks(contentBlocksResponse);
        }

        setLoading(false);

        // Fetch related posts separately
        setRelatedLoading(true);
        const relatedResponse = await directus.request(
          readItems("BlogPost", {
            filter: {
              Categories: { _has: currentBlog.Categories },
              slug: { _neq: slug },
            },
            limit: 3,
          })
        );

        if (Array.isArray(relatedResponse)) {
          setRelatedPosts(relatedResponse);
        }
        setRelatedLoading(false);
      } catch (error) {
        console.error("Error fetching blog content:", error);
        setError(error.message);
        setLoading(false);
        setRelatedLoading(false);
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

  const renderHeading = (block) => {
    const headingId = `heading-${block.id}`;

    switch (block.Block_Type) {
      case "H2":
        return (
          <h2 id={headingId} key={block.id} className={styles.heading}>
            {block.Heading_Content}
          </h2>
        );
      case "H3":
        return (
          <h3 id={headingId} key={block.id} className={styles.heading}>
            {block.Heading_Content}
          </h3>
        );
      case "H4":
        return (
          <h4 id={headingId} key={block.id} className={styles.heading}>
            {block.Heading_Content}
          </h4>
        );
      default:
        return null;
    }
  };

  // Collect headings for the link list
  const headingLinks = contentBlocks
    .filter(
      (block) =>
        block.Block_Type === "H2" ||
        block.Block_Type === "H3" ||
        block.Block_Type === "H4"
    )
    .map((block) => ({
      id: `heading-${block.id}`,
      content: block.Heading_Content,
    }));

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!blog) {
    return (
      <div className={styles.errorContainer}>
        <h2>Blog post not found</h2>
        <p>The requested blog post could not be found.</p>
      </div>
    );
  }

  return (
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
          {contentBlocks.map((block) => {
            switch (block.Block_Type) {
              case "H2":
              case "H3":
              case "H4":
                return renderHeading(block);

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

              case "Text Area":
                return (
                  <div key={block.id} className={styles.text}>
                    {block.Text_Area.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>

        <div className={styles.authorContainer}>
          <div className={styles.headerLinks}>
            <h3>Contents</h3>
            {contentBlocks
              .filter((block) => block.Block_Type === "H2")
              .map((block) => (
                <div key={block.id} className={styles.headerLink}>
                  <a href={`#${block.id}`}>{block.Heading_Content}</a>
                </div>
              ))}
          </div>
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
  );
};

export default BlogContent;
