import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import OrderManage from "./pages/Seller/OrderManage";
import SaleHistory from "./pages/Seller/SaleHistory";
import SellerLayout from "./components/SellerLayout";
import Layout from "./components/Layout";
import ItemListByCategory from "./pages/Item/ItemListByCategory";
import ItemDetail from "./pages/Item/ItemDetail";
import ItemRegistration from "./pages/Item/ItemRegistration";


function App() {
  return (
      <Routes>
        <Route path={"/"} element={<Main />}/>


        <Route path={"/auth"} element={<Main />}>
          <Route path={"login"} element={<Main />}/>
        </Route>


        <Route path={"/cart"} element={<Main />}>
          <Route path={"create"} element={<Main />}/>
          <Route path={":cartId/add"} element={<Main />}/>
          <Route path={":cartId/items/:itemId"} element={<Main />}/>
          <Route path={":cartId/items"} element={<Main />}/>
          <Route path={":cartId/total"} element={<Main />}/>
        </Route>


        <Route path={"/member"} element={<Main />}>
          <Route path={"signup"} element={<Main />}/>
        </Route>


        <Route path={"/review"} element={<Layout/>}>
          <Route path={":itemId"} element={<Main />}/>
          <Route path={":memberId/write"} element={<Main />}/>
          <Route path={"update/:reviewId"} element={<Main />}/>
          <Route path={"delete/:reviewId"} element={<Main />}/>
        </Route>


        <Route path={"/sellers"} element={<SellerLayout />}>
          <Route path={":sellerId/orderpages"} element={<OrderManage/>}/>
          <Route path={":sellerId/salepages"} element={<SaleHistory/>}/>
          <Route path={"orders/:itemId/:orderId"} element={<Main />}/>
          <Route path={"orders/update-delivery"} element={<Main />}/>
          <Route path={"orders/:orderId"} element={<Main />}/>
        </Route>

        <Route path={"/item"} element={<Layout />}>
          <Route path={"category/:categoryId"} element={<ItemListByCategory/>}/>
          <Route path={":itemId"} element={<ItemDetail/>}/>
          <Route path={"addItem"} element={<ItemRegistration/>}/>
        </Route>
      </Routes>
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

