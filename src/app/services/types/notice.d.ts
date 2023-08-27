type TServerNotice = {
  id: number;
  title: string;
  description: string;
  status: number;
  origin: number;
  priority: number;
  written_by: string;
  createdAt: string;
};
// List
type TReqListNotices = void;
type TResListNotices = TServerNotice[];
// Create
type TReqCreateNotice = {};
type TResCreateNotice = {};
// Get
type TReqGetNotice = {
  id: string;
};
type TResGetNotice = TServerNotice;
// Delete
type TReqDeleteNotice = {};
type TResDeleteNotice = {};
// Update
type TReqUpdateNotice = {};
type TResUpdateNotice = {};
