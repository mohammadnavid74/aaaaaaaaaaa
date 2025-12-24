import { getCommodityData } from "@/lib/api/services/commodity.service";
import { ICommodity } from "@/types/dtos/commodity/ICommodity";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const MainCommodity = dynamic(
  () => import("@/app/(modules)/(2.commodity)/components/MainCommodity")
);

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const commodities: ICommodity[] | undefined = await getCommodityData();
  if (!commodities || commodities == undefined || commodities.length == 0) {
    return {
      title: "محصول پیدا نشد",
      description: "این محصول در دسترس نیست.",
    };
  }
  return {
    title: "محصولات شرکت گروه خودرو سازی مایان",
    description: " شرکت مایان پیشتاز در عرضه خودرو های سنگین و نیمه سنگین ",
    keywords: commodities.map((item) => {
      return item.title;
    }),
  };
}

export default async function Page() {
  const commodities: ICommodity[] | undefined = await getCommodityData();
  if (!commodities || commodities == undefined || commodities.length == 0) {
    return (
      <div>
        <h2>محصولات یافت نشد</h2>
      </div>
    );
  }
  return (
    <>
      {/* <HeaderComponent></HeaderComponent> */}
      <MainCommodity
        commodityDetails={null}
        commodity={commodities!}
        code={null}
      />
    </>
  );
}
