import { DetailA } from "../DetailA";
import { DetailB } from "../DetailB";
import { Page2 } from "../Page2";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <DetailA />
  },
  {
    path: "/:id",
    exact: false,
    children: <DetailB />
  }
];
