import axios, { isAxiosError } from "axios";

export async function getNewsData(pageSize: string, pageNumber: string) {
  try {
    const url = new URL(`${pageNumber}/${pageSize}`, process.env.NEXT_PUBLIC_GATEWAY_URL +'/CMS/Website/NewsSiteSection/GetNewsInPublicPage');
    const response = await axios({
      url: url.toString(),
      method: "get",
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("News Error:", error.message);
    } else {
      console.error("News Error:", error);
    }
  }
}

export async function getNewsDetailsData(code: string) {
  try {
    // const url = BASE_URL_detail + code;
    const url = new URL(process.env.NEXT_PUBLIC_GATEWAY_URL +'/CMS/Website/NewsSiteSection/GetByCode?code=') + code;
    
    const response = await axios({
      url: url.toString(),
      method: "get",
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Custom Error:", error.message);
    } else {
    }
  }
}
