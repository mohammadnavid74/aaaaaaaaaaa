"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import Questions from "./questionsGroups";
import { QuestionsGroupWithoutIdDto } from "@/types/dtos/home/QuestionsGroupWithoutIdDto";
interface Props {
  Groups: QuestionsGroupWithoutIdDto[];
}
const questionGroupSection = ({ Groups }: Props) => {
  if (!Groups || Groups.length === 0) {
    return null;
  }
  return (
    <section>
      <div
        dir="rtl"
        className="border-t-1 border-b-1  border-danger flex justify-between items-center"
      >
        <div className="px-2 flex gap-2 justify-center items-center">
          <Icon
            className="text-gray-500 text-responsiveH2"
            icon={"octicon:question-24"}
          ></Icon>
          <h4
            className=" text-responsiveH4 md:text-responsiveH3 
 text-responsiveH4 md:text-responsiveH3"
          >
            سوالات متداول
          </h4>
        </div>
      </div>
      {/* {Groups.map((item) => {
        return (
          <div className="absolute opacity-0" key={item.id}>
            <h4>{item.content}</h4>
            <p>{item.answer}</p>
          </div>
        );
      })} */}
      <div className="mt-6">
        <Questions Groups={Groups}></Questions>
      </div>
    </section>
  );
};

export default questionGroupSection;
