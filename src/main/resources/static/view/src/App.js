import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import OrderManage from "./pages/Seller/OrderManage";
import SaleHistory from "./pages/Seller/SaleHistory";
import SellerLayout from "./components/SellerLayout";
import Layout from "./components/Layout";
import MemberOrder from "./pages/MemberOrder/MemberOrder";
import MemberOrderDetail from "./pages/MemberOrder/MemberOrderDetail";
import OrderManageDetail from "./pages/Seller/OrderManageDetail";
import { TokenProvider } from "./tokenContext";
import Login from "./pages/auth/Login";
import Footer from "./components/Footer";
import MemberJoin from "./pages/auth/MemberJoin";

function App() {
  return (
    <TokenProvider>
     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}/>

                <Route path="auth">
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<Signup />} />
                </Route>

                <Route path="cart">
                  <Route path="create" element={<Main />} />
                  <Route path=":cartId/add" element={<Main />} />
                  <Route path=":cartId/items/:itemId" element={<Main />} />
                  <Route path=":cartId/items" element={<Main />} />
                  <Route path=":cartId/total" element={<Main />} />
                </Route>


                <Route path="review">
                  <Route path=":itemId" element={<Main />} />
                  <Route path=":memberId/write" element={<Main />} />
                  <Route path="update/:reviewId" element={<Main />} />
                  <Route path="delete/:reviewId" element={<Main />} />
                </Route>
              </Route>

              <Route path="orders">
                <Route path=":memberId" element={<MemberOrder />} />
                <Route path=":memberId/:orderId" element={<MemberOrderDetail />} />
              </Route>

                <Route path="sellers" element={<SellerLayout />}>
                  <Route path=":sellerId/orderpages" element={<OrderManage />} />
                  <Route path=":sellerId/salepages" element={<SaleHistory />} />
                  <Route path="orders/:itemId/:orderId" element={<OrderManageDetail />} />
                </Route>
            </Routes>
           <Footer style={{ marginTop: 'auto' }} />
         </div>
      </TokenProvider>
  )
}

export default App;



// import logo from './assets/logo.svg';
// import './styles/App.css';
//
// function App() {
//   return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//   );
// }
//
// export default App;