import React from "react";
import "./index.less";
import { apiGetGoodDetailData } from "../../services/goods";
import withInitialProps from "../../hoc/withInitialProps";

const GoodDetailsPage = (props: any) => {
  const { fetchData: info } = props.initialData || {};
  return (
    <div className="details_warp">
      <div className="name">{info?.name}</div>
      <img src={info?.src} alt={info?.name} />
      <div className="price">￥{info?.price}</div>
      <div className="desc">{info?.desc}</div>
    </div>
  );
};

// 定义数据预取函数
GoodDetailsPage.getInitialProps = async () => {
  try {
    console.log("这是Goods Detail页面的loader");
    // const { id } = ctx.match.params; // 获取动态路由参数
    const res = await apiGetGoodDetailData(1);
    return {
      fetchData: res || {},
      page: {
        tdk: {
          title: `这是商品的详情页面`,
          keywords: "koa-react-ssr",
          description: `这是商品的详情页面描述`,
        },
      },
    };
  } catch (e) {
    console.log("fetchData error", e);
    return { goods: [] };
  }
};

export default withInitialProps(GoodDetailsPage);
