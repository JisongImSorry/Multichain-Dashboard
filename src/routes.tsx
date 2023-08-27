import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@pages/dashboard";
import { SignIn, SignUp } from "@pages/auth";
import { Questions, Tips, Individual } from "@pages/draft";
import { Notices } from "@pages/manage";
import { NoticeDetail } from "@pages/manage/NoticeDetail";
import { Members, As1Members, As2Members } from "@pages/member-list";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "tables",
        element: <Tables />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "notifactions",
        path: "notifactions",
        element: <Notifications />,
      },
      {
        path: "draft/questions",
        element: <Questions />,
      },
      {
        path: "draft/tips",
        element: <Tips />,
      },
      {
        path: "draft/individual/*",
        element: <Individual />,
      },
      {
        path: "manage/notices",
        element: <Notices />,
      },
      {
        path: "manage/notices/detail",
        element: <NoticeDetail />,
      },
      {
        path: "manage/member-list",
        element: <Members />,
      },
      {
        path: "manage/member-list/as1",
        element: <As1Members />,
      },
      {
        path: "manage/member-list/as2",
        element: <As2Members />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
