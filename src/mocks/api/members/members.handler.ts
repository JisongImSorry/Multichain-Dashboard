import {
  rest,
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from "msw";
import { getAs1MembersOkData } from "./data/getAs1Members.data";
import { getAs2MembersOkData } from "./data/getAs2Members.data";
import { getMembersOkData } from "./data/getMembers.data";

const getMembers = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition<TResGetMembers>,
  ctx: RestContext
) => {
  return res(ctx.status(200), ctx.json(getMembersOkData));
};

const getAs1Members = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition<TResGetAs1Members>,
  ctx: RestContext
) => {
  return res(ctx.status(200), ctx.json(getAs1MembersOkData));
};

const getAs2Members = async (
  req: RestRequest<PathParams>,
  res: ResponseComposition<TResGetAs2Members>,
  ctx: RestContext
) => {
  return res(ctx.status(200), ctx.json(getAs2MembersOkData));
};

const handlers = [
  rest.get("/mocks/api/members/", getMembers),
  rest.get("/mocks/api/members/as1", getAs1Members),
  rest.get("/mocks/api/members/as2", getAs2Members),
];

export default handlers;
