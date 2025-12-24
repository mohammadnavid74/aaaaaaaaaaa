import axios from "axios";
// import {addToast, Button} from "@heroui/react";
import tokenService from "@/lib/api/services/token.service";

export const apiClient = axios.create({
  //baseURL: "/api/proxy", // به پراکسی داخلی می‌زنیم
  baseURL: process.env.NEXT_PUBLIC_GATEWAY_URL,
  withCredentials: true, // لازمه اگر از کوکی یا سشن استفاده می‌کنی
  headers: {
    "Content-Type": "application/json",
  },
});


apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const tokenStr = tokenService.getToken();
    if (tokenStr && tokenStr !== "undefined" && tokenStr !== "null") {
      try {
        const parsedToken = JSON.parse(tokenStr);
        config.headers.Authorization = `Bearer ${parsedToken.token}`;
      } catch {
        console.warn("توکن نامعتبر");
      }
    }
  }
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err.response?.status;
    // const errorMessage = err.response?.data?.errors || "خطایی رخ داد.";
    switch (status) {
      case 400:
        //addToast({   title: "درخواست نامعتبر", description: errorMessage ,color:'danger',variant:'solid'});
        alert("درخواست نامعتبر")
        break;
      case 401:
        // addToast({   title: "دسترسی غیرمجاز", description: "لطفاً دوباره وارد شوید.",color:'danger',variant:'solid' });
        alert("دسترسی غیرمجاز")
        if (typeof window !== "undefined") {
          tokenService.logout()
          window.location.href = "/login";
        }
        break;
      case 403:
        // addToast({   title: "دسترسی غیرمجاز", description: "شما به این بخش دسترسی ندارید.",color:'danger',variant:'solid' });
        alert("دسترسی غیرمجاز")
        break;
      case 404:
        // addToast({ title: "یافت نشد", description: "مورد مورد نظر پیدا نشد.",color:'danger',variant:'solid' });
        alert("یافت نشد")
        break;
      case 500:
        // addToast({   title: "خطای سرور", description: "لطفاً بعداً تلاش کنید.",color:'danger',variant:'solid' });
        alert("خطای سرور")
        break;
      default:
        // addToast({  title: "خطا", description: errorMessage });
        alert("خطا")
        break;
    }

    return Promise.reject(err);
  }
);
