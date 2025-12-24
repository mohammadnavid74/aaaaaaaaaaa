import VerifyOtpCode from "@/components/loginPage/verifyCode/VerifyOtpCode";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RegisterUser from "./register/RegisterUser";
import { handleInputNumber } from "@/lib/utils/NumberValidate";
interface props {
  isOpen: boolean;
  onOpenChange: () => void;
}
const Login = ({ isOpen, onOpenChange }: props) => {
  // const [stateAgreement, setStateAgreement] = useState(false);
  const [mobile, setMobile] = useState<string>("");
  const [step, setStep] = useState<
    | "forget-pass"
    | "login-with-mobile"
    | "verify-otp"
    | "register"
    | "login-with-pass"
    | "complete-info"
  >("login-with-mobile");
  const [error, setError] = useState<boolean>(false);
  return (
    <div className=" h-screen">
      <Modal
        hideCloseButton={step === "register"}
        classNames={{
          closeButton:
            "hover:bg-danger/60 bg-danger text-white left-2 top-2 w-fit !rounded-md",
        }}
        className={`m-0 rounded-none sm:rounded-xl h-screen sm:h-auto p-5 flex justify-around flex-col`}
        isOpen={isOpen}
        placement="center"
        onOpenChange={() => {
          if (step !== "register") {
            onOpenChange();
            setStep("login-with-mobile");
          } else {
            setError(true);
          }
        }}
        size="xl"
      >
        <ModalContent>
          {step === "login-with-mobile" && (
            <>
              <ModalHeader
                dir="ltr"
                className="flex border-b !flex-col justify-center  items-center gap-2 "
              >
                <Image
                  className="!w-[300px]"
                  src="/logo.webp"
                  alt="logo"
                  width={150}
                  height={150}
                />
                <h4 className="text-responsiveH3 font-regular">
                  ورود یا ثبت نام در مایان
                </h4>
              </ModalHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // const data = Object.fromEntries(
                  //   new FormData(e.currentTarget)
                  // );

                  setStep("verify-otp");
                }}
              >
                <ModalBody
                  dir="rtl"
                  className="my-5 flex w-full justify-center items-center"
                >
                  <Input
                    className="!text-sm"
                    maxLength={11}
                    size="lg"
                    onInput={(e) => {
                      handleInputNumber(e);
                    }}
                    classNames={{
                      label: "dark:!text-white !text-black",
                      base: "w-full max-w-[300px]",
                      inputWrapper: " dark:border-white border-black",
                      input: "text-medium text-center direction-ltr  ",
                    }}
                    errorMessage=" * شماره موبایل صحیح نمی باشد"
                    isRequired
                    label="شماره موبایل"
                    labelPlacement="outside"
                    name="mobile"
                    placeholder="09123456789"
                    variant="bordered"
                    onValueChange={setMobile}
                  />
                </ModalBody>

                <ModalFooter className="w-full flex flex-col  justify-center items-center gap-5">
                  <div
                    className="w-full max-w-[300px] flex flex-col gap-5  "
                    dir="rtl"
                  >
                    <div className=" text-default-400 !text-responsiveH5">
                      <p>
                      ورود شما به معنای پذیرش
                        <Link href="#" className=" text-danger">
                          &nbsp;شرایط و مقررات&nbsp;
                        </Link>
                        و قوانین
                        <Link href="#" className="text-danger">
                          &nbsp;حریم خصوصی&nbsp;
                        </Link>
                        می‌باشد
                      </p>
                    </div>
                    <Button
                      //isDisabled={!stateAgreement}
                      type="submit"
                      className="w-full max-w-[300px]"
                      color="primary"
                    >
                      ادامه
                    </Button>
                  </div>
                </ModalFooter>
              </form>
            </>
          )}
          {step === "verify-otp" && (
            <>
              <ModalHeader
                dir="ltr"
                className="flex border-b !flex-col justify-center  items-center gap-2 "
              >
                <Image
                  className="!w-[300px]"
                  src="/logo.webp"
                  alt="logo"
                  width={150}
                  height={150}
                />
                <h4 className="text-responsiveH4 font-thin text-center">
                  کد چهار رقمی به شماره موبایل &ldquo;{mobile}&ldquo; ارسال شد
                </h4>
                <Icon
                  onClick={() => {
                    setStep("login-with-mobile");
                  }}
                  height={30}
                  width={30}
                  fontSize={20}
                  className="absolute right-2 top-2 text-black rounded-md cursor-pointer  bg-white hover:bg-black hover:text-white"
                  icon="humbleicons:arrow-go-back"
                ></Icon>
              </ModalHeader>
              <ModalBody className="flex justify-center items-center my-5">
                <Input
                  endContent={
                    <Icon
                      onClick={() => {
                        setStep("login-with-mobile");
                      }}
                      height={44}
                      width={44}
                      fontSize={20}
                      className="bg-white px-1 cursor-pointer !text-[10px] text-black rounded-r-lg hover:text-white hover:bg-white/10"
                      icon={"fa-edit"}
                    ></Icon>
                  }
                  className="!cursor-default"
                  value={mobile}
                  readOnly
                  maxLength={11}
                  size="lg"
                  classNames={{
                    label: "dark:!text-white !text-black",
                    base: "w-full max-w-[300px] !cursor-default",
                    inputWrapper:
                      " dark:border-white border-black !cursor-default !px-0",
                    input: " text-center direction-ltr  !cursor-default",
                  }}
                  labelPlacement="outside"
                  name="mobile"
                  variant="bordered"
                />
                <VerifyOtpCode
                  setStep={setStep}
                  mobile={mobile}
                  personId=""
                ></VerifyOtpCode>
              </ModalBody>
            </>
          )}
          {step === "register" && (
            <>
              <ModalHeader
                dir="ltr"
                className="flex border-b !flex-col justify-center  items-center gap-2 "
              >
                <Image
                  className="!w-[300px]"
                  src="/logo.webp"
                  alt="logo"
                  width={150}
                  height={150}
                />
                <h4 className="text-responsiveH4 ">
                  لطفا مشخصات زیر را کامل کنید
                </h4>
              </ModalHeader>
              <ModalBody
                dir="rtl"
                className="flex justify-center items-center my-5"
              >
                <RegisterUser error={error} mobile={mobile}></RegisterUser>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Login;
