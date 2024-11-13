import React, { useEffect, useState } from "react";
import "./index.less";
import Billboard from "../../components/billboard";
// import GoodsPage, { loader as goodsLoader } from "../Goods";
import GoodsList from "../../components/goodsList";
import { apiGetGoodsData } from "../../services/goods";
import withInitialProps from "../../hoc/withInitialProps";

const Home = (props: any) => {
  const { fetchData } = props.initialData || {};
  console.log("Home====进来了", props.initialData);
  return (
    <div className="home_container">
      <Billboard />
      <GoodsList goods={fetchData} />
    </div>
  );
};

// 定义数据预取函数
Home.getInitialProps = async () => {
  try {
    console.log("这是Home页面的loader");
    const res = await apiGetGoodsData();
    return {
      fetchData: res || {},
      page: {
        tdk: {
          title: "这是商品首页",
          keywords: "koa-react-ssr",
          description: "koa-react-ssr",
        },
      },
    };
  } catch (e) {
    console.log("fetchData error", e);
    return { goods: [] };
  }
};

export default withInitialProps(Home);
