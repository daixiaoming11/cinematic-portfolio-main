import { Link } from "react-router-dom";
import { HoverFlickerText } from "../ux/HoverFlickerText";

interface IndividualLinkProps {
  link: string;
  index: number;
}

/**
 * IndividualLink renders a single external link with a flicker effect and a diagonal arrow icon.
 * Extracted from SectionLink for modular use.
 */
export function IndividualLink({ link, index }: IndividualLinkProps) {
  return (
    <Link
      key={index}
      to={link.includes("@") ? `mailto:${link}` : link}
      target={link.includes("http") || link.endsWith(".pdf") || link.startsWith("/assets/") ? "_blank" : undefined}
      className="group flex items-center gap-1 text-sm text-white/50 hover:text-white transition-colors duration-300"
    >
      <HoverFlickerText>
        {link.endsWith(".pdf")
          ? link.split("/").pop()?.replace(".pdf", "").replace(/-/g, " ") ||
            "View PDF"
          : link.replace(/^https?:\/\/(www\.)?/, "").split("/")[0]}
      </HoverFlickerText>
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </Link>
  );
}
