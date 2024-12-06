import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

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

  const fullTitle = title.includes("| The Spaghetti Dev")
    ? title
    : `${title} | The Spaghetti Dev`;

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Spaghetti Dev" />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl || siteUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ogImage: PropTypes.string.isRequired,
  canonicalUrl: PropTypes.string,
  noindex: PropTypes.bool,
};

export default SEO;
