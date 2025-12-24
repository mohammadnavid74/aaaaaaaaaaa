import { PictureInfoDto } from "../shared/pictureInfoDto";

export interface AwardSiteSectionWithoutIdDto {
    summary: string | null;
    pictureInfo: PictureInfoDto | null;
}
