import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

const SocialMediaIcons = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/javiductor",
      label: "Github",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/javier_ductor/",
      label: "Instagram",
    },
    {
      icon: FaBluesky,
      url: "https://bsky.app/profile/spaghettidev.bsky.social",
      label: "Bluesky",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/javier-ductor-peters-divi-website-designer/",
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
