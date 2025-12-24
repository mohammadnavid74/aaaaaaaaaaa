"use client";
import { Image } from "@heroui/react";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import "./awards.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
// import DOMPurify from "dompurify";
import { AwardSiteSectionWithoutIdDto } from "@/types/dtos/home/AwardSiteSectionWithoutIdDto";
interface props {
  awardList: AwardSiteSectionWithoutIdDto[];
}
const Awards = ({ awardList }: props) => {
  // const [hovered, setHovered] = useState<null | number>(null);
  // const safeTag = (htmlString: string) => {
  //   return DOMPurify.sanitize(htmlString);
  // };
  const [grab, setGrab] = useState(false);
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: true },
    [
      AutoScroll({
        speed: 1,
        startDelay: 1000,
        direction: "forward",
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );
  return (
    <div className="w-full mt-20">
      <div
        dir="rtl"
        className="border-t-1 border-b-1  border-danger flex justify-between items-center"
      >
        <div className="px-2 flex gap-2 justify-center items-center">
          <Icon
            className=" text-4xl text-gray-500"
            icon={"hugeicons:award-04"}
          ></Icon>
          <h4 className=" text-responsiveH4 md:text-responsiveH3  ">جوایز</h4>
        </div>
      </div>

      <div className="embla my-10 " dir="ltr">
        <div className="overflow-hidden" ref={emblaRef}>
          <div
            onMouseDown={() => {
              setGrab(true);
            }}
            onMouseUp={() => {
              setGrab(false);
            }}
            className={`embla__container ${
              grab ? "cursor-grabbing" : "cursor-grab"
            } `}
          >
            {awardList.length !== 0 ? (
              awardList.map((item, i) => {
                return (
                  <div
                    key={i}
                    className=" w-1/3 sm:w-1/4 lg:w-1/5 min-w-0 pl-[2rem] flex-none items-center "
                  >
                    <div
                      // onMouseEnter={() => setHovered(i)}
                      // onMouseLeave={() => setHovered(null)}
                      className="flex flex-col justify-center items-center gap-3"
                    >
                      <div className="flex rounded-full h-[85px] w-[85px]  justify-center items-center">
                        <Image
                          width={85}
                          // src={
                          //   environment.gatewayUrl +
                          //   `/filemanager/${item?.pictureInfo.pictureInfo.pictureId}`
                          // }
                          // navid
                          src="/logo/aidin.webp"
                          alt={item.pictureInfo?.title??'title'}
                        />
                      </div>
                      {/* <p
                        className={` ${
                          hovered === i ? "animate-appearance-in" : " "
                        } text-center w-[120px] leading-[1.5]  text-responsiveP 
                        `}
                        dangerouslySetInnerHTML={{
                          __html: safeTag(item.summary),
                        }}
                      ></p> */}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-5  rounded-md w-full  flex flex-col items-center justify-center">
                <div className="w-fit flex flex-col justify-center items-center  dark:bg-background-dark bg-background-light     p-5 rounded-lg gap-4">
                  <Icon
                    className="text-warning"
                    fontSize={40}
                    icon={"mingcute:warning-line"}
                  ></Icon>
                  <p className="text-danger ">
                    ! در حال حاضر اطلاعاتی وجود ندارد
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Awards;
