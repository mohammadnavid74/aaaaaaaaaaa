import axios, { isAxiosError } from "axios";

export async function getWebsiteHomeSection() {
  try {
    const response = await axios({
      url: process.env.NEXT_PUBLIC_GATEWAY_URL + "/CMS/api/Website/HomeSection/" + process.env.NEXT_PUBLIC_WEBSITE_ID,
      method: "get"
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Custom Error:", error.message);
    } else {
      console.error("Custom Error:", error);
    }
  }
}
export function getWebsiteHomeSectionApiRoute() {
  try {
    const response = axios({
      url: process.env.NEXT_PUBLIC_GATEWAY_URL_INLINE + "/CMS/api/Website/HomeSection/" + process.env.NEXT_PUBLIC_WEBSITE_ID,
      method: "get"
    });
    return response.then((res) => {
      return res.data;
    })
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Custom Error:", error.message);
    } else {
      console.error("Custom Error:", error);
    }
  }
}
export async function getWebsiteHomeSectionForAgent() {
  try {
    const response = await axios({
      url: process.env.NEXT_PUBLIC_GATEWAY_URL + "/mayan/agent/getforhomepage",
      method: "get",
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Custom Error:", error.message);
    } else {
      console.error("Custom Error:", error);
    }
  }
}
