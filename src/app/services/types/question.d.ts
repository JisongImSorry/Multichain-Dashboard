type TServerSurveyUiClass = {
  id: number;
  tag: string;
  createdAt: string;
  updatedAt: string;
};

type TServerSurveyItemInputEntityDefine = {
  id: number;
  key: string;
  type: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
};

type TServerSurveyItemInputNumberRange = {
  id: number;
  interval: string;
  max: string;
  min: string;
  createdAt: string;
  updatedAt: string;
};

type TServerSurveyItemInputSelectOption = {
  id: number;
  dimensionTo: number;
  layerNext: number;
  order: number;
  content: string;
  createdAt: string;
  updatedAt: string;
};

type TServerSurveyItemInput = {
  id: number;
  tag: string;
  order: number;
  dimension: number;
  SurveyUiClass: TServerSurveyUiClass;
  SurveyItemInputs: TServerSurveyItemInput[];
  SurveyItemInputEntityDefines: TServerSurveyItemInputEntityDefine[];
  SurveyItemInputNumberRange: TServerSurveyItemInputNumberRange | null;
  SurveyItemInputSelectOptions: TServerSurveyItemInputSelectOption[];
  createdAt: string;
  updatedAt: string;
};

type TServerSurveyPreset = {
  id: number;
  tag: string;
  createdAt: string;
  updatedAt: string;
};

type TServerSurveyGroupClass = {
  id: number;
  display: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
};

type TServerQuestion = {
  id: number;
  layer: number;
  step: number;
  question: string;
  description: string;
  example: string;
  SurveyItems: TServerQuestion[];
  SurveyItemInputs: TServerSurveyItemInput[];
  SurveyPreset: TServerSurveyPreset;
  SurveyGroupClass: TServerSurveyGroupClass;
  SurveySubGroupClass: TServerSurveyGroupClass;
};
// List
type TReqListQuestions = void;
type TResListQuestions = TServerQuestion[];
// Create
type TReqCreateQuestion = {};
type TResCreateQuestion = {};
// Get
type TReqGetQuestion = {
  id: string;
};
type TResGetQuestion = TServerQuestion[];
// Delete
type TReqDeleteQuestion = {};
type TResDeleteQuestion = {};
// Update
type TReqUpdateQuestion = {};
type TResUpdateQuestion = {};
