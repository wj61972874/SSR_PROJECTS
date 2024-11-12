import React, { useEffect, useState } from "react";
import "./index.less";
import Billboard from "../../components/billboard";
// import GoodsPage, { loader as goodsLoader } from "../Goods";
import { useLoaderData } from "react-router-dom";
import GoodsList from "../../components/goodsList";
import { apiGetGoodsData } from "../../services/goods";

const Home = ({ initialData }: any) => {
  const [goodsData, setGoodsData] = useState(initialData);

  useEffect(() => {
    if (typeof document !== "undefined") {
      // 只有在客户端执行的代码
      document.title = "Home Page";

      if (!initialData) {
        loader().then((data) => {
          setGoodsData(data);
        });
      }
    }
  }, [initialData]);

  return (
    <div>
      <Billboard />
      {/* <GoodsPage initialData={goodsData} /> */}
      <GoodsList goods={goodsData} />
    </div>
  );
};

// 定义数据预取函数
export const loader = async () => {
  try {
    console.log("这是Home页面的loader");
    const res = await apiGetGoodsData();
    console.log("fetchData res", res);
    return res;
  } catch (e) {
    console.log("fetchData error", e);
    return { goods: [] };
  }
};

export default Home;
