import React, { ReactNode } from "react";
import Header from "../components/header";
import "./index.less";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Header />
    <main className="main_container">{children}</main>
  </div>
);

export default Layout;
