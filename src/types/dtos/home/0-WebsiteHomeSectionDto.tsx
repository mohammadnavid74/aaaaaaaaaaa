import { EntityDto } from "../shared/entityDto";
import { AwardSiteSectionWithoutIdDto } from "./AwardSiteSectionWithoutIdDto";
import { CustomerItemWithoutIdDto } from "./CustomerItemWithoutIdDto";
import { GallerySiteSectionItemWithoutIdDto } from "./GallerySiteSectionItemWithoutIdDto";
import { NewsSiteSectionDetailWithoutIdDto } from "./NewsSiteSectionDetailWithoutIdDto";
import { QuestionsGroupWithoutIdDto } from "./QuestionsGroupWithoutIdDto";
import { SaleCircularWithoutIdDto } from "./SaleCircularWithoutIdDto";
import { MenuSimpleSiteSectionDto } from "./MenuSimpleSiteSectionDto";
import { CMSCompanySummaryDto } from "../cmsCompany/CmsCompanyDataDto";

export interface WebsiteHomeSectionDto extends EntityDto<string> {
    menus: MenuSimpleSiteSectionDto[];
    galleryItems: GallerySiteSectionItemWithoutIdDto[];
    awards: AwardSiteSectionWithoutIdDto[];
    news: NewsSiteSectionDetailWithoutIdDto[];
    customers: CustomerItemWithoutIdDto[];
    questionGroups: QuestionsGroupWithoutIdDto[];
    saleCirculars: SaleCircularWithoutIdDto[];
    cmsCompanies: CMSCompanySummaryDto[];
}
