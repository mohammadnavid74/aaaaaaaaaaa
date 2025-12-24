import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "@heroui/link";

const CommodityGroupMainPage = () => {
  return (
    <div className="w-full">
      <div
        dir="rtl"
        className="border-t-1 border-b-1  border-danger flex justify-between items-center"
      >
        <div className="px-2 flex gap-2 justify-center items-center">
          <Icon
            className="text-gray-500 text-responsiveH2"
            icon={"bi:truck-flatbed"}
          ></Icon>
          <h4 className="text-responsiveH3 ">محصولات</h4>
        </div>
        <div>
          <div className=" h-full">
            <Link
              href="/commodity"
              color="foreground"
              size="md"
              className=" animate-left-right mx-5  "
            >
              <p className=" dark:text-white   text-black hover:!text-danger text-responsiveH5 md:text-responsiveH4">
                همه محصولات
              </p>
              <Icon
                className="text-gray-500 text-lg font-bold sm:text-2xl "
                icon={"solar:arrow-left-broken"}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className=" grid-cols-2 md:flex-row justify-around items-center my-10 gap-10 hidden sm:grid px-5  ">
        <div className="flex flex-col justify-between  p-5 rounded-xl  bg-foreground-50 h-full items-center">
          <video
            className="rounded-xl"
            autoPlay
            loop
            muted
            src="/dima.mp4"
          ></video>
          <div className="flex justify-between items-end w-full">
            <Image
              src="/dima.png"
              alt="logo of dima"
              width={100}
              height={0}
            ></Image>
            <Button
              color="danger"
              variant="ghost"
              className="text-black dark:text-white"
              endContent={
                <Icon fontSize={20} icon={"solar:arrow-right-broken"}></Icon>
              }
            >
              مشاهده محصولات دیما
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between  p-5 rounded-xl  bg-foreground-50 h-full items-center">
          <video
            className="rounded-xl"
            autoPlay
            loop
            muted
            src="/fuso3.mp4"
          ></video>
          <div className="flex justify-between items-end w-full">
            <Image
              src="/fuso.png"
              alt="logo of fuso"
              width={100}
              height={0}
            ></Image>
            <Button
              color="danger"
              variant="ghost"
              className="text-black dark:text-white"
              endContent={
                <Icon fontSize={20} icon={"solar:arrow-right-broken"}></Icon>
              }
            >
              مشاهده محصولات فوسو
            </Button>
          </div>
        </div>
      </div>
      <div className=" grid-cols-1 md:flex-row justify-around items-center my-5 gap-5 grid sm:hidden  px-2">
        <div className="flex flex-col justify-between  p-2 rounded-xl  bg-foreground-50 h-full items-center">
          <video
            className="rounded-xl"
            autoPlay
            loop
            muted
            src="/dima.mp4"
          ></video>
          <div className="flex justify-between items-end w-full h-[70px]">
            <Image
              src="/dima.png"
              alt="logo of dima"
              width={70}
              height={0}
            ></Image>
            <Button
              size="sm"
              color="danger"
              variant="ghost"
              className="p-2 text-black dark:text-white !text-responsiveP"
              endContent={
                <Icon fontSize={20} icon={"solar:arrow-right-broken"}></Icon>
              }
            >
               محصولات دیما
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between  p-2 rounded-xl  bg-foreground-50 h-full items-center">
          <video
            className="rounded-xl"
            autoPlay
            loop
            muted
            src="/fuso3.mp4"
          ></video>
          <div className="flex justify-between items-end w-full">
            <Image
              src="/fuso.png"
              alt="logo of fuso"
              width={70}
              height={0}
            ></Image>
            <Button
              size="sm"
              color="danger"
              variant="ghost"
              className="p-2 text-black dark:text-white !text-responsiveP"
              endContent={
                <Icon fontSize={20} icon={"solar:arrow-right-broken"}></Icon>
              }
            >
               محصولات فوسو
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommodityGroupMainPage;
