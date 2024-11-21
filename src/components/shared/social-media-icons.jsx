import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMediaIcons = () => {
  const socialLinks = [
    {
      icon: FaInstagram,
      url: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: FaLinkedin,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  const iconContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  };

  const iconLinkStyle = {
    color: "var(--color-text)",
    transition: "color 0.2s ease",
    cursor: "pointer",
  };

  const iconStyle = {
    width: "24px",
    height: "24px",
  };

  return (
    <div style={iconContainerStyle}>
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinkStyle}
          aria-label={`Visit our ${label} page`}
        >
          <Icon style={iconStyle} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
