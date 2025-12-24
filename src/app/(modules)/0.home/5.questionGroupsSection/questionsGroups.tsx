"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Image } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Question from "./question";
import { QuestionsGroupWithoutIdDto } from "@/types/dtos/home/QuestionsGroupWithoutIdDto";
interface Props {
  Groups: QuestionsGroupWithoutIdDto[];
}
const QuestionGroups = ({ Groups }: Props) => {
  return (
<div className="flex justify-around items-center rounded-none sm:!rounded-2xl py-10 mt-12 md:bg-background  md:bg-white dark:bg-black md:dark:bg-default-500/30  bg-contain bg-no-repeat dark:bg-[url('/intro_2_2.webp')] bg-[url('/dark_intro_2_2.webp')] bg-opacity-40 md:!bg-none ">
      <div dir="rtl" className="w-full md:w-1/2 ">
         

        
<Accordion
          className=""
          selectionMode="multiple"
          defaultExpandedKeys={["2"]}
        >
          {Groups.map((group,index) => (
            <AccordionItem
              key={index}
              aria-label={`سوالات ${group.title}`}
              title={
                <div className="flex items-center gap-3">
                  <Icon
                    icon="mdi:help-circle-outline"
                    className="text-yellow-500 text-xl"
                  />
                  <span className="text-responsiveH4 font-semibold">
                    {group.title}
                  </span>
                </div>
              }
              classNames={{
                base: "border-1 border-danger rounded-lg px-4",
                title: "text-responsiveH4 font-medium text-right",
                content: "text-responsiveP text-gray-700 pr-2",
                indicator: "text-gray-500 text-xl",
              }}
            >
              {/* محتوای AccordionItem */}
              <div className="pt-4 pr-2">
                {group.questions && group.questions.length > 0 ? (
                  <Question Questions={group.questions} />
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Icon
                      icon="mdi:question-mark"
                      className="text-4xl mx-auto mb-2"
                    />
                    <p className="text-responsiveP">
                      هیچ سوالی در این بخش وجود ندارد
                    </p>
                  </div>
                )}
              </div>
            </AccordionItem>
          ))}
        </Accordion> 
      </div>
      {/* <div className="hidden md:flex min-h-[200px] h-[500px] bg-[url('/dark_intro_2_1.webp')] dark:bg-[url('/intro_2_1.webp')] w-1/3 bg-contain bg-no-repeat "> */}
      {/* </div> */}
      <Image
        width={300}
        className="hidden md:flex lg:hidden max-h-[500px]"
        src="/dark_intro_2_1.webp"
        alt="log"
      />
      <Image
        width={500}
        className="hidden lg:flex max-h-[500px]"
        src="/dark_intro_2_1.webp"
        alt="log"
      />
    </div>
    
  );
};

export default QuestionGroups;