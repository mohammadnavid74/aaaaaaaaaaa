import { PictureInfoDto } from "../shared/pictureInfoDto";

export interface NewsSiteSectionDetailWithoutIdDto {
    code: number;
    views: number;
    title: string;
    publishedDate: string;
    pictureInfo: PictureInfoDto | null;
}
