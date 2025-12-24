import ExtraPage from "@/components/extraPage/extraPage";
import { getCommodityDataById } from "@/lib/api/services/commodity.service";
import { ICommodity } from "@/types/dtos/commodity/ICommodity";
import { Metadata } from "next";
import MainCommodity from "../../components/MainCommodity";

type PageProps = {
  params: Promise<{ code: string }>;
};

export const revalidate = 60;
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } =await params;
  const commodity: ICommodity = await getCommodityDataById(code);

  if (!commodity) {
    return {
      title: "محصول پیدا نشد",
      description: "این محصول در دسترس نیست.",
    };
  }

  return {
    title: "دسته بندی محصولات " + commodity.title,
    description: "شرکت مایان تولید کننده خودرو های: " + commodity.title,
    keywords: ["شرکت مایان", "محصولات شرکت مایان"].concat(
      commodity.children.map((item) => item.title)
    ),
  };
}

const Page = async ({ params }: PageProps) => {
  const { code } =await params;

  try {
    const commodityDetails = await getCommodityDataById(code);

    if (!commodityDetails?.title) {
      return <ExtraPage status={404} />;
    }

    return (
      <MainCommodity
        commodity={null}
        commodityDetails={commodityDetails}
        code={code}
      />
    );
  } catch {
    return <ExtraPage status={404} />;
  }
};

export default Page;
