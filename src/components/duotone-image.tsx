import React from "react";
import Image, { ImageProps } from "next/image";
import { StaticImageData } from "next/image";

interface DuotoneImageProps extends Omit<ImageProps, "src"> {
  src: string | StaticImageData;
  /**
   * Legacy props kept for backward compatibility.
   * The component no longer applies any duotone/tint processing.
   */
  lightColor?: string;
  darkColor?: string;
  contrastFactor?: number;
  sharpnessFactor?: number;
}

const DuotoneImage: React.FC<DuotoneImageProps> = ({
  src,
  width,
  height,
  className = "",
  alt = "",
  // Keep defaults for compatibility; unused.
  lightColor = "#E0FFFF",
  darkColor = "#004D4D",
  contrastFactor = 1.2,
  sharpnessFactor = 0.5,
  ...props
}) => {
  // Intentionally unused now; keep in signature for compatibility.
  void lightColor;
  void darkColor;
  void contrastFactor;
  void sharpnessFactor;

  return (
    <Image
      {...props}
      src={src}
      width={width}
      height={height}
      className={className}
      alt={alt}
    />
  );
};

export default DuotoneImage;
