import { ProvinceHomeDto } from "../shared/ProvinceHomeDto";
import { CityHomeDto } from "../shared/CityHomeDto";
import { ContactType } from "@/types/enums/ContactType.enum";
import { CmsCompanyStatus } from "@/types/enums/CmsCompanyStatus.enum";

export interface CmsCompanyDataDto {
  code: string;
  title: string;
  cmsCompanyStatus: CmsCompanyStatus;
  cmsCompanyAddress: HomeCmsCompanyAddressDto;
}

export interface HomeCmsCompanyAddressDto {
  latitude: number;
  longitude: number;
  province: ProvinceHomeDto;
  city: CityHomeDto;
  cmsCompanyContacts: HomeCmsCompanyContactDto[];
}

export interface HomeCmsCompanyContactDto {
  contactType: ContactType;
  value: string;
}

export interface CMSCompanySummaryDto {
  id: string;
  code: string;
  name: string;
  subTitle: string;
  tel: string;
  province: string;
  city: string;
  latitude?: number;
  longitude?: number;
  activityType: CMSCompanyActivityType;
  status: CMSCompanyStatus;
}
export enum CMSCompanyActivityType {
  Unknown = 0,
  Sale = 1,
  AfterSale = 2,
  SaleAndAfterSale = 3,
}
export const CMSCompanyActivityTypeLabel: Record<
  CMSCompanyActivityType,
  string
> = {
  [CMSCompanyActivityType.Unknown]: "نامشخص",
  [CMSCompanyActivityType.Sale]: "فروش",
  [CMSCompanyActivityType.AfterSale]: "خدمات پس از فروش",
  [CMSCompanyActivityType.SaleAndAfterSale]: "فروش و خدمات پس از فروش",
};
export enum CMSCompanyStatus {
  Unknown = 0,
  Active = 1,
  InActive = 2,
  InSuspense = 3,
  Canceled = 4,
  Deleted = 100,
}

export const CMSCompanyStatusLabel: Record<CMSCompanyStatus, string> = {
  [CMSCompanyStatus.Unknown]: "نامشخص",
  [CMSCompanyStatus.Active]: "فعال",
  [CMSCompanyStatus.InActive]: "غیر فعال",
  [CMSCompanyStatus.InSuspense]: "تعلیق",
  [CMSCompanyStatus.Canceled]: "لغو شده",
  [CMSCompanyStatus.Deleted]: "حذف شده",
};
