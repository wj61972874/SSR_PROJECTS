import About from "./pages/About";
import GoodsPage from "./pages/Goods";
import Home from "./pages/Home";
import App from "./App";
import React from "react";
import GoodDetail from "./pages/GoodDetail";

const routes = [
  {
    path: "/",
    component: Home,
    // loader: homeLoader,
  },
  {
    path: "/goodDetail/:id",
    component: GoodDetail,
    // loader: goodsLoader, // 确保 loader 属性正确引用 GoodsPage.loader 函数
  },
  {
    path: "/goods",
    component: GoodsPage,
    // loader: goodsLoader, // 确保 loader 属性正确引用 GoodsPage.loader 函数
  },
  {
    path: "/about",
    component: About,
  },
];

export const borwserRoutes = [
  {
    path: "/",
    component: <App />,
    children: routes,
  },
];

export default routes;
