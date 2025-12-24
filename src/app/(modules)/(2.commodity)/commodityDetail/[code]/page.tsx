// src/app/commodity/page.tsx

import { getCommodityDataById } from "@/lib/api/services/commodity.service";
import { ICommodity } from "@/types/dtos/commodity/ICommodity";
import { Metadata } from "next"; 
import CommodityDetailsMain from "../../components/commodityDetails/commodityDetailsMain";
type PageProps = {  
  params: Promise<{ code: string }>;
};
export const revalidate = 60;
 
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { code } =await params;
  const commodity: ICommodity | undefined = await getCommodityDataById(code);
  if (!commodity) {
    return {
      title: "محصول پیدا نشد",
      description: "این محصول در دسترس نیست.",
    };
  }
  return {
    title: commodity.title ?? "محصولات شرکت گروه خودرو سازی مایان",
    description: " شرکت مایان تولید کننده خودرو : " + commodity.title,
    keywords: ["شرکت مایان ", "محصولات شرکت مایان ", commodity.title],
  };
}
export default async function Page({ params }: PageProps) {
  const { code } = await params;
  return (
    <>
      <CommodityDetailsMain code={code} />;
    </>
  );
}
