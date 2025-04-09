"use client";

import { CldImage } from "next-cloudinary";

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function CloudinaryImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
}: CloudinaryImageProps) {
  const publicId = src.split("/upload/")[1];

  return (
    <CldImage
      src={publicId}
      width={width}
      height={height}
      alt={alt}
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      loading="lazy"
      quality={75}
    />
  );
}
