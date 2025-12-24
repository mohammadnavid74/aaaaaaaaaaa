import { Icon } from "@iconify/react/dist/iconify.js";
import FooterSection from "@/components/footer/Footer";
import { ICommodity } from "@/types/dtos/commodity/ICommodity";
import ParentProducts from "./ParentProducts";
import ExtraPage from "@/components/extraPage/extraPage";
import { Link } from "@heroui/link";
interface props {
  code: string | null;
  commodity: ICommodity[] | null;
  commodityDetails: ICommodity | null;
}
const MainCommodity = async ({ code, commodity, commodityDetails }: props) => {
  if (code && commodityDetails) {
    return (
      <div className=" flex  justify-center items-center mt-8">
        <div className="max-w-[1440px] ">
          <div
            dir="rtl"
            className="w-full border-t-1 border-b-1  border-danger flex justify-between items-center"
          >
            <div className="px-2 flex gap-2 justify-center items-center">
              <Icon
                className=" text-4xl text-gray-500"
                icon={"icon-park-solid:commodity"}
              ></Icon>
              <Link color="danger" href="/commodity">
              <p className=" text-responsiveH4 md:text-responsiveH3 ">
                محصولات
              </p>
              </Link>
              /
              <p className=" text-responsiveH4 ">
                {commodityDetails.title}
              </p>
            </div>
          </div>

          <ParentProducts
            commodityDataChildren={commodityDetails.children}
          ></ParentProducts>
          <FooterSection></FooterSection>
        </div>
      </div>
    );
  } else {
    if (!commodity) {
      return <ExtraPage status={404}></ExtraPage>;
    }
    return (
      <div className=" flex  justify-center items-center mt-8">
        <div className="max-w-[1440px] ">
          <div
            dir="rtl"
            className="w-full border-t-1 border-b-1  border-danger flex justify-between items-center"
          >
            <div className="px-2 flex gap-2 justify-center items-center">
              <Icon
                className=" text-4xl text-gray-500"
                icon={"icon-park-solid:commodity"}
              ></Icon>
              <p className=" text-responsiveH4 md:text-responsiveH3 ">
                محصولات
              </p>
            </div>
          </div>

          <ParentProducts commodityDataChildren={commodity}></ParentProducts>
          <FooterSection></FooterSection>
        </div>
      </div>
    );
  }
};

export default MainCommodity;
