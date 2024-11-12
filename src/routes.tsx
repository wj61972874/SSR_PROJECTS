import About from "./pages/About";
import GoodsPage, { loader as goodsLoader } from "./pages/Goods";
import Home, { loader as homeLoader } from "./pages/Home";
import App from "./App";
import React from "react";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    loader: homeLoader,
  },
  {
    path: "/goods",
    element: <GoodsPage />,
    loader: goodsLoader, // 确保 loader 属性正确引用 GoodsPage.loader 函数
  },
  {
    path: "/about",
    element: <About />,
  },
];

export const borwserRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: routes,
  },
];

export default routes;
