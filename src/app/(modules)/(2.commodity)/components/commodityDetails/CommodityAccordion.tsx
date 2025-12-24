"use client";

import SafeTag from "@/components/extraPage/tools/SafeTag";
import { IProps } from "@/types/dtos/commodity/ICommodity";
import { Accordion, AccordionItem } from "@heroui/react";
interface props {
  data: IProps[];
}
const CommodityAccordion = ({ data }: props) => {
  return (
    <div dir="rtl" className="w-full flex">
      <Accordion defaultExpandedKeys={["1"]}>
        {data.map((data, index) => {
          if (data.propType === 2 && data.title !== "توضیحات") {
            return (
              <AccordionItem
                classNames={{
                  indicator: "text-danger text-xs md:text-md lg:text-xl  ",
                  subtitle: "text-danger !text-xs !md:text-sm !lg:text-md     ",
                  heading:
                    " px-2 text-responsiveH5 bg-black/40  rounded-md  hover:bg-black/50",
                  titleWrapper: "  !text-danger ",
                  trigger: "!p-2  ",
                  content: "te bg-white/10 rounded-xl px-4",
                }}
                className="text-xs text-white  lg:text-sm "
                key={index}
                aria-label="Accordion 1"
                subtitle={data.title}
              >
                <SafeTag
                  tag="div"
                  data={data.value}
                  className="text-responsiveH5"
                ></SafeTag>
              </AccordionItem>
            );
          } else {
            return null;
          }
        })}
      </Accordion>
    </div>
  );
};

export default CommodityAccordion;
