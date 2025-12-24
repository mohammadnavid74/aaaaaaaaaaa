import { FormEvent } from "react";

export const handleInputNumber = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
};
