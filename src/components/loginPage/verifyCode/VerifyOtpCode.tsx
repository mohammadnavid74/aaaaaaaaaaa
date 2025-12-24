"use client";

import { Button } from "@heroui/button";
import { InputOtp } from "@heroui/input-otp";
import { useState } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";

interface props {
  mobile: string;
  personId: string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setStep: Function;
}

const VerifyOtpCode = ({ setStep }: props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [otp, setOtp] = useState("");
  const [countdownKey, setCountdownKey] = useState(0);
  const [targetTime, setTargetTime] = useState(Date.now() + 10 * 1000);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const SendAgainOtp = async () => {
    setLoading(true);
    try {
      // const response = await sendAgainOtpForRegistration();
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  const renderer = ({ minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return (
        <div className="flex mb-2 cursor-pointer   justify-center items-center  ">
          <p
            onClick={() => {
              SendAgainOtp();
              setTargetTime(Date.now() + 10 * 1000);
              setCountdownKey((prev) => prev + 1);
            }}
            className=" text-[10px] bg-black/10 p-1 hover:bg-black/80 hover:text-white rounded-lg text-danger"
          >
            ارسال مجدد کد
          </p>
        </div>
      );
    } else {
      return (
        <div
          dir="rtl"
          className="flex mb-2  gap-2 text-[#ADAFB6]  justify-center items-center text-responsiveH5 "
        >
          <p className=" my-auto">ارسال مجدد کد پس از </p>
          <span className="text-danger">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
        </div>
      );
    }
  };

  return (
    <>
      <form
        onSubmit={() => {
          setStep("register");
        }}
        className="shadow-2xl   w-full justify-around  flex flex-col animate-appearance-in  items-center  py-3 rounded-2xl gap-3 "
      >
        <div className="w-full  flex justify-center items-center">
          <p className=" text-responsiveH4 font-medium">
            لطفا کد دریافتی را وارد نمایید
          </p>
        </div>

        <div dir="ltr" className="flex justify-center items-center ">
          <InputOtp
            dir="ltr"
            errorMessage="* کد را به درستی وارد کنید"
            variant="bordered"
            isRequired
            aria-label="OTP input field"
            length={4}
            name="otp"
            classNames={{
              segmentWrapper: " flex gap-4 !border-primaryB-blue-11",
              segment: " !border-default-500 ",
              errorMessage:
                "text-body-2  text-center   text-danger !top-auto bg-black p-1 rounded-lg my-2",
            }}
            onValueChange={(e) => {
              setOtp(e);
            }}
          />
        </div>

        <Countdown key={countdownKey} date={targetTime} renderer={renderer} />
        <Button type="submit" className="w-full max-w-[300px]" color="primary">
          تایید کد
        </Button>
      </form>
    </>
  );
};

export default VerifyOtpCode;
