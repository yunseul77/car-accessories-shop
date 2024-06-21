import React from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

const SellerLayout = () => {

  //seller 검증 추가. 서버한테 물어봄 토큰으로
  return (
      <div>
        <Header/>
        <main>
          <Outlet />
        </main>
        <Footer style={{ marginTop: 'auto' }} />
      </div>
  )
}

export default SellerLayout;