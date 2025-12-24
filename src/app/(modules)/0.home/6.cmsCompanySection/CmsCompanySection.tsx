import { Link } from "@heroui/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { CMSCompanySummaryDto } from "@/types/dtos/cmsCompany/CmsCompanyDataDto";

interface Props {
  cmsCompanies: CMSCompanySummaryDto[];
}

const CmsCompanySection = ({ cmsCompanies }: Props) => {
  return (
    <div className="w-full mt-5">
      <div
        dir="rtl"
        className="w-full  border-t-1  border-b-1  border-danger flex justify-between items-center"
      >
        <div className="px-2 flex gap-2 justify-center items-center">
          <Icon
            className="text-gray-500 text-responsiveH2"
            icon={"mdi:face-agent"}
          ></Icon>
          <h4 className="  text-responsiveH4 md:text-responsiveH3  ">
            نمایندگی ها
          </h4>
        </div>
        <div>
          <div className=" h-full">
            <Link
              href="/agents"
              color="foreground"
              size="md"
              className=" animate-left-right mx-5  hover:text-danger"
            >
              <p className="hover:!text-danger dark:text-white text-black text-responsiveH5 md:text-responsiveH4">
                مشاهده همه نمایندگی ها
              </p>
              <Icon
                className="text-gray-500 text-lg sm:text-2xl font-bold "
                icon={"solar:arrow-left-broken"}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex lg:flex-row gap-5 flex-col  justify-between items-center mt-20">
      <div className=" flex justify-center items-center">
        <Image
          width={500}
          height={600}
          className="hidden  rounded-xl lg:block  "
          src="/agent.webp"
          blurDataURL="/agent-sm.webp"
          placeholder="blur"
          alt="شعب و نمایندگی های گروه مایان"
          unoptimized
        ></Image>
        <Image
          width={580}
          height={200}
          className="block lg:hidden p-2 rounded-xl"
          src="/agent2.webp"
          alt="شعب و نمایندگی های گروه مایان"
          placeholder="blur"
          blurDataURL="/agent2-sm.webp"
          unoptimized
        ></Image>
      </div>
      <ScrollShadow
        className="max-w-none lg:max-w-[600px] py-5 !w-full h-[400px] md:h-[575px] "
        size={10}
        dir="ltr"
        orientation="vertical"
        visibility="both"
      >
        <div className="mx-2 md:mx-5 flex flex-col gap-5 justify-center items-center  ">
          {cmsCompanies &&
            cmsCompanies.map((item, index) => (
              <div
                key={index}
                className="w-full  cursor-default dark:border-white/50 border-danger border dark:hover:bg-background-dark hover:bg-background-light flex  gap-5 md:gap-0 flex-col md:flex-row justify-between h-fit items-center  relative  p-5   rounded-2xl  "
              >
                <div className="relative  flex flex-col justify-center items-center text-center">
                  <div>
                    <Image
                      className={`${
                        item.status === 4
                          ? "grayscale blur-sm"
                          : item.status === 3 || item.status === 2
                          ? "blur-sm"
                          : ""
                      } `}
                      width={200}
                      blurDataURL="/logo-sm.webp"
                      height={100}
                      src="/logo.webp"
                      alt={item.name}
                    />
                  </div>
                  <div
                    className={`absolute   z-50 
                 top-1/4 md:top-[20px] left-1/2 -translate-x-1/2 -translate-y-1/2  md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 -rotate-45
                 rounded-full  flex justify-center items-center py-1 w-[100px]  border-3 text-center
    ${
      item.status === 1
        ? "border border-green  hidden "
        : item.status === 2
        ? "border border-danger "
        : item.status === 3
        ? "border border-yellow-500 "
        : item.status === 4
        ? "border border-default-300 "
        : "border border-danger "
    }
  `}
                  >
                    <h5 className="text-md md:text-xl   font-extrabold">
                      {item.status === 1
                        ? "فعال"
                        : item.status === 2
                        ? "غیرفعال"
                        : item.status === 3
                        ? "تعلیق شده"
                        : item.status === 4
                        ? "لغو شده"
                        : ""}
                    </h5>
                  </div>
                  <div
                    dir="rtl"
                    className={`flex px-2 rounded-3xl w-full justify-around text-responsiveH4 ${
                      item.status === 1
                        ? "bg-green-600"
                        : item.status === 2
                        ? "bg-red-600"
                        : item.status === 3
                        ? "bg-yellow-500"
                        : item.status === 4
                        ? "bg-default-300"
                        : "bg-red-600"
                    }
  `}
                  >
                    <h3 className="">{item.province}</h3>
                    <span>-</span>
                    <h4>{item.city}</h4>
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-1/2 justify-between ">
                  <div>
                    <h3
                      dir="rtl"
                      className="bg-default-500/30 p-0.5 rounded-lg my-1 text-center text-responsiveH4"
                    >
                      {item.name}
                    </h3>
                  </div>
                  <div className="text-right flex w-full flex-col gap-1 ">
                    <div className="flex px-3 items-center justify-between border-b border-danger py-2 rounded-2xl">
                      <Icon
                        className="text-md"
                        icon={"material-symbols:call"}
                      />
                      <p className="text-responsiveH5">{item.tel}</p>
                    </div>
                    <Link
                      target="_blank"
                      href={`https://www.google.com/maps?q=${item?.latitude},${item?.longitude}`}
                      className="flex cursor-pointer px-3 hover:bg-danger items-center justify-between border-b border-danger/100 py-2 rounded-2xl"
                    >
                      <Icon className="text-md" icon={"ci:building-04"} />

                      <p className="text-responsiveH5"> مسیریابی</p>
                    </Link>
                    <Link
                      target="_blank"
                      href={`/agents?code=${item.code}`}
                      className="flex cursor-pointer px-3 hover:bg-danger items-center justify-between border-b border-danger/100 py-2 rounded-2xl"
                    >
                      <Icon
                        className="text-md"
                        icon={"material-symbols:info-outline"}
                      />
                      <p className="text-responsiveH5">نمایش جزییات</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </ScrollShadow>
    </div>
      {/* <AgentsList></AgentsList> */}
    </div>
  );
};

export default CmsCompanySection;
