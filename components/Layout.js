import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden h-screen">
      <header>
        <Nav />
      </header>
      <main className="flex">
        <Sidebar />
        {children}
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
