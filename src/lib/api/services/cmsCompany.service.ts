import axios, { isAxiosError } from "axios";

export async function getDetailCmsCompany(code: string) {
  try {
    const url = new URL(code, process.env.NEXT_PUBLIC_GATEWAY_URL + `/mayan/agent/GetDetailWithCode/`);
    const response = await axios({
      url: url.toString(),
      method: "get",
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Custom Error:", error.message);
    }
  }
}
