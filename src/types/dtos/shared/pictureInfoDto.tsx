import { EntityDto } from "./entityDto";

export interface PictureInfoDto extends EntityDto<string> {
    title: string | null;
    index: number;
    pictureId: string;
}