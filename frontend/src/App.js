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
import ItemListByCategory from "./pages/Item/ItemListByCategory";
import ItemDetail from "./pages/Item/ItemDetail";
import ItemRegistration from "./pages/Item/ItemRegistration";
import { TokenProvider } from "./tokenContext";
import Login from "./pages/auth/Login";
import MemberJoin from "./pages/auth/MemberJoin";
import JoinTypeSelection from './pages/auth/JoinTypeSelection';
import ReviewForm from "./pages/review/ReviewForm";
import ReviewList from "./pages/review/ReviewList";
import ReviewUpdate from "./pages/review/ReviewUpdate";
import JoinComplete from './pages/auth/JoinComplete';
function App() {
  return (
    <TokenProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}/>

                <Route path="auth">
                  <Route path="login" element={<Login />} />
                  <Route path="select" element={<JoinTypeSelection />} />
                  <Route path="signup" element={<MemberJoin />} />
                  <Route path="joincomplete" element={<JoinComplete />} />
                </Route>

            <Route path="cart">
              <Route path="create" element={<Main />} />
              <Route path=":cartId/add" element={<Main />} />
              <Route path=":cartId/items/:itemId" element={<Main />} />
              <Route path=":cartId/items" element={<Main />} />
              <Route path=":cartId/total" element={<Main />} />
            </Route>


            <Route path="review">
              <Route path=":itemId" element={<ReviewList />} />
              <Route path=":memberId/write" element={<ReviewForm />} />
              <Route path="update/:reviewId" element={<ReviewUpdate />} />
              <Route path="delete/:reviewId" element={<ReviewList />} />
            </Route>

            <Route path="orders">
             <Route path=":memberId" element={<MemberOrder />} />
             <Route path=":memberId/:orderId" element={<MemberOrderDetail />} />
            </Route>

            <Route path="sellers" /*element={<SellerLayout />}*/>
              <Route path="orderpages" element={<OrderManage />} />
              <Route path="salepages" element={<SaleHistory />} />
              <Route path="orders/:itemId/:orderId" element={<OrderManageDetail />} />
            </Route>

            <Route path="item">
              <Route path={"category/:categoryId"} element={<ItemListByCategory/>}/>
              <Route path={":itemId"} element={<ItemDetail/>}/>
              <Route path={"addItem"} element={<ItemRegistration/>}/>
            </Route>
          </Route>
          </Routes>
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