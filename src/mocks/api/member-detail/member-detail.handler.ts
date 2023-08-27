import {
  rest,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from "msw";

import { getUserInfoOkData } from "./data/getUserInfo.data";
import { getUserInstructionOkData } from "./data/getUserInstruction.data";
import { getUserExportingOkData } from "./data/getUserExporting.data";
import { getServiceManagementOkData } from "./data/getServiceManagement.data";
import { listMemoOkData } from "./data/listMemo.data";

const GetUserInfo = async (
  req: RestRequest<PathParams<TReqGetUserInfo["id"]>>,
  res: ResponseComposition<TResGetUserInfo>,
  ctx: RestContext
) => {
  const { id } = req.params;
  return res(ctx.status(200), ctx.json(getUserInfoOkData));
};

const GetUserInstruction = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition<TResGetUserInstruction>,
  ctx: RestContext
) => {
  return res(ctx.status(200), ctx.json(getUserInstructionOkData));
};

const GetUserExporting = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition<TResGetUserExporting>,
  ctx: RestContext
) => {
  return res(ctx.status(200), ctx.json(getUserExportingOkData));
};
const GetServiceManagement = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition<TResGetServiceManagement>,
  ctx: RestContext
) => {
  return res(ctx.status(200), ctx.json(getServiceManagementOkData));
};
const SetMaterial = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(200));
};
const SetExporting = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(200));
};
const SetAs1Notifying = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(200));
};
const SetAs1Dementia = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(200));
};
const UploadAs1DementiaPaper = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(200));
};
const SetAs2 = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(200));
};
const SetNotarizing = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(200));
};
const ListMemo = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition<TResListMemo>,
  ctx: RestContext
) => {
  return res(ctx.status(200), ctx.json(listMemoOkData));
};
const CreateMemo = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(201));
};
const UpdateMemo = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(200));
};
const DeleteMemo = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(ctx.status(200));
};

const handlers = [
  rest.get("/mocks/api/:id/user-basic-info", GetUserInfo),
  rest.get("/mocks/api/:id/instruction", GetUserInstruction),
  rest.get("/mocks/api/:id/exporting", GetUserExporting),
  rest.get("/mocks/api/:id/service-management", GetServiceManagement),
  rest.post("/mocks/api/:id/service-management/material-delivery", SetMaterial),
  rest.post(
    "/mocks/api/:id/service-management/exporting-delivery",
    SetExporting
  ),
  rest.post("/mocks/api/:id/service-management/as1/notifying", SetAs1Notifying),
  rest.post("/mocks/api/:id/service-management/as1/dementia", SetAs1Dementia),
  rest.post(
    "/mocks/api/:id/service-management/as1/dementia/paper",
    UploadAs1DementiaPaper
  ),
  rest.post("/mocks/api/:id/service-management/as2", SetAs2),
  rest.post("/mocks/api/:id/service-management/as2/notarizing", SetNotarizing),
  rest.get("/mocks/api/:id/memo", ListMemo),
  rest.post("/mocks/api/:id/memo", CreateMemo),
  rest.put("/mocks/api/:id/memo/:memoId", UpdateMemo),
  rest.delete("/mocks/api/:id/memo/:memoId", DeleteMemo),
];

export default handlers;
