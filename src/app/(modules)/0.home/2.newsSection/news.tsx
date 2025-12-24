import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Button } from "@heroui/button";
import { NewsSiteSectionDetailWithoutIdDto } from "@/types/dtos/home/NewsSiteSectionDetailWithoutIdDto";
import { getSafeAltText, getSafeThumbnailImageUrl } from "@/lib/utils/imageHelper";
interface props {
  newsList: NewsSiteSectionDetailWithoutIdDto[];
}
const News = ({ newsList }: props) => {
  return (
    <div className="relative my-4 sm:my-8 w-full">
      <div
        dir="rtl"
        className="border-t-1 border-b-1 border-danger flex justify-between items-center "
      >
        <div className="px-2 flex gap-2 justify-center items-center">
          <Icon
            className="text-gray-500 text-responsiveH2"
            icon={"emojione-monotone:newspaper"}
          ></Icon>
          <h4 className=" text-responsiveH4 md:text-responsiveH3 ">
            آخرین اخبار
          </h4>
        </div>
        {newsList.length !== 0 && (
          <div>
            <div className=" h-full">
              <Link
                href="/news"
                color="foreground"
                size="md"
                className=" animate-left-right mx-5  "
              >
                <p className=" dark:text-white   text-black hover:!text-danger text-responsiveH5 md:text-responsiveH4">
                  همه اخبار
                </p>
                <Icon
                  className="text-gray-500 text-lg font-bold sm:text-2xl "
                  icon={"solar:arrow-left-broken"}
                />
              </Link>
            </div>
          </div>
        )}
      </div>
      <ScrollShadow
        className="relative   mt-5 w-full flex px-5 justify-center items-center "
        size={50}
        dir="rtl"
        orientation="horizontal"
        visibility="both"
      >
        {/* <ArrowScroll></ArrowScroll> */}

        <div className="flex">
          {newsList &&
            newsList.map((item, i) => {
              return (
                <div
                  key={i}
                  className="pl-3 pr-0  w-fit flex-none grid place-items-center h-fit    "
                >
                  <div
                    dir="rtl"
                    className="  hover:bg-black hover:!text-white !text-black dark:hover:bg-white/10  dark:!text-white embla__slide m-3 max-w-[300px] flex flex-col justify-center items-center p-3 pb-0 border border-black dark:border-white border-opacity-60 rounded-lg "
                  >
                    <div className="w-fit">
                    <Image
                        className="h-[100px] w-[180px] md:h-[176px] md:w-[300px] "
                        // src={
                        //   environment.gatewayUrl +
                        //   `/FileManager/${item.pictureInfo.pictureInfo.pictureId}`
                        // }
                        //src="/banner21.webp"
                        src={getSafeThumbnailImageUrl(item.pictureInfo!)}
                        alt={getSafeAltText(item.pictureInfo!)}
                      ></Image>
                    </div>
                    <div className="w-fit py-2 sm:py-5">
                      <div color="warning" className=" h-6  ">
                        <h5 className="leading-[1.5] text-xs sm:text-responsiveH6">
                          {item.title}
                        </h5>
                      </div>
                    </div>
                    <div className="border-t-1 border-danger flex justify-between items-center w-full py-1">
                      <div>
                        <time className="text-responsiveP">
                          {item.publishedDate}
                        </time>
                      </div>
                      <div className="flex  justify-center items-center ">
                        <Button className="my-1  h-5 sm:h-auto" size="sm">
                          <Link
                            className="text-black dark:text-white"
                            color="foreground"
                            href={`/news/details/${item.code}`}
                            aria-label="جزییات اخبار گروه مایان"
                          >
                            <p className="text-responsiveP">جزئیات...</p>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {newsList.length !== 0 ? (
            <div className=" w-full flex justify-center items-center ">
              <Link
                href="/news"
                color="foreground"
                size="md"
                className="w-fit flex flex-col justify-center items-center  "
              >
                <p className="w-[180px] text-sm sm:text-lg dark:text-white text-center    text-black hover:!text-danger">
                  همه اخبار
                </p>
                <Icon
                  className="text-gray-500 text-lg sm:text-3xl hover:text-danger  font-bold "
                  icon={"solar:arrow-left-broken"}
                />
              </Link>
            </div>
          ) : (
            <div className="p-5  rounded-md w-full  flex flex-col items-center justify-center">
              <div className="w-fit flex flex-col justify-center items-center  dark:bg-background-dark bg-background-light     p-5 rounded-lg gap-4">
                <Icon
                  className="text-warning"
                  fontSize={40}
                  icon={"mingcute:warning-line"}
                ></Icon>
                <p className="text-danger ">
                  در حال حاضر اطلاعاتی وجود ندارد !
                </p>
              </div>
            </div>
          )}
        </div>
      </ScrollShadow>
    </div>
  );
};
export default News;
