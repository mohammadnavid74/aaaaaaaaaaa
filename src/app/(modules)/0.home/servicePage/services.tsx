import { Icon } from "@iconify/react/dist/iconify.js";

const Services = () => {
  const services = [
    {
      icon: "mdi:car-wrench",
      title: "امداد 24 مایان",
      desciption: "امداد سفر و سرویس سفر به صورت 24 ساعته",
    },
    {
      icon: "mdi:account-cog",
      title: "خدمات پس از فروش",
      desciption:
        "ارائه راهکارهای خدمات پس از فروش و اعطا ضمانت های مربوط به کلیه محصولات",
    },
    {
      icon: "material-symbols:support-agent",
      title: "شبکه نمایندگان",
      desciption:
        "دارا بودن بیش از 20 نمایندگی فعال در سراسر کشور جهت خدمت رسانی",
    },
    {
      icon: "mdi:target-variant",
      title: "چشم انداز",
      desciption:
        "اولین انتخاب در حـوزه راهکارهـای حمل و نقل برای کلیه مشتریان",
    },
  ];
  return (
    <section className="mt-16 w-full">
      <div
        dir="rtl"
        className="border-t-1 border-b-1  border-danger flex justify-between items-center"
      >
        <div className="px-2 flex gap-2 justify-center items-center">
          <Icon
            className="text-gray-500 text-responsiveH2"
            icon={"carbon:container-services"}
          ></Icon>
          <h3 className=" text-responsiveH4 md:text-responsiveH3  ">خدمات</h3>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className=" grid grid-cols-2 lg:grid-cols-4 justify-center items-center my-10 md:gap-10 gap-5 ">
          {services.map((item, index) => (
            <div
              key={index}
              className=" hover:bg-foreground-50 cursor-default md:mx-2 lg:mx-3  flex flex-col  items-center rounded-xl w-[120px] xsm:w-[160px] xsm:h-[160px]   xl:w-[250px]  h-[160px] sm:h-[250px] sm:w-[200px] border dark:border-white border-black mx-2  p-2  text-center"
            >
              <div className="hover:animate-appearance-in h-[50px] sm:h-[100px] my-1 sm:my-3">
                <Icon
                  icon={item.icon}
                  className="text-[50px] sm:text-[100px] sm:h-[100px]    text-danger text-3xl"
                />
              </div>
              <div>
                <h5 className="text-responsiveH4 py-2 sm:py-5  ">
                  {item.title}
                </h5>
              </div>
              <div className="h-8">
                <p className=" text-responsiveP">{item.desciption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
