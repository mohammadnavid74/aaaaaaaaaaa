import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const FooterSection = () => {
  return (
    <div
      dir="rtl"
      className=" rounded-t-xl  flex max-w-[1440px] flex-col xl:flex-row gap-5  justify-between w-full  items-start p-5 bg-white/50 dark:bg-white/10 "
    >
      <div className="flex flex-col   mb-1 gap-2 w-full">
        <div className="border-b-1 border-danger">
          <h1 className="pb-2  text-responsiveH4 md:text-responsiveH3   ">
            ارتباط با ما
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row justify-between gap-2 items-start">
          <div className="flex  flex-col gap-4">
            <div>
              <div>
                <h5 className="my-2  text-responsiveH4  text-default-600">
                  آدرس دفتر مرکزی :
                </h5>
              </div>
              <div>
                <p className="text-responsiveH4 ">
                  کیلومتر ۱۲ جاده مخصوص کرج ، خیابان سپاه اسلام ، نبش خیابان
                  جلال ، پلاک ۳۹
                </p>
              </div>
            </div>
            <div>
              <div>
                <h5 className="my-2 text-responsiveH4  text-default-600">
                  آدرس کارخانه :
                </h5>
              </div>
              <div>
                <p className="text-responsiveH4 ">
                  اتوبان کرج – قزوین ، بعد از نیروگاه شهید رجائی ، شهرک صنعتی
                  کاسپین ، بلوار میرعماد ، خیابان صنعت ۲
                </p>
              </div>
            </div>
          </div>
          <div className="  flex flex-col gap-2 w-full">
            <div className=" flex border-b-1 border-gray-400 pb-1 justify-between w-full  items-center gap-2">
              <p className=" text-default-600">021-49004000</p>
              <Icon
                className="text-danger !text-2xl "
                icon={"mdi:phone"}
              ></Icon>
            </div>
            <div className=" flex border-b-1 border-gray-400 pb-1 justify-between w-full  items-center gap-2">
              <p className=" text-default-600">crm@mayan-group.com</p>
              <Icon
                className="text-danger !text-2xl "
                icon={"mdi:email"}
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-full mb-1 gap-2">
        <div className="flex flex-col  mb-1 gap-2 h-full">
          <div className="border-b-1 border-danger">
            <h1 className="pb-2  text-responsiveH4 md:text-responsiveH3 ">
              لینک های مفید
            </h1>
          </div>
          <div>
            <Link
              className="text-default-400 text-responsiveH4  hover:text-danger "
              href="/agents"
            >
              نمایندگی ها
            </Link>
          </div>
          <div>
            <Link
              className="text-default-400 text-responsiveH4  hover:text-danger "
              href="/news"
            >
              اخبار
            </Link>
          </div>
          {/* <div>
            <Link
              className="text-default-400 text-responsiveH4  hover:text-danger "
              href="www.google.com"
            >
              اخرین بخشنامه
            </Link>
          </div> */}
          <div>
            <Link
              className="text-default-400 text-responsiveH4  hover:text-danger "
              href="www.google.com"
            >
              سوالات پر تکرار
            </Link>
          </div>
          <div>
            <Link
              className="text-default-400 text-responsiveH4  hover:text-danger "
              href="/commodity"
            >
              محصولات
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full  mb-1 gap-2">
          <div>
            <Image className="w-full" src="/logo.webp" alt="A_1"></Image>
          </div>
          <div className="flex w-full justify-around">
            <Icon
              className="cursor-pointer hover:text-danger text-2xl"
              icon={"mdi:facebook"}
            ></Icon>
            <Icon
              className="cursor-pointer hover:text-danger text-2xl"
              icon={"mdi:instagram"}
            ></Icon>
            <Icon
              className="cursor-pointer hover:text-danger text-2xl"
              icon={"mdi:telegram"}
            ></Icon>
            <Icon
              className="cursor-pointer hover:text-danger text-2xl"
              icon={"mdi:twitter"}
            ></Icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
