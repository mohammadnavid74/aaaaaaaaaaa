export interface QuestionsGroupWithoutIdDto {
    title: string;
    questions: QuestionWithoutIdDto[] | null;
}
export interface QuestionWithoutIdDto {
    content: string;
    answer: string;
}