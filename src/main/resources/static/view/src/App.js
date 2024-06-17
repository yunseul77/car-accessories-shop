import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import OrderManage from "./pages/Seller/OrderManage";
import SaleHistory from "./pages/Seller/SaleHistory";
import SellerLayout from "./components/SellerLayout";
import Layout from "./components/Layout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Main />}/>


        <Route path={"/auth"} element={}>
          <Route path={"/login"} element={}/>
        </Route>


        <Route path={"cart"} element={}>
          <Route path={"/create"} element={}/>
          <Route path={"/:cartId/add"} element={}/>
          <Route path={"/:cartId/items/:itemId"} element={}/>
          <Route path={"/:cartId/items"} element={}/>
          <Route path={"/:cartId/items/:itemId"} element={}/>
          <Route path={"/:cartId/total"} element={}/>
        </Route>


        <Route path={"member"} element={}>
          <Route path={"signup"} element={}/>
        </Route>


        <Route path={"review"} element={<Layout/>}>
          <Route path={":/itemId"} element={}/>
          <Route path={":/memberId/write"} element={}/>
          <Route path={"/update/:reviewId"} element={}/>
          <Route path={"delete/:reviewId"} element={}/>
        </Route>


        <Route path={"/sellers"} element={<SellerLayout />}>
          <Route path={"/:sellerId/orderpages"} element={<OrderManage/>}/>
          <Route path={"/:sellerId/salepages"} element={<SaleHistory/>}/>
          <Route path={"orders/:itemId/:orderId"} element={}/>
          <Route path={"orders/update-delivery"} element={}/>
          <Route path={"orders/:orderId"} element={}/>
        </Route>
      </Routes>
    </Router>
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

