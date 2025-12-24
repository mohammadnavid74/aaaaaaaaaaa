"use client";
import useEmblaCarousel from "embla-carousel-react";
import "./slider.css";
import { Button, Link } from "@heroui/react";
import { useCallback, useEffect, useState } from "react";
import { SafeImage } from "../../../../components/ui/SafeImage";
import { GallerySiteSectionItemWithoutIdDto } from "@/types/dtos/home/GallerySiteSectionItemWithoutIdDto";
interface props {
  sliderList: GallerySiteSectionItemWithoutIdDto[];
}

const GallerySiteSectionSlider = ({ sliderList }: props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    []
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const handle = setTimeout(() => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }, 300);

    return () => clearTimeout(handle);
  }, [emblaApi, sliderList.length]);

  return (
    <div className="embla my-2 mt-4 sm:my-8 sm:mt-16 w-full " dir="ltr">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {/* <div className="relative w-full pr-[0.5rem] pl-[1.5rem]  flex-none  ">
            <div className="rounded-lg flex justify-center items-center">
              <video
                src="/film2.webm"
                autoPlay
                loop
                muted
                width={1440}
                height={700}
                className="rounded-lg"
              ></video>
            </div>
          </div> */}
          {sliderList &&
            sliderList.map((item, i) => (
              <div
                key={i}
                className="relative w-full pr-[0.5rem] pl-[1.5rem]  flex-none  "
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className=" w-full flex justify-center items-center">
                  <SafeImage
                    pictureInfo={item.pictureInfo!}
                    width={1440}
                    height={700}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div
                  className={`${
                    hoveredIndex === i ? "" : "  animate-slide-up-hide "
                  } animate-slide-down-more md:flex hidden flex-col justify-center items-center absolute top-[-10px] right-[10%] z-20`}
                >
                  <div className="w-1 h-52 bg-black "></div>
                  <Button
                    className="hover:animate-ping bg-opacity-30"
                    color="warning"
                    aria-label="more details about commodity"
                  >
                    <Link className="text-black" href={item.link ?? ""}>
                      اطلاعات بیشتر
                    </Link>
                  </Button>
                </div>

                <div
                  className={`${
                    hoveredIndex === i ? "" : "  animate-slide-up-hide "
                  } animate-slide-down-more md:flex hidden flex-col justify-center items-center absolute top-[-10px] right-[10%] z-20`}
                >
                  <div className="w-1 h-52 bg-black "></div>
                  <Button
                    className="hover:animate-ping bg-opacity-30"
                    color="warning"
                    aria-label="more details about commodity"
                  >
                    <Link className="text-black" href={item.link ?? ""}>
                      اطلاعات بیشتر
                    </Link>
                  </Button>
                </div>

                {/* <div
                  className={`${
                    hoveredIndex === i
                      ? "animate-left-right"
                      : "md:animate-none animate-left-right "
                  }  bg-black/80 rounded-md  md:rounded-ss-3xl md:rounded-ee-3xl p-1 sm:p-3   flex  justify-center items-center absolute bottom-[10%] left-[15%] md:bottom-[5%] md:left-[5%] z-20`}
                >
                  <Icon
                    className="text-gray-500 text-2xl font-bold "
                    icon={"solar:arrow-left-broken"}
                  />
                  <Link
                    className="!text-white  text-responsiveP "
                    href="/commodity"
                  >
                    همه محصولات
                  </Link>
                </div> */}
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            aria-label="scroll to slide"
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 md:w-4 h-2 md:h-4 rounded-full transition-colors duration-300 ${
              index === selectedIndex ? "bg-yellow-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySiteSectionSlider;
