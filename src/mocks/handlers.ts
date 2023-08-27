import { RestHandler } from "msw";

import memberDetailHandlers from "./api/member-detail/member-detail.handler";
import membersHandlers from "./api/members/members.handler";

const handlers: RestHandler[] = [...memberDetailHandlers, ...membersHandlers];

export default handlers;
