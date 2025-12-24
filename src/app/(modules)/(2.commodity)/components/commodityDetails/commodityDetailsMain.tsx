import FooterSection from "@/components/footer/Footer";
import { Icon } from "@iconify/react/dist/iconify.js";
import CommodityDetails from "./CommodityDetails";
import { getCommodityDataById } from "@/lib/api/services/commodity.service";
import ProductPage from "../small slider-product/subProduct";
import { log } from "console";
import { ICommodity } from "@/types/dtos/commodity/ICommodity";
interface props {
  code: string;
}
const CommodityDetailsMain = async ({ code }: props) => {
  const commodityDataChildrenById: ICommodity = await getCommodityDataById(
    code
  );
  log(commodityDataChildrenById);
  if (commodityDataChildrenById?.children.length === 0) {
    return (
      <div className="my-10 w-full max-w-[1440px] mx-auto  flex flex-col justify-center items-center">
        <div
          dir="rtl"
          className="w-full border-t-1 border-b-1  border-danger flex justify-between items-center"
        >
          <div className="px-2 flex gap-2 justify-center items-center">
            <Icon
              className=" text-4xl text-gray-500"
              icon={"icon-park-solid:commodity"}
            ></Icon>
            <p className="text-responsiveH4">{commodityDataChildrenById.title}</p>
          </div>
        </div>
        <CommodityDetails
          commodityDataChildrenById={commodityDataChildrenById}
        ></CommodityDetails>
        <ProductPage
          commodityDataChildrenById={commodityDataChildrenById}
        ></ProductPage>
        <FooterSection></FooterSection>
      </div>
    );
  }
  return <>ss</>;
};

export default CommodityDetailsMain;
