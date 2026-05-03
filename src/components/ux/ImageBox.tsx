import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

interface ImageBoxProps {
  url: string;
  src: string;
}

/**
 * ImageBox renders a figure containing an image.
 * It automatically derives the alt text from the filename in the URL.
 */
export function ImageBox({ url, src }: ImageBoxProps) {
  // Extract filename without extension for the alt text
  const fileName = src.split("/").pop()?.split(".")[0] || "portfolio image";
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { scale: 1.1, filter: "blur(10px)", opacity: 0 },
      {
        scale: 1,
        filter: "blur(0px)",
        opacity: 0.9,
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <figure className="my-4 overflow-hidden rounded-lg border border-white/10 bg-white/5">
      <img
        ref={imageRef}
        src={src}
        alt={`${fileName} descriptor`}
        className="w-full h-auto object-cover hover:opacity-100 transition-opacity duration-500"
        loading="lazy"
      />
      <figcaption className="sr-only"><Link to={url} target="_blank" rel="noopener noreferrer">
        {fileName}
      </Link></figcaption>
    </figure>
  );
}
