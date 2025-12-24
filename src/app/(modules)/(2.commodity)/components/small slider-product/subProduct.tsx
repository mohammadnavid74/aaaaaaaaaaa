import { Icon } from "@iconify/react/dist/iconify.js";
import SmallSliderProduct from "./smallSliderProduct";
import SafeTag from "@/components/extraPage/tools/SafeTag";
import Link from "next/link";
import CommodityAccordion from "../commodityDetails/CommodityAccordion";
import { ICommodity } from "@/types/dtos/commodity/ICommodity";

interface props {
  commodityDataChildrenById: ICommodity;
}
export default function ProductPage({ commodityDataChildrenById }: props) {
  return (
    <div className={`max-w-[1440px]  animate-appearance-in w-full `}>
      <div
        dir="rtl"
        className=" border-t-1 border-b-1  border-danger flex justify-between items-center  my-3"
      >
        <div className="flex gap-2 justify-center items-center">
          <Icon
            className="text-default-500 mr-5 text-4xl"
            icon={"arcticons:truck"}
          ></Icon>
          <h4 className="px-5  text-responsiveH4 md:text-responsiveH3  md:text-responsiveH4 font-bold">
            {commodityDataChildrenById.title}
          </h4>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row flex-1 p-0 sm:py-5 sm:pb-8 gap-6 h-full">
        <SmallSliderProduct
          commodityDataChildrenById={commodityDataChildrenById}
        ></SmallSliderProduct>

        <div className="flex-1 flex flex-col justify-around  items-center bg-white/50 dark:bg-white/10 p-6 rounded-2xl  ">
          <div className="w-full md:hidden flex flex-col   mb-5">
            <div>
              <h3 className="  text-responsiveH4 md:text-responsiveH3  w-full flex justify-center items-center  font-semibold text-danger border-b border-white/10 ">
                مشخصات
              </h3>
            </div>
            <div className="my-5">
              <CommodityAccordion
                data={commodityDataChildrenById.props}
              ></CommodityAccordion>
            </div>
          </div>
          <div className=" flex flex-col justify-between  items-center     w-full">
            <h3 className="bg-white p-1 rounded-md  text-responsiveH4 md:text-responsiveH3  w-full flex justify-center items-center  font-semibold text-danger border-b border-white/10 ">
              توضیحات
            </h3>

            <SafeTag
              data={commodityDataChildrenById.props
                .map(
                  (commodityDataChildrenById) =>
                    commodityDataChildrenById.title === "توضیحات" &&
                    commodityDataChildrenById.value
                )
                .filter((value) => value !== false)
                .join("")}
              className="direction-rtl text-responsiveH4 leading-7 md:leading-8 py-5 dark:text-white text-right"
              tag="p"
            ></SafeTag>
          </div>
          <div className="flex flex-col justify-center items-center w-full  rounded-2xl py-3 my-3 ">
            <div className=" text-responsiveH4 md:text-responsiveH3  w-full flex justify-center items-center  font-semibold text-danger border-b border-white/10 ">
                <h3 className="bg-white p-1 rounded-md  text-responsiveH4 md:text-responsiveH3  w-full flex justify-center items-center  font-semibold text-danger border-b border-white/10 ">
          فایل ها
            </h3>
            </div>
            <div className="flex justify-around w-full mt-5 ">
              <Link
                href={
                  commodityDataChildrenById.props.find(
                    (commodityDataChildrenById) =>
                      commodityDataChildrenById.propType === 3
                  )?.value ?? "#"
                }
                className={`${commodityDataChildrenById.props
                  .map((item) =>
                    item.propType === 3
                      ? " text-white !cursor-pointer "
                      : " cursor-not-allowed"
                  )
                  .filter(Boolean)
                  .join(
                    " "
                  )} text-danger flex flex-col justify-center items-center`}
              >
                <p className="text-center text-responsiveH5 text-black dark:text-white my-3">
                  بروشو محصول
                </p>
                <Icon
                  className={`${commodityDataChildrenById.props
                    .map((item) =>
                      item.propType === 3
                        ? "dark:md:text-white hover:!text-danger hover:animate-appearance-in text-danger md:text-black "
                        : " text-gray-500"
                    )
                    .filter(Boolean)
                    .join(" ")} text-4xl `}
                  icon={"bi:newspaper"}
                ></Icon>
              </Link>
              <Link
                href={
                  commodityDataChildrenById.props.find(
                    (commodityDataChildrenById) =>
                      commodityDataChildrenById.propType === 4
                  )?.value ?? "#"
                }
                className={`${commodityDataChildrenById.props
                  .map((item) =>
                    item.propType === 4
                      ? " text-white !cursor-pointer "
                      : " cursor-not-allowed"
                  )
                  .filter(Boolean)
                  .join(
                    " "
                  )} text-danger flex flex-col justify-center items-center`}
              >
                <p className="text-center text-responsiveH5 text-black dark:text-white my-3">
                  دفترچه راهنما
                </p>
                <Icon
                  className={`${commodityDataChildrenById.props
                    .map((item) =>
                      item.propType === 4
                        ? "dark:md:text-white hover:!text-danger hover:animate-appearance-in text-danger md:text-black "
                        : " text-gray-500"
                    )
                    .filter(Boolean)
                    .join(" ")} text-4xl `}
                  icon={"bi:book-half"}
                ></Icon>
              </Link>
              <Link
                href={
                  commodityDataChildrenById.props.find(
                    (commodityDataChildrenById) =>
                      commodityDataChildrenById.propType === 5
                  )?.value ?? "#"
                }
                className={`${commodityDataChildrenById.props
                  .map((item) =>
                    item.propType === 5
                      ? " text-white !cursor-pointer "
                      : " cursor-not-allowed"
                  )
                  .filter(Boolean)
                  .join(
                    " "
                  )} text-danger flex flex-col justify-center items-center`}
              >
                <p className="text-center text-responsiveH5 text-black dark:text-white my-3">
                  دفترچه گارانتی
                </p>
                <Icon
                  className={`${commodityDataChildrenById.props
                    .map((item) =>
                      item.propType === 5
                        ? "dark:md:text-white hover:!text-danger hover:animate-appearance-in text-danger md:text-black "
                        : " text-gray-500"
                    )
                    .filter(Boolean)
                    .join(" ")} text-4xl `}
                  icon={"solar:hand-money-outline"}
                ></Icon>
              </Link>
              <Link
                href={
                  commodityDataChildrenById.props.find(
                    (commodityDataChildrenById) =>
                      commodityDataChildrenById.propType === 7
                  )?.value ?? "#"
                }
                className={`${commodityDataChildrenById.props
                  .map((item) =>
                    item.propType === 7
                      ? " text-white !cursor-pointer "
                      : " cursor-not-allowed"
                  )
                  .filter(Boolean)
                  .join(
                    " "
                  )} text-danger flex flex-col justify-center items-center`}
              >
                <p className="text-center text-responsiveH5 text-black dark:text-white my-3">
                  کاتالوگ
                </p>
                <Icon
                  className={`${commodityDataChildrenById.props
                    .map((item) =>
                      item.propType === 7
                        ? "dark:md:text-white hover:!text-danger hover:animate-appearance-in text-danger md:text-black "
                        : " text-gray-500"
                    )
                    .filter(Boolean)
                    .join(" ")} text-4xl `}
                  icon={"solar:book-2-broken"}
                ></Icon>
              </Link>
            </div>
          </div>

          <div className="text-right flex w-full flex-col">
            <div className="text-danger hover:text-white flex cursor-pointer px-3 rounded-lg   hover:bg-danger  items-center justify-between bg-default-500/30 py-2 my-2">
              <Icon
                className="text-4xl "
                icon={"solar:bookmark-circle-linear"}
              ></Icon>
              <p className="text-responsiveH4 !text-white ">
                گواهینامه ها و تقدیر ها
              </p>
            </div>
            <div className="text-danger hover:text-white flex cursor-pointer px-3 rounded-lg   hover:bg-danger  items-center justify-between bg-default-500/30 py-2 my-2">
              <Icon className="text-4xl  " icon={"ci:building-04"}></Icon>
              <p className="text-responsiveH4 !text-white ">شرکت های تابعه</p>
            </div>
            <div className="text-danger hover:text-white flex cursor-pointer px-3 rounded-lg   hover:bg-danger  items-center justify-between bg-default-500/30 py-2 my-2 ">
              <Icon className="text-4xl " icon={"solar:cpu-bolt-broken"}></Icon>
              <p className="text-responsiveH4 !text-white ">خط تولید</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
