import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden h-screen">
      <header></header>
      <main className="flex">{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
