import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./index.less";

const Header = () => {
  const history = useHistory();

  return (
    <header className="header_warp">
      <nav className="nav">
        <div className="header_body">
          {/* <Link className="nav_item" to="/">
            首页
          </Link>
          <Link className="nav_item" to="/goods">
            商城
          </Link>
          <Link className="nav_item" to="/about">
            关于
          </Link> */}
          <div
            className="nav_item"
            onClick={() => {
              history.push("/");
            }}
          >
            首页
          </div>
          <div
            className="nav_item"
            onClick={() => {
              history.push("/goods");
            }}
          >
            商城
          </div>
          <div
            className="nav_item"
            onClick={() => {
              history.push("/about");
            }}
          >
            关于
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
