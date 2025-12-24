//import { getSafeAltText, getSafeImageUrl } from "@/lib/utils/imageHelper";
import { PictureInfoDto } from "@/types/dtos/shared/pictureInfoDto";
import Image, { ImageProps } from "next/image";
// import { useState } from "react";

interface SafeImageProps extends Omit<ImageProps, "src" | "alt"> {
  pictureInfo: PictureInfoDto;
}
const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(unescape(encodeURIComponent(str)));
const placeholderSVG = `
  <svg width="100%" height="100%" viewBox="0 0 1440 700" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f0f0f0"/>
  </svg>
`;

export const SafeImage = ({ pictureInfo, ...props }: SafeImageProps) => {
  //const [src] = useState(getSafeImageUrl(pictureInfo));
  //const [alt] = useState(getSafeAltText(pictureInfo));

  const fallbackSVG = `
    <svg width="100%" height="100%" viewBox="0 0 1440 700" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <g transform="translate(710, 320)">
        <rect x="0" y="0" width="30" height="20" rx="3" ry="3" fill="#ccc"/>
        <circle cx="15" cy="10" r="5" fill="#aaa"/>
        <rect x="10" y="-5" width="10" height="5" fill="#ccc"/>
      </g>
    </svg>
  `;

  return (
    <Image
      {...props}
      src={`/downloads/${pictureInfo.pictureId}`}
      //alt={pictureInfo!.title}
      alt='تصویر'
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(placeholderSVG)}`}
      onError={(e) => {
        e.currentTarget.src = `data:image/svg+xml;base64,${toBase64(fallbackSVG)}`;
      }}
    />
  );
};
