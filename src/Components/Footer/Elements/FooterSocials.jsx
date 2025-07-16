"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  { icon: faFacebook, href: "#", label: "Facebook" },
  { icon: faInstagram, href: "#", label: "Instagram" },
  { icon: faTwitter, href: "#", label: "Twitter" },
  { icon: faYoutube, href: "#", label: "YouTube" },
];

export default function FooterSocials() {
  return (
    <div className="flex space-x-4 justify-center mb-6">
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className="hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={item.icon} size="lg" />
        </a>
      ))}
    </div>
  );
}
