import { ICommodity } from "@/types/dtos/commodity/ICommodity";
import axios, { isAxiosError } from "axios";


export async function getCommodityData(): Promise<ICommodity[] | undefined> {
  try {
    const response = await axios({
      url: ('http://localhost:3000/api/commodity/getAll').toString(),
      method: "get",
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Custom Error:", error.message);
    }
  }
}

export async function getCommodityDataById(code: string) {
  try {
    const response = await axios({
      url: ("http://localhost:3000/api/commodity/getByCode/"+code).toString(),
      method: "get"
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Custom Error:", error.message);
    } console.error("Custom Error:", error);
  }
}
