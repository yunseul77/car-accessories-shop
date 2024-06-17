import logo from './assets/logo.svg';
import './styles/App.css';
import {Route, Router, Routes} from "react-router-dom";
import Main from "./pages/Main";
import MemberOrder from "./pages/MemberOrder/MemberOrder";

//function App() {
//  return (
//    <Router>
//      <Routes>
//        <Route path={"/"} element={<Main />}>
//          <Route
//            path={"sellers"} element={}}
//        </Route>
//      </Routes>
//    </Router>
//  );
//}

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path="orders" element={<MemberOrder />} />
      </Routes>
    </Router>
  );
}
export default App;
