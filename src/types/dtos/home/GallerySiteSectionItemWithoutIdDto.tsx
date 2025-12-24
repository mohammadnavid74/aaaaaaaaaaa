import { PictureInfoDto } from "../shared/pictureInfoDto";

export interface GallerySiteSectionItemWithoutIdDto {
    index: number;
    title: string | null;
    link: string | null;
    subTitle: string | null;
    pageId: string | null;
    pictureInfo: PictureInfoDto | null;
}
