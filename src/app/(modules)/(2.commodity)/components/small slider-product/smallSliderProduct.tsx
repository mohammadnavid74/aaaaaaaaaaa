"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { ICommodity } from "@/core/interface/ICommodity";
import { Image, Link } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface props {
  commodityDataChildrenById: ICommodity;
}
const SmallSliderProduct = ({ commodityDataChildrenById }: props) => {
  const [imgSm, setImgSm] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const selectImg = (index: number) => {
    setImgSm(index);
    return index;
  };
  return (
    <div className=" flex flex-col justify-around items-center bg-white/50 dark:bg-white/10 rounded-2xl p-6 shadow-lg">
      <div className="overflow-hidden w-full max-w-lg" ref={emblaRef}>
        <div className="flex">
          {commodityDataChildrenById.props
            .filter((item) => item.propType === 1 && item.title !== "بنر")
            .map((img, i) => {
              return (
                <div
                  key={i}
                  className="rounded-large embla__slide flex-none w-full "
                >
                  <div className="relative w-full px-5  rounded-lg overflow-hidden">
                    <Image
                      // src={environment.gatewayUrl + `/filemanager/${img.value}`}
                      src="/banner2.webp"
                      alt={`Slide ${i + 1}`}
                      className={` ${
                        imgSm === i ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-4">
        {commodityDataChildrenById.props
          .filter((item) => item.propType === 1 && item.title !== "بنر")
          .map((img, i) => (
            <div
              key={i}
              className="relative  cursor-pointer !rounded-none  overflow-hidden shadow-lg  "
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
            >
              <Image
                onClick={() => selectImg(i)}
                // src={
                //   environment.gatewayUrl + `/filemanager/thumbnail/${img.value}`
                // }
                src="/banner2.webp"
                alt={`Thumbnail ${i + 1}`}
                className={`rounded-md h-6 sm:h-10  ${
                  imgSm === i ? "!opacity-100" : "!opacity-20"
                } `}
              />
            </div>
          ))}
      </div>
      <div
        dir="rtl"
        className="w-full border-t   border-danger flex justify-between items-center  my-3"
      ></div>
      <Link
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        color="foreground"
        href={
          commodityDataChildrenById.props.filter(
            (item) => item.propType === 6
          )[0]?.value || "#"
        }
        className="flex  flex-col justify-center  items-center"
      >
        <Icon
          className={"text-3xl animate-bounce text-default-500"}
          icon={"iconoir:view-360"}
        ></Icon>
        <Icon
          className={`${
            hovered
              ? "animate-ping text-danger"
              : "animate-none text-default-500"
          } text-5xl`}
          icon={"fontisto:truck"}
        ></Icon>

        {/* <p className="text-responsiveP2">نمای ۳۶۰ درجه</p> */}
      </Link>
    </div>
  );
};

export default SmallSliderProduct;
