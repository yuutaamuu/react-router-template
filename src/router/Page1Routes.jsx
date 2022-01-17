import { Detail } from "../Detail";
import { Detail1 } from "../Detail1";
import { NotFound } from "../NotFound";
import { Page1 } from "../Page1";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detail",
    exact: false,
    children: <Detail />
  },
  {
    path: "/detail1",
    exact: false,
    children: <Detail1 />
  },
  {
    path: "/*",
    exact: false,
    children: <NotFound />
  }
];
