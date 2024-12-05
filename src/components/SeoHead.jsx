import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  ogImage,
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
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Spaghetti Dev" />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>
  );
};

export default SEO;
