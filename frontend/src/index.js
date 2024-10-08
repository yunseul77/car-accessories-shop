import ReactDOM from 'react-dom/client';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles/index.css';
// import reportWebVitals from './reportWebVitals';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import App from './App';
// import MemberOrder from './pages/MemberOrder/MemberOrder';
// import OrderManageDetail from './pages/Seller/OrderManageDetail';
// import MemberOrderDetail from './pages/MemberOrder/MemberOrderDetail';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import OrderManage from "./pages/Seller/OrderManage";
// import SaleHistory from "./pages/Seller/SaleHistory";
// import ItemManage from "./pages/Item/ItemManage";
// import Main from "./pages/Main";
// import ItemDetail from "./pages/Item/ItemDetail";
// import JoinTypeSelection from "./pages/auth/JoinTypeSelection";
// import MemberJoin from "./pages/auth/MemberJoin";
// import SellerJoin from "./pages/auth/SellerJoin";
// import JoinComplete from "./pages/auth/JoinComplete";
// import Login from "./pages/auth/Login";
// import ReviewForm from "./pages/review/ReviewForm";
// import PasswordCheck from "./pages/auth/PasswordCheck";
// import SellerPasswordCheck from "./pages/auth/SellerPasswordCheck";
// import ItemPasswordCheck from "./pages/Item/ItemPasswordCheck";
// import EditProfile from "./pages/auth/EditProfile";
// import SellerEditProfile from "./pages/Seller/SellerEditProfile";
// import ItemRegistration from "./pages/Item/ItemRegistration";
// import ItemEdit from "./pages/Item/ItemEdit";
//
//
//
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/orders",
//     element: <MemberOrder />,
//   },
//   {
//     path: "/orders/detail",
//     element: <OrderManageDetail />,
//   },
//   {
//     path: "/detail",
//     element: <MemberOrderDetail />,
//   },
//   {
//     path: `/sellers/:sellerId}/orderpages`,
//     element: <OrderManage />,
//   },
//   {
//     path: "/orders/sale",
//     element: <SaleHistory />,
//   },
//   {
//     path: "/items/management",
//     element: <ItemManage />
//   },
//   {
//     path: "/main",
//     element: <Main />
//   },
//   {
//     path: "/items/detail",
//     element: <ItemDetail />
//   },
//   {
//     path: "/join/1",
//     element: <JoinTypeSelection />
//   },
//   {
//     path: "/join/2",
//     element: <MemberJoin />
//   },
//   {
//     path: "/join/3",
//     element: <SellerJoin />
//   },
//   {
//     path: "/join/4",
//     element: <JoinComplete />
//   },
//   {
//     path: "/join/5",
//     element: <Login />
// },
//   {
//     path: "/review/form",
//     element: <ReviewForm/>,
//   },
//   {
//     path: "/password/check",
//     element: <PasswordCheck/>,
//   },
//   {
//     path: "/seller/password/check",
//     element: <SellerPasswordCheck/>,
//   },
//   {
//     path: "/item/password/check",
//     element: <ItemPasswordCheck/>,
//   },
//      {
//        path: "/edit/profile",
//        element: <EditProfile/>,
//      },
//      {
//        path: "/seller/edit/profile",
//        element: <SellerEditProfile/>,
//      },
//      {
//        path: "/item/registration",
//        element: <ItemRegistration/>,
//      },
//      {
//       path: "/item/edit",
//       element: <ItemEdit/>,
//      }
//
//
// ]);