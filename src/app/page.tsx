import HeaderComponent from "@/app/(modules)/0.home/0.headerSection/0.Header";
import ExtraPage from "@/components/extraPage/extraPage";

import { getWebsiteHomeSection } from "@/lib/api/services/mainPage.service";
import { WebsiteHomeSectionDto } from "@/types/dtos/home/0-WebsiteHomeSectionDto";
import { Metadata } from "next";
import GallerySiteSection from "@/app/(modules)/0.home/1.sliderSection/gallerySiteSection";
import AboutUs from "./(modules)/0.home/4.aboutUsSection/aboutUs";
import QuestionGroups from "./(modules)/0.home/5.questionGroupsSection/questionsGroups";
import News from "./(modules)/0.home/2.newsSection/news";
import SaleCirculars from "./(modules)/0.home/3.saleCircularsSection/saleCirculars";
import FooterSection from "@/components/footer/Footer";
import CmsCompanySection from "@/app/(modules)/0.home/6.cmsCompanySection/CmsCompanySection";
import CommodityGroupMainPage from "@/components/commodityGroupMainPage/CommodityGroupMainPage";

export const metadata: Metadata = {
  title: "گروه خودروسازی مایان",
  description:
    "شرکت گروه مایان تولید کننده و وارد کننده انواع خودرو های سنگین و نیمه سنگین میباشد که در سال 1374 تاسیس گردید",
  keywords: [
    "شرکت مایان",
    "خودرو",
    "ماموت",
    "گروه مایان",
    "مایان دیزل",
    "مایان دیما",
    "mayan group",
    "خودرو های سنگین",
    "خودرو های نیمه سنگین",
  ],
};

// ISR
export const revalidate = 60;

export default async function Home() {
  let data: WebsiteHomeSectionDto = {
    menus: ([] = []),
    galleryItems: ([] = []),
    awards: ([] = []),
    news: ([] = []),
    customers: ([] = []),
    questionGroups: ([] = []),
    saleCirculars: ([] = []),
    cmsCompanies: ([] = []),
    id: "",
    creationDateTime: "",
    creationDatePersian: "",
    creationTimePersian: "",
  };

  try {
    data = await getWebsiteHomeSection();
  } catch {
    return <ExtraPage status={404} />;
  }

  if (!data?.menus || data.menus.length === 0) {
    return <div>Loading... (No data available)</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1440px] flex-col flex justify-center items-center w-full">
        {data.menus?.length > 0 && <HeaderComponent menus={data.menus} />}
        <main className="w-full">
          {data.galleryItems?.length > 0 && (
            <GallerySiteSection sliderList={data.galleryItems} />
          )}
          <CommodityGroupMainPage></CommodityGroupMainPage>
          {data.news?.length > 0 && <News newsList={data.news} />}
          {data.saleCirculars?.length > 0 && (
            <SaleCirculars saleCirculars={data.saleCirculars} />
          )}
          <AboutUs customers={data?.customers}></AboutUs>
          {data.questionGroups?.length > 0 && (
            <QuestionGroups Groups={data.questionGroups} />
          )}
          <CmsCompanySection
            cmsCompanies={data?.cmsCompanies}
          ></CmsCompanySection>
          <FooterSection />
        </main>
      </div>
    </div>
  );
}
