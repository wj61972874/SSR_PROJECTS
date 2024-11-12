import React, { ReactNode } from "react";
import Header from "../components/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
