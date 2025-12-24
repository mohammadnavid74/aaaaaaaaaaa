"use client";

import { QuestionWithoutIdDto } from "@/types/dtos/home/QuestionsGroupWithoutIdDto";

interface Props {
  Questions: QuestionWithoutIdDto[];
}
const Question = ({ Questions }: Props) => {
  return (
    <div className="space-y-4">
      {Questions.map((question, index) => {
        return (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-4 border-r-4 border-yellow-500"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                {index + 1}
              </span>
              <h5 className="text-responsiveH5 font-semibold text-gray-800 flex-1">
                {question.content || "سوال بدون عنوان"}
              </h5>
            </div>

            {question.answer && (
              <div className="bg-white rounded-lg p-5 mt-2 border">
                <p className="text-responsiveP text-gray-700 leading-relaxed">
                  {question.answer}
                </p>
              </div>
            )}

          </div>
        );
      })}
    </div>
  );
};

export default Question;
