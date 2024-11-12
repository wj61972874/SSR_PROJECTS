import React from "react";
import "./index.less";
import GoodCard from "../goodCard";

interface IProps {
  goods: IGood[];
}

interface IGood {
  id: number;
  name: string;
  price: number;
  img: string;
}
const GoodsList = ({ goods = [] }: IProps) => {
  console.log("GoodsList====goods", goods);
  return (
    <div className="goodsPage">
      <article className="shoes_container">
        <div className="row">
          {(goods || []).map((item, index) => (
            <div key={index} className="col col-sm-6 col-md-4 col-lg-3">
              <GoodCard info={item} />
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default GoodsList;
