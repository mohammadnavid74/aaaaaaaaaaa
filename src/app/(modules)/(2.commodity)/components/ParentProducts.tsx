import ExtraPage from "@/components/extraPage/extraPage";
import { ICommodity } from "@/types/dtos/commodity/ICommodity";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface Props {
  commodityDataChildren: ICommodity[] | undefined;
}
const ParentProducts = ({ commodityDataChildren }: Props) => {
  return (
    <div className="min-h-[calc(100vh-200px)] my-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.isArray(commodityDataChildren) &&
        commodityDataChildren.length !== 0 ? (
          commodityDataChildren.map((item) => (
            <div
              key={item.code}
              className="  w-full  flex-none grid place-items-center h-fit  my-3  "
            >
              <div
                dir="rtl"
                className="  hover:bg-black hover:!text-white !text-black dark:hover:bg-white/10  dark:!text-white embla__slide m-3 max-w-[300px] flex flex-col justify-center items-center p-3 pb-0 border border-black dark:border-white border-opacity-60 rounded-lg "
              >
                <div className="w-fit">
                  <Image
                    width={"300px"}
                    height={"176px"}
                    //navid
                    // src={
                    //   environment.gatewayUrl +
                    //   `/FileManager/${item.images[0]?.fileId}`
                    // }
                    src={"/banner2.webp"}
                    alt="news"
                  ></Image>
                </div>
                <div className="w-fit py-5">
                  <p color="warning">
                    <span className="leading-[1.5] text-responsiveH6">
                      {item?.title}
                    </span>
                  </p>
                </div>
                <div className="border-t-1 border-danger flex justify-between items-center w-full ">
                  <div>
                    <Button
                      href={
                        item.hasChildren
                          ? `/commodity/${item.code}`
                          : `/commodityDetail/${item.code}`
                      }
                      className="my-1 !min-h-0 !py-1 !px-0 w-[70px] min-w-0 h-auto"
                      size="md"
                      aria-label=" مشاهده بیشتر محصولات مایان"
                    >
                      <Link
                        className="h-full w-full flex justify-center items-center "
                        href={
                          item.hasChildren
                            ? `/commodity/${item.code}`
                            : `/commodityDetail/${item.code}`
                        }
                      >
                        <p
                          className={`text-responsiveH5 hover:animate-appearance-in  `}
                        >
                          {item.hasChildren ? "بیشتر..." : "جزئیات محصول"}
                        </p>
                      </Link>
                    </Button>
                  </div>
                  <div className="flex gap-2 justify-center items-center ">
                    {item.hasChildren ? (
                      <Icon
                        className="text-2xl text-danger "
                        icon={"carbon:container-services"}
                      ></Icon>
                    ) : (
                      <Icon
                        className="text-2xl text-danger "
                        icon={"mdi:about-circle-outline"}
                      ></Icon>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <ExtraPage status={0}></ExtraPage>
        )}
      </div>
    </div>
  );
};

export default ParentProducts;
