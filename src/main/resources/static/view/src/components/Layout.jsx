import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
      <div>
        <Header/>
          <main>
          <Outlet/>
          </main>
      </div>
  );
};

export default Layout;