import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer style={{marginTop: 'auto'}}/>
      </div>
  );
};

export default Layout;