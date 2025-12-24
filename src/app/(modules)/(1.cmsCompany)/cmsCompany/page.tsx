"use client";
// import CmsCompanyDrawer from "@/components/map/representation2";
// import { useWebsiteStore } from "@/core/store/useWebsiteStore";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import CmsCompanyDrawer from "../CmsCompanyDrawer";
import { CMSCompanySummaryDto } from "@/types/dtos/cmsCompany/CmsCompanyDataDto";
import { getWebsiteHomeSection } from "@/lib/api/services/mainPage.service";
import { WebsiteHomeSectionDto } from "@/types/dtos/home/0-WebsiteHomeSectionDto";
// import { async } from '../../../../lib/api/services/mainPage.service';
const CmsCompanyMap = dynamic(() => import("@/app/(modules)/(1.cmsCompany)/CmsCompany"), { ssr: false });
// const CmsCompanyDrawer = dynamic(
//   () => import("@/components/map/representation2"),
//   {
//     ssr: false,
//   }
// );
// const Neshan = dynamic(() => import("@/components/neshan/neshan"), {
//   ssr: false,
// });

export default function Page() {
  const [sharedValue, setSharedValue] = useState("");
  const [state, setState] = useState(false);
  const updateSharedValue = (newValue: string) => {
    setState(!state);
    setSharedValue(newValue);
  };
  const [cmsCompanies, setCmsCompanies] = useState<CMSCompanySummaryDto[]>([]);
  useEffect(() => {
    getWebsiteHomeSection().then((res: WebsiteHomeSectionDto) => {
      setCmsCompanies(res.cmsCompanies);
    });
  });
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <HeaderComponent></HeaderComponent> */}
      <div className="absolute z-[39]  h-[70px] w-full"></div>
      <CmsCompanyMap
        updateSharedValue={updateSharedValue}
        cmsCompaniesData={cmsCompanies || []}
      ></CmsCompanyMap>
      <CmsCompanyDrawer
        state={state}
        sharedValue={sharedValue}
      ></CmsCompanyDrawer>
      {/* {cmsCompany && (
        <Neshan
          updateSharedValue={updateSharedValue}
          data={cmsCompany}
        ></Neshan>
      )} */}
    </div>
  );
}
