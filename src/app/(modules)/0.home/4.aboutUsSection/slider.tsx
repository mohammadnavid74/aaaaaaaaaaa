"use client";
import { Image } from "@heroui/image";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import "./slider.css";
import { useState } from "react";
import { CustomerItemWithoutIdDto } from "@/types/dtos/home/CustomerItemWithoutIdDto";
import { getSafeAltText, getSafeImageUrl } from "@/lib/utils/imageHelper";
interface props {
  coustomerList: CustomerItemWithoutIdDto[]|null;
}
const SliderBrand = ({ coustomerList }: props) => {
  const [grab, setGrab] = useState<boolean>(false);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    AutoScroll({
      speed: 1,
      startDelay: 1000,
      direction: "forward",
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  ]);
  return (
    <div className="embla mt-8 sm:mt-16 " dir="ltr">
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
          {coustomerList != null &&
            coustomerList.map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-1/3 sm:w-1/4 lg:w-1/6 min-w-0 pl-[2rem] flex-none justify-items-center  m-auto items-center"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      width={85}
                      src={getSafeImageUrl(item.pictureInfo)}
                      alt={getSafeAltText(item.pictureInfo)}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SliderBrand;
