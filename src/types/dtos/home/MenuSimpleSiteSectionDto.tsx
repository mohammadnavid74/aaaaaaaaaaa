import { EntityDto } from "../shared/entityDto";

export interface MenuSimpleSiteSectionDto extends EntityDto<string> {
    title: string;
    link: string | null;
    menuPlace: number;
    hierarchyId: string | null;
    children: MenuSimpleSiteSectionDto[];
    pageId: string | null;
}
