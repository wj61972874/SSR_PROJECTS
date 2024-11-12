import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const Header = () => (
  <header className="header fixed w-full">
    <nav className="nav">
      <ul className="flex justify-evenly">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/goods">Goods</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
