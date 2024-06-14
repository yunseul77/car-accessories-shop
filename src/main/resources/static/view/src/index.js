import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import MemberOrder from './pages/MemberOrder';
import OrderManageDetail from './pages/OrderManageDetail';
import MemberOrderDetail from './pages/MemberOrderDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderManage from "./pages/OrderManage";
import SaleHistory from "./pages/SaleHistory";
import ItemManage from "./pages/ItemManage";
import Main from "./pages/Main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/orders",
    element: <MemberOrder />,
  },
  {
    path: "/orders/detail",
    element: <OrderManageDetail />,
  },
  {
    path: "/detail",
    element: <MemberOrderDetail />,
  },
  {
    path: "/orders/manage",
    element: <OrderManage />,
  },
  {
    path: "/orders/sale",
    element: <SaleHistory />,
  },
  {
    path: "/items/management",
    element: <ItemManage />
  },
  {
    path: "/main",
    element: <Main />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
