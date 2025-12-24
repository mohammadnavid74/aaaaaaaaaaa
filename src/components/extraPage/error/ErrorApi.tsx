"use client";
import { Image } from "@heroui/image";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
export interface Iprops {
  status: number;
}
const ErrorApi = ({ status }: Iprops) => {
  return status === 404 ? (
    <div className="w-full backdrop-blur-lg h-screen fixed z-[1001] bg-stone-200/50 dark:bg-black/50  rounded-none   flex justify-center items-center">
      <div className="animate-slide-down-more  gap-5 w-full h-full fixed z-50 flex flex-col  justify-center items-center  ">
        <Image width={400} height={400} src="/error.webp" alt="error"></Image>
        <Link
          className="flex gap-2 bg-white p-2 rounded-lg"
          href={"/"}
          dir="rtl"
          color="danger"
        >
          <Icon
            className=" text-responsiveH4 md:text-responsiveH3 "
            icon="mdi:home"
          />
          <p>بازگشت به خانه</p>
        </Link>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ErrorApi;
