import Counter from "./counter";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { CustomerItemWithoutIdDto } from "@/types/dtos/home/CustomerItemWithoutIdDto";
import SliderBrand from "./slider";
interface props {
  customers: CustomerItemWithoutIdDto[] | null;
}
const AboutUs = ({ customers }: props) => {
  return (
    <>
      {customers != null &&
        customers?.map((item, index) => (
          <div className="hidden" key={index}>
            <figure>
              <Image
                height={10}
                width={10}
                alt={item.brand}
                src="/logo/aidin.webp"
              ></Image>
              <figcaption>
                همکاران گروه مایان :<p>{item.brand}</p>
              </figcaption>
            </figure>
          </div>
        ))}
      <div className="w-full">
        <div
          dir="rtl"
          className="border-t-1 border-b-1  border-danger flex justify-between items-center"
        >
          <div className="px-2 flex gap-2 justify-center items-center">
            <Icon
              className="text-gray-500 text-responsiveH2"
              icon={"mdi:about-circle-outline"}
            ></Icon>
            <h4 className="text-responsiveH3 ">درباره مایان</h4>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row justify-around items-center my-10 ">
          <div className="mx-0 xsm:mx-2">
            <Image
              placeholder="blur"
              blurDataURL="/A_2-sm.webp"
              className="rounded-none xsm:rounded-xl"
              height={600}
              width={387}
              src="/A_2.gif"
              alt="درباره گروه مایان"
              unoptimized
            ></Image>
          </div>
          <div className="relative flex flex-col justify-center items-center mx-5">
            <div className="pt-5">
              <Image
                alt="درباره مایان"
                height={500}
                width={500}
                src="/logo.webp"
              ></Image>
            </div>
            <div className="text-lg sm:text-3xl my-2 sm:my-5">
              <h2>گروه خودروسازی مایان</h2>
            </div>
            <div className="flex justify-center text-responsiveH4   items-center my-2 sm:my-5">
              <p className="  leading-8  text-center">
                افزایش سهم بازار در رده‌های مختلف محصولات تجاری توسعه مشارکت با
                شرکای معتبر داخلی و جهانی در کسب و کار خودرو های تجاری
              </p>
            </div>

            <Counter></Counter>
          </div>
        </div>
        <SliderBrand coustomerList={customers}></SliderBrand>
      </div>
    </>
  );
};

export default AboutUs;
