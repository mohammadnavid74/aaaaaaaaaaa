/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
  Image,
  Link,
  Tooltip,
} from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CmsCompanyDataDto } from "@/types/dtos/cmsCompany/CmsCompanyDataDto";
import { getDetailCmsCompany } from "@/lib/api/services/cmsCompany.service";
interface MarkerProps {
  sharedValue: string;
  state: boolean;
}
export default function CmsCompanyDrawer({ sharedValue, state }: MarkerProps) {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const code1 = sharedValue || code || "0000";
  const [cmsCompanyDetails, setCmsCompanyDetails] =
    useState<CmsCompanyDataDto | null>(null);

  useEffect(() => {
    getDetailCmsCompany(code1);
  }, [code1]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (code1 !== "0000") {
      onOpen();
    }
  }, [code1, onOpen, sharedValue, state]);

  const servicesType = [
    "نامشخص",
    "فروش",
    "خدمات پس از فروش",
    "فروش - خدمات پس از فروش",
  ];
  return (
    <Drawer
      className=" bg-black/95  md:bg-black/85"
      hideCloseButton
      backdrop="transparent"
      classNames={{}}
      isOpen={isOpen}
      onOpenChange={() => {
        onOpenChange();
      }}
    >
      {!false ? (
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="absolute h- !bg-danger top-0 inset-x-0 z-50 flex flex-row gap-2 px-2 py-2 border-b border-default-200/50 justify-between bg-content1/50 backdrop-saturate-150 backdrop-blur-lg">
                <Tooltip content="بستن">
                  <Button
                    isIconOnly
                    className=" min-w-[40px] w-fit justify-center flex text-white"
                    size="md"
                    onPress={() => {
                      onClose();
                    }}
                    aria-label="بستن جزییات نقشه گروه مایان"
                  >
                    <Icon
                      className="text-danger"
                      fontSize={20}
                      icon={"material-symbols:close-rounded"}
                    ></Icon>
                  </Button>
                </Tooltip>
                <div className="w-full flex justify-start basis-0">
                  <Button
                    className="font-medium text-small text-default-500"
                    endContent={
                      <svg
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    }
                    size="md"
                    variant="flat"
                    aria-label={"شعبه گروه مایان : " + cmsCompanyDetails?.title}
                  >
                    <Link color="danger" className="text-white">
                      وب سایت نمایندگی
                    </Link>
                  </Button>
                </div>
              </DrawerHeader>
              <DrawerBody className="pt-16 " dir="rtl">
                <div className=" relative flex w-full justify-center items-center pt-4">
                  <Image
                    isBlurred
                    isZoomed
                    alt="Event image"
                    className=" aspect-square h-[200px] w-[320px]  lhover:scale-110"
                    src="./mayan.webp"
                  />
                  <div
                    className={`absolute   z-20 
                 top-[27%]  left-[15%]  xsm::top-[58px]  xsm:left-[80px] -translate-x-1/2 -translate-y-1/2 -rotate-45
                 rounded-full  flex justify-center items-center py-1 h-[40] w-[100px] border-3 text-center
    ${
      cmsCompanyDetails && cmsCompanyDetails.cmsCompanyStatus === 1
        ? "border border-white  bg-green-400 animate-pulse text-black  "
        : cmsCompanyDetails && cmsCompanyDetails.cmsCompanyStatus === 2
        ? "border border-danger bg-danger  animate-pulse text-red-300"
        : cmsCompanyDetails && cmsCompanyDetails.cmsCompanyStatus === 3
        ? "border border-yellow-500 bg-yellow-100 animate-pulse text-yellow-500"
        : cmsCompanyDetails && cmsCompanyDetails.cmsCompanyStatus === 4
        ? "border border-gray-400 bg-gray-200 animate-pulse text-danger"
        : "border border-danger bg-danger animate-pulse text-red-600"
    }
  `}
                  >
                    <p className=" text-xl   font-extrabold">
                      {cmsCompanyDetails &&
                      cmsCompanyDetails.cmsCompanyStatus === 1
                        ? "فعال"
                        : cmsCompanyDetails &&
                          cmsCompanyDetails.cmsCompanyStatus === 2
                        ? "غیرفعال"
                        : cmsCompanyDetails &&
                          cmsCompanyDetails.cmsCompanyStatus === 3
                        ? "تعلیق شده"
                        : cmsCompanyDetails &&
                          cmsCompanyDetails.cmsCompanyStatus === 4
                        ? "لغو شده"
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-4 text-white">
                  <h3 className="text-2xl font-bold leading-7">
                    {cmsCompanyDetails?.title}
                  </h3>
                  <p className="text-sm text-default-500">
                    {cmsCompanyDetails?.cmsCompanyAddress?.city.name}
                  </p>

                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex w-full justify-between">
                      <div className="flex  gap-3 items-center ">
                        <div className="flex-none border-1 border-default-200/50 rounded-small text-center  overflow-hidden">
                          <div className="text-sm bg-danger px-2 py-0.5 text-default-50">
                            کد نمایندگی
                          </div>
                          <div className=" flex items-center justify-center font-bold text-medium h-6 text-danger">
                            <span>{code1}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className=" flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11">
                          <svg
                            className="text-danger"
                            height="20"
                            viewBox="0 0 16 16"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              fill="none"
                              fillRule="evenodd"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            >
                              <path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854" />
                              <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                            </g>
                          </svg>
                        </div>
                        <div className="cursor-pointer flex flex-col gap-0.5">
                          <Link
                            isExternal
                            showAnchorIcon
                            anchorIcon={
                              <svg
                                className="group-hover:text-inherit text-default-400 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                fill="none"
                                height="16"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7 17 17 7M7 7h10v10" />
                              </svg>
                            }
                            className="group gap-x-0.5 text-medium text-foreground font-medium"
                            href={`https://www.google.com/maps?q=${cmsCompanyDetails?.cmsCompanyAddress.latitude},${cmsCompanyDetails?.cmsCompanyAddress.longitude}`}
                            rel="noreferrer noopener"
                          >
                            <p className="text-small text-danger ">مسیریابی</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-4 gap-3 items-start">
                      <div className="w-full flex justify-start items-center gap-5">
                        <div className="flex gap-2">
                          <Icon
                            className="text-2xl text-danger"
                            icon={"material-symbols:service-toolbox"}
                          ></Icon>
                          <p className="font-bold">خدمات : </p>
                        </div>
                        <p>
                          {
                            servicesType[
                              cmsCompanyDetails?.cmsCompanyStatus !== undefined
                                ? cmsCompanyDetails?.cmsCompanyStatus
                                : 0
                            ]
                          }
                        </p>
                      </div>
                      <div className="w-full flex justify-start items-center gap-5">
                        <div className="flex gap-2">
                          <Icon
                            className="text-2xl text-danger"
                            icon={"material-symbols:person-outline-rounded"}
                          ></Icon>
                          <p className="font-bold">مدیریت : </p>
                        </div>
                        <p>اقای اکبری صالحی</p>
                      </div>
                      <div className="w-full flex justify-start items-center border-b border-default-200"></div>

                      {/* <span className="text-medium font-medium">
                      درباره شرکت
                    </span>
                    <div className="text-medium text-default-500 flex flex-col gap-2">
                      <p>{listBranch[i].description1}</p>
                      <p>{listBranch[i].description2}</p>
                      <p>{listBranch[i].description3}</p>

                      <p className="mt-4">
                        <Link
                          className="text-default-700"
                          href={listBranch[i].linkWebsite}
                        >
                          {listBranch[i].name}
                        </Link>
                      </p>
                    </div> */}
                    </div>
                    <div className="flex flex-col justify-between relative ">
                      <div className="flex flex-col  my-3 gap-2">
                        <div className="flex gap-3  items-center">
                          <Icon
                            className="text-2xl text-danger"
                            icon={"material-symbols:deskphone-outline-sharp"}
                          ></Icon>
                          {<p>021-2222222 </p>}
                        </div>
                        <div className="flex gap-3 items-center">
                          <Icon
                            className="text-2xl text-danger"
                            icon={"material-symbols:phone-android-outline"}
                          ></Icon>

                          <p>0912-2222222</p>
                        </div>
                        <div className="flex gap-3 items-center">
                          <Icon
                            className="text-2xl text-danger"
                            icon={"material-symbols:alternate-email-rounded"}
                          ></Icon>

                          <p>jRt8I@example.com</p>
                        </div>
                        <div className="flex gap-3 items-center">
                          <Icon
                            className="text-2xl text-danger"
                            icon={"material-symbols:av-timer"}
                          ></Icon>
                          {/* <p>{(cmsCompanyDetails?.workingHours ?? "").length < 5 ? "ثبت نشده" : `${cmsCompanyDetails?.workingHours} ss`}</p> */}
                          <p>از ساعت 7 صبح تا 8 شب</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black bottom-0   absolute p-2 right-0 w-full flex justify-around items-center text-2xl ">
                    <div className=" flex flex-col justify-center items-center text-center text-danger  ">
                      {/* <Icon fontSize={30} className={cmsCompanyDetails?.performance === "A" ? "text-green-500" : cmsCompanyDetails?.performance === "B" ? "text-blue-500" : cmsCompanyDetails?.performance === "C" ? "text-yellow-500" : "text-red-500"} icon={`mdi:alpha-${cmsCompanyDetails?.performance.toLowerCase()}-box`}></Icon> */}
                      {/* این قسمت مربوط به عملکرد است که در DTO نیست NAvid */}
                      {/* <Icon
                        fontSize={30}
                        className={
                          true
                            ? "text-green-500"
                            : cmsCompanyDetails?.performance === "B"
                            ? "text-blue-500"
                            : cmsCompanyDetails?.performance === "C"
                            ? "text-yellow-500"
                            : "text-red-500"
                        }
                        icon={`mdi:alpha-a-box`}
                      ></Icon> */}

                      {/* <p className="text-sm">عملکرد</p> */}
                    </div>
                    <div className="cursor-pointer flex flex-col justify-center items-center text-center text-danger hover:border-b  hover:text-white">
                      <Icon
                        className="text-md"
                        icon={"ph:ranking-duotone"}
                      ></Icon>
                      {/* <p className="text-sm">تابلو رتبه</p> */}
                    </div>

                    <div className="cursor-pointer text-danger hover:border-b hover:text-white ">
                      <Icon icon={"basil:telegram-outline"}></Icon>
                    </div>
                    <div className="cursor-pointer text-danger hover:border-b hover:text-white">
                      <Icon icon={"basil:gmail-outline"}></Icon>
                    </div>
                  </div>
                </div>
              </DrawerBody>
              {/* <DrawerFooter className="flex flex-col gap-1">
              <Link
                className="text-default-400"
                href="mailto:hello@heroui.com"
                size="sm"
              >
                Contact the host
              </Link>
              <Link
                className="text-default-400"
                href="mailto:hello@heroui.com"
                size="sm"
              >
                Report event
              </Link>
            </DrawerFooter> */}
            </>
          )}
        </DrawerContent>
      ) : (
        <DrawerContent>
          <div className="h-full w-full flex items-center justify-center z-[1000]">
            <Image
              src="/logo3.webp"
              width={200}
              height={200}
              alt="A_1"
              className="animate-spinner-ease-spin"
            />
          </div>
        </DrawerContent>
      )}
    </Drawer>
  );
}

// : (
//   <ExtraPage status={404}></ExtraPage>
// )}
