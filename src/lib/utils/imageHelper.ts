import { PictureInfoDto } from "@/types/dtos/shared/pictureInfoDto";

export const getSafeImageUrl = (pictureInfo: PictureInfoDto): string => {
  const gatewayUrl = process.env.NEXT_PUBLIC_GATEWAY_URL;
  const pictureId = pictureInfo?.pictureId;

  if (!pictureId || !gatewayUrl) {
    console.warn(!gatewayUrl ? "NEXT_PUBLIC_GATEWAY_URL is not defined" : "PictureId is missing");
    return getFallbackImage(pictureInfo?.title || "تصویر موجود نیست");
  }

  return `${gatewayUrl}/filemanager/${pictureId}`;
};

//??
// export const getImageFromPublic = (pictureInfo: PictureInfoDto): string => {
//   const pictureId = pictureInfo?.pictureId;

//   if (!pictureId) {
//     console.warn("PictureId is missing");
//     return getFallbackImage(pictureInfo?.title || "تصویر موجود نیست");
//   }

//   return `/downloads/${pictureId}`;
// };

export const getSafeThumbnailImageUrl = (pictureInfo: PictureInfoDto): string => {
  const gatewayUrl = process.env.NEXT_PUBLIC_GATEWAY_URL;
  const pictureId = pictureInfo?.pictureId;

  if (!pictureId || !gatewayUrl) {
    console.warn(!gatewayUrl ? "NEXT_PUBLIC_GATEWAY_URL is not defined" : "PictureId is missing");
    return getFallbackImage(pictureInfo?.title || "تصویر موجود نیست", 150, 100);
  }

  return `${gatewayUrl}/filemanager/Thumbnail/${pictureId}`;
};


export const getSafeAltText = (pictureInfo: PictureInfoDto): string => {
  return pictureInfo?.title || "تصویر پیش‌فرض";
};

/**
 * بررسی معتبر بودن آیتم تصویر
 */
export const isValidImageItem = (pictureInfo: PictureInfoDto): boolean => {
  return !!(pictureInfo?.pictureId && process.env.NEXT_PUBLIC_GATEWAY_URL);
};


export const getFallbackImage = (
  text: string = "تصویر موجود نیست",
  width: number = 200,
  height: number = 150
): string => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <!-- آیکون دوربین ساده -->
      <g transform="translate(${width / 2 - 15}, ${height / 2 - 30})">
        <rect x="0" y="0" width="30" height="20" rx="3" ry="3" fill="#ccc"/>
        <circle cx="15" cy="10" r="5" fill="#aaa"/>
        <rect x="10" y="-5" width="10" height="5" fill="#ccc"/>
      </g>
      <text x="50%" y="${height - 20}" font-size="14" fill="#888" text-anchor="middle" alignment-baseline="middle">
        ${text}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
};
