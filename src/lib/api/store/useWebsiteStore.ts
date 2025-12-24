// import { create } from "zustand";
// import { IMainApi } from "@/core/interface/IWebsiteHomeSection";
// import {
//   getWebsiteHomeSection,
//   getWebsiteHomeSectionForAgent,
// } from "@/core/../lib/api/services/mainPage.service";
// import { IAgentListMainPage } from "@/core/interface/IAgentListMainPage";
// import { getDetailAgent } from "@/core/../lib/api/services/agents.service";
// import { IAgentId } from "@/core/interface/IAgentListId";
// import { getNewsData, getNewsDetailsData } from "@/core/../lib/api/services/news.service";
// import { ICommodity } from "@/core/interface/ICommodity";
// import {
//   getCommodityData,
//   getCommodityDataById,
// } from "@/core/../lib/api/services/commodity.service";
// import {
//   submitSurvaySignUpCommand,
//   getSurvayDetails,
//   submitSurvayAnswer,
//   getAnswerSurvay,
// } from "@/core/../lib/api/services/survay.service";
// import { ISurvayQuestion } from "@/core/interface/ISurvayQuestion";
// import { ISurvayAnswer } from "@/core/interface/ISurvayAnswer";
// import { ISurvayAnswerQuestionDto } from "@/core/interface/ISurvayAnswerQuestion";
// import axios from "axios";
// import { ISurvaySignUp } from "@/core/interface/ISurvay";

// interface WebsiteState {
//   data: IMainApi | null;
//   agentsData: IAgentListMainPage[] | null;
//   agentData: IAgentId | null;
//   stateAgentData: boolean;
//   commodityData: ICommodity[] | null;
//   commodityDataById: ICommodity[] | null;
//   commodityDataByIdDetails: ICommodity | null;
//   loadingCommodityDataByIdDetails: boolean;
//   fetchCommodityData: () => Promise<void>;
//   loadingCommodityData: boolean;
//   fetchCommodityDataById: (code: string) => Promise<void>;
//   loadingCommodityDataById: boolean;
//   fetchNewsData: (pageSize: string, pageNumber: string) => Promise<void>;
//   fetchDataMainPage: () => Promise<void>;
//   loadingDataMainPage: boolean;
//   fetchDataMainPageAgents: () => Promise<void>;
//   loadingMainPageAgents: boolean;
//   fetchDataMainPageAgentsById: (code: string) => Promise<void>;
//   loadingDataMainPageAgentsById: boolean;
//   submitCommandSurvaySignUp: (command: ISurvaySignUp) => Promise<void>;
//   loadingCommandSurvaySignUp: boolean;
//   userCode: number | null;
//   fetchGetSurvayDetails: () => Promise<void>;
//   loadingSurvayDetails: boolean;
//   survayDetail: ISurvayQuestion[] | null;
//   submitSurvayAnswerCommand: (command: ISurvayAnswer) => Promise<void>;
//   stateSurvayAnswerCommand: number | null;
//   loadingSurvayAnswerCommand: boolean;
//   fetchGetAnswerSurvay: (
//     questionCode: number,
//     userCode: number
//   ) => Promise<void>;
//   loadingAnswerSurvay: boolean;
//   answerSurvay: ISurvayAnswerQuestionDto | null;
// }

// export const useWebsiteStore = create<WebsiteState>((set) => ({
//   loadingCommodityDataByIdDetails: false,
//   loadingCommodityData: false,
//   loadingCommodityDataById: false,
//   loadingNewsData: false,
//   loadingNewsDetailsData: false,
//   loadingDataMainPage: false,
//   loadingMainPageAgents: false,
//   loadingDataMainPageAgentsById: false,
//   loadingCommandSurvaySignUp: false,
//   loadingSurvayDetails: false,
//   loadingSurvayAnswerCommand: false,
//   loadingAnswerSurvay: false,
//   data: null,
//   stateAgentData: false,
//   agentData: null,
//   agentsData: null,
//   loading: false,
//   allNewsData: null,
//   newsDetailsData: null,
//   commodityData: null,
//   commodityDataById: null,
//   commodityDataByIdDetails: null,
//   allSurvayData: null,
//   survayDetail: null,
//   userCode: null,
//   answerSurvay: null,
//   stateSurvayAnswerCommand: null,

//   fetchDataMainPage: async () => {
//     set({ loadingDataMainPage: true });
//     try {
//       const res = await getWebsiteHomeSection();
//       set({ data: res, loadingDataMainPage: false });
//     } catch (error) {
//       console.error("خطا در واکشی API:", error);
//       set({ loadingDataMainPage: false });
//     }
//   },
//   fetchCommodityData: async () => {
//     set({ loadingCommodityData: true });
//     try {
//       const res = await getCommodityData();
//       set({ commodityData: res, loadingCommodityData: false });
//     } catch (error) {
//       console.error("خطا در واکشی API:", error);
//       set({ loadingCommodityData: false });
//     }
//   },
//   fetchCommodityDataById: async (code: string) => {
//     set({ loadingCommodityDataById: true });
//     try {
//       const res = await getCommodityDataById(code);
//       set({ commodityDataById: res, loadingCommodityDataById: false });
//     } catch (error) {
//       console.error("خطا در واکشی API:", error);
//       set({ loadingCommodityDataById: false });
//     }
//   },

//   fetchDataMainPageAgents: async () => {
//     set({ loadingMainPageAgents: true });
//     try {
//       const res = await getWebsiteHomeSectionForAgent();
//       set({ agentsData: res, loadingMainPageAgents: false });
//     } catch (error) {
//       console.error("خطا در واکشی API:", error);
//       set({ loadingMainPageAgents: false });
//     }
//   },
//   fetchDataMainPageAgentsById: async (code: string) => {
//     set({ loadingDataMainPageAgentsById: true });
//     try {
//       const res = await getDetailAgent(code);
//       set({
//         agentData: res,
//         loadingDataMainPageAgentsById: false,
//         stateAgentData: true,
//       });
//     } catch (error) {
//       console.error("خطا در واکشی API:", error);
//       set({ loadingDataMainPageAgentsById: false, stateAgentData: false });
//     }
//   },
//   fetchNewsData: async (pageSize: string, pageNumber: string) => {
//     set({ loadingNewsData: true });
//     try {
//       const res = await getNewsData(pageSize, pageNumber);
//       set({ allNewsData: res, loadingNewsData: false });
//     } catch (error) {
//       console.error("خطا در واکشی API:", error);
//       set({ loadingNewsData: false });
//     }
//   },
//   fetchNewsDetailsData: async (code: string) => {
//     set({ loadingNewsDetailsData: true });
     
//   },
//   submitCommandSurvaySignUp: async (command: ISurvaySignUp) => {
//     set({ loadingCommandSurvaySignUp: true });
//     try {
//       const res = await submitSurvaySignUpCommand(command);
//       set({ userCode: res, loadingCommandSurvaySignUp: false });
//     } catch (error) {
//       set({ loadingCommandSurvaySignUp: false });
//       console.error("خطا در واکشی API:", error);
//     }
//   },
//   fetchGetSurvayDetails: async () => {
//     set({ loadingSurvayDetails: true });
//     try {
//       const res = await getSurvayDetails();
//       set({ survayDetail: res, loadingSurvayDetails: false });
//     } catch (error) {
//       console.error("خطا در واکشی API:", error);
//       set({ loadingSurvayDetails: false });
//     }
//   },
//   submitSurvayAnswerCommand: async (command: ISurvayAnswer) => {
//     set({ loadingSurvayAnswerCommand: true });
//     try {
//       const status = await submitSurvayAnswer(command);
//       set({
//         loadingSurvayAnswerCommand: false,
//         stateSurvayAnswerCommand: status.status,
//       });
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//       }
//       set({ loadingSurvayAnswerCommand: false });
//     }
//   },

//   fetchGetAnswerSurvay: async (questionCode, userCode) => {
//     set({ loadingAnswerSurvay: true });
//     try {
//       const res = await getAnswerSurvay(questionCode, userCode);

//       set({ answerSurvay: res, loadingAnswerSurvay: false });
//     } catch (error) {
//       console.error("خطا در واکشی API:", error);
//       set({ loadingAnswerSurvay: false });
//     }
//   },
// }));
