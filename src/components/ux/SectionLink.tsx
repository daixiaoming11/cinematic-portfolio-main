import { IndividualLink } from "../ui/IndividualLink";
import { ImageBox } from "./ImageBox";

interface SectionLinkProps {
  links?: string[];
  img?: string[];
}

/**
 * SectionLink renders a list of external links with a flicker effect and a diagonal arrow icon.
 * @param {string[]} links - An array of URL strings to be displayed.
 */
export function SectionLink({ links, img }: SectionLinkProps) {
  if (!links || links.length === 0) return null;
  const hasImages = img && img.length > 0;
  //TODO - Handle case where links and images lengths don't match (currently assumes they do if images are provided)

  return (
      <div className="flex items-center gap-3 mt-2 section-link-container">
        {links.map((link, i) => (
            <>
            {hasImages ? (
              <ImageBox key={`img-${i}`} src={img?.[i] ?? ""} url={link} />
            ) : (
              <IndividualLink link={link} index={i}/>
            )}
            </>
        ))}
      </div>
  );
}
