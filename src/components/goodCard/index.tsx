import React from "react";
import "./index.less";
import { useHistory } from "react-router-dom";

const GoodCard = ({ info }: any) => {
  const history = useHistory();

  const handleClick = () => {
    console.log("点击了商品", info);
    history.push(`/goodDetail/${info.id}`);
  };

  return (
    <div className="good_card" onClick={handleClick}>
      <div className="shoe_img">
        <img src={info.src} />
      </div>
      <div className="name">{info.name}</div>
      <div className="price">￥ {info.price}</div>
    </div>
  );
};

export default GoodCard;
