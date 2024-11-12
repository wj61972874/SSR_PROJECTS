import React from "react";
import { useLoaderData } from "react-router-dom";
import "./index.less";
import { apiGetGoodsData } from "../../services/goods";
import GoodsList from "../../components/goodsList";

const GoodsPage = ({ initialData = undefined }: any) => {
  // const data1: any = useLoaderData();
  const data = initialData || useLoaderData() || { goods: [] };
  const { goods } = data as { goods: any[] };
  console.log("goods", goods);
  return <GoodsList goods={goods} />;
};

// 定义数据预取函数
export const loader = async () => {
  try {
    console.log("这是goods页面的loader");
    const res = await apiGetGoodsData();
    console.log("fetchData res", res);
    return res;
  } catch (e) {
    console.log("fetchData error", e);
    return { goods: [] };
  }
};

export default GoodsPage;
