import React from "react";
import "./index.less";

const GoodCard = ({ info }: any) => {
  return (
    <div className="good_card">
      <div className="shoe_img">
        <img src={info.src} />
      </div>
      <div className="name">{info.name}</div>
      <div className="price">￥ {info.price}</div>
    </div>
  );
};

export default GoodCard;
