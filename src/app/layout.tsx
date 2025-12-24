import { Providers } from "./providerHreoUi";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { GlobalProvider } from "@/lib/context/GlobalContext";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark  ">
      <body className={`dark:bg-black bg-stone-200 antialiased`}>
        <GlobalProvider>
          <Providers>{children}</Providers>
        </GlobalProvider>
        <div className="max-w-[1440px]"></div>
      </body>
    </html>
  );
}
