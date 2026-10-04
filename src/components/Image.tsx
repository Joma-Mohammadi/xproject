
"use client";

import NextImage from "next/image";

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  fill?: boolean;
}

export default function Image({
  src,
  width,
  height,
  alt = "",
  className,
  fill = false,
}: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      {...(fill ? { fill: true } : { width, height })}
    />
  );
}

