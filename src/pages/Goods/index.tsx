import React from "react";
import "./index.less";
import { apiGetGoodsData } from "../../services/goods";
import GoodsList from "../../components/goodsList";
import withInitialProps from "../../hoc/withInitialProps";

const GoodsPage = (props: any) => {
  const { fetchData } = props.initialData || {};
  return <GoodsList goods={fetchData} />;
};

// 定义数据预取函数
GoodsPage.getInitialProps = async () => {
  try {
    console.log("这是Goods页面的loader");
    const res = await apiGetGoodsData();
    return {
      fetchData: res || {},
      page: {
        tdk: {
          title: "这是商品主页面",
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

export default withInitialProps(GoodsPage);
