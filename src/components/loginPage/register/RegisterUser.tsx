import { handleInputNumber } from "@/lib/utils/NumberValidate";
import { Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
interface props {
  mobile: string;
  error: boolean;
}
const RegisterUser = ({ mobile }: props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationalCode: "",
    mobile: "",
    pictureId: null,
  });

  const handleRegister = async (e: { preventDefault: () => void }) => {
    // setOtpState(true);
    e.preventDefault();

    // const command = new CreateClientRealCommand(formData);
  };

  return (
    <form
      onSubmit={handleRegister}
      className="w-full max-w-[330px] flex flex-col justify-between  items-center gap-6"
    >
      <div className="w-full">
        <Input
          onInput={(e) => {
            handleInputNumber(e);
          }}
          isRequired
          errorMessage="لطفاً کد ملی را به درستی وارد نمایید"
          maxLength={10}
          size="lg"
          className=""
          variant="bordered"
          classNames={{
            label: "dark:!text-white !text-black",
            base: "w-full max-w-[330px] !cursor-default",
            inputWrapper:
              " dark:border-white border-black !cursor-default !px-0",
            input: " text-center direction-ltr  !cursor-default",
          }}
          label="کد ملی"
          labelPlacement="outside"
          name="nationalCode"
          placeholder="کد ملی را وارد نمایید"
          onValueChange={(v) => {
            setFormData({ ...formData, nationalCode: v });
          }}
        />
      </div>

      <div className="w-full">
        <Input
          isRequired
          variant="bordered"
          size="lg"
          className=" text-white "
          errorMessage="لطفاً نام را وارد نمایید"
          classNames={{
            label: "dark:!text-white !text-black",
            base: "w-full max-w-[330px] !cursor-default",
            inputWrapper:
              " dark:border-white border-black !cursor-default !px-0",
            input: " text-center direction-ltr  !cursor-default",
          }}
          label="نام"
          labelPlacement="outside"
          name="firstName"
          placeholder="نام را وارد نمایید"
          onValueChange={(v) => {
            setFormData({ ...formData, firstName: v });
          }}
        />
      </div>
      <div className="w-full">
        <Input
          variant="bordered"
          size="lg"
          className=" text-white "
          errorMessage="لطفاً نام خانوادگی را وارد نمایید"
          classNames={{
            label: "dark:!text-white !text-black",
            base: "w-full max-w-[330px] !cursor-default",
            inputWrapper:
              " dark:border-white border-black !cursor-default !px-0",
            input: " text-center direction-ltr  !cursor-default",
          }}
          label="نام خانوادگی"
          labelPlacement="outside"
          name="lastName"
          isRequired
          placeholder="نام خانوادگی را وارد نمایید"
          onValueChange={(v) => {
            setFormData({ ...formData, lastName: v });
          }}
        />
      </div>
      <div className="w-full">
        <Input
          value={mobile}
          readOnly
          size="lg"
          className=""
          classNames={{
            label: "dark:!text-white !text-black",
            base: "w-full max-w-[330px] !cursor-default",
            inputWrapper:
              " dark:border-white border-black !cursor-default !px-0",
            input: " text-center direction-ltr  !cursor-default",
          }}
          variant="bordered"
          label="شماره موبایل"
          labelPlacement="outside"
          name="mobile"
          placeholder="شماره موبایل"
          onValueChange={(v) => {
            setFormData({ ...formData, mobile: v });
          }}
        />
      </div>

      <Button
        type="submit"
        color="primary"
        className="w-full   text-subtitle-5"
        startContent={
          <Icon
            className=" text-black"
            fontSize={20}
            icon={"mdi:login-variant"}
          ></Icon>
        }
      >
        تایید و ورود
      </Button>
    </form>
  );
};

export default RegisterUser;
