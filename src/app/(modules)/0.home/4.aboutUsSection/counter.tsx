"use client";
import CountUp from "react-countup";
const Counter = () => {
  return (
    <div dir="rtl" className="flex justify-between  my-2 sm:my-5 w-full">
      <div>
        <div className="text-3xl text-gray-500 md:text-6xl  mb-5">
          <CountUp
            enableScrollSpy
            scrollSpyDelay={100}
            end={5678}
            duration={3}
            formattingFn={(num) => new Intl.NumberFormat("fa-IR").format(num)}
          />
        </div>
        <p className="text-sm">پروژ های تکمیل شده</p>
      </div>
      <div dir="rtl" className="flex flex-col justify-start ">
        <div className="text-3xl text-gray-500 md:text-6xl min-w-0 md:min-w-[200px]  mb-5">
          <CountUp
            enableScrollSpy
            scrollSpyDelay={100}
            end={20253}
            duration={3}
            formattingFn={(num) => new Intl.NumberFormat("fa-IR").format(num)}
          />
        </div>

        <p className="text-sm">مشتریان راضی</p>
      </div>
    </div>
  );
};

export default Counter;
