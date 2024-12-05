import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "The Spaghetti Dev",
  description = "Follow my journey as a developer through hands-on projects, coding insights, and real-world experiences. Explore my portfolio and learn alongside me as I navigate the tech world.",
  ogImage = "/assets/SEO/seo-home.webp",
  canonicalUrl,
  noindex = false,
}) => {
  const siteUrl = "https://thespaghetti.dev";
  const fullImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Spaghetti Dev" />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl || siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>
  );
};

export default SEO;
