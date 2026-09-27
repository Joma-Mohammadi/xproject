
"use client";

import NextImage from "next/image";

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  tr?: boolean;
}

export default function Image({
  src,
  width,
  height,
  alt = "",
  className,
  tr = false,
}: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      {...(tr
        ? {
            width,
            height,
          }
        : {
            width,
            height,
          })}
    />
  );
}


