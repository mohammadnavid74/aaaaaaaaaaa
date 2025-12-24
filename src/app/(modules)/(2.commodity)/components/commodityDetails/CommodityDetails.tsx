import { Image } from "@heroui/image";
import CommodityAccordion from "./CommodityAccordion";
import { ICommodity } from "@/types/dtos/commodity/ICommodity";

export interface props {
  commodityDataChildrenById: ICommodity;
}
const CommodityDetails = ({ commodityDataChildrenById }: props) => {
  return (
    <div className="relative flex justify-center items-center ">
      <div className="w-full flex justify-center items-center max-w-[1440px] ">
        <div className="relative flex flex-col justify-start w-full m-5 items-center h-full rounded-lg">
          {commodityDataChildrenById.props.map((data) => {
            if (data.title === "بنر") {
              return (
                <div className="relative " key={data.title}>
                  <Image
                    classNames={{ wrapper: "" }}
                    className="max-w-[1440px] h-auto w-full xl:w-auto xl:h-full top-0    "
                    // src={
                    //   environment.gatewayUrl + `/filemanager/${data.value}`
                    // }
                    src="/banner2.webp"
                    alt={data.title}
                  ></Image>
                  <div className="absolute top-1/4 right-5 animate-slide-down-more z-10">
                    <p className="text-white text-responsivePsm md:text-responsiveH4">
                      {commodityDataChildrenById.title}
                    </p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}

          <div className="border border-danger my-3 md:absolute w-full  left-2 top-2 z-20 bg-white/10  md:bg-black/70 md:flex flex-col hidden  p-2 pt-0 lg:p-4 lg:pt-0 rounded-lg md:w-2/5">
            <div
              dir="rtl"
              className="border-b-1 border-danger flex justify-between items-center my-3"
            >
              <div className="flex justify-between w-full mb-2  ">
                <h4 className="px-5 text-white text-responsiveH4 md:text-responsiveH4">
                  مشخصات فنی
                </h4>
              </div>
            </div>
            <CommodityAccordion
              data={commodityDataChildrenById.props}
            ></CommodityAccordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommodityDetails;
